// scripts.js — populates long demo content from demo-data.json and adds simple interactions

document.addEventListener('DOMContentLoaded', async () => {
  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    if (navList) navList.style.display = expanded ? 'none' : 'flex';
  });

  // fetch demo data
  let data = {};
  try {
    const resp = await fetch('demo-data.json');
    data = await resp.json();
  } catch (err) {
    console.warn('Could not load demo-data.json — falling back to embedded sample', err);
    data = window.__DEMO_FALLBACK__ || {};
  }

  populateSolutions(data.services || []);
  populateBlog(data.blogPosts || []);
  populateTestimonials(data.testimonials || []);
  populateFaqs(data.faqs || []);
});

// Solutions
function populateSolutions(services){
  const container = document.getElementById('solutions-list');
  if (!container) return;

  services.forEach((s) => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <h3>${escapeHtml(s.title)}</h3>
      <p class="muted">${escapeHtml(s.summary)}</p>
      <p><strong>Use cases:</strong> ${s.useCases.slice(0,3).map(escapeHtml).join(', ')}</p>
      <div style="margin-top:12px;">
        <a class="btn-outline" href="#docs">Learn more</a>
      </div>
    `;
    container.appendChild(el);
  });
}

// Blog
function populateBlog(posts){
  const container = document.getElementById('blog-list');
  if (!container) return;
  posts.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card blog-card';
    el.innerHTML = `
      <h4>${escapeHtml(p.title)}</h4>
      <p class="muted">${escapeHtml(p.excerpt)}</p>
      <div style="margin-top:auto;display:flex;justify-content:space-between;align-items:center">
        <small class="muted">${escapeHtml(p.published)}</small>
        <a class="link" href="#">Read →</a>
      </div>
    `;
    container.appendChild(el);
  });
}

// Testimonials
function populateTestimonials(tests){
  const container = document.getElementById('testimonials-carousel');
  if (!container) return;
  tests.forEach(t => {
    const el = document.createElement('div');
    el.className = 'testimonial';
    el.innerHTML = `
      <p>“${escapeHtml(t.quote)}”</p>
      <div class="author">${escapeHtml(t.author)}</div>
      <div class="muted">${escapeHtml(t.role)} • ${escapeHtml(t.company)}</div>
    `;
    container.appendChild(el);
  });
}

// FAQs
function populateFaqs(faqs){
  const container = document.getElementById('faqs');
  if (!container) return;
  faqs.forEach((f, i) => {
    const el = document.createElement('details');
    el.style.marginBottom = '12px';
    el.innerHTML = `<summary style="font-weight:700">${escapeHtml(f.q)}</summary><div class="muted" style="margin-top:8px">${escapeHtml(f.a)}</div>`;
    container.appendChild(el);
  });
}

// basic escaping
function escapeHtml(str){
  if (!str && str !== 0) return '';
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#039;');
}