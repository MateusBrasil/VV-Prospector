// Firmo lawyer-detail hero entrance (verbatim del bloque 4c de reveal.ts): la
// imagen hace counter-slide (wrapper 110%→0, img -110%→0, sin zoom/blur), 1.2s
// power3.out; el texto (badge, h1, bio, social buttons, button) entra DESDE ABAJO
// en escalera — y +100→0 + opacity, stagger 0.12s. Fail-safe: si GSAP no carga o
// reduced-motion, el contenido queda visible (no hay opacity:0 inline). Rule 1/2.
function initLawyerHero() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined') return;

  const EASE = 'power3.out';
  const SLIDE = 0.7;
  const SLIDE_Y = 100;
  const lawyerHero = document.querySelector('.section_lawyer');
  if (!lawyerHero) return;

  const texts = [
    lawyerHero.querySelector('.text-style-allcaps'), // badge
    lawyerHero.querySelector('h1'),
    lawyerHero.querySelector('.text-color-secondary'), // bio
    lawyerHero.querySelector('.lawyer_media-wrapper'), // social buttons
    lawyerHero.querySelector('.button-wrapper'),
  ].filter(Boolean);

  const wrap = lawyerHero.querySelector('.lawyer_image .img-wrapper');
  const imgs = wrap ? Array.from(wrap.querySelectorAll('.img')) : [];

  gsap.set(texts, { y: SLIDE_Y, opacity: 0 });
  if (wrap && imgs.length) {
    gsap.set(wrap, { yPercent: 110, opacity: 1 });
    gsap.set(imgs, { yPercent: -110 });
  }

  const tl = gsap.timeline({ delay: 0.1 });
  tl.to(texts, { y: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.12 }, 0);
  if (wrap && imgs.length) {
    tl.to(wrap, { yPercent: 0, duration: 1.2, ease: EASE }, 0);
    tl.to(imgs, { yPercent: 0, duration: 1.2, ease: EASE }, 0);
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLawyerHero);
else initLawyerHero();

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
