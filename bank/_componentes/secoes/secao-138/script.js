// Firmo hero entrance (verbatim del IX2 a-55, vía reveal.ts): textos suben
// y:32→0 + opacity con stagger; la imagen hace counter-slide (wrapper 110%→0,
// img -110%→0, sin zoom/blur), 1.2s power3.out. Fail-safe: si GSAP no carga o
// reduced-motion, el contenido queda visible (no hay opacity:0 inline). Rule 1/2.
function initHero() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined') return;

  const EASE = 'power3.out';
  const SLIDE = 0.7;
  const hero = document.querySelector('.section_hero');
  if (!hero) return;

  const texts = [
    hero.querySelector('h1'),
    hero.querySelector('.hero_content .text-color-secondary'),
    hero.querySelector('.button-wrapper'),
  ].filter(Boolean);

  const wrap = hero.querySelector('.hero_image .img-wrapper');
  const img = wrap && wrap.querySelector('.img');

  gsap.set(texts, { y: 32, opacity: 0 });
  if (wrap && img) {
    gsap.set(wrap, { yPercent: 110, opacity: 1 });
    gsap.set(img, { yPercent: -110 });
  }

  const tl = gsap.timeline({ delay: 0.1 });
  tl.to(texts, { y: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.1 }, 0);
  if (wrap && img) {
    tl.to(wrap, { yPercent: 0, duration: 1.2, ease: EASE }, 0);
    tl.to(img, { yPercent: 0, duration: 1.2, ease: EASE }, 0);
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initHero);
else initHero();

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
