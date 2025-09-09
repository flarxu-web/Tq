figma.showUI(__html__, { width: 400, height: 400 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'save-key') {
    await figma.clientStorage.setAsync('GEMINI_API_KEY', msg.key);
    figma.notify('API key saved');
  }
  if (msg.type === 'process-image') {
    await handleImage(msg.imageBytes);
  }
};

async function handleImage(imageBase64) {
  try {
    const apiKey = await figma.clientStorage.getAsync('GEMINI_API_KEY');
    if (!apiKey) {
      figma.notify('Set your Gemini API key first.');
      return;
    }

    const request = {
      contents: [
        {
          parts: [
            {
              text:
                'Analyze this screenshot and output strict JSON using schema {"frame":{"width":number,"height":number},"elements":[{"type":"rect"|"text","x":number,"y":number,"width":number,"height":number,"color"?:"#RRGGBB","text"?:string,"fontSize"?:number,"fontFamily"?:string}]}. Return only JSON.'
            },
            { inline_data: { mime_type: 'image/png', data: imageBase64 } }
          ]
        }
      ]
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
      }
    );
    const data = await response.json();
    const layout = extractLayout(data);
    await buildNodes(layout);
    figma.notify('Design generated');
  } catch (err) {
    console.error(err);
    figma.notify('Unable to generate design');
  }
}

function extractLayout(data) {
  try {
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');
    if (jsonStart === -1 || jsonEnd === -1) return null;
    return JSON.parse(text.slice(jsonStart, jsonEnd + 1));
  } catch (e) {
    console.error('Failed to parse layout', e);
    return null;
  }
}

async function buildNodes(layout) {
  if (!layout || !layout.elements) {
    figma.notify('Layout not detected');
    return;
  }

  await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });

  const frame = figma.createFrame();
  frame.name = 'Generated';
  frame.resize(layout.frame?.width || 375, layout.frame?.height || 812);

  for (const el of layout.elements) {
    if (el.type === 'rect') {
      const rect = figma.createRectangle();
      rect.resize(el.width, el.height);
      rect.x = el.x;
      rect.y = el.y;
      if (el.color) {
        rect.fills = [{ type: 'SOLID', color: hexToRgb(el.color) }];
      }
      frame.appendChild(rect);
    } else if (el.type === 'text') {
      const text = figma.createText();
      text.x = el.x;
      text.y = el.y;
      text.resize(el.width, el.height);
      text.characters = el.text || '';
      if (el.fontSize) text.fontSize = el.fontSize;
      if (el.fontFamily) {
        try {
          await figma.loadFontAsync({ family: el.fontFamily, style: 'Regular' });
          text.fontName = { family: el.fontFamily, style: 'Regular' };
        } catch {
          // fallback to loaded Roboto
        }
      }
      if (el.color) {
        text.fills = [{ type: 'SOLID', color: hexToRgb(el.color) }];
      }
      frame.appendChild(text);
    }
  }
}

function hexToRgb(hex) {
  const res = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);
  if (!res) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(res[1], 16) / 255,
    g: parseInt(res[2], 16) / 255,
    b: parseInt(res[3], 16) / 255
  };
}
