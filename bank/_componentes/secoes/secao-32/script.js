/* ============================================================
   Plasticity Navbar
   Desktop (>=1025px): full pill, entrance reveal on load.
   Mobile  (<=1024px): links collapse behind a toggle that
   opens a GSAP dropdown panel.
   ============================================================ */

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const nav = document.querySelector('[data-nav]');
const logo = document.querySelector('.plasticity-nav__logo');
const toggle = document.querySelector('[data-toggle]');
const panel = document.querySelector('[data-menu]');
const items = gsap.utils.toArray('.plasticity-nav__item');
const cta = document.querySelector('.plasticity-nav__cta');

const mm = gsap.matchMedia();

/* ── Desktop: inline pill entrance ─────────────────────────── */
mm.add('(min-width: 1025px)', () => {
  if (prefersReducedMotion) {
    gsap.set([nav, '[data-stagger]'], { opacity: 1, y: 0, scale: 1 });
    return;
  }

  gsap.set(nav, { opacity: 0, y: 24, scale: 0.96 });
  gsap.set('[data-stagger]', { opacity: 0, y: 10 });

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.to(nav, { opacity: 1, y: 0, scale: 1, duration: 0.8 }).to(
    '[data-stagger]',
    { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: 'power3.out' },
    0.2
  );
});

/* ── Mobile: bar entrance + collapsible dropdown ───────────── */
mm.add('(max-width: 1024px)', () => {
  let isOpen = false;

  /* Bar entrance (logo + toggle) */
  if (prefersReducedMotion) {
    gsap.set([nav, logo, toggle], { opacity: 1, y: 0, scale: 1 });
  } else {
    gsap.set(nav, { opacity: 0, y: 24, scale: 0.96 });
    gsap.set([logo, toggle], { opacity: 0, y: 10 });

    const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
    intro.to(nav, { opacity: 1, y: 0, scale: 1, duration: 0.8 }).to(
      [logo, toggle],
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
      0.2
    );
  }

  /* Closed initial state */
  const panelContents = [...items, cta];
  gsap.set(panel, { autoAlpha: 0, y: -8 });
  gsap.set(panelContents, { autoAlpha: 0, y: 8 });

  function openMenu() {
    isOpen = true;
    toggle.setAttribute('aria-expanded', 'true');
    gsap.killTweensOf([panel, ...panelContents]);
    gsap.to(panel, {
      autoAlpha: 1,
      y: 0,
      duration: prefersReducedMotion ? 0.01 : 0.35,
      ease: 'power3.out',
      overwrite: 'auto',
    });
    gsap.to(panelContents, {
      autoAlpha: 1,
      y: 0,
      duration: prefersReducedMotion ? 0.01 : 0.3,
      stagger: prefersReducedMotion ? 0 : 0.05,
      delay: prefersReducedMotion ? 0 : 0.08,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }

  function closeMenu() {
    isOpen = false;
    toggle.setAttribute('aria-expanded', 'false');
    gsap.killTweensOf([panel, ...panelContents]);
    gsap.to(panelContents, {
      autoAlpha: 0,
      y: 8,
      duration: prefersReducedMotion ? 0.01 : 0.2,
      ease: 'power2.in',
      overwrite: 'auto',
    });
    gsap.to(panel, {
      autoAlpha: 0,
      y: -8,
      duration: prefersReducedMotion ? 0.01 : 0.25,
      delay: prefersReducedMotion ? 0 : 0.04,
      ease: 'power2.in',
      overwrite: 'auto',
    });
  }

  function onToggle() {
    isOpen ? closeMenu() : openMenu();
  }

  function onKeydown(e) {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
      toggle.focus();
    }
  }

  function onDocClick(e) {
    if (isOpen && !nav.contains(e.target)) {
      closeMenu();
    }
  }

  toggle.addEventListener('click', onToggle);
  document.addEventListener('keydown', onKeydown);
  document.addEventListener('click', onDocClick);

  const onLinkClick = () => closeMenu();
  const links = panel.querySelectorAll('.plasticity-nav__link, .plasticity-nav__cta');
  links.forEach((link) => link.addEventListener('click', onLinkClick));

  return () => {
    toggle.removeEventListener('click', onToggle);
    document.removeEventListener('keydown', onKeydown);
    document.removeEventListener('click', onDocClick);
    links.forEach((link) => link.removeEventListener('click', onLinkClick));
    toggle.setAttribute('aria-expanded', 'false');
    gsap.killTweensOf([panel, ...panelContents]);
  };
});

window.addEventListener('beforeunload', () => {
  mm.revert();
});
