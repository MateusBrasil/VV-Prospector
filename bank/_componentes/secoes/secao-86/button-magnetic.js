// Magnetic button hover — source-faithful, decoded RAW from webflow.js IX2.
//
//   a-30 (MOUSE_MOVE, continuous): the `.button-background` circle follows the
//        cursor — X maps -50%→+50% of its own width, Y maps -1.25rem→+1.25rem.
//   a-31 (MOUSE_OVER): `.button-background` scales 0→2.1 (fills the button).
//   a-32 (MOUSE_OUT): scales 2.1→2 + opacity 1→0, then instantly resets to scale 0.
//
// Respects prefers-reduced-motion (no wiring).
// gsap and CustomEase are globals (loaded via CDN before this script).

(function () {
  gsap.registerPlugin(CustomEase);
  const EASE_IN = CustomEase.create("btnHoverIn", "M0,0 C0.55,0.094 0.749,0.252 1,1");

  function init() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const yRange = 1.25 * rem; // ±1.25rem in px

    document.querySelectorAll(".button").forEach((btn) => {
      const bg = btn.querySelector(".button-background");
      if (!bg) return;

      gsap.set(bg, { scale: 0, xPercent: 0, y: 0, opacity: 1 });

      const xTo = gsap.quickTo(bg, "xPercent", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(bg, "y", { duration: 0.5, ease: "power3" });

      btn.addEventListener("mouseenter", () => {
        gsap.to(bg, { scale: 2.1, opacity: 1, duration: 0.4, ease: EASE_IN });
      });

      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        xTo(gsap.utils.mapRange(0, 1, -50, 50, (e.clientX - r.left) / r.width));
        yTo(gsap.utils.mapRange(0, 1, -yRange, yRange, (e.clientY - r.top) / r.height));
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(bg, {
          scale: 2,
          opacity: 0,
          duration: 0.1,
          ease: "power1.out",
          onComplete: () => gsap.set(bg, { opacity: 1, scale: 0 }),
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
