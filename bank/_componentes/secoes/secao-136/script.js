// Firmo blogs-hero entrance (bloque 4g de reveal.ts): el header (label + h1 +
// subtexto) entra como STAIRCASE reveal-x — x +100px → 0 + opacity, 0.7s power3.out,
// stagger 0.12s, en load. Scoped a `.section_blogs-hero .header` para excluir el
// "Featured" de la card (ese y el resto de .scroll-into-view + la imagen parallax
// los maneja el motor compartido /firmo/scripts/scroll-reveal.js). Fail-safe: si
// GSAP no carga o reduced-motion, el contenido queda visible (no hay opacity:0
// inline). Rule 1/2 — global, self-init, sin `export`.
function initBlogsHero() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined') return;

  const EASE = 'power3.out';
  const SLIDE = 0.7;
  const SLIDE_X = 100;

  const blogsHero = document.querySelector('.section_blogs-hero .header');
  if (!blogsHero) return;

  const texts = [
    blogsHero.querySelector('.text-style-allcaps'),
    blogsHero.querySelector('h1'),
    blogsHero.querySelector('.text-color-secondary'),
  ].filter(Boolean);
  if (!texts.length) return;

  gsap.set(texts, { x: SLIDE_X, opacity: 0 });
  gsap
    .timeline({ delay: 0.1 })
    .to(texts, { x: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.12 }, 0);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initBlogsHero);
else initBlogsHero();

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
