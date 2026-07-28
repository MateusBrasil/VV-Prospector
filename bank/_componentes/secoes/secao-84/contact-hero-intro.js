// contact-hero-intro.js — page-load entrance for the Contact hero. Same patterns as the
// other hero intros (SplitText per-character heading, fonts.ready gating, finally{}
// always reveals, prefers-reduced-motion → no motion). The background image gets a
// reverse zoom (scale 1.1 → 1, a gentle pull-back).
//
//   [.contact_bg img]        scale 1.1 → 1 (reverse zoom) + opacity   dur 1.4  pos 0
//   [hero-heading] eyebrow   y + opacity                                       pos .2
//   [hero-heading] h1 chars  y 50% + opacity, stagger amount .5                pos .3
//   description              y + opacity                                       pos .5
//   info items (×3)          y + opacity, stagger                              pos .6
//   form card                y + opacity                              dur .7   pos .7
(function () {
  function run() {
    const section = document.querySelector(".section_contact");
    if (!section) return;
    const layout = section.querySelector(".contact_layout");
    const bgWrap = section.querySelector(".contact_bg");

    try {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return; // finally reveals; no motion

      const ease = "power3.out";
      const bg = bgWrap?.querySelector(".img_parallax");
      const eyebrow = section.querySelector('.text-style-allcaps[animation="hero-heading"]');
      const h1 = section.querySelector('h1[animation="hero-heading"]');
      const description = section.querySelector('.max-description [animation="hero-heading"]');
      const infoItems = gsap.utils.toArray('.contact_info-list [animation="hero-description"]');
      const form = section.querySelector(".contact_form-wrapper");

      let chars = [];
      if (h1) {
        h1.setAttribute("aria-label", h1.textContent ?? "");
        chars = new SplitText(h1, { type: "chars", aria: "hidden" }).chars;
      }

      const tl = gsap.timeline({ defaults: { ease, duration: 0.8 } });
      // Reverse zoom on the background — starts slightly enlarged and pulls back to rest.
      if (bg) tl.from(bg, { scale: 1.1, transformOrigin: "50% 50%", opacity: 0, duration: 1.4 }, 0);
      if (eyebrow) tl.from(eyebrow, { yPercent: 50, opacity: 0, duration: 0.6 }, 0.2);
      if (chars.length) {
        tl.from(chars, { yPercent: 50, opacity: 0, duration: 0.6, stagger: { amount: 0.5 } }, 0.3);
      }
      if (description) tl.from(description, { yPercent: 50, opacity: 0 }, 0.5);
      if (infoItems.length) tl.from(infoItems, { yPercent: 50, opacity: 0, stagger: 0.1 }, 0.6);
      if (form) tl.from(form, { y: 24, opacity: 0, duration: 0.7 }, 0.7);
    } finally {
      if (layout) layout.style.visibility = "visible";
      if (bgWrap) bgWrap.style.visibility = "visible";
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
