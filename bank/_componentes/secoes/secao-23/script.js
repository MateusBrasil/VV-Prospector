// vetic-faq — single-open accordion, ported from the inline <script> in
// src/components/FaqSection.astro (plain JS, classic script — no exports).
// The scroll reveals (data-reveal="view") run from the shared /vetic/scripts/scroll-reveal.js.

function init() {
  var faqs = document.querySelectorAll('[data-faq]');
  faqs.forEach(function (faq) {
    var items = faq.querySelectorAll('.accordion');
    faq.querySelectorAll('[data-faq-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.accordion');
        var isOpen = item ? item.hasAttribute('data-open') : false;
        items.forEach(function (i) {
          i.removeAttribute('data-open');
          var toggle = i.querySelector('[data-faq-toggle]');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen && item) {
          item.setAttribute('data-open', '');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });
}

if (document.readyState !== 'loading') init();
else document.addEventListener('DOMContentLoaded', init);
