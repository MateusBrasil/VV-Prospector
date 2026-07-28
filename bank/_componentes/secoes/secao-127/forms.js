/* Stayli — static-site form stub. Port of forms.ts to a plain global
   (no `export`, self-init — Rule 1). Any form with [data-stub-form] is
   intercepted, shows its sibling [data-form-message], and resets. No backend.
   Used by: footer, contact-hero, blog-hero, listings-hero, booking form. */
(function () {
  function initForms() {
    document.querySelectorAll('form[data-stub-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var msg = form.parentElement
          ? form.parentElement.querySelector('[data-form-message]')
          : null;
        if (msg) msg.hidden = false;
        form.reset();
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initForms);
  else initForms();
})();
