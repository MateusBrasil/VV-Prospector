// Coverly hero — entrance choreography.
// Animates from a visible-by-default state: if JS fails, content is still
// rendered. GSAP runs the slide-in cascade and image reveal on DOM ready.
document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.gsap === "undefined") return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  const textSelector =
    ".section_hero .tag, .section_hero h1, .section_hero .text-color-secondary, .section_hero .button-wrapper";

  requestAnimationFrame(() => {
    // Set initial off-screen state via GSAP (no inline styles in markup, so
    // failed JS leaves content visible).
    gsap.set(textSelector, { opacity: 0, x: 100 });
    gsap.set(".section_hero .hero_img .img-wrapper", { yPercent: -100 });
    gsap.set(".section_hero .hero_img .img", {
      yPercent: 100,
      scale: 1.5,
      filter: "blur(10px)",
    });

    const tl = gsap.timeline();
    const slideIn = (sel, delay) =>
      tl.to(
        sel,
        { opacity: 1, x: 0, duration: 1.0, ease: "power4.out" },
        delay
      );

    slideIn(".section_hero .tag", 0);
    slideIn(".section_hero h1", 0.1);
    slideIn(".section_hero .text-color-secondary", 0.2);
    slideIn(".section_hero .button-wrapper", 0.3);

    const imgStart = 0.1;
    const imgDur = 1.2;
    const imgEase = "power4.out";
    tl.to(
      ".section_hero .hero_img .img-wrapper",
      { yPercent: 0, duration: imgDur, ease: imgEase },
      imgStart
    ).to(
      ".section_hero .hero_img .img",
      {
        yPercent: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: imgDur,
        ease: imgEase,
      },
      imgStart
    );
  });
});

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
