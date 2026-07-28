/* coverly-history — component boot logic.
 *
 * The shared scroll-reveal script (/coverly/scripts/scroll-reveal.js)
 * handles the slide-in and image reveal patterns for this section. The
 * Finsweet number-count pattern is the only one we own locally, because
 * the shared script resets `[fs-numbercount-end]` counters to "0" at
 * init and animates up only when the element scrolls into view. For an
 * above-the-fold section (and for static QA screenshots) that left the
 * stats reading "0" or empty in the captured frame.
 *
 * The fix:
 *   - The markup uses `data-counter-*` attributes instead of
 *     `fs-numbercount-*`, so the shared script's selector no longer
 *     matches and never resets these elements to "0".
 *   - The markup ships the END value as the visible default, so the
 *     section reads complete on first paint even before any animation.
 *   - This script drives the count-up animation locally via GSAP +
 *     ScrollTrigger when the counter scrolls into view, falling back to
 *     the static markup value when GSAP is unavailable or the user
 *     prefers reduced motion.
 */
(function () {
  function syncCounterFinalValues() {
    document.querySelectorAll("[data-counter-end]").forEach(function (el) {
      var end = el.getAttribute("data-counter-end");
      if (end != null) el.textContent = end;
    });
  }

  function initCounters() {
    var counters = document.querySelectorAll("[data-counter-end]");
    if (!counters.length) return;

    var reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var hasGsap = typeof window.gsap !== "undefined";
    var hasScrollTrigger = typeof window.ScrollTrigger !== "undefined";

    if (reduceMotion || !hasGsap || !hasScrollTrigger) {
      syncCounterFinalValues();
      return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);

    counters.forEach(function (el) {
      var start = Number(el.getAttribute("data-counter-start") || 0);
      var end = Number(el.getAttribute("data-counter-end") || 0);
      var durMs = Number(el.getAttribute("data-counter-duration") || 2000);

      // Keep the final value visible until the animation actually starts.
      el.textContent = String(end);

      window.ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: function () {
          var obj = { n: start };
          window.gsap.to(obj, {
            n: end,
            duration: durMs / 1000,
            ease: "power2.out",
            onUpdate: function () {
              el.textContent = String(Math.round(obj.n));
            },
            onComplete: function () {
              el.textContent = String(end);
            },
          });
        },
      });
    });
  }

  // Run immediately so the values are present even if the page is
  // snapshotted before any listeners fire.
  syncCounterFinalValues();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCounters);
  } else {
    initCounters();
  }
})();
