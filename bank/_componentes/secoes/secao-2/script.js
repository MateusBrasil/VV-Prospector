(() => {
  const items = [...document.querySelectorAll('.portfolio__item')];
  if (!items.length) return;
  items.forEach((item) => {
    const btn = item.querySelector('.portfolio__row');
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('portfolio__item--open');
      items.forEach((other) => {
        other.classList.remove('portfolio__item--open');
        other.querySelector('.portfolio__row').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('portfolio__item--open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

// === Per-element fade-from-right entrance (per-element + cascade queue, MIN_GAP 100ms) ===
(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  const section = document.querySelector('.portfolio');
  if (!section) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Per-element: eyebrow + lead. Composite: list (accordion as one unit), media (image as one unit).
  const items = [
    section.querySelector('.section-label'),
    section.querySelector('.portfolio__lead'),
    section.querySelector('.portfolio__list'),
    // .portfolio__media intentionally excluded — gets its own image-focus-in trigger below
  ].filter(Boolean);

  if (items.length) {
    gsap.set(items, { autoAlpha: 0, x: 60 });
    // Single trigger + tight stagger so the cascade reads as continuous flow,
    // not a visibly paused sequence.
    ScrollTrigger.create({
      trigger: section,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(items, {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.06,
        });
      },
    });
  }

  // === image-focus-in (scale 1.1 → 1 + blur 20px → 0, ease power2.out) ===
  const img = section.querySelector('.portfolio__media img');
  if (img) {
    gsap.set(img, { scale: 1.1, autoAlpha: 0 });
    ScrollTrigger.create({
      trigger: img,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(img, { scale: 1, autoAlpha: 1, duration: 1, ease: 'power2.out' });
      },
    });
  }
})();
