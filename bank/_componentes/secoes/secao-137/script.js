// Firmo about-hero entrance (verbatim del bloque 4b de reveal.ts): los textos
// (h1, copy, button) entran reveal-x staircase — x +100px→0 + opacity, stagger;
// la imagen hace COUNTER-SLIDE on-load (wrapper +110%→0, las DOS capas .img
// −110%→0, sin zoom/blur), 1.2s power3.out. El label `.scroll-into-view` lo
// cubre /firmo/scripts/scroll-reveal.js (reveal-x genérico, bloque 2). Fail-safe:
// si GSAP no carga o reduced-motion, el contenido queda visible (no hay opacity:0
// inline). Rule 1/2.
function initAboutHero() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined') return;

  const EASE = 'power3.out';
  const SLIDE = 0.7;
  const SLIDE_X = 100;
  const aboutHero = document.querySelector('.section_about-hero');
  if (!aboutHero) return;

  const texts = [
    aboutHero.querySelector('h1'),
    aboutHero.querySelector('.text-color-secondary'),
    aboutHero.querySelector('.button-wrapper'),
  ].filter(Boolean);

  const wrap = aboutHero.querySelector('.about-hero_image .img-wrapper');
  // The about hero stacks TWO `.img` layers (the <img> + a `.is-about-hero`
  // background div on top). BOTH must counter-slide, else the visible top layer
  // sits static while the hidden one moves — looking like no animation at all.
  const imgs = wrap ? Array.from(wrap.querySelectorAll('.img')) : [];

  gsap.set(texts, { x: SLIDE_X, opacity: 0 });
  if (wrap && imgs.length) {
    gsap.set(wrap, { yPercent: 110, opacity: 1 });
    gsap.set(imgs, { yPercent: -110 });
  }

  const tl = gsap.timeline({ delay: 0.1 });
  tl.to(texts, { x: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.1 }, 0);
  if (wrap && imgs.length) {
    tl.to(wrap, { yPercent: 0, duration: 1.2, ease: EASE }, 0);
    tl.to(imgs, { yPercent: 0, duration: 1.2, ease: EASE }, 0);
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAboutHero);
else initAboutHero();

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
