# Screenshot to Figma Plugin

This Figma plugin converts an uploaded screenshot into an editable Figma design using the [Gemini](https://ai.google.dev/) API.

## Features

- Upload an image and generate an editable layout in Figma.
- Uses Gemini's vision model to analyze UI hierarchy, fonts and text.
- Outputs rectangles and text layers ready for further refinement.

## Setup

1. In Figma, go to **Plugins → Development → New Plugin** and choose "Link existing plugin".
2. Select this folder containing `manifest.json`.
3. Run the plugin and enter your Gemini API key in the UI, then upload a screenshot.

## Notes

This example reconstructs basic layout and text from screenshots. Advanced widgets, multi-language support and SVG conversion may require additional logic.
