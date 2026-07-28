// Coverly blog hero — self-contained entrance choreography.
// Replicates the Webflow IX2 slideInRight preset for the heading group and the
// counter-translation image reveal for the featured post thumbnail.
//
// The component used to depend on global /coverly/scripts/{hero,scroll-reveal}.js,
// but those files are authored as ES modules with TypeScript syntax and fail to
// parse when loaded as classic <script> tags — leaving the image hidden and the
// hero text stuck at opacity:0. Inlining the animation here keeps the component
// independent and removes the broken external dependencies.

(function () {
  if (typeof window === "undefined") return;

  const boot = () => {
    if (typeof window.gsap === "undefined") return;
    const { gsap } = window;
    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const textSel = ".section_hero [data-hero-text]";
    const wrap = document.querySelector(".section_hero .blog_img .img-wrapper");
    const img = document.querySelector(".section_hero .blog_img .img");
    const slideEls = document.querySelectorAll(".section_hero .scroll-slide-left");

    if (reduced) {
      document.querySelectorAll(textSel).forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      });
      slideEls.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      });
      if (wrap) wrap.style.transform = "translate3d(0,0,0)";
      if (img) {
        img.style.transform = "translate3d(0,0,0) scale3d(1,1,1)";
        img.style.filter = "none";
      }
      return;
    }

    // Entrance — hero text cascade (slideInRight: opacity 0 + x 100 -> 0).
    gsap.set(textSel, { opacity: 0, x: 100 });
    const tl = gsap.timeline();
    const slideIn = (sel, delay) =>
      tl.to(sel, { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, delay);

    slideIn(".section_hero .tag[data-hero-text]", 0);
    slideIn(".section_hero h1[data-hero-text]", 0.1);
    slideIn(".section_hero .text-color-secondary[data-hero-text]", 0.2);

    // Featured image reveal — wrapper slides down from -100%, image counter-translates
    // up from 100% with a scale + blur clear. Both tweens locked at 1.2s power4.out.
    if (wrap && img) {
      gsap.set(wrap, { yPercent: -100 });
      gsap.set(img, { yPercent: 100, scale: 1.5, filter: "blur(10px)" });

      const playImg = () => {
        gsap.to(wrap, { yPercent: 0, duration: 1.2, ease: "power4.out" });
        gsap.to(img, {
          yPercent: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power4.out",
        });
      };

      if (window.ScrollTrigger) {
        window.ScrollTrigger.create({
          trigger: wrap,
          start: "top 95%",
          once: true,
          onEnter: playImg,
        });
      } else {
        playImg();
      }
    }

    // Side content slide-in (matches the .scroll-slide-left elements on the right column).
    if (slideEls.length) {
      gsap.set(slideEls, { opacity: 0, x: 100 });
      const playSlides = () =>
        gsap.to(slideEls, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.08,
        });

      if (window.ScrollTrigger) {
        window.ScrollTrigger.create({
          trigger: slideEls[0],
          start: "top 95%",
          once: true,
          onEnter: playSlides,
        });
      } else {
        playSlides();
      }
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
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
