// About-page testimonial slider (section_testimonial, .slider.is-three).
// Re-implements the source Webflow w-slider with Swiper 11, mirroring the
// testimonials-swiper pattern. Source data attrs: data-infinite="true" (loop),
// data-autoplay="false" (no autoplay), 1-up. .slide-item.is-three margin-right was
// 5rem (80px) -> mapped to spaceBetween. Arrows wired to the source
// .w-slider-arrow-left/right (data-prev / data-next).
(function () {
  function init() {
    document.querySelectorAll('[data-about-swiper]').forEach((el) => {
      new Swiper(el, {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        slidesPerView: 1,
        spaceBetween: 80,
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: el.querySelector('[data-next]'),
          prevEl: el.querySelector('[data-prev]'),
        },
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
