// === Per-card fade-from-right entrance ===
// The card is the unit. We don't animate inner elements — the whole card
// slides in from the right when it enters viewport.
(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  const section = document.querySelector('.case-studies-list');
  if (!section) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Eyebrow first (cascades with first card if both enter together).
  const eyebrow = section.querySelector('.case-studies-list__eyebrow');
  const cards = Array.from(section.querySelectorAll('.case-study-item'));
  const items = [eyebrow, ...cards].filter(Boolean);
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
          onComplete: () => gsap.set(item, { clearProps: 'translate,rotate,scale,transform,x' }),
        });
      },
    });
  });
})();
