/* Aurae — Blog Post Hero (CMS detail-page hero).
   The shared hero scripts don't match this section: hero-intro.js targets
   .section_home-hero and blog-hero-intro.js targets .section_blog.is-hero. This hero
   is .section_blog-hero with a single h1[animation="hero-heading"] over a CMS
   background image, so its per-character entrance is booted here — same faithful
   pattern as the shared hero intros (SplitText chars, fonts.ready gating, finally{}
   always reveals, prefers-reduced-motion → no motion). navbar.js (loaded before this)
   handles the hamburger menu. Classic <script> — no import/export. */
(function () {
  function run() {
    const hero = document.querySelector(".section_blog-hero");
    if (!hero) return;
    const layout = hero.querySelector(".blog-hero_layout");

    try {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return; // finally reveals; no motion

      const heading = hero.querySelector('[animation="hero-heading"]');
      let chars = [];
      if (heading) {
        heading.setAttribute("aria-label", heading.textContent ?? "");
        chars = new SplitText(heading, { type: "chars", aria: "hidden" }).chars;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
      if (chars.length) {
        tl.from(chars, { yPercent: 50, opacity: 0, duration: 0.6, stagger: { amount: 0.5 } }, 0);
      }
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
