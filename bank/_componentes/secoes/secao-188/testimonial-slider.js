/* Hirely — testimonial carousel. Port of testimonial-slider.ts to a plain global
   (no `export`, self-init — Rule 1). Swiper is a CDN global (swiper-bundle includes
   Navigation + A11y + Keyboard, all auto-registered — no `modules` array needed).
   One full-width testimonial per view, infinite loop, speed 500, 1.5rem gap, custom
   arrows `[data-testimonial-prev/next]` (siblings of `.testimonial-swiper`). */
(function () {
  if (typeof Swiper === 'undefined') return; // fail-safe: no slider, content visible

  function initTestimonialSliders() {
    document.querySelectorAll('.testimonial-swiper').forEach(function (el) {
      new Swiper(el, {
        slidesPerView: 1,
        loop: true,
        speed: 500,
        spaceBetween: 24,
        keyboard: { enabled: true },
        navigation: {
          nextEl: el.parentElement ? el.parentElement.querySelector('[data-testimonial-next]') : null,
          prevEl: el.parentElement ? el.parentElement.querySelector('[data-testimonial-prev]') : null,
        },
      });
    });
  }

  if (document.readyState !== 'loading') initTestimonialSliders();
  else document.addEventListener('DOMContentLoaded', initTestimonialSliders);
})();
