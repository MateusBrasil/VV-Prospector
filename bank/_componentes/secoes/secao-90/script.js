// upmind-contact-section — form demo handler only.
//
// The intro reveal (left info column + form) and the submit button's per-letter
// hover are supplied by the shared classic scripts loaded in index.html:
//   /upmind/scripts/hero-load.js   — reveals the .section_contact eyebrow, the
//     SplitText h1, the description, each .contact_data row, and the .form_wrapper
//     on page load (self-initializes; degrades to "show everything" under
//     prefers-reduced-motion).
//   /upmind/scripts/button-hover.js — the slide + press micro-interaction on the
//     submit .button_component (self-initializes on DOM ready).
//
// Hidden start-states live in /upmind/styles.css, gated on `html.reveal-on`, so
// if JS fails the content stays fully visible.
//
// This standalone port has no SSR backend (the source Astro build was static and
// shipped no server endpoint). Demo behavior only: intercept submit, hide the
// form, reveal the .w-form-done success block — mirrors the source component.
(function () {
  document.querySelectorAll("form#wf-form-Form").forEach(function (form) {
    var wrapper = form.closest(".w-form");
    var done = wrapper ? wrapper.querySelector(".w-form-done") : null;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.style.display = "none";
      if (done) done.style.display = "block";
    });
  });
})();
