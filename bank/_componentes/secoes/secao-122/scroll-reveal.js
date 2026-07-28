/* Stayli — shared reveal engine. Port of animations.ts to a plain global
   (no `export`, self-init — Rule 1). NO GSAP: reveals are CSS keyframes +
   IntersectionObserver. Two parts:
     - Hero entrance: [data-hero-reveal] gets `.is-in` on load (the actual
       motion is pure CSS keyframes in /stayli/styles.css — heroRise / heroDeblur
       / heroKenBurns / heroShadowIn — so the hero animates even with this off).
     - Scroll reveals: [data-reveal] gets `.is-in` as it enters the viewport,
       with a 90ms top->bottom cascade for siblings entering together.
   FAIL-SAFE: the hidden start state lives in CSS under `html.reveal-js [data-reveal]`
   and only inside `@media (prefers-reduced-motion: no-preference)`. The `reveal-js`
   flag is set inline in <head> before first paint. If this script never runs,
   `.is-in` is never added but content is already visible (blur-free) unless the
   flag + motion gate are both on — and a stalled observer would leave blur, so
   this script MUST load. Reduced-motion users get `.is-in` immediately, no motion. */
(function () {
  var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function runHeroEntrance() {
    var els = document.querySelectorAll("[data-hero-reveal]");
    if (!els.length) return;
    if (REDUCE) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    requestAnimationFrame(function () {
      els.forEach(function (el) { el.classList.add("is-in"); });
    });
  }

  function runScrollReveals() {
    var els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;
    if (REDUCE) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var STAGGER = 90; // ms between siblings entering together
    var io = new IntersectionObserver(
      function (entries) {
        var entering = entries
          .filter(function (e) { return e.isIntersecting; })
          .sort(function (a, b) {
            return a.target.compareDocumentPosition(b.target) &
              Node.DOCUMENT_POSITION_FOLLOWING
              ? -1
              : 1;
          });
        entering.forEach(function (entry, i) {
          var el = entry.target;
          var delay = Math.min(i, 8) * STAGGER;
          if (delay) window.setTimeout(function () { el.classList.add("is-in"); }, delay);
          else el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach(function (el) { io.observe(el); });
  }

  function init() {
    runHeroEntrance();
    runScrollReveals();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
