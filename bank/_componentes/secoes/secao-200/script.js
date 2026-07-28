// stayli-testimonials — Swiper path C (inline fade carousel). NOT a shared
// engine script: the testimonials slider is its own Swiper instance with the
// crossFade transition, so it inits here (mirrors the template's inline
// <script> in TestimonialsSection.astro). The scroll reveal (.is-in on
// [data-reveal]) is handled by the shared /stayli/scripts/scroll-reveal.js.
//
// Wrapped in an IIFE — NO top-level `export` (a classic <script src> parse-error
// would silently kill the file). Guarded on Swiper so a CDN miss never throws.
(function () {
  if (typeof Swiper === "undefined") return;

  document.querySelectorAll(".testimonials_slider[data-testi-swiper]").forEach(function (root) {
    var scope = root.closest(".testimonials_content");
    var swiper = new Swiper(root, {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 600,
      rewind: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      keyboard: { enabled: true },
    });

    var prev = scope && scope.querySelector("[data-testi-prev]");
    var next = scope && scope.querySelector("[data-testi-next]");
    if (prev) prev.addEventListener("click", function () { swiper.slidePrev(); });
    if (next) next.addEventListener("click", function () { swiper.slideNext(); });
  });
})();
