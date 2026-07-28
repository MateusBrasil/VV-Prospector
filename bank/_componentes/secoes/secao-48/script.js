// === Per-element fade-from-right entrance (per-element + cascade queue, MIN_GAP 100ms) ===
(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  const section = document.querySelector('.cta');
  if (!section) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Per-element: eyebrow + heading + sub + button. Composite: media (image as one unit).
  const items = [
    section.querySelector('.section-label'),
    section.querySelector('.cta__heading'),
    section.querySelector('.cta__sub'),
    section.querySelector('.cta__btn'),
    // .cta__media intentionally excluded — gets its own image-focus-in trigger below
  ].filter(Boolean);

  if (!items.length) return;

  gsap.set(items, { autoAlpha: 0, x: 60 });

  const MIN_GAP = 0.1;
  let nextSlot = -Infinity;

  items.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        const now = performance.now() / 1000;
        const delay = Math.max(0, nextSlot - now);
        nextSlot = now + delay + MIN_GAP;
        gsap.to(item, {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay,
          // Clear GSAP-injected transform props so CSS hover (.btn) can transition cleanly.
          onComplete: () => gsap.set(item, { clearProps: 'translate,rotate,scale,transform,x' }),
        });
      },
    });
  });

  // === image-focus-in (scale 1.1 → 1 + blur 20px → 0, ease power2.out) ===
  const img = section.querySelector('.cta__media img');
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
