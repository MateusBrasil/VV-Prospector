// Firmo — Services Hero: la sección no tiene entrance bespoke propio.
// En reveal.ts NO existe un bloque on-load para `.section_services-hero`: sus textos
// usan `.scroll-into-view` (reveal-x: x +100→0 + opacity) y su imagen está en
// PARALLAX_PARENTS (`.services-hero_image` → wrapper -110%→0, img 110%→0 + zoom/blur).
// Ambos los maneja la hoja compartida /firmo/scripts/scroll-reveal.js (self-init en
// DOM ready). Por eso aquí no hay entrance: sería duplicar el motor. Fail-safe: sin
// JS el contenido queda visible (no hay opacity:0 inline). Rule 1/2.

/* ===== TEMLIS-INLINED-NAVBAR: firmo-navbar behavior ===== */
// Firmo navbar — sticky bar + self-contained mobile overlay toggle (data-nav-*).
// Plain global, self-initializes on DOM ready (no `export` — Rule 1).
function initNavbar() {
  const navbar = document.querySelector('[data-navbar]');
  const toggle = navbar && navbar.querySelector('[data-nav-toggle]');
  if (!navbar || !toggle) return;
  // Expose the sticky bar's height so the full-screen overlay starts right below it.
  const setNavH = () => navbar.style.setProperty('--nav-h', navbar.getBoundingClientRect().height + 'px');
  const close = () => {
    navbar.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('nav-open');
  };
  setNavH();
  toggle.addEventListener('click', () => {
    setNavH();
    const open = navbar.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('nav-open', open);
  });
  navbar.querySelectorAll('[data-nav-menu] a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  window.addEventListener('resize', () => {
    setNavH();
    if (window.innerWidth > 991 && navbar.classList.contains('is-open')) close();
  });
}
if (document.readyState !== 'loading') initNavbar();
else document.addEventListener('DOMContentLoaded', initNavbar);
