// Hero home load-in — source-faithful, decoded RAW from webflow.js IX2.
//
//   a-36 "hero content":  each child rises (y:5rem) / slides (x:5rem) + fades in.
//   a-49 "hero image":    wrapper slides from y:-100%, inner content from y:+100%
//                         (split unmask), the photo de-scales 1.5→1 and de-blurs
//                         10px→0, the floating balance badge scales 0→1.
//
// outQuart === GSAP power3.out. Respects reduced-motion.
// No-FOUC: inline opacity:0 + transform states kept in HeroSection.astro.
// gsap is a global (loaded via CDN before this script).

(function () {
  const EASE = "power3.out";

  function init() {
    const hero = document.querySelector(".section_hero");
    if (!hero) return;

    const q = (s) => hero.querySelector(s);
    const h1 = q(".heading-style-h1");
    const desc = q(".is-hero-one-description");
    const btn = q(".hero_button-wrapper");
    const avatars = Array.from(hero.querySelectorAll(".hero_info"));
    const bottom = q(".is-hero-bottom-text");
    const img = q(".hero_img");
    const imgContent = q(".hero_img-content");
    const innerImg = q(".img.is-hero-one");
    const balance = q(".hero_balance");

    const all = [h1, desc, btn, ...avatars, bottom, img, imgContent, innerImg, balance].filter(Boolean);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(all, { clearProps: "opacity,transform,filter" });
      return;
    }

    // a-36 — hero content (rise / slide + fade), per-element delay stagger.
    if (h1) gsap.fromTo(h1, { autoAlpha: 0, y: "5rem" }, { autoAlpha: 1, y: 0, duration: 0.7, delay: 0.1, ease: EASE });
    if (desc) gsap.fromTo(desc, { autoAlpha: 0, y: "5rem" }, { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.2, ease: EASE });
    if (btn) gsap.fromTo(btn, { autoAlpha: 0, y: "5rem" }, { autoAlpha: 1, y: 0, duration: 0.7, delay: 0.3, ease: EASE });
    // avatars in DOM order: is-first .4, is-second .5, is-thirth .6, is-fourth .7
    const avatarDelays = [0.4, 0.5, 0.6, 0.7];
    avatars.forEach((a, i) =>
      gsap.fromTo(a, { autoAlpha: 0, x: "5rem" }, { autoAlpha: 1, x: 0, duration: 0.7, delay: avatarDelays[i] != null ? avatarDelays[i] : 0.4, ease: EASE }),
    );
    if (bottom) gsap.fromTo(bottom, { autoAlpha: 0, y: "5rem" }, { autoAlpha: 1, y: 0, duration: 0.7, delay: 0.5, ease: EASE });

    // a-49 — hero image split-unmask + de-scale + de-blur, then balance badge.
    // Use y:"%" (not yPercent) so the unit matches the inline translate3d(...,%) from-state.
    if (img) gsap.fromTo(img, { y: "-100%" }, { y: "0%", duration: 1.2, delay: 0.1, ease: EASE });
    if (imgContent) gsap.fromTo(imgContent, { y: "100%" }, { y: "0%", duration: 1.2, delay: 0.1, ease: EASE });
    if (innerImg) gsap.fromTo(innerImg, { scale: 1.5, filter: "blur(10px)" }, { scale: 1, filter: "blur(0px)", duration: 1.2, delay: 0.1, ease: EASE });
    if (balance) gsap.fromTo(balance, { scale: 0 }, { scale: 1, duration: 1.0, delay: 0.5, ease: EASE });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
