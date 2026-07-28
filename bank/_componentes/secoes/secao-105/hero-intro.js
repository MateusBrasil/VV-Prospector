// hero-intro.js — home hero page-load entrance, faithful to the webflow wf:load
// timeline (IX3/GSAP system). The heading reveals PER CHARACTER (SplitText).
//
//   [bg]             scale 1.2 → 1                         dur 1,   pos 0
//   [animation=zoom] (.home-hero_heading) y 2rem→0 + scale 1.1→1   dur 1, pos 0
//   [animation=hero-heading] (h1) chars: y 50% + opacity, stagger amount .5  pos 0
//   [animation=hero-description]  y 50% + opacity          pos .3
//   [animation=hero-divider]      y 50% + opacity          pos .5
//   [animation=hero-button]       y 50% + opacity   dur .45 pos .55
//
// prefers-reduced-motion → no animation (content shown as-is). A finally{} always
// reveals the layout so a script error can never leave the hero hidden behind the .js guard.
(function () {
  function run() {
    const hero = document.querySelector(".section_home-hero");
    if (!hero) return;
    const layout = hero.querySelector(".home-hero_layout");

    try {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return; // finally reveals; no motion

      const ease = "power3.out";
      const heading = hero.querySelector('[animation="hero-heading"]');

      // Per-character split. Keep the heading readable to AT/SEO (aria-label + split
      // spans aria-hidden, which SplitText 3.13 handles when given the type).
      let chars = [];
      if (heading) {
        heading.setAttribute("aria-label", heading.textContent ?? "");
        const split = new SplitText(heading, { type: "chars", aria: "hidden" });
        chars = split.chars;
      }

      const tl = gsap.timeline({ defaults: { ease, duration: 0.8 } });
      tl.from(hero.querySelector("[bg]"), { scale: 1.2, duration: 1 }, 0)
        .from(hero.querySelector('[animation="zoom"]'), { y: "2rem", scale: 1.1, duration: 1 }, 0);
      if (chars.length) {
        tl.from(chars, { yPercent: 50, opacity: 0, duration: 0.6, stagger: { amount: 0.5 } }, 0);
      }
      tl.from(hero.querySelector('[animation="hero-description"]'), { yPercent: 50, opacity: 0 }, 0.3)
        .from(hero.querySelector('[animation="hero-divider"]'), { yPercent: 50, opacity: 0 }, 0.5)
        .from(hero.querySelector('[animation="hero-button"]'), { yPercent: 50, opacity: 0, duration: 0.45 }, 0.55);
    } finally {
      if (layout) layout.style.visibility = "visible";
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
