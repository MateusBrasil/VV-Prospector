/* =============================================================================
   congra/scripts/swiper-init.js — sliders de Meet Speakers y Testimonials.
   Portado de src/scripts/swiper-init.ts (TS + ESM -> JS clásico). Usa el
   global `Swiper` del swiper-bundle CDN (precedente Stayli), que ya incluye
   Navigation/Mousewheel/Keyboard — no hace falta el array `modules`.
   ============================================================================= */
(function () {
  function initCarousel(sectionSelector, options) {
    document.querySelectorAll(sectionSelector).forEach(function (section) {
      var el = section.querySelector('.swiper');
      if (!el) return;
      var swiper = new Swiper(el, options);
      var prev = section.querySelector('.slide_prev');
      var next = section.querySelector('.slide_next');
      if (prev) prev.addEventListener('click', function () { swiper.slidePrev(); });
      if (next) next.addEventListener('click', function () { swiper.slideNext(); });

      // Desactiva la flecha prev/next en el primer/último slide.
      function setDisabled(arrow, disabled) {
        if (!arrow) return;
        arrow.classList.toggle('is-disabled', disabled);
        arrow.setAttribute('aria-disabled', String(disabled));
        arrow.setAttribute('tabindex', disabled ? '-1' : '0');
      }
      function updateArrows() {
        setDisabled(prev, swiper.isBeginning);
        setDisabled(next, swiper.isEnd);
      }
      updateArrows();
      swiper.on('slideChange', updateArrows);
      swiper.on('fromEdge', updateArrows);
      swiper.on('toEdge', updateArrows);
      swiper.on('update', updateArrows);
      swiper.on('resize', updateArrows);
    });
  }

  function init() {
    // Testimonials — slider centrado con peek.
    initCarousel('.section_testi', {
      speed: 700,
      slidesPerView: 1.3,
      spaceBetween: 24,
      mousewheel: { forceToAxis: true },
      keyboard: { enabled: true, onlyInViewport: true },
      breakpoints: {
        0: { slidesPerView: 1, centeredSlides: false, spaceBetween: 16 },
        768: { slidesPerView: 1.15, centeredSlides: true, spaceBetween: 24 },
        992: { slidesPerView: 1.3, centeredSlides: true, spaceBetween: 24 },
      },
    });

    // Speakers — 1 / 2 / 3 visibles.
    initCarousel('.section_meet', {
      speed: 700,
      loop: false,
      slidesPerView: 1,
      spaceBetween: 16,
      mousewheel: { forceToAxis: true },
      keyboard: { enabled: true, onlyInViewport: true },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 24 },
        992: { slidesPerView: 3, spaceBetween: 24 },
      },
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
