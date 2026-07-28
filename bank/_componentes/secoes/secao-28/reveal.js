// reveal.js — decorative scroll reveals (S3 + S4), GSAP ScrollTrigger + SplitText.
// Decoded from webflow.js (IX3/GSAP system):
//   [animation="section-heading"]: SplitText CHARS, y 50% + opacity, stagger amount .3,
//       scroll start "top 70%", play once.
//   [animation="section-description"]: SplitText LINES, y 50% + opacity, stagger amount
//       .3, same trigger.
//   .scroll-into-view: plain block fade + slide-up.
//   .stats_images-grid imgs: scale 1.5→1 + blur 5px→0 on enter.
//   .img_parallax (CTA): continuous parallax (scrub y).
// prefers-reduced-motion neutralises everything. Elements inside the custom-animated
// sections (statement / steps / testimonial) are excluded — handled in scroll-sections.js.
(function () {
  function init() {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const EXCLUDE = ".features-scroll_wrapper, .steps_scroll-wrapper, .testimonial_layout";

    // SplitText reveal: pieces (chars|lines) rise from y 50% + fade, staggered on scroll.
    function splitReveal(selector, type, stagger) {
      const els = gsap.utils
        .toArray(selector)
        .filter((el) => !el.closest(EXCLUDE) && (el.textContent ?? "").trim().length > 0);
      els.forEach((el) => {
        el.setAttribute("aria-label", el.textContent ?? "");
        // For char reveals, ALSO split words ("words,chars") so each word stays an
        // unbreakable inline-block unit. The stagger still targets every char.
        const splitType = type === "chars" ? "words,chars" : type;
        const split = new SplitText(el, { type: splitType, aria: "hidden", linesClass: "split-line" });
        const pieces = type === "chars" ? split.chars : split.lines;
        gsap.from(pieces, {
          yPercent: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: { amount: stagger },
          scrollTrigger: { trigger: el, start: "top 75%", once: true },
        });
      });
    }

    function run() {
      // --- Section headings (chars) + descriptions (lines) — faithful split reveals ---
      if (reduce) {
        gsap.set(
          gsap.utils.toArray(
            '[animation="section-heading"], [animation="section-description"], .scroll-into-view'
          ),
          { clearProps: "all" }
        );
      } else {
        splitReveal('[animation="section-heading"]', "chars", 0.3);
        splitReveal('[animation="section-description"]', "lines", 0.3);

        // --- .scroll-into-view: plain block fade + slide-up (not split) ---
        const blocks = gsap.utils
          .toArray(".scroll-into-view")
          .filter((el) => !el.closest(EXCLUDE));
        blocks.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: "1.5rem" },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            }
          );
        });
      }

      // --- Stats images: scale + blur reveal ---
      const statsImgs = gsap.utils.toArray(".stats_images-grid .img");
      if (statsImgs.length && !reduce) {
        const grid = document.querySelector(".stats_images-grid");
        gsap.fromTo(
          statsImgs,
          { scale: 1.5, filter: "blur(5px)" },
          {
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: { trigger: grid, start: "top 85%", once: true },
          }
        );
      }

      // --- Parallax images (scrub). SECTION images only: hero parallaxes are removed and
      // the contact background is excluded (it gets a load zoom instead). ---
      if (!reduce) {
        const parallaxImgs = gsap.utils
          .toArray(".img_parallax")
          .filter((el) => !el.classList.contains("is-hero") && !el.closest(".contact_bg"));
        parallaxImgs.forEach((p) => {
          gsap.fromTo(
            p,
            { yPercent: -14 },
            {
              yPercent: 14,
              ease: "none",
              scrollTrigger: {
                trigger: p.closest(".section_cta") || p,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        });
      }

      ScrollTrigger.refresh();
    }

    // Wait for fonts before splitting (line breaks depend on the rendered font), with a
    // timeout fallback so a slow font never blocks the reveals.
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

    start();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
