/* =============================================================================
   congra/scripts/navbar.js — drawer + hide-on-scroll del navbar Congra.
   Portado del <script> de src/components/Navbar.astro (TS -> JS clásico).
   Va en el <head> con defer para que add-navbar.mjs lo propague a los heroes
   (solo propaga deps del head — aprendizaje Vetic).
   ============================================================================= */
(function () {
  function init() {
    var nav = document.querySelector('[data-nav]');
    var toggle = nav ? nav.querySelector('[data-nav-toggle]') : null;
    var panel = nav ? nav.querySelector('[data-nav-menu]') : null;
    var links = nav ? nav.querySelectorAll('[data-nav-link]') : [];

    function setOpen(open) {
      if (!nav || !toggle) return;
      nav.classList.toggle('is-nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      // Bloquea el scroll de la página mientras el menú está abierto.
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }

    if (toggle) {
      toggle.addEventListener('click', function () {
        setOpen(!nav.classList.contains('is-nav-open'));
      });
    }
    links.forEach(function (l) {
      l.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });

    // Tap fuera del dropdown (y no sobre el toggle) lo cierra.
    document.addEventListener('click', function (e) {
      if (!nav || !nav.classList.contains('is-nav-open')) return;
      var target = e.target;
      if ((toggle && toggle.contains(target)) || (panel && panel.contains(target))) return;
      setOpen(false);
    });

    // Oculta la barra al scrollear hacia abajo, la muestra al subir. Siempre
    // visible cerca del top y nunca oculta con el menú móvil abierto.
    // Omitido con prefers-reduced-motion (la barra queda fija).
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (nav && !reduceMotion) {
      var TOP = 80; // zona siempre-visible en el top de la página
      var DELTA = 4; // ignora jitter de scroll
      var lastY = window.scrollY;
      var ticking = false;
      window.addEventListener(
        'scroll',
        function () {
          if (ticking) return;
          ticking = true;
          requestAnimationFrame(function () {
            var y = window.scrollY;
            if (!nav.classList.contains('is-nav-open')) {
              if (y <= TOP) nav.classList.remove('is-hidden');
              else if (y > lastY + DELTA) nav.classList.add('is-hidden');
              else if (y < lastY - DELTA) nav.classList.remove('is-hidden');
            }
            lastY = y;
            ticking = false;
          });
        },
        { passive: true }
      );
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
