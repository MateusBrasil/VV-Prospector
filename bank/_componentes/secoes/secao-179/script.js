// Aurae — Testimonial Slider boot (classic script — no import/export).
// Swiper is a CDN global (swiper-bundle includes Navigation + Autoplay). Config is
// replicated verbatim from the source .astro's own embed: 1 / 3 / 5 slides per view
// across the 320 / 768 / 992 breakpoints, looping, 600ms, arrow navigation.
(function () {
  if (typeof Swiper === "undefined") return;

  function init() {
    document
      .querySelectorAll(".section_testimonial-slider .swiper")
      .forEach(function (el) {
        new Swiper(el, {
          slidesPerView: 1,
          spaceBetween: 16,
          loop: true,
          speed: 600,
          navigation: {
            nextEl: ".section_testimonial-slider .swiper_arrow.slide_next",
            prevEl: ".section_testimonial-slider .swiper_arrow.slide_prev",
          },
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            992: { slidesPerView: 5, spaceBetween: 16 },
          },
        });
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
