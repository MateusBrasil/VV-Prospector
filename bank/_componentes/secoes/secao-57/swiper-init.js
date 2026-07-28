/* Stayli — generic carousel init (Swiper path A). Port of swiper-init.ts to a
   plain global (no `export`, self-init — Rule 1). Swiper is a CDN global
   (swiper-bundle includes Navigation + Autoplay + A11y, auto-registered — no
   `modules` array needed). Targets `.swiper[data-swiper]`, reads data-* config,
   wires arrows `[data-swiper-prev/next]` inside `[data-swiper-scope]`.
   Used by: stayli-destinations, stayli-blog-teaser. */
(function () {
  if (typeof Swiper === 'undefined') return; // fail-safe: no slider, content visible

  function num(v, d) {
    var n = v ? parseFloat(v) : NaN;
    return isFinite(n) ? n : d;
  }

  function initSwipers() {
    document.querySelectorAll('.swiper[data-swiper]').forEach(function (root) {
      var cfg = {
        spv: num(root.dataset.spv, 1.15),
        spvTablet: num(root.dataset.spvTablet, 2),
        spvDesktop: num(root.dataset.spvDesktop, 3),
        gap: num(root.dataset.gap, 16),
        loop: root.dataset.loop !== 'false',
        autoplay: num(root.dataset.autoplay, 0),
        centered: root.dataset.centered === 'true',
      };
      var scope = root.closest('[data-swiper-scope]') || root.parentElement || document.body;
      var next = scope.querySelector('[data-swiper-next]');
      var prev = scope.querySelector('[data-swiper-prev]');

      var opts = {
        slidesPerView: cfg.spv,
        spaceBetween: cfg.gap,
        centeredSlides: cfg.centered,
        loop: cfg.loop,
        speed: 600,
        navigation: next && prev ? { nextEl: next, prevEl: prev } : undefined,
        breakpoints: {
          768: { slidesPerView: cfg.spvTablet, centeredSlides: false },
          992: { slidesPerView: cfg.spvDesktop, centeredSlides: false },
        },
      };
      if (cfg.autoplay) opts.autoplay = { delay: cfg.autoplay, disableOnInteraction: false };

      new Swiper(root, opts);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initSwipers);
  else initSwipers();
})();
