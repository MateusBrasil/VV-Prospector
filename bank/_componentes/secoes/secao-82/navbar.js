// Catalis — navbar.js (port fiel de src/scripts/navbar.ts a JS sin deps).
// Menú hamburguesa escalable + colapso del strip al hacer scroll.
// El estado vive en <html data-navigation-status> ("active"/"not-active"): la
// pastilla y el backdrop reaccionan juntos por CSS. Sin librería de animación.
(function () {
  function initNavbar() {
    var html = document.documentElement;
    var toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
    var closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
    var menuLinks = document.querySelectorAll('.hamburger-nav__a');

    var setStatus = function (active) {
      html.setAttribute('data-navigation-status', active ? 'active' : 'not-active');
      html.style.overflow = active ? 'hidden' : '';
      toggleEls.forEach(function (el) { el.setAttribute('aria-expanded', String(active)); });
    };
    setStatus(false);

    toggleEls.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        setStatus(html.getAttribute('data-navigation-status') !== 'active');
      });
    });
    closeEls.forEach(function (el) {
      el.addEventListener('click', function () { setStatus(false); });
    });
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () { setStatus(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && html.getAttribute('data-navigation-status') === 'active') {
        setStatus(false);
      }
    });
  }

  // Colapso del strip blanco (.nav_space, 0.75rem) al hacer scroll: se encoge a 0
  // en los primeros ~450px, scrubbed a la posición de scroll (revierte al subir).
  function initNavScroll() {
    var strips = Array.prototype.slice.call(document.querySelectorAll('.nav_space'));
    if (!strips.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var FULL_REM = 0.75;
    var RANGE = 450;
    var ticking = false;
    var update = function () {
      var t = Math.min(1, Math.max(0, window.scrollY / RANGE));
      var h = (FULL_REM * (1 - t)).toFixed(4);
      strips.forEach(function (s) { s.style.height = h + 'rem'; });
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  if (document.readyState !== 'loading') {
    initNavbar();
    initNavScroll();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      initNavbar();
      initNavScroll();
    });
  }
})();
