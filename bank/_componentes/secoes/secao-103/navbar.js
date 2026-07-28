/**
 * Genovas navbar — mobile menu open/close toggle.
 * Extracted from Navbar.astro inline <script>. No GSAP (Rule 22).
 */
(function () {
  function init() {
    var navbar = document.querySelector(".navbar.w-nav");
    var toggle = document.querySelector("[data-nav-toggle]");

    if (navbar && toggle) {
      var setOpen = function (open) {
        navbar.classList.toggle("is-open", open);
        toggle.classList.toggle("w--open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      };

      toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        setOpen(!navbar.classList.contains("is-open"));
      });

      // Close on Escape
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && navbar.classList.contains("is-open")) {
          setOpen(false);
          toggle.focus();
        }
      });

      // Close on click outside the navbar
      document.addEventListener("click", function (e) {
        if (!navbar.classList.contains("is-open")) return;
        if (!navbar.contains(e.target)) setOpen(false);
      });

      // Close after tapping any nav link
      navbar.querySelectorAll(".nav_mobile a").forEach(function (a) {
        a.addEventListener("click", function () {
          return setOpen(false);
        });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
