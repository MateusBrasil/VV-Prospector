// === Above-the-fold entrance (heading + image via master timeline) +
//     per-element fade-from-right cascade for body + sidebar (ScrollTrigger).
//     Same brand-DNA pace as CaseStudyHero. ===
(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  const card = document.querySelector('.blog-post__card');
  if (!card) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const heading = card.querySelector('.blog-post__heading');
  const img = card.querySelector('.blog-post__media img');
  const prose = card.querySelector('.blog-post__prose');
  const sidebarBlocks = Array.from(card.querySelectorAll('.blog-post__meta-group'));

  // Above-the-fold master timeline (heading + image)
  if (heading) gsap.set(heading, { autoAlpha: 0, x: 60 });
  if (img) gsap.set(img, { scale: 1.1, autoAlpha: 0 });

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: () => {
      if (heading) gsap.set(heading, { clearProps: 'translate,rotate,scale,transform,x' });
    },
  });
  if (heading) tl.to(heading, { autoAlpha: 1, x: 0, duration: 0.8 }, 0);
  if (img) tl.to(img, { scale: 1, autoAlpha: 1, duration: 1, ease: 'power2.out' }, 0.1);

  // Per-element cascade for prose + sidebar (below-the-fold tolerant)
  const items = [prose, ...sidebarBlocks].filter(Boolean);
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
