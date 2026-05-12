// ── Dark mode toggle ──────────────────────────────────────────────────────────
function applyTheme(dark) {
  document.body.classList.toggle('dark-mode', dark);
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

// Restore saved preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Desktop toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    applyTheme(!document.body.classList.contains('dark-mode'));
  });
}

// Mobile drawer toggle
const drawerTheme = document.getElementById('drawer-theme');
if (drawerTheme) {
  drawerTheme.addEventListener('click', () => {
    applyTheme(!document.body.classList.contains('dark-mode'));
  });
}

// ── Mobile nav drawer ─────────────────────────────────────────────────────────
const hamburger = document.getElementById('nav-hamburger');
const drawer    = document.getElementById('nav-drawer');

if (hamburger && drawer) {
  hamburger.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  // Close drawer when a link is tapped
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => drawer.classList.remove('open'));
  });
}

// ── Dynamic copyright year ────────────────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Smooth scroll offset for fixed header ─────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
      10
    ) || 60;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
