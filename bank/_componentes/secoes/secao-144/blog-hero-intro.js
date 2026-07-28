// blog-hero-intro.js — page-load entrance for the Blog hero's top elements (eyebrow,
// heading, description). Only animates the .blog-hero_intro text block; the blog grid
// below it is left untouched and visible. Same patterns as the other hero intros:
// SplitText per-character heading, fonts.ready gating, finally{} always reveals,
// prefers-reduced-motion → no motion.
//
//   [hero-heading] eyebrow   y + opacity                          pos 0
//   [hero-heading] h2 chars  y 50% + opacity, stagger amount .5   pos .15
//   [hero-description] copy  y + opacity                          pos .45
(function () {
  function run() {
    const block = document.querySelector(".section_blog.is-hero .blog-hero_intro");
    if (!block) return;

    try {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return; // finally reveals; no motion

      const ease = "power3.out";
      const eyebrow = block.querySelector('[animation="hero-heading"]:not(h2)');
      const h2 = block.querySelector('h2[animation="hero-heading"]');
      const description = block.querySelector('[animation="hero-description"]');

      let chars = [];
      if (h2) {
        h2.setAttribute("aria-label", h2.textContent ?? "");
        chars = new SplitText(h2, { type: "chars", aria: "hidden" }).chars;
      }

      const tl = gsap.timeline({ defaults: { ease, duration: 0.8 } });
      if (eyebrow) tl.from(eyebrow, { yPercent: 50, opacity: 0, duration: 0.6 }, 0);
      if (chars.length) {
        tl.from(chars, { yPercent: 50, opacity: 0, duration: 0.6, stagger: { amount: 0.5 } }, 0.15);
      }
      if (description) tl.from(description, { yPercent: 50, opacity: 0 }, 0.45);
    } finally {
      block.style.visibility = "visible";
    }
  }

  // Wait for fonts so SplitText measures glyphs correctly; fall back if it stalls.
  function start() {
    if (document.fonts?.ready) {
      let done = false;
      const go = () => { if (!done) { done = true; run(); } };
      document.fonts.ready.then(go);
      setTimeout(go, 600);
    } else {
      run();
    }
  }

  function init() {
    gsap.registerPlugin(SplitText);
    start();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
