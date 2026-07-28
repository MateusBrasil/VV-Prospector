// Coverly — Service Hero animations.
// Self-contained: replicates the Webflow IX2 "slideInRight" cascade for the
// text block and the counter-translation image reveal for the hero image.
// Falls back gracefully — if GSAP isn't available, content stays visible.

(function () {
  function init() {
    if (typeof window === "undefined" || typeof window.gsap === "undefined") return;

    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;
    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    var textSelector =
      ".section_hero .tag, .section_hero h1, .section_hero .text-color-secondary, .section_hero .button-wrapper";
    var wrapEl = document.querySelector(".section_hero .hero_img .img-wrapper");
    var imgEl = document.querySelector(".section_hero .hero_img .img");

    if (reduced) {
      document.querySelectorAll(textSelector).forEach(function (el) {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      if (wrapEl) wrapEl.style.transform = "none";
      if (imgEl) {
        imgEl.style.transform = "none";
        imgEl.style.filter = "none";
      }
      return;
    }

    // Text cascade — slideInRight (opacity 0 + x:100 -> opacity 1 + x:0).
    gsap.set(textSelector, { opacity: 0, x: 100 });
    var tl = gsap.timeline();
    tl.to(".section_hero .tag", { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0)
      .to(".section_hero h1", { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0.1)
      .to(".section_hero .text-color-secondary", { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0.2)
      .to(".section_hero .button-wrapper", { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" }, 0.3);

    // Image reveal — counter-translation. wrapper yPercent -100 -> 0, img yPercent 100 -> 0, scale 1.5 -> 1, blur 10 -> 0.
    if (wrapEl && imgEl) {
      gsap.set(wrapEl, { yPercent: -100 });
      gsap.set(imgEl, { yPercent: 100, scale: 1.5, filter: "blur(10px)" });

      var play = function () {
        gsap.to(wrapEl, { yPercent: 0, duration: 1.2, ease: "power4.out" });
        gsap.to(imgEl, { yPercent: 0, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power4.out" });
      };

      if (ScrollTrigger) {
        ScrollTrigger.create({
          trigger: wrapEl,
          start: "top 95%",
          once: true,
          onEnter: play,
        });
        // Above-the-fold safety: if the image is already in view on mount, fire immediately.
        var rect = wrapEl.getBoundingClientRect();
        if (rect.top < window.innerHeight) play();
      } else {
        play();
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
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
