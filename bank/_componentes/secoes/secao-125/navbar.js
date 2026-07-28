/* =============================================================================
   vetic/scripts/navbar.js — SHARED scaling-hamburger toggle for all Vetic ports.
   Ported from the inline <script> in the template's Navbar.astro (TS -> plain
   classic script: NO top-level export). State lives on <html
   data-navigation-status> ("active"/"not-active") so the pill (in the navbar)
   and the dim backdrop (fixed sibling) react together via CSS. No GSAP — pure
   CSS transitions.
   ============================================================================= */

function initVeticNavbar() {
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
  closeEls.forEach(function (el) { el.addEventListener('click', function () { setStatus(false); }); });
  menuLinks.forEach(function (link) { link.addEventListener('click', function () { setStatus(false); }); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && html.getAttribute('data-navigation-status') === 'active') {
      setStatus(false);
    }
  });
}

if (document.readyState !== 'loading') initVeticNavbar();
else document.addEventListener('DOMContentLoaded', initVeticNavbar);
