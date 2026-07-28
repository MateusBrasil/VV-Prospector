// accordion.js — structural toggle for [data-accordion] (product Shipping/Return + FAQ).
// Animates by measuring the panel's real height and driving max-height to that exact
// value, so the easing spans the visible range in BOTH directions.
(function () {
  function init() {
    document.querySelectorAll("[data-accordion]").forEach((acc) => {
      const head = acc.querySelector("[data-accordion-toggle]");
      const text = acc.querySelector(".accordion_text");
      if (!head) return;

      head.setAttribute("role", "button");
      head.setAttribute("tabindex", "0");

      const startOpen = acc.classList.contains("is-open");
      head.setAttribute("aria-expanded", String(startOpen));
      // A panel that ships open needs no entrance animation: pin it to its full height.
      if (startOpen && text) text.style.maxHeight = "none";

      const open = () => {
        head.setAttribute("aria-expanded", "true");
        if (!text) {
          acc.classList.add("is-open");
          return;
        }
        // Measure the full height while still collapsed (scrollHeight ignores the
        // max-height clamp), set it as the target, THEN flip the class.
        const target = text.scrollHeight;
        text.style.maxHeight = target + "px"; // animates from the current 0
        acc.classList.add("is-open"); // icon flip; inline max-height overrides CSS `none`
        const done = (e) => {
          if (e.propertyName !== "max-height") return;
          text.style.maxHeight = "none"; // release so it can reflow freely once expanded
          text.removeEventListener("transitionend", done);
        };
        text.addEventListener("transitionend", done);
      };

      const close = () => {
        head.setAttribute("aria-expanded", "false");
        if (text) {
          // Give the transition a concrete start value (none → px) before going to 0.
          text.style.maxHeight = text.scrollHeight + "px";
          void text.offsetHeight; // force reflow so the next change animates
          text.style.maxHeight = "0px";
        }
        acc.classList.remove("is-open");
      };

      const toggle = () => (acc.classList.contains("is-open") ? close() : open());

      head.addEventListener("click", toggle);
      head.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
