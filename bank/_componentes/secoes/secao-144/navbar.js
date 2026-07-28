// navbar.js — Aurae navbar behaviour.
// Desktop: plain Aurae nav links (no dropdown — the Products mega-dropdown was removed).
// Mobile (≤991): OSMO scaling hamburger — state lives in <html data-navigation-status>
// ("active"/"not-active"); CSS in hamburger-nav.css transitions off that attribute.
(function () {
  function init() {
    const html = document.documentElement;

    // --- OSMO hamburger (mobile) ---
    const toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
    const closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
    const menuLinks = document.querySelectorAll(".hamburger-nav__a");

    const setStatus = (active) => {
      html.setAttribute("data-navigation-status", active ? "active" : "not-active");
      toggleEls.forEach((el) => el.setAttribute("aria-expanded", String(active)));
    };
    setStatus(false);

    toggleEls.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        setStatus(html.getAttribute("data-navigation-status") !== "active");
      })
    );
    closeEls.forEach((el) => el.addEventListener("click", () => setStatus(false)));
    menuLinks.forEach((link) => link.addEventListener("click", () => setStatus(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setStatus(false);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
