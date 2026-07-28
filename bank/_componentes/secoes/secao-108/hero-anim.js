// Advisora hero entrance — GSAP page-load animations for the HomeHero visual cluster.
// CDN-friendly global, self-initializes on DOM ready. Ported from src/scripts/hero-anim.ts.
//   - hero image:     scale 1.2 -> 1   + blur 10 -> 0
//   - hero badges:    scale 0.5 -> 1   + opacity 0 -> 1, then gentle floating loop
//   - hero user tags: translateX 300% -> 0 + blur 20 -> 0 + opacity 0 -> 1 (stagger)
(function () {
  function init() {
    if (typeof gsap === "undefined") return;
    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      document.querySelectorAll("[data-hero-image], [data-hero-tag], [data-hero-user-tag]").forEach(function (el) {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
      });
      return;
    }

    // 1. Hero image — scale + blur cinematic reveal
    var heroImage = document.querySelector("[data-hero-image]");
    if (heroImage) {
      gsap.fromTo(
        heroImage,
        { scale: 1.2, filter: "blur(10px)" },
        { scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out", delay: 0.1 }
      );
    }

    // 2. Hero badges — balloon entrance + gentle infinite float
    var heroTags = document.querySelectorAll("[data-hero-tag]");
    heroTags.forEach(function (tag, i) {
      gsap.set(tag, { scale: 0.5, opacity: 0 });
      var tl = gsap.timeline({ delay: 0.5 + i * 0.12 });
      tl.to(tag, { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.6)" });
      tl.to(tag, { y: "+=8", duration: 2.4 + i * 0.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
    });

    // 3. Hero user tags — slide in from right with blur, stagger 100ms
    var userTags = document.querySelectorAll("[data-hero-user-tag]");
    userTags.forEach(function (tag, i) {
      gsap.set(tag, { x: "300%", filter: "blur(20px)", opacity: 0 });
      gsap.to(tag, { x: 0, filter: "blur(0px)", opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.6 + i * 0.1 });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
