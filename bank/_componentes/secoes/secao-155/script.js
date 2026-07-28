/**
 * Coverly — About Hero animations.
 *
 * Text reveal (tag / h1 / description) — Webflow slideInRight preset port:
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
  if (typeof window === "undefined" || typeof window.gsap === "undefined") return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const textSelector =
    ".section_hero .tag, .section_hero h1, .section_hero .text-color-secondary";
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
    const slideIn = (sel, delay) =>
      tl.to(sel, { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, delay);

    slideIn(".section_hero .tag", 0);
    slideIn(".section_hero h1", 0.1);
    slideIn(".section_hero .text-color-secondary", 0.2);

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
