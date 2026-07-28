// Swiper init for cs-testimonials
(() => {
  const init = () => {
    if (typeof window.Swiper === 'undefined') return;
    const root = document.querySelector('.cs-testimonials__slider');
    if (!root || root.dataset.swiperInited === 'true') return;
    root.dataset.swiperInited = 'true';
    new window.Swiper(root, {
      // Portrait: card takes full width (100%, no peek)
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 600,
      navigation: {
        prevEl: '.cs-testimonials__nav-prev',
        nextEl: '.cs-testimonials__nav-next',
        disabledClass: 'swiper-button-disabled',
      },
      keyboard: { enabled: true },
      grabCursor: true,
      breakpoints: {
        // Mobile landscape — 1.2 cards peek
        480: { slidesPerView: 1.2, spaceBetween: 16 },
        // Tablet — 2 cards
        768: { slidesPerView: 2, spaceBetween: 20 },
        // Desktop — 3 cards visible + 4th peeks
        992: { slidesPerView: 3.1, spaceBetween: 24 },
      },
    });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// === Per-element fade-from-right entrance ===
(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  const section = document.querySelector('.cs-testimonials');
  if (!section) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const headerItems = [
    section.querySelector('.section-label'),
    section.querySelector('.cs-testimonials__heading'),
    section.querySelector('.cs-testimonials__sub'),
  ].filter(Boolean);
  const slider = section.querySelector('.cs-testimonials__slider');
  const nav = section.querySelector('.cs-testimonials__nav');

  const items = [...headerItems, slider, nav].filter(Boolean);
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
