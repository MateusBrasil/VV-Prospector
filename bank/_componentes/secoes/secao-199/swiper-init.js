// Aeline — Swiper init (ported from src/scripts/swiper-init.ts).
// Uses the global Swiper from swiper-bundle (all modules registered by the bundle, so the
// `modules:[...]` arrays from the source are dropped). Guards on each section selector, so
// loading this file in any slider section only inits the sliders actually present.
//   - initSlider: testimonials + blog teaser (spv 1→2(768)→3(992), speed 700, custom arrows)
//   - initBreakpointSlider: services/expertise/pricing/team (slider ONLY ≤991, destroyed ≥992)
//   - initFadeSlider: service-detail cross-fade (effect fade, loop, w-slider arrows)
(function () {
  var Swiper = window.Swiper;
  if (!Swiper) return;

  // Always-on slider (testimonials + blog teaser).
  function initSlider(sectionSelector) {
    document.querySelectorAll(sectionSelector).forEach(function (section) {
      var el = section.querySelector(".swiper");
      if (!el) return;
      var swiper = new Swiper(el, {
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
      section.querySelectorAll(".slide_prev").forEach(function (b) { b.addEventListener("click", function () { swiper.slidePrev(); }); });
      section.querySelectorAll(".slide_next").forEach(function (b) { b.addEventListener("click", function () { swiper.slideNext(); }); });
    });
  }

  // Static grid on desktop, slider ONLY on tablet/mobile (≤991).
  function initBreakpointSlider(sectionSelector, hostSelector, arrowsClass, tabletPerView) {
    var section = document.querySelector(sectionSelector);
    if (!section) return;
    var el = section.querySelector(hostSelector);
    if (!el) return;

    var swiper = null;
    var mq = window.matchMedia("(max-width: 991px)");

    var sync = function () {
      if (mq.matches && !swiper) {
        swiper = new Swiper(el, {
          speed: 700,
          loop: false,
          slidesPerView: 1,
          spaceBetween: 16,
          mousewheel: { forceToAxis: true },
          keyboard: { enabled: true, onlyInViewport: true },
          breakpoints: {
            768: { slidesPerView: tabletPerView, spaceBetween: tabletPerView > 1 ? 24 : 16 },
          },
        });
      } else if (!mq.matches && swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }
    };

    section.querySelectorAll(arrowsClass + " .slide_prev").forEach(function (b) {
      b.addEventListener("click", function () { if (swiper) swiper.slidePrev(); });
    });
    section.querySelectorAll(arrowsClass + " .slide_next").forEach(function (b) {
      b.addEventListener("click", function () { if (swiper) swiper.slideNext(); });
    });

    mq.addEventListener("change", sync);
    sync();
  }

  // Cross-fade slider (service-detail testimonials).
  function initFadeSlider(sectionSelector) {
    document.querySelectorAll(sectionSelector).forEach(function (section) {
      var el = section.querySelector(".swiper");
      if (!el) return;
      var swiper = new Swiper(el, {
        effect: "fade",
        fadeEffect: { crossFade: true },
        speed: 500,
        loop: true,
        slidesPerView: 1,
        keyboard: { enabled: true, onlyInViewport: true },
      });
      section.querySelectorAll(".w-slider-arrow-left").forEach(function (b) { b.addEventListener("click", function () { swiper.slidePrev(); }); });
      section.querySelectorAll(".w-slider-arrow-right").forEach(function (b) { b.addEventListener("click", function () { swiper.slideNext(); }); });
    });
  }

  function initAll() {
    initSlider(".section_testimonials");
    initFadeSlider(".section_testimonia");
    initSlider(".section_blog");
    initBreakpointSlider(".section_services", ".services_cards.swiper", ".is-services", 2);
    initBreakpointSlider(".section_expertise", ".expertise_cards.swiper", ".is-expertise", 1);
    initBreakpointSlider(".section_pricing", ".pricing_cards.swiper", ".is-pricing", 2);
    initBreakpointSlider(".sec_team", ".team_cards.swiper", ".is-team", 2);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
