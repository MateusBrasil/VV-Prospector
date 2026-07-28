// Firmo contact hero entrance (verbatim del bloque 4h de reveal.ts): el header
// (label/h1/subtext) entra como reveal-x STAIRCASE (x +100px→0 + opacity, stagger);
// los campos del form suben yPercent 15→0 + opacity, staggered (patrón Webflow form
// SlideUp). Los .contact_info.scroll-into-view conservan su reveal-x (lo aporta el
// motor compartido /firmo/scripts/scroll-reveal.js). Fail-safe: si GSAP no carga o
// reduced-motion, el contenido queda visible (no hay opacity:0 inline). Rule 1/2.
function initContactHero() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined') return;

  const EASE = 'power3.out';
  const SLIDE = 0.7;
  const SLIDE_X = 100;
  const contactHero = document.querySelector('.section_contact-one');
  if (!contactHero) return;

  const headerTexts = [
    contactHero.querySelector('.header .text-style-allcaps'),
    contactHero.querySelector('.header h1'),
    contactHero.querySelector('.header .text-color-secondary'),
  ].filter(Boolean);
  if (headerTexts.length) {
    gsap.set(headerTexts, { x: SLIDE_X, opacity: 0 });
    gsap
      .timeline({ delay: 0.1 })
      .to(headerTexts, { x: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.12 }, 0);
  }

  const fields = Array.from(contactHero.querySelectorAll('.form-input, .form .button'));
  if (fields.length) {
    gsap.set(fields, { yPercent: 15, opacity: 0 });
    gsap
      .timeline({ delay: 0.2 })
      .to(fields, { yPercent: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.1 }, 0);
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initContactHero);
else initContactHero();

// Contact form — STATIC DEMO. Sin backend: muestra el mensaje de éxito sin enviar
// nada (action="#"). Para envíos reales: conectar Formspree/Resend (apunta el form
// `action` a tu endpoint y pon DEMO = false). Self-init, sin `export` (Rule 1).
function initContactForm() {
  const DEMO = true;
  const form = document.getElementById('email-form');
  if (!form) return;
  const block = form.closest('.w-form');
  const done = block && block.querySelector('.w-form-done');
  const fail = block && block.querySelector('.w-form-fail');
  const succeed = () => {
    form.reset();
    form.style.display = 'none';
    if (done) done.style.display = 'block';
  };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    if (fail) fail.style.display = 'none';
    if (DEMO) { succeed(); return; }
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form) });
      if (!res.ok) throw new Error(String(res.status));
      succeed();
    } catch {
      if (fail) fail.style.display = 'block';
    }
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initContactForm);
else initContactForm();

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
