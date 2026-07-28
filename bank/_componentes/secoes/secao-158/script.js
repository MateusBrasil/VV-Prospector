// CaseStudiesHero entrance — heading line-mask reveal + subhead/CTA fade + image
// curtain reveal + stats stagger. Above-the-fold so runs on first paint.
function initCsHeroReveals() {
  if (typeof gsap === 'undefined') return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const inner = document.querySelector('.csHero__inner');
  if (!inner) return;

  const heading = inner.querySelector('.csHero__heading');
  const subheading = inner.querySelector('.csHero__subheading');
  const cta = inner.querySelector('.btn');
  const imageReveal = inner.querySelector('.csHero__imageReveal');
  const image = inner.querySelector('.csHero__image');
  const stats = Array.from(inner.querySelectorAll('.csHero__stat'));

  if (reduce) {
    const all = [heading, subheading, cta, ...stats].filter(Boolean);
    gsap.set(all, { autoAlpha: 1, y: 0, x: 0 });
    if (imageReveal) gsap.set(imageReveal, { height: '100%' });
    if (image) gsap.set(image, { scale: 1 });
    return;
  }

  if (stats.length) gsap.set(stats, { autoAlpha: 0, y: 32 });

  // Prime — Heading Stagger pattern (per-word yPercent: 50 → 0 + fade)
  let headingWords = [];
  if (heading && typeof SplitText !== 'undefined') {
    headingWords = SplitText.create(heading, { type: 'words' }).words;
    gsap.set(headingWords, { yPercent: 50, autoAlpha: 0 });
  }
  if (subheading) gsap.set(subheading, { y: 20, autoAlpha: 0 });
  if (cta) gsap.set(cta, { y: 20, autoAlpha: 0 });
  // Curtain reveal — reveal wrapper grows from height 0 → 100% while the
  // inner image scales 1.05 → 1. Same recipe as Hero/ServicesHero.
  if (imageReveal) gsap.set(imageReveal, { height: 0 });
  if (image) gsap.set(image, { scale: 1.05 });
  // Stats stay invisible until the odometer (initialized in BaseLayout)
  // fires its scrollTrigger and rebuilds the digit rollers.

  const tl = gsap.timeline({ delay: 0.15 });

  if (headingWords.length) {
    tl.to(headingWords, {
      yPercent: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.06,
    }, 0.35);
  }

  if (subheading) {
    tl.to(subheading, {
      y: 0,
      autoAlpha: 1,
      duration: 0.6,
      ease: 'power3.out',
    }, 0.55);
  }

  if (cta) {
    tl.to(cta, {
      y: 0,
      autoAlpha: 1,
      duration: 0.6,
      ease: 'power3.out',
      clearProps: 'translate,rotate,scale,transform',
    }, 0.65);
  }

  if (imageReveal) {
    tl.to(imageReveal, {
      height: '100%',
      duration: 1.7,           /* slower curtain — gives the reveal more
                                  presence and pairs with the softer ease */
      ease: 'power4.out',      /* steeper tail-off — most of the motion
                                  resolves early then floats into place */
    }, 0.5);
  }
  if (image) {
    tl.to(image, {
      scale: 1,
      duration: 1.7,
      ease: 'power4.out',
    }, 0.5);
  }

  if (stats.length) {
    tl.to(stats, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
    }, 0.85);
  }
}

// Navbar entrance — fade-down stagger.
function initNavbarEntrance() {
  if (typeof gsap === 'undefined') return;

  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const brand     = navbar.querySelector('.navbar__brand');
  const navLinks  = Array.from(navbar.querySelectorAll('.navbar__links > li'));
  const navCta    = navbar.querySelector('.navbar__cta');
  const navToggle = navbar.querySelector('.navbar__toggle');

  const items = [brand, ...navLinks, navCta, navToggle].filter(Boolean);
  if (!items.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    gsap.set(items, { y: 0, autoAlpha: 1 });
    return;
  }

  gsap.set(items, { y: -14, autoAlpha: 0 });
  gsap.to(items, {
    y: 0,
    autoAlpha: 1,
    duration: 0.7,
    ease: 'power3.out',
    stagger: 0.06,
    delay: 0.15,
    clearProps: 'translate,rotate,scale,transform',
  });
}

// Navbar drawer — hamburger toggle for tablet/mobile.
function initNavbarDrawer() {
  const navbars = document.querySelectorAll('.navbar');

  navbars.forEach((navbar) => {
    const toggle = navbar.querySelector('[data-navbar-toggle]');
    const drawer = navbar.querySelector('[data-navbar-drawer]');
    if (!toggle || !drawer) return;

    drawer.removeAttribute('hidden');

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      drawer.classList.toggle('is-open', open);
    }

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    });

    drawer.addEventListener('click', (e) => {
      const t = e.target;
      if (t.closest && t.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      const t = e.target;
      if (navbar.contains(t)) return;
      setOpen(false);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initCsHeroReveals, 0);
    setTimeout(initNavbarEntrance, 0);
    initNavbarDrawer();
  });
} else {
  setTimeout(initCsHeroReveals, 0);
  setTimeout(initNavbarEntrance, 0);
  initNavbarDrawer();
}
