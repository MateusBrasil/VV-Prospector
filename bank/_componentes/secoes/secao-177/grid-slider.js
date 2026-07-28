// Reusable responsive grid -> slider mechanism (reviewer enhancement).
//
// In the source Webflow template several card grids had NO real slider: on
// tablet/mobile they just collapse to `display:flex; overflow:auto`, becoming a
// mouse-drag/scroll strip with no arrows (a time-saving hack). This converts
// those grids into PROPER Swiper sliders WITH arrows below 992px, while leaving
// the desktop CSS grid completely untouched (>=992px -> plain grid, no Swiper).
//
// Each target opts in with `data-grid-slider` and tunes its peek/gap via
// `data-spv` (slidesPerView) and `data-gap` (spaceBetween, px). The arrow group
// inside it (`.arrow-group` with `.swiper-button-prev[data-prev]` /
// `.swiper-button-next[data-next]`) matches the testimonial slider arrow style.
//
// Mechanism: a single matchMedia('(max-width: 991px)') listener inits Swiper on
// every `[data-grid-slider]` below 992px and destroys it at/above 992px so the
// desktop grid layout is never driven by Swiper. No autoplay -- manual/drag only
// (also respects prefers-reduced-motion implicitly: nothing animates on its own).
(function () {
  function init() {
    // Each target slides only below its own max-width breakpoint -- the exact
    // viewport where the SOURCE grid degraded to an overflow strip. Most grids
    // degrade at <=991 (services, team); expertise + blog degrade at <=767. Per-target
    // override via `data-slider-mq` (max-width px). The CSS gate in grid-slider.css
    // keys off the same `data-slider-mq` value via attribute selectors.
    const instances = new WeakMap();

    function maxFor(el) {
      return parseInt(el.dataset.sliderMq ?? '991', 10);
    }

    function initOne(el) {
      if (instances.has(el)) return;

      // Reviewer change: every grid-slider shows EXACTLY ONE full card at 100% of
      // the slider's content width (inside the global padding) at ALL active
      // breakpoints -- NO peek of the next card, since the arrows already signal
      // it's a slider. slidesPerView is forced to 1; spaceBetween (the gap) only
      // appears during the swipe transition because only one card is visible at
      // rest. `data-spv` is ignored on purpose.
      const gap = parseFloat(el.dataset.gap ?? '16');

      const opts = {
        slidesPerView: 1,
        spaceBetween: gap,
        grabCursor: true,
        speed: 500,
        navigation: {
          nextEl: el.querySelector('[data-next]'),
          prevEl: el.querySelector('[data-prev]'),
        },
      };

      instances.set(el, new Swiper(el, opts));
    }

    function destroyOne(el) {
      const sw = instances.get(el);
      if (sw) {
        sw.destroy(true, true); // also reset inline styles so the grid CSS takes over
        instances.delete(el);
      }
    }

    // One matchMedia per distinct breakpoint, evaluating only the targets that opt
    // into that breakpoint. Below the breakpoint -> init Swiper; at/above -> destroy
    // so the desktop grid CSS regains control.
    function wire(targets, max) {
      const mql = window.matchMedia(`(max-width: ${max}px)`);
      const apply = (matches) =>
        targets.forEach((el) => (matches ? initOne(el) : destroyOne(el)));
      apply(mql.matches);
      mql.addEventListener('change', (e) => apply(e.matches));
    }

    const all = [...document.querySelectorAll('[data-grid-slider]')];
    const byBreakpoint = new Map();
    all.forEach((el) => {
      const max = maxFor(el);
      (byBreakpoint.get(max) ?? byBreakpoint.set(max, []).get(max)).push(el);
    });
    byBreakpoint.forEach((targets, max) => wire(targets, max));
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
