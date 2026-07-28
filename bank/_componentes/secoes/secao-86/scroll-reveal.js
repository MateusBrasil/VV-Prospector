// Scroll-reveal — Phase 5 Stage B, source-faithful (v3, data-driven).
//
// The shared Webflow "View" reveal preset is identical everywhere:
//   initial : opacity 0, translate3d(0, 15%, 0)   (15% = percent of element HEIGHT)
//   to      : opacity 1, y 0
//   duration: 700 ms, easing outQuart -> power3.out
//   trigger : SCROLL_INTO_VIEW at 10% in-view -> ScrollTrigger start "top 90%", once
// Presets differ ONLY by transition delay (0.1 / 0.2 / 0.3 / 0.4 s).
//
// Opt-in per element via data attributes:
//   data-reveal            -> reveal with default 0.1s delay
//   data-reveal="0.2"      -> reveal with explicit delay (seconds)
//   data-reveal-y="30"     -> override the rise distance (yPercent; default 15)
//   data-reveal-start="top 100%" -> override ScrollTrigger start
//
// Images do NOT animate in the source (except .footer_logo, which is tagged).
// Respects prefers-reduced-motion. gsap and ScrollTrigger are globals (loaded via CDN).

(function () {
  gsap.registerPlugin(ScrollTrigger);

  function init() {
    const els = gsap.utils.toArray("[data-reveal]");
    if (!els.length) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      els.forEach((el) => {
        const delayAttr = el.getAttribute("data-reveal");
        const delay = delayAttr && delayAttr.trim() !== "" ? parseFloat(delayAttr) : 0.1;
        const start = el.getAttribute("data-reveal-start") || "top 90%";
        const trigger = { trigger: el, start, once: true };
        const dur = 0.7;
        const ease = "power3.out";
        const d = Number.isFinite(delay) ? delay : 0.1;

        if (el.hasAttribute("data-reveal-img")) {
          // Image mode = Webflow "Image zoom out" preset (actionList a-78): scale 1.5→1
          // + de-blur 5px→0, NO opacity, NO move. delay 0, duration 1200ms, power3.out.
          gsap.set(el, { scale: 1.5, filter: "blur(5px)" });
          gsap.to(el, { scale: 1, filter: "blur(0px)", duration: 1.2, delay: 0, ease, scrollTrigger: trigger });
          return;
        }

        // Standard mode: opacity + rise. data-reveal-y="0" → opacity-only.
        const yAttr = el.getAttribute("data-reveal-y");
        const yFrom = yAttr && yAttr.trim() !== "" ? parseFloat(yAttr) : 15;
        gsap.set(el, { opacity: 0, yPercent: Number.isFinite(yFrom) ? yFrom : 15 });
        gsap.to(el, {
          opacity: 1,
          yPercent: 0,
          duration: dur,
          delay: d,
          ease,
          scrollTrigger: trigger,
        });
      });

      ScrollTrigger.refresh();

      return () => {
        // reduced-motion toggle cleanup: clear any inline props we set
        gsap.set(els, { clearProps: "opacity,transform,filter" });
      };
    });

    // Reduced-motion: no reveal animation. Clear any inline FOUC from-states.
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(els, { clearProps: "opacity,transform,filter" });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
