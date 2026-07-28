// Firmo — Blog Detail (hero header): entrada bespoke en on-load (bloque 4f de
// reveal.ts). El label, el título y la descripción del .blog_header entran como
// una STAIRCASE reveal-x: x +100px → 0 + opacity, stagger 0.12, 0.7s power3.out,
// delay 0.1. La línea horizontal (.scroll-into-view) y la imagen parallax
// (.blog_image .img-wrapper > .img) las anima la hoja compartida
// /firmo/scripts/scroll-reveal.js. Fail-safe: si GSAP no carga o reduced-motion,
// el contenido queda visible (no hay opacity:0 inline). Self-init, sin `export`.
function initBlogHero() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined') return;

  const EASE = 'power3.out';
  const SLIDE = 0.7;
  const SLIDE_X = 100;

  const blogHero = document.querySelector('.section_blog .blog_header');
  if (!blogHero) return;

  const texts = [
    blogHero.querySelector('.text-style-allcaps'),
    blogHero.querySelector('.blog_title'),
    blogHero.querySelector('.text-color-secondary'),
  ].filter(Boolean);
  if (!texts.length) return;

  gsap.set(texts, { x: SLIDE_X, opacity: 0 });
  gsap
    .timeline({ delay: 0.1 })
    .to(texts, { x: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.12 }, 0);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initBlogHero);
else initBlogHero();

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
