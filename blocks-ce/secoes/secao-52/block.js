(function(){
  var __root = document.querySelector('[data-blk="secoes-secao-52"]');
  if(!__root) return;
  var __q = function(s){ return __root.querySelector(s) || document.querySelector(s); };
  var __qa = function(s){ var r = __root.querySelectorAll(s); return r.length ? r : document.querySelectorAll(s); };

/* script.js */
// === Stat counter-up (IntersectionObserver — independent of GSAP) ===
(() => {
  const cards = __qa('.stat-card[data-stat-target]');
  if (!cards.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animate = (card) => {
    const numEl = card.querySelector('[data-stat-num]');
    if (!numEl) return;
    const target = parseFloat(card.dataset.statTarget) || 0;
    const duration = parseFloat(card.dataset.statDuration) || 1600;
    if (prefersReduced) {
      numEl.textContent = String(target);
      return;
    }
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const current = Math.round(ease(t) * target);
      numEl.textContent = String(current);
      if (t < 1) requestAnimationFrame(step);
      else numEl.textContent = String(target);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );
  cards.forEach((c) => io.observe(c));
})();

// === Per-element fade-from-right entrance (matches Webflow scroll-into-view, but with per-element triggers + cascade queue) ===
(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  const section = __q('.about');
  if (!section) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // DOM order = appearance order
  const items = [
    section.querySelector('.about__eyebrow'),
    section.querySelector('.about__heading'),
    section.querySelector('.about__marquee'),
    ...section.querySelectorAll('.stat-card'),
  ].filter(Boolean);

  if (!items.length) return;

  gsap.set(items, { autoAlpha: 0, x: 60 });

  // Cascade queue: elements that trigger simultaneously (same scroll moment) get a 100ms gap between starts.
  // Elements that trigger at different scroll moments animate immediately (no delay).
  const MIN_GAP = 0.1;       // 100ms between consecutive entrance starts
  let nextSlot = -Infinity;  // earliest allowed start time (seconds)

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
        });
      },
    });
  });
})();

})();