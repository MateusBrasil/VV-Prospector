/**
 * scroll-reveal.js — IntersectionObserver-driven reveal system.
 *
 * Reveals fire on VIEWPORT VISIBILITY (not a scroll-position threshold). This
 * matters when a component is copied into another app/page (e.g. Lovable) where
 * the scroll container isn't the window: a ScrollTrigger watching the wrong
 * scroller never fires `onEnter`, so a hard-hidden first section stays invisible.
 * IntersectionObserver is scroller-agnostic and fires immediately for elements
 * already in view — so a first/top section reveals on load, and below-the-fold
 * elements reveal as they scroll in.
 *
 * Patterns (unchanged visually from the ScrollTrigger version):
 *   1. [data-reveal] — fade-up (opacity 0 + y 24 → 1 + 0). data-reveal-y overrides offset.
 *   2. [data-reveal-slide] / .scroll-slide-left — opacity 0 + x 100 → 1 + 0.
 *   3. [data-reveal-image] (+ .img-wrapper / .img) — clip/scale/blur image reveal.
 *   4. [fs-numbercount-end] — count-up on view.
 */

// gsap loaded via CDN, attached to window

function initScrollReveal() {
  // Respect reduced motion — show the final (revealed) state, no animation.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-reveal], [data-reveal-slide], .scroll-slide-left").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    document.querySelectorAll("[data-reveal-image] .img-wrapper").forEach((el) => {
      el.style.transform = "translate3d(0,0,0)";
    });
    document.querySelectorAll("[data-reveal-image] .img").forEach((el) => {
      el.style.transform = "translate3d(0,0,0) scale3d(1,1,1)";
      el.style.filter = "none";
    });
    return;
  }

  // Observe `els`; when one enters the viewport, run `reveal(el)` once. Fires
  // immediately (next frame) for elements already in view at load. If
  // IntersectionObserver is unavailable, reveal everything (fail-safe — never
  // leave content hidden).
  function onVisible(els, reveal) {
    if (!els.length) return;
    if (typeof IntersectionObserver === "undefined") {
      els.forEach(reveal);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          reveal(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => io.observe(el));
  }

  // Pattern 1: [data-reveal] — fade-up (opacity + y)
  const els = gsap.utils.toArray("[data-reveal]");
  els.forEach((el) => {
    const y = Number(el.dataset.revealY ?? 24);
    gsap.set(el, { opacity: 0, y });
  });
  onVisible(els, (el) => {
    gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", overwrite: "auto" });
  });

  // Pattern 2: [data-reveal-slide] — slideInRight (opacity 0 + translateX(100) → 0)
  const slides = gsap.utils.toArray("[data-reveal-slide], .scroll-slide-left");
  slides.forEach((el) => {
    gsap.set(el, { opacity: 0, x: 100 });
  });
  onVisible(slides, (el) => {
    gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: "power4.out", overwrite: "auto" });
  });

  // Pattern 3: [data-reveal-image] — counter-translation image reveal.
  const imageWraps = gsap.utils.toArray("[data-reveal-image]");
  imageWraps.forEach((wrap) => {
    const innerWrapper = wrap.querySelector(".img-wrapper");
    const img = wrap.querySelector(".img");
    if (!innerWrapper || !img) return;
    // Clear inline transform shorthand so GSAP individual tracking is authoritative.
    gsap.set(innerWrapper, { clearProps: "transform" });
    gsap.set(img, { clearProps: "transform" });
    gsap.set(innerWrapper, { yPercent: -100 });
    gsap.set(img, { yPercent: 100, scale: 1.5, filter: "blur(10px)" });
  });
  onVisible(imageWraps, (wrap) => {
    const innerWrapper = wrap.querySelector(".img-wrapper");
    const img = wrap.querySelector(".img");
    if (!innerWrapper || !img) return;
    // Same dur+ease across both sub-tweens to keep the counter-translation locked.
    gsap.to(innerWrapper, { yPercent: 0, duration: 1.2, ease: "power4.out" });
    gsap.to(img, { yPercent: 0, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power4.out" });
  });

  // Pattern 4: number counter — counts to fs-numbercount-end on view.
  const counters = gsap.utils.toArray("[fs-numbercount-end]");
  counters.forEach((el) => {
    const start = Number(el.getAttribute("fs-numbercount-start") ?? 0);
    el.textContent = String(start); // avoid flash of the final number
  });
  onVisible(counters, (el) => {
    const start = Number(el.getAttribute("fs-numbercount-start") ?? 0);
    const end = Number(el.getAttribute("fs-numbercount-end") ?? 0);
    const durMs = Number(el.getAttribute("fs-numbercount-duration") ?? 2000);
    const obj = { n: start };
    gsap.to(obj, {
      n: end,
      duration: durMs / 1000,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = String(Math.round(obj.n));
      },
    });
  });
}

// Auto-initialize on DOM ready
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollReveal);
  } else {
    initScrollReveal();
  }
}
