/* coverly-quote-hero — component-scoped boot logic.
   Defensive fallback: the shared /coverly/scripts/scroll-reveal.js uses an
   `export` keyword and is loaded as a regular <script>, so it throws a
   SyntaxError before initializing. We guarantee the hero image and content
   are visible by removing any leftover pre-animation transforms after load. */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-reveal-image] .img-wrapper").forEach((el) => {
    el.style.transform = "translate3d(0, 0, 0)";
  });
  document.querySelectorAll("[data-reveal-image] .img").forEach((el) => {
    el.style.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)";
    el.style.filter = "none";
  });
  document.querySelectorAll(".scroll-slide-left").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
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
