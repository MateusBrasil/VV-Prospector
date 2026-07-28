/* Hirely — accordion (FAQ + solutions). Port of accordion.ts to a plain global
   (no `export`, self-init — Rule 1). No GSAP — CSS height transition. Single-open
   per `[data-accordion-group]`: opening one collapses its siblings. Animates the
   `.accordion_bottom` height and rotates `.accordion_arrow`. Keyboard + ARIA. */
(function () {
  function initAccordions() {
    var groups = document.querySelectorAll('[data-accordion-group]');
    groups.forEach(function (group) {
      var items = Array.prototype.slice.call(group.querySelectorAll('.accordion'));
      items.forEach(function (item) {
        var top = item.querySelector('.accordion_top');
        var bottom = item.querySelector('.accordion_bottom');
        var arrow = item.querySelector('.accordion_arrow');
        if (!top || !bottom) return;

        bottom.style.height = '0px';
        bottom.style.overflow = 'hidden';
        bottom.style.transition = 'height 0.4s ease';

        var setOpen = function (open) {
          bottom.style.height = open ? bottom.scrollHeight + 'px' : '0px';
          item.classList.toggle('is-open', open);
          if (arrow) arrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
          top.setAttribute('aria-expanded', String(open));
        };

        top.setAttribute('role', 'button');
        top.setAttribute('tabindex', '0');
        top.setAttribute('aria-expanded', 'false');

        var toggle = function () {
          var willOpen = !item.classList.contains('is-open');
          items.forEach(function (other) {
            if (other !== item) {
              var ob = other.querySelector('.accordion_bottom');
              var oa = other.querySelector('.accordion_arrow');
              var ot = other.querySelector('.accordion_top');
              if (ob) ob.style.height = '0px';
              if (oa) oa.style.transform = 'rotate(0deg)';
              if (ot) ot.setAttribute('aria-expanded', 'false');
              other.classList.remove('is-open');
            }
          });
          setOpen(willOpen);
        };

        top.addEventListener('click', toggle);
        top.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
        });
      });
    });

    // Keep open items sized correctly on resize.
    window.addEventListener('resize', function () {
      document.querySelectorAll('.accordion.is-open .accordion_bottom').forEach(function (b) {
        b.style.height = b.scrollHeight + 'px';
      });
    });
  }

  if (document.readyState !== 'loading') initAccordions();
  else document.addEventListener('DOMContentLoaded', initAccordions);
})();
