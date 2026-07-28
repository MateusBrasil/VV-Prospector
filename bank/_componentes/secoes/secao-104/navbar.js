// Advisora OSMO-style scaling-hamburger navigation (tablet + mobile only).
// CDN-friendly global, self-initializes on DOM ready. Ported from src/scripts/navbar.ts.
// State tracked via `data-navigation-status` on <html>.
(function () {
  function init() {
    var html = document.documentElement;
    var toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
    var closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
    var menuLinks = document.querySelectorAll(".hamburger-nav__a");

    function setStatus(active) {
      html.setAttribute("data-navigation-status", active ? "active" : "not-active");
      html.style.overflow = active ? "hidden" : "";
      toggleEls.forEach(function (el) { el.setAttribute("aria-expanded", String(active)); });
    }

    setStatus(false);

    toggleEls.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        setStatus(html.getAttribute("data-navigation-status") !== "active");
      });
    });

    closeEls.forEach(function (el) {
      el.addEventListener("click", function () { setStatus(false); });
    });

    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () { setStatus(false); });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && html.getAttribute("data-navigation-status") === "active") {
        setStatus(false);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
