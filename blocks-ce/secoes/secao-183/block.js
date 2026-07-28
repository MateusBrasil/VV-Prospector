(function(){
  var __root = document.querySelector('[data-blk="secoes-secao-183"]');
  if(!__root) return;
  var __q = function(s){ return __root.querySelector(s) || document.querySelector(s); };
  var __qa = function(s){ var r = __root.querySelectorAll(s); return r.length ? r : document.querySelectorAll(s); };

/* scroll-reveal.js */
// Advisora scroll-reveal — CDN-friendly global (gsap + ScrollTrigger from CDN).
// Self-initializes on DOM ready. Ported from src/scripts/scroll-reveal.ts.
// No top-level export (would be a parse-time SyntaxError as a classic <script>).
(function () {
  function init() {
    if (typeof gsap === "undefined") return;
    if (typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);

    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof ScrollTrigger === "undefined") {
      __qa("[data-reveal]").forEach(function (el) {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
      });
      return;
    }

    __qa("[data-reveal]").forEach(function (el) {
      var direction = el.dataset.reveal || "up";
      var delayAttr = el.dataset.revealDelay;
      var delay = delayAttr ? parseFloat(delayAttr) / 1000 : 0.1;

      var from, to;

      if (direction === "zoom-blur") {
        from = { opacity: 0, scale: 1.15, filter: "blur(8px)" };
        to = { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out", delay: delay };
      } else {
        from = { opacity: 0 };
        if (direction === "up") from.y = 15;
        else if (direction === "down") from.y = -15;
        else if (direction === "left") from.x = -15;
        else if (direction === "right") from.x = 15;

        to = { opacity: 1, x: 0, y: 0, duration: 0.7, ease: "power3.out", delay: delay };
      }

      gsap.set(el, from);
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        onEnter: function () { gsap.to(el, to); },
        once: true,
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


/* script.js */
// Advisora — Testimonials Section
// No component-specific boot logic needed.
// The header reveals are handled by the shared /advisora/scripts/scroll-reveal.js
// (reads [data-reveal] / [data-reveal-delay] and animates via GSAP + ScrollTrigger).
// The card marquee is a pure CSS animation defined in style.css.

})();