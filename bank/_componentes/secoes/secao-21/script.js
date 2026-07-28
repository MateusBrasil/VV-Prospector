// Pre-anim FOUC guard — added before GSAP boots, removed after initial set.
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("faq-section-pre-anim");
}

(function () {
  const { gsap, ScrollTrigger, SplitText, CustomEase } = window;
  if (!gsap || !ScrollTrigger || !SplitText || !CustomEase) {
    document.documentElement.classList.remove("faq-section-pre-anim");
    return;
  }

  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

  // Vaultix custom eases — same curve set as the source template.
  if (!CustomEase.get("vaultixStructure")) CustomEase.create("vaultixStructure", "0.7, 0, 0.2, 1");
  if (!CustomEase.get("vaultixReveal")) CustomEase.create("vaultixReveal", "0.16, 1, 0.3, 1");
  if (!CustomEase.get("vaultixDecor")) CustomEase.create("vaultixDecor", "0.34, 1.3, 0.64, 1");

  let preAnimDropped = false;
  function dropPreAnim() {
    if (preAnimDropped) return;
    document.documentElement.classList.remove("faq-section-pre-anim");
    preAnimDropped = true;
  }

  function initEntrance(root) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      dropPreAnim();
      return;
    }

    const eyebrow = root.querySelector("[data-faq-eyebrow]");
    const headline = root.querySelector("[data-faq-headline]");
    const items = gsap.utils.toArray("[data-faq-item]", root);
    const tmarks = gsap.utils.toArray("[data-faq-tmark]", root);
    const frameLines = gsap.utils.toArray("[data-faq-frame-line]", root);

    const eyebrowSplit = eyebrow
      ? new SplitText(eyebrow, { type: "lines", mask: "lines" })
      : null;
    const headlineSplit = headline
      ? new SplitText(headline, { type: "lines", mask: "lines" })
      : null;

    if (eyebrowSplit) gsap.set(eyebrowSplit.lines, { yPercent: 110 });
    if (headlineSplit) gsap.set(headlineSplit.lines, { yPercent: 110 });
    frameLines.forEach((l) => {
      const side = l.dataset.faqFrameLine;
      if (side === "top" || side === "bottom") gsap.set(l, { scaleX: 0 });
      else gsap.set(l, { scaleY: 0 });
    });
    gsap.set(tmarks, { opacity: 0, scale: 0.4, transformOrigin: "center" });
    gsap.set(items, { opacity: 0, borderColor: "transparent" });

    dropPreAnim();

    const tl = gsap.timeline({
      scrollTrigger: { trigger: root, start: "top 80%", once: true },
    });

    if (eyebrowSplit) {
      tl.to(
        eyebrowSplit.lines,
        { yPercent: 0, duration: 0.65, ease: "vaultixReveal", stagger: 0.05 },
        0,
      );
    }
    if (headlineSplit) {
      tl.to(
        headlineSplit.lines,
        { yPercent: 0, duration: 0.9, ease: "vaultixReveal", stagger: 0.1 },
        0.15,
      );
    }

    const horizontals = frameLines.filter((l) => {
      const s = l.dataset.faqFrameLine;
      return s === "top" || s === "bottom";
    });
    const verticals = frameLines.filter((l) => {
      const s = l.dataset.faqFrameLine;
      return s === "left" || s === "right";
    });

    tl.to(
      horizontals,
      { scaleX: 1, duration: 1.0, ease: "vaultixStructure", stagger: 0.08 },
      0.4,
    );
    tl.to(
      verticals,
      { scaleY: 1, duration: 0.8, ease: "vaultixStructure", stagger: 0.08 },
      0.55,
    );
    tl.to(
      items,
      { borderColor: "var(--color-border)", duration: 0.7, ease: "vaultixStructure" },
      0.85,
    );
    tl.to(
      tmarks,
      { opacity: 1, scale: 1, duration: 0.45, ease: "vaultixDecor", stagger: 0.06 },
      1.0,
    );
    tl.to(
      items,
      { opacity: 1, duration: 0.5, ease: "vaultixReveal", stagger: 0.06 },
      1.05,
    );
  }

  function initOpenClose(root) {
    const items = root.querySelectorAll("[data-faq-item]");
    items.forEach((item) => {
      const summary = item.querySelector("summary");
      const answer = item.querySelector(".faq-answer");
      if (!summary || !answer) return;

      if (item.open) {
        gsap.set(answer, { height: "auto", opacity: 1 });
      } else {
        gsap.set(answer, { height: 0, opacity: 0 });
      }

      let isAnimating = false;

      summary.addEventListener("click", (e) => {
        e.preventDefault();
        if (isAnimating) return;
        isAnimating = true;

        if (item.open) {
          item.dataset.faqState = "closed";
          gsap.to(answer, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "vaultixStructure",
            onComplete: () => {
              item.open = false;
              isAnimating = false;
            },
          });
        } else {
          item.dataset.faqState = "open";
          item.open = true;
          gsap.set(answer, { height: "auto" });
          const targetHeight = answer.offsetHeight;
          gsap.fromTo(
            answer,
            { height: 0, opacity: 0 },
            {
              height: targetHeight,
              opacity: 1,
              duration: 0.4,
              ease: "vaultixStructure",
              onComplete: () => {
                gsap.set(answer, { height: "auto" });
                isAnimating = false;
              },
            },
          );
        }
      });
    });
  }

  function init() {
    document.querySelectorAll("[data-faq-section]").forEach((root) => {
      initEntrance(root);
      initOpenClose(root);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
