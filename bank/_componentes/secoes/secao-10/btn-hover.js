/* Acelia button character-stagger hover.
 *
 * Wraps every .btn label (plus the case-study CTA, primary nav links and footer
 * links) in <span class="btn__text" data-button-animate-chars> containing one
 * <span> per character, each with a staggered transition-delay. The CSS in
 * global.css drives the roll-up on hover (.btn__text span → translateY(-1.3em),
 * with a text-shadow duplicate sliding in from below); this script only builds
 * the structure and also lifts the label above the circle-fill disc.
 *
 * Ported from the source template's BaseLayout.astro (a site-wide script that was
 * lost when the sections were migrated to standalone components). Per the porting
 * rules this is a plain global that self-initializes — no top-level export.
 */
(function () {
  function initButtonCharacterStagger() {
    const offsetIncrement = 0.01; // seconds between each character
    // Targets: all .btn, the case-study "Learn more" CTA, primary desktop nav
    // links (but not the "More Links" dropdown toggle), and footer links.
    const buttons = document.querySelectorAll(
      ".btn, .cases__cta, .navbar__link:not(.navbar__linkMoreBtn), .footer__link"
    );

    buttons.forEach((btn) => {
      // Skip if already initialized (re-run / hot reload) or already wrapped.
      if (btn.dataset.charStaggerInit === "true" || btn.querySelector(".btn__text")) {
        btn.dataset.charStaggerInit = "true";
        return;
      }
      const text = btn.textContent.trim();
      if (!text) return;
      btn.dataset.charStaggerInit = "true";
      btn.textContent = "";

      const textEl = document.createElement("span");
      textEl.className = "btn__text";
      textEl.setAttribute("data-button-animate-chars", "");

      [...text].forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.transitionDelay = `${index * offsetIncrement}s`;
        if (char === " ") span.style.whiteSpace = "pre";
        textEl.appendChild(span);
      });

      btn.appendChild(textEl);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initButtonCharacterStagger);
  } else {
    initButtonCharacterStagger();
  }
})();
