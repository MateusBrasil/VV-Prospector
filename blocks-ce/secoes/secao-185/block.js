(function(){
  var __root = document.querySelector('[data-blk="secoes-secao-185"]');
  if(!__root) return;
  var __q = function(s){ return __root.querySelector(s) || document.querySelector(s); };
  var __qa = function(s){ var r = __root.querySelectorAll(s); return r.length ? r : document.querySelectorAll(s); };

/* script.js */
/* === Active-state sync between stat links and groups in view === */
(() => {
  const section = __q('.success');
  if (!section) return;

  const stats = Array.from(section.querySelectorAll('.success__stat'));
  const groups = Array.from(section.querySelectorAll('.success-group'));
  if (!stats.length || !groups.length) return;

  /* "Active" zone = group whose top sits in the upper third of the viewport.
     rootMargin shrinks the IO root so only one group is intersecting at a time. */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      stats.forEach((stat) => {
        stat.classList.toggle(
          'success__stat--active',
          stat.dataset.statTarget === id,
        );
      });
    });
  }, { rootMargin: '-25% 0px -55% 0px', threshold: 0 });

  groups.forEach((g) => io.observe(g));
})();

/* === Per-element fade-from-right entrance (per-element + cascade queue, MIN_GAP 100ms) === */
(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const section = __q('.success');
  if (!section) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  /* Header + sidebar + per-group label + items — each with its own trigger
     so the cascade follows scroll position rather than batching everything. */
  const items = [
    section.querySelector('.section-label'),
    section.querySelector('.success__heading'),
    section.querySelector('.success__stats'),
    ...section.querySelectorAll('.success-group__label, .success-item'),
  ].filter(Boolean);
  if (!items.length) return;

  gsap.set(items, { autoAlpha: 0, x: 60 });
  const MIN_GAP = 0.1;
  let nextSlot = -Infinity;

  items.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 90%',
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

})();