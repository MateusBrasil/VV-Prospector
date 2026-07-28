// Firmo testimonials slider (port de sliders.ts). Swiper crossfade, slide única,
// loop infinito, flechas manuales (NO autoplay — matches data-autoplay="false",
// 500ms). Las flechas viven FUERA del .swiper (en .testimonials_col), por eso se
// buscan desde el parent. Plain global, self-init en DOM ready: usa window.Swiper
// (bundle, que auto-registra Navigation + EffectFade) + window.gsap. Sin import/
// export (Rule 1). Fail-safe: si Swiper/GSAP no cargan, los slides quedan visibles.

// Testimonials staircase: los items del slide activo entran desde la derecha
// (x 3rem → 0 + opacity) en este orden exacto — icono, quote, avatar, nombre, rol.
// Se usa para el reveal inicial Y cada cambio de slide. Vive aquí (no en
// scroll-reveal) porque necesita `.swiper-slide-active` de Swiper.
var ITEM_ORDER = [
  '.icon-1x1-base', // icon
  '.text-4xl', // quote
  '.testimonials_card-user', // avatar
  '.testimonials_card-info .text-base', // name
  '.testimonials_card-info .text-color-secondary', // role
];
function cascadeActive(el) {
  if (typeof window.gsap === 'undefined') return;
  var active = el.querySelector('.swiper-slide-active');
  if (!active) return;
  var items = ITEM_ORDER.map(function (s) {
    return active.querySelector(s);
  }).filter(Boolean);
  if (!items.length) return;
  window.gsap.fromTo(
    items,
    { x: 48, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1, overwrite: true }
  );
}

function initSliders() {
  if (typeof window.Swiper === 'undefined') return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.testimonials_slider.swiper').forEach(function (el) {
    new window.Swiper(el, {
      effect: 'fade',
      fadeEffect: { crossFade: true },
      slidesPerView: 1,
      loop: true,
      speed: 500,
      navigation: {
        // arrows live OUTSIDE the swiper container (in .testimonials_col) so
        // Swiper's fade layout can't overlap them — query from the parent.
        prevEl: el.parentElement && el.parentElement.querySelector('[data-tst-prev]'),
        nextEl: el.parentElement && el.parentElement.querySelector('[data-tst-next]'),
      },
      on: reduce
        ? {}
        : {
            // Re-run the staircase on the newly active slide each time it changes.
            slideChangeTransitionStart: function () {
              cascadeActive(el);
            },
          },
    });

    // Initial reveal: cascade the active slide when the section first enters the
    // viewport. IntersectionObserver fires immediately if it's already in view.
    if (!reduce) {
      var section = el.closest('.section_testimonials') || el;
      var io = new IntersectionObserver(
        function (entries, obs) {
          if (
            entries.some(function (e) {
              return e.isIntersecting;
            })
          ) {
            cascadeActive(el);
            obs.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      io.observe(section);
    }
  });
}

if (document.readyState !== 'loading') initSliders();
else document.addEventListener('DOMContentLoaded', initSliders);
