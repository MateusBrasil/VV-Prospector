// Firmo — Locations hero entrance (verbatim del IX2 vía reveal.ts, bloque 4e):
// el texto del header (label, h1, copy, button) conserva la entrada reveal-x
// (x +100 → 0 desde la derecha) pero coordinada como STAIRCASE: un solo timeline
// con stagger 0.12 (el director quería la cascada, no un cambio de dirección),
// 0.7s power3.out. La imagen .location_image y las 3 .location_card.scroll-into-view
// las anima la hoja compartida /firmo/scripts/scroll-reveal.js (parallax + reveal-x).
// Fail-safe: si GSAP no carga o reduced-motion, el contenido queda visible (no hay
// opacity:0 inline). Plain global, self-init, sin `export` (Rule 1).
function initLocationHero() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined') return;

  const EASE = 'power3.out';
  const SLIDE = 0.7;
  const SLIDE_X = 100;

  const locHero = document.querySelector('.section_location');
  if (!locHero) return;

  const texts = [
    locHero.querySelector('.text-style-allcaps'),
    locHero.querySelector('h1'),
    locHero.querySelector('.header .text-color-secondary'),
    locHero.querySelector('.button-wrapper'),
  ].filter(Boolean);
  if (!texts.length) return;

  gsap.set(texts, { x: SLIDE_X, opacity: 0 });
  gsap
    .timeline({ delay: 0.1 })
    .to(texts, { x: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.12 }, 0);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLocationHero);
else initLocationHero();

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
