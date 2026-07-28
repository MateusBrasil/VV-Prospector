// stayli-listings-hero — local logic: the House/Apartment tab toggle (vanilla,
// ported 1:1 from the source ListingsHero.astro inline <script>). Click or
// Enter/Space on a tab link swaps the active pane (w--current on links,
// w--tab-active on panes). Wrapped in an IIFE so there is NO top-level export
// (a classic <script src> with a top-level export is a silent SyntaxError that
// would kill the file). Self-inits on load.
//
// The reveal of the form card is handled by the shared scroll-reveal.js
// ([data-reveal] -> .is-in). The stub form submit is handled by the shared
// forms.js ([data-stub-form] -> shows [data-form-message]). The inlined navbar
// hamburger is driven by the shared navbar.js.
(function () {
  document.querySelectorAll("[data-listings-tabs]").forEach((tabsEl) => {
    const links = [...tabsEl.querySelectorAll(".w-tab-link")];
    const panes = [...tabsEl.querySelectorAll(".w-tab-pane")];

    const activate = (target) => {
      links.forEach((l) => {
        const on = l.getAttribute("data-w-tab") === target;
        l.classList.toggle("w--current", on);
        l.setAttribute("aria-selected", on ? "true" : "false");
      });
      panes.forEach((p) => {
        p.classList.toggle("w--tab-active", p.getAttribute("data-w-tab") === target);
      });
    };

    links.forEach((link) => {
      const target = link.getAttribute("data-w-tab");
      if (!target) return;
      link.addEventListener("click", (e) => {
        e.preventDefault();
        activate(target);
      });
      link.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activate(target);
        }
      });
    });
  });
})();

/* ===== TEMLIS-INLINED-NAVBAR: stayli-navbar behavior ===== */
// stayli-navbar — no local logic. The scaling-hamburger toggle (data-navigation-*)
// is driven by the shared /stayli/scripts/navbar.js. Stub kept for the 4-file
// convention.
