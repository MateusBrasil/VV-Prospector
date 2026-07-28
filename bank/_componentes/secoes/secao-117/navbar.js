/* Hirekit — mobile navbar toggle (CDN-global port of src/scripts/navbar.ts).
   Mirrors the source Webflow collapse: the hamburger toggles `.is-nav-open` on
   [data-navbar], which the CSS uses to drop the `.nav_mobile` panel and morph the
   hamburger to an X. Closes on link click, Escape, and outside click. */
(function () {
  function initNavbar() {
    const navbar = document.querySelector('[data-navbar]');
    if (!navbar) return;
    const toggle = navbar.querySelector('[data-nav-toggle]');
    const links = navbar.querySelectorAll('.nav_links');
    const backdrop = navbar.querySelector('[data-nav-backdrop]');

    const setOpen = (open) => {
      navbar.classList.toggle('is-nav-open', open);
      toggle?.setAttribute('aria-expanded', String(open));
      toggle?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      // Lock page scroll while the menu overlay is open (restored on close).
      document.documentElement.style.overflow = open ? 'hidden' : '';
      document.body.style.overflow = open ? 'hidden' : '';
    };

    toggle?.addEventListener('click', () => {
      setOpen(!navbar.classList.contains('is-nav-open'));
    });

    links.forEach((a) => a.addEventListener('click', () => setOpen(false)));
    backdrop?.addEventListener('click', () => setOpen(false));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });

    document.addEventListener('click', (e) => {
      if (!navbar.classList.contains('is-nav-open')) return;
      if (!navbar.contains(e.target)) setOpen(false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
})();
