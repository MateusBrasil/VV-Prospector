/* navbar.js — Luzen OSMO scaling-hamburger toggle (standalone, plain JS).
 * =============================================================================
 * Portado fiel de Luzen src/scripts/navbar.ts a JS plano para secciones
 * standalone del catálogo. SIN imports, SIN TypeScript, SIN GSAP — puras
 * transiciones CSS keyed off un atributo de estado.
 *
 * Estado del menú: <html data-navigation-status="active"|"not-active">.
 * El pill (.hamburger-nav__bg / __group / __toggle) y el dim backdrop
 * (.navigation__dark-bg) reaccionan vía CSS a ese atributo (ver hamburger-nav.css).
 *
 * Comportamiento:
 *   - click en [data-navigation-toggle="toggle"]  → alterna abierto/cerrado
 *   - click en [data-navigation-toggle="close"]   → cierra (el backdrop)
 *   - click en un link del menú (.hamburger-nav__a) → cierra (navega + cierra)
 *   - Escape                                       → cierra si está abierto
 *   - sticky hide-on-scroll-down / show-on-scroll-up sobre [data-navbar]
 *     (scroll bloqueado mientras el menú está abierto, así no pelean)
 *
 * Todo con guards null-safe: si falta un elemento, no tira error.
 * ============================================================================= */
(function () {
  'use strict';

  function initNavbar() {
    var html = document.documentElement;
    if (!html) return;

    var toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
    var closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
    var menuLinks = document.querySelectorAll('.hamburger-nav__a');

    var setStatus = function (active) {
      html.setAttribute('data-navigation-status', active ? 'active' : 'not-active');
      // Bloquea el scroll del documento mientras el menú está abierto.
      html.style.overflow = active ? 'hidden' : '';
      for (var i = 0; i < toggleEls.length; i++) {
        toggleEls[i].setAttribute('aria-expanded', String(active));
      }
    };

    // Estado inicial: cerrado.
    setStatus(false);

    // Toggle: alterna según el estado actual.
    for (var t = 0; t < toggleEls.length; t++) {
      toggleEls[t].addEventListener('click', function (e) {
        e.stopPropagation();
        setStatus(html.getAttribute('data-navigation-status') !== 'active');
      });
    }

    // Backdrop / botón close: cierra.
    for (var c = 0; c < closeEls.length; c++) {
      closeEls[c].addEventListener('click', function () {
        setStatus(false);
      });
    }

    // Links del menú: cierra al navegar.
    for (var m = 0; m < menuLinks.length; m++) {
      menuLinks[m].addEventListener('click', function () {
        setStatus(false);
      });
    }

    // Escape: cierra si está abierto.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && html.getAttribute('data-navigation-status') === 'active') {
        setStatus(false);
      }
    });

    // Sticky hide-on-scroll-down / show-on-scroll-up sobre [data-navbar].
    // (Equivalente al IX2 PAGE_SCROLL de Webflow.) El scroll está bloqueado
    // mientras el menú está abierto, así nunca pelean.
    var navbar = document.querySelector('[data-navbar]');
    if (navbar) {
      var lastY = window.scrollY;
      window.addEventListener(
        'scroll',
        function () {
          var y = window.scrollY;
          if (y > lastY && y > 200) {
            navbar.classList.add('is-hidden');
          } else {
            navbar.classList.remove('is-hidden');
          }
          lastY = y;
        },
        { passive: true }
      );
    }
  }

  if (document.readyState !== 'loading') {
    initNavbar();
  } else {
    document.addEventListener('DOMContentLoaded', initNavbar);
  }
})();
