// scripts.js — populates long demo content from demo-data.json and adds simple interactions

document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
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

// theme switcher
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  const setTheme = (isDark) => {
    document.documentElement.classList.toggle('dark', isDark);
    themeToggle.innerHTML = isDark ? sunIcon : moonIcon;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(!isDark);
  });

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);
}