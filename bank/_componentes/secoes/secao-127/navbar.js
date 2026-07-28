/* Stayli — scaling-hamburger navbar toggle. Port of navbar.ts to a plain global
   (no `export`, self-init — Rule 1). No animation library — pure CSS transitions
   keyed off `<html data-navigation-status>` ("active"/"not-active").
   toggle / close-backdrop / menu-link-click / Escape all flip the attribute;
   sticky hide-on-scroll-down / show-on-scroll-up on [data-navbar]. */
(function () {
  function initNavbar() {
    var html = document.documentElement;
    var toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
    var closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
    var menuLinks = document.querySelectorAll('.hamburger-nav__a');

    function setStatus(active) {
      html.setAttribute('data-navigation-status', active ? 'active' : 'not-active');
      html.style.overflow = active ? 'hidden' : '';
      toggleEls.forEach(function (el) { el.setAttribute('aria-expanded', String(active)); });
    }
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
      if (e.key === 'Escape' && html.getAttribute('data-navigation-status') === 'active') setStatus(false);
    });

    // Sticky hide-on-scroll-down / show-on-scroll-up. Page scroll is locked while
    // the menu is open, so the two never conflict.
    var navbar = document.querySelector('[data-navbar]');
    if (navbar) {
      var lastY = window.scrollY;
      window.addEventListener('scroll', function () {
        var y = window.scrollY;
        if (y > lastY && y > 200) navbar.classList.add('is-hidden');
        else navbar.classList.remove('is-hidden');
        lastY = y;
      }, { passive: true });
    }
  }

  if (document.readyState !== 'loading') initNavbar();
  else document.addEventListener('DOMContentLoaded', initNavbar);
})();
