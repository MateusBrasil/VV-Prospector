/* =============================================================================
   vetic/scripts/scroll-reveal.js — SHARED reveal engine for all Vetic ports.
   Ported from the template's src/scripts/scroll-reveal.ts (TS + ESM -> plain
   classic script: NO top-level export, gsap/ScrollTrigger come from the CDN
   globals). Reveals [data-reveal] elements as they enter the viewport.
   Type per element via data-reveal="view|down|left|right|scale|fade|button|curtain".
   Honors prefers-reduced-motion (elements shown immediately, no motion).
   ============================================================================= */

gsap.registerPlugin(ScrollTrigger);

// Reveal presets. `view` is the STANDARD entrance: opacity 0 + a 15% (of the
// element's own height) translateY, eased outQuart over 0.7s. The other types
// (down/left/right/scale/fade) reuse the same fade and are kept as generic
// variants for the few non-standard reveals.
var VETIC_REVEAL_FROM = {
  view: { yPercent: 15, opacity: 0 },
  down: { yPercent: -15, opacity: 0 },
  left: { x: -48, opacity: 0 },
  right: { x: 48, opacity: 0 },
  scale: { scale: 0.92, opacity: 0 },
  fade: { opacity: 0 },
  // Standard "hero button" entrance — rise 30% of own height + fade on an
  // outBack overshoot over 1s. Apply data-reveal="button" to the WRAPPER of a
  // hero-style button so the button's own transform stays free for its :hover.
  button: { yPercent: 30, opacity: 0 },
};

// Per-type easing / duration overrides (default: outQuart, 0.7s).
// `button` matches the hero exactly: GSAP's default back.out constant
// (1.70158) IS the hero's cubic-bezier(0.34, 1.56, 0.64, 1).
var VETIC_REVEAL_EASE = { button: 'back.out' };
var VETIC_REVEAL_DURATION = { button: 1 };

function initVeticScrollReveal() {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('[data-reveal]');

  if (reduce) {
    els.forEach(function (el) { gsap.set(el, { clearProps: 'all', opacity: 1 }); });
    return;
  }

  els.forEach(function (el) {
    var dir = el.dataset.reveal || 'view';
    var delay = parseFloat(el.dataset.revealDelay || '0');

    // Curtain reveal: the framed image drops in behind its clip while the inner
    // photo zooms out from 1.5x and a blur sharpens. Animates the element's
    // nested .img-wrapper + .img, not the element. A slow 2s glide on outQuart.
    if (dir === 'curtain') {
      var wrap = el.querySelector('.img-wrapper');
      var img = el.querySelector('.img');
      if (wrap && img) {
        gsap.set(wrap, { yPercent: -110 });
        gsap.set(img, { yPercent: 100, scale: 1.5, filter: 'blur(10px)' });
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: function () {
            // clearProps on finish so the settled (natural) state takes over —
            // lets a later CSS :hover on the same .img win, which a leftover
            // GSAP inline transform would otherwise block.
            gsap.to(wrap, {
              yPercent: 0, duration: 2, delay: delay, ease: 'power4.out',
              onComplete: function () { gsap.set(wrap, { clearProps: 'transform' }); },
            });
            gsap.to(img, {
              yPercent: 0, scale: 1, filter: 'blur(0px)', duration: 2, delay: delay, ease: 'power4.out',
              onComplete: function () { gsap.set(img, { clearProps: 'transform,filter' }); },
            });
          },
        });
        return;
      }
    }

    var from = VETIC_REVEAL_FROM[dir] || VETIC_REVEAL_FROM.view;
    gsap.set(el, from);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: function () {
        gsap.to(el, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: VETIC_REVEAL_DURATION[dir] || 0.7,
          delay: delay,
          ease: VETIC_REVEAL_EASE[dir] || 'power4.out', // default: outQuart
        });
      },
    });
  });

  ScrollTrigger.refresh();
  fireUnreachableReveals();
  // Image loads change layout; re-check after every refresh (load, resize).
  ScrollTrigger.addEventListener('refresh', fireUnreachableReveals);
}

// Standalone section pages are short: an element near the bottom can have its
// trigger start BEYOND the page's max scroll, so it would stay hidden forever
// (e.g. last services row: start 1054 > maxScroll 1016). Fire those instantly.
function fireUnreachableReveals() {
  var maxS = ScrollTrigger.maxScroll(window);
  ScrollTrigger.getAll().forEach(function (t) {
    if (t.start > maxS && t.vars && t.vars.onEnter) {
      var fn = t.vars.onEnter;
      t.kill();
      fn();
    }
  });
}

if (document.readyState !== 'loading') initVeticScrollReveal();
else document.addEventListener('DOMContentLoaded', initVeticScrollReveal);
