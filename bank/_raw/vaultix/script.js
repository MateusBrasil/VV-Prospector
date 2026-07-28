(function () {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const SplitText = window.SplitText;

  if (!gsap || !ScrollTrigger || !SplitText) return;

  gsap.registerPlugin(ScrollTrigger, SplitText);

  if (typeof window.registerVaultixEases === "function") {
    window.registerVaultixEases();
  }

  const init = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      document.documentElement.classList.remove("test-pre-anim");
      return;
    }

    const section = document.querySelector("[data-test-section]");
    if (!section) return;

    const eyebrow = section.querySelector("[data-test-eyebrow]");
    const headline = section.querySelector("[data-test-headline]");
    const subhead = section.querySelector("[data-test-subhead]");
    const cards = gsap.utils.toArray("[data-test-card]", section);

    const eyebrowSplit = eyebrow
      ? new SplitText(eyebrow, { type: "lines", mask: "lines" })
      : null;
    const headlineSplit = headline
      ? new SplitText(headline, { type: "lines", mask: "lines" })
      : null;
    const subheadSplit = subhead
      ? new SplitText(subhead, { type: "lines", mask: "lines" })
      : null;

    const cardParts = cards.map((el) => {
      const quoteEl = el.querySelector("[data-test-quote]");
      return {
        el,
        quoteSplit: quoteEl
          ? new SplitText(quoteEl, { type: "lines", mask: "lines" })
          : null,
        author: el.querySelector("[data-test-author]"),
        corners: gsap.utils.toArray("[data-test-corner]", el),
      };
    });

    // ---- Pre-anim states ----
    if (eyebrowSplit) gsap.set(eyebrowSplit.lines, { yPercent: 110 });
    if (headlineSplit) gsap.set(headlineSplit.lines, { yPercent: 110 });
    if (subheadSplit) gsap.set(subheadSplit.lines, { yPercent: 110 });

    cardParts.forEach(({ el, quoteSplit, author, corners }) => {
      gsap.set(el, { opacity: 0, y: 24 });
      if (quoteSplit) gsap.set(quoteSplit.lines, { yPercent: 110 });
      if (author) gsap.set(author, { opacity: 0, y: 8 });
      gsap.set(corners, { opacity: 0, scale: 0.4, transformOrigin: "center" });
    });

    document.documentElement.classList.remove("test-pre-anim");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        once: true,
      },
    });

    // 1. Heading reveal
    if (eyebrowSplit) {
      tl.to(
        eyebrowSplit.lines,
        {
          yPercent: 0,
          duration: 0.6,
          ease: "vaultixReveal",
          stagger: 0.05,
        },
        0
      );
    }
    if (headlineSplit) {
      tl.to(
        headlineSplit.lines,
        {
          yPercent: 0,
          duration: 0.85,
          ease: "vaultixReveal",
          stagger: 0.1,
        },
        0.15
      );
    }
    if (subheadSplit) {
      tl.to(
        subheadSplit.lines,
        {
          yPercent: 0,
          duration: 0.55,
          ease: "vaultixReveal",
          stagger: 0.05,
        },
        0.4
      );
    }

    // 2. Cards stagger — each one reveals its container, quote, author, corners
    cardParts.forEach(({ el, quoteSplit, author, corners }, idx) => {
      const cStart = 0.55 + idx * 0.13;

      tl.to(
        el,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "vaultixReveal",
        },
        cStart
      );

      if (quoteSplit) {
        tl.to(
          quoteSplit.lines,
          {
            yPercent: 0,
            duration: 0.65,
            ease: "vaultixReveal",
            stagger: 0.06,
          },
          cStart + 0.1
        );
      }

      if (author) {
        tl.to(
          author,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "vaultixReveal",
          },
          cStart + 0.3
        );
      }

      if (corners.length) {
        tl.to(
          corners,
          {
            opacity: 1,
            scale: 1,
            duration: 0.35,
            ease: "vaultixDecor",
            stagger: 0.04,
          },
          cStart + 0.4
        );
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
