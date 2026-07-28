// about-hero-intro.js — page-load entrance for the About hero, built on the same
// patterns as the home hero (hero-intro.js): SplitText per-character heading reveal,
// fonts.ready gating, a finally{} that always reveals the layout, and
// prefers-reduced-motion → no motion.
//
//   [.about-hero_img]            clip-path reveal (uncovers bottom→top) + opacity  pos 0
//   [hero-heading] eyebrow       y + opacity                                       pos .2
//   [hero-heading] h1 chars      y 50% + opacity, stagger amount .5                pos .3
//   [.users-list]                y + opacity                                       pos .6
//   [hero-description] copy      y + opacity                                       pos .7
//   [hero-button]                y + opacity                              dur .45  pos .8
(function () {
  function run() {
    const hero = document.querySelector(".section_about-hero");
    if (!hero) return;
    const grid = hero.querySelector(".about-hero_grid");

    try {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return; // finally reveals; no motion

      const ease = "power3.out";
      const content = hero.querySelector(".about-hero_content");
      const img = hero.querySelector(".about-hero_img");
      const eyebrow = content?.querySelector('[animation="hero-heading"]:not(h1)');
      const h1 = content?.querySelector('h1[animation="hero-heading"]');
      const usersList = content?.querySelector(".users-list");
      const description = content?.querySelector('[animation="hero-description"]:not(.users-list)');
      const button = content?.querySelector('[animation="hero-button"]');

      // Per-character split of the h1 (aria-label keeps it readable; split spans
      // aria-hidden via SplitText 3.13's aria option).
      let chars = [];
      if (h1) {
        h1.setAttribute("aria-label", h1.textContent ?? "");
        chars = new SplitText(h1, { type: "chars", aria: "hidden" }).chars;
      }

      const tl = gsap.timeline({ defaults: { ease, duration: 0.8 } });
      if (img) {
        tl.from(img, { clipPath: "inset(100% 0 0 0)", opacity: 0, duration: 1.1 }, 0);
      }
      if (eyebrow) tl.from(eyebrow, { yPercent: 50, opacity: 0, duration: 0.6 }, 0.2);
      if (chars.length) {
        tl.from(chars, { yPercent: 50, opacity: 0, duration: 0.6, stagger: { amount: 0.5 } }, 0.3);
      }
      if (usersList) tl.from(usersList, { yPercent: 50, opacity: 0 }, 0.6);
      if (description) tl.from(description, { yPercent: 50, opacity: 0 }, 0.7);
      if (button) tl.from(button, { yPercent: 50, opacity: 0, duration: 0.45 }, 0.8);
    } finally {
      if (grid) grid.style.visibility = "visible";
    }
  }

  // Wait for fonts so SplitText measures glyphs correctly; fall back if it stalls.
  function start() {
    if (document.fonts?.ready) {
      let done = false;
      const go = () => { if (!done) { done = true; run(); } };
      document.fonts.ready.then(go);
      setTimeout(go, 600); // safety: never block the entrance on a slow font
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
