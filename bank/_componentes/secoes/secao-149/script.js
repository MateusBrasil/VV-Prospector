// Above-the-fold: master gsap.timeline() — `pipely_above_fold_master_timeline`.
(() => {
  const gsap = window.gsap;
  if (typeof gsap === 'undefined') return;

  const section = document.querySelector('.case-study-hero');
  if (!section) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const heading = section.querySelector('.case-study-hero__heading');
  const sub = section.querySelector('.case-study-hero__sub');
  const img = section.querySelector('.case-study-hero__media img');

  const textItems = [heading, sub].filter(Boolean);
  gsap.set(textItems, { autoAlpha: 0, x: 60 });
  if (img) gsap.set(img, { scale: 1.1, autoAlpha: 0 });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
  textItems.forEach((el, i) => {
    tl.to(el, { autoAlpha: 1, x: 0 }, i * 0.1);
  });
  if (img) {
    tl.to(img, { scale: 1, autoAlpha: 1, duration: 1, ease: 'power2.out' }, 0.2);
  }
})();

/* ===== TEMLIS-INLINED-NAVBAR: pipely-navbar behavior ===== */
(() => {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const toggle = nav.querySelector('.navbar__toggle');
  const panel = nav.querySelector('.navbar__panel');
  if (!toggle || !panel) return;

  const setOpen = (open) => {
    nav.dataset.open = String(open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Toggle menu');
    // `inert` makes the panel non-interactive + invisible to assistive tech when
    // closed, but keeps it rendered so we can animate height/opacity.
    panel.toggleAttribute('inert', !open);
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = nav.dataset.open !== 'true';
    setOpen(open);
  });

  // Close panel when clicking a nav link or CTA inside it
  panel.querySelectorAll('.navbar__panel-link, .navbar__panel-cta').forEach((el) => {
    el.addEventListener('click', () => setOpen(false));
  });

  // Close when clicking outside the nav (or on the backdrop)
  document.addEventListener('click', (e) => {
    if (nav.dataset.open !== 'true') return;
    if (!nav.contains(e.target)) return setOpen(false);
    // clicks INSIDE nav: only close on backdrop
    if (e.target.classList.contains('navbar__backdrop')) setOpen(false);
  });

  // Esc closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.dataset.open === 'true') setOpen(false);
  });

  // Close panel when viewport grows past tablet breakpoint
  const mq = window.matchMedia('(min-width: 992px)');
  const onChange = () => {
    if (mq.matches) setOpen(false);
  };
  mq.addEventListener('change', onChange);
})();

// === Entrance: nav cluster falls in from top with stagger, runs in parallel
// with the Hero master timeline so the page reveal feels coordinated. ===
(() => {
  const gsap = window.gsap;
  if (typeof gsap === 'undefined') return;
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Select visible entrance candidates only — links are display:none on tablet+,
  // toggle is display:none on desktop, cta hides on portrait, etc.
  const candidates = nav.querySelectorAll(
    '.navbar__brand, .navbar__link, .navbar__cta, .navbar__toggle'
  );
  const items = Array.from(candidates).filter(
    (el) => getComputedStyle(el).display !== 'none'
  );
  if (!items.length) return;

  if (prefersReduced) {
    gsap.set(items, { autoAlpha: 1, y: 0 });
    return;
  }

  gsap.set(items, { autoAlpha: 0, y: -12 });
  gsap.to(items, {
    autoAlpha: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.07,
    delay: 0.05,
    onComplete: () => {
      // Strip the inline transform props GSAP leaves behind so the CSS hover
      // `scale` rule can transition smoothly (CSS can't animate from `none`).
      gsap.set(items, { clearProps: 'translate,rotate,scale,transform,y' });
    },
  });
})();
