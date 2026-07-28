// Navbar menu toggle — extracted from Clayo's Navbar.astro inline <script>.
// Vanilla JS toggle — replaces Webflow's webflow.js navbar/dropdown behavior.
// Rule 22: NO GSAP on load-time interactions. Pure DOM class toggling.

(function () {
  function init() {
    // Mobile menu open/close
    const navbar = document.querySelector(".navbar.w-nav");
    const menuButton = navbar ? navbar.querySelector(".menu-button") : null;
    const navMenu = navbar ? navbar.querySelector(".w-nav-menu") : null;

    if (menuButton && navMenu && navbar) {
      menuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = navbar.classList.toggle("is-open");
        menuButton.classList.toggle("w--open", isOpen);
        navMenu.classList.toggle("w--nav-menu-open", isOpen);
        document.body.classList.toggle("menu-open", isOpen);
      });
    }

    // Note: desktop dropdown ("More Links") removed per Edgar's post-build correction.
    // Nav is now a flat list of 6 items (Home/About/Features/Pricing/Blog/Contact).
    // Mobile menu (hamburger) renders the same flat list inside the collapse drawer.
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
