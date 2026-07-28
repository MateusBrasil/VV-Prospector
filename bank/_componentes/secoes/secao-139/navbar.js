// Navbar behaviour: OSMO scaling-hamburger menu (tablet/mobile) + sticky
// hide-on-scroll. Menu state lives on <html data-navigation-status> so the
// hamburger pill (inside the navbar) and the dim backdrop (sibling) react
// together. No GSAP -- pure CSS transitions keyed off the status attribute.
(function () {
  function initNavbar() {
    const html = document.documentElement;
    const toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
    const closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
    const menuLinks = document.querySelectorAll('.hamburger-nav__a');

    const setStatus = (active) => {
      html.setAttribute('data-navigation-status', active ? 'active' : 'not-active');
      html.style.overflow = active ? 'hidden' : '';
      toggleEls.forEach((el) => el.setAttribute('aria-expanded', String(active)));
    };
    setStatus(false);

    toggleEls.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        setStatus(html.getAttribute('data-navigation-status') !== 'active');
      });
    });
    closeEls.forEach((el) => el.addEventListener('click', () => setStatus(false)));
    menuLinks.forEach((link) => link.addEventListener('click', () => setStatus(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && html.getAttribute('data-navigation-status') === 'active') {
        setStatus(false);
      }
    });

    // Sticky hide-on-scroll-down / show-on-scroll-up (IX2 PAGE_SCROLL equivalent).
    // Scroll is locked while the menu is open, so the two never fight.
    const navbar = document.querySelector('[data-navbar]');
    if (navbar) {
      let lastY = window.scrollY;
      window.addEventListener(
        'scroll',
        () => {
          const y = window.scrollY;
          if (y > lastY && y > 200) navbar.classList.add('is-hidden');
          else navbar.classList.remove('is-hidden');
          lastY = y;
        },
        { passive: true }
      );
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
})();
