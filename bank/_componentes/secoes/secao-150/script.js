/**
 * Coverly — Service V1 Hero animations.
 *
 * Text reveal (tag / h1 / description / button) — Webflow slideInRight preset port:
 *   opacity 0 + translateX(100px) → opacity 1 + translateX(0)
 *   duration 1s, ease power4.out, stagger 100ms.
 *   Fires immediately on load (hero is above-the-fold).
 *
 * Image reveal — counter-translation wipe (Webflow custom IX2):
 *   .img-wrapper yPercent -100 → 0
 *   .img        yPercent 100 → 0, scale 1.5 → 1, filter blur(10px) → blur(0)
 *   duration 1.2s, ease power4.out, all sub-tweens in lockstep.
 *
 * Respects prefers-reduced-motion: jumps straight to the final state.
 */
(function () {
  if (typeof window === "undefined") return;

  // Safety net: if GSAP fails to load, strip the inline hide-transforms from the
  // image wrapper/img so they appear in their final state instead of staying off-screen.
  if (typeof window.gsap === "undefined") {
    document.querySelectorAll(".section_hero [data-reveal-image] .img-wrapper").forEach((el) => {
      el.style.transform = "translate3d(0, 0, 0)";
    });
    document.querySelectorAll(".section_hero [data-reveal-image] .img").forEach((el) => {
      el.style.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)";
      el.style.filter = "none";
    });
    return;
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const textSelector =
    ".section_hero .scroll-slide-left";
  const imageWraps = document.querySelectorAll(".section_hero [data-reveal-image]");

  if (reduced) {
    document.querySelectorAll(textSelector).forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    });
    imageWraps.forEach((wrap) => {
      const innerWrapper = wrap.querySelector(".img-wrapper");
      const img = wrap.querySelector(".img");
      if (innerWrapper) innerWrapper.style.transform = "translate3d(0, 0, 0)";
      if (img) {
        img.style.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)";
        img.style.filter = "none";
      }
    });
    return;
  }

  const start = () => {
    // Text reveal: clear inline shorthand transforms so GSAP's tracked x can drive.
    gsap.set(textSelector, { clearProps: "transform" });
    gsap.set(textSelector, { x: 100, opacity: 0 });

    const tl = gsap.timeline();
    tl.to(".section_hero .tag.scroll-slide-left", { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0)
      .to(".section_hero h1.scroll-slide-left", { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0.1)
      .to(".section_hero .text-color-secondary.scroll-slide-left", { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0.2)
      .to(".section_hero .button-wrapper.scroll-slide-left", { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0.3);

    // Image reveal — counter-translation. Fire each image independently as soon
    // as it scrolls in (or immediately if already in view, which the hero is).
    imageWraps.forEach((wrap) => {
      const innerWrapper = wrap.querySelector(".img-wrapper");
      const img = wrap.querySelector(".img");
      if (!innerWrapper || !img) return;

      gsap.set(innerWrapper, { clearProps: "transform" });
      gsap.set(img, { clearProps: "transform" });
      gsap.set(innerWrapper, { yPercent: -100 });
      gsap.set(img, { yPercent: 100, scale: 1.5, filter: "blur(10px)" });

      const play = () => {
        gsap.to(innerWrapper, { yPercent: 0, duration: 1.2, ease: "power4.out" });
        gsap.to(img, {
          yPercent: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power4.out",
        });
      };

      if (window.ScrollTrigger) {
        ScrollTrigger.create({ trigger: wrap, start: "top 95%", once: true, onEnter: play });
      } else {
        play();
      }
    });
  };

  // rAF so the browser has parsed the inline SSR no-flash styles first.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => requestAnimationFrame(start));
  } else {
    requestAnimationFrame(start);
  }
})();

/* ===== TEMLIS-INLINED-NAVBAR: coverly-navbar behavior ===== */
/* Coverly — Navbar
 *
 * Boot logic for the fullscreen overlay menu. The shared
 * /coverly/scripts/navbar.js source uses an ES-module `export`, which would
 * throw a SyntaxError when loaded via a plain <script> tag in this standalone
 * component, so the equivalent behavior is inlined here.
 *
 * All transitions (slide-down menu, fade backdrop, link clip hover) are
 * CSS-driven via the .is-open class — see components.css.
 */
(function initNavbarMenu() {
  const menuTrigger = document.querySelector(".menu");
  const menuContent = document.querySelector(".menu_content");
  const navOverlay = document.querySelector(".nav_overlay");
  if (!menuTrigger || !menuContent || !navOverlay) return;

  let isOpen = false;

  function open() {
    menuContent.classList.add("is-open");
    navOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    menuTrigger.setAttribute("aria-expanded", "true");
    navOverlay.setAttribute("aria-hidden", "false");
    isOpen = true;
  }

  function close() {
    menuContent.classList.remove("is-open");
    navOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
    menuTrigger.setAttribute("aria-expanded", "false");
    navOverlay.setAttribute("aria-hidden", "true");
    isOpen = false;
  }

  function toggle() {
    if (isOpen) close();
    else open();
  }

  menuTrigger.addEventListener("click", toggle);
  menuTrigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
  navOverlay.addEventListener("click", () => {
    if (isOpen) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) close();
  });
})();
