(() => {
  const gsap = window.gsap;
  if (typeof gsap === 'undefined') return;
  const section = document.querySelector('.hero');
  if (!section) return;

  const bg = section.querySelector('.hero__bg');
  const heading = section.querySelector('.hero__heading');
  const sub = section.querySelector('.hero__sub');
  const buttons = Array.from(section.querySelectorAll('.hero__btn'));
  const avatars = Array.from(section.querySelectorAll('.hero__avatar'));
  const proof = section.querySelector('.hero__proof');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    // Skip animation — everything visible at rest
    gsap.set([bg, heading, sub, ...buttons, ...avatars, proof], { autoAlpha: 1, xPercent: 0, scale: 1, filter: 'none' });
    return;
  }

  // Prime states — every text/cta element enters from the right (matches site-wide fade-from-right pattern)
  gsap.set(bg, { scale: 1.05, filter: 'blur(8px)' });
  gsap.set([heading, sub, ...buttons, proof], { autoAlpha: 0, x: 60 });
  // Avatars keep their existing slide-in-from-right-blur (xPercent: 300 + blur clear)
  gsap.set(avatars, { autoAlpha: 0, xPercent: 300, filter: 'blur(20px)' });

  const tl = gsap.timeline({ delay: 0.15 });

  // Background image: scale-down + blur-clear (image-focus-in) — anchors the whole reveal
  tl.to(bg, { scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }, 0)
    // Content elements cascade with a tight 0.08s gap so reveals feel independent but snappy
    .to(heading, { autoAlpha: 1, x: 0, duration: 0.9, ease: 'power3.out' }, 0.15)
    .to(sub, { autoAlpha: 1, x: 0, duration: 0.85, ease: 'power3.out' }, 0.23)
    .to(buttons, { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 }, 0.31)
    .to(avatars, {
      autoAlpha: 1,
      xPercent: 0,
      filter: 'blur(0px)',
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.08,
    }, 0.39)
    .to(proof, { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 0.47);

  // After reveal completes, strip the inline transform props GSAP leaves on
  // .hero__btn so the global .btn:hover scale rule can transition smoothly
  // (CSS can't interpolate from `scale: none` to a numeric value).
  tl.call(() => {
    gsap.set(buttons, { clearProps: 'translate,rotate,scale,transform,x' });
  });
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
