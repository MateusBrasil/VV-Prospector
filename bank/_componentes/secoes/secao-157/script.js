// Entrance — heading word stagger + description line-by-line stagger +
// image curtain reveal (height 0 → 100% on the inner reveal wrapper,
// paired with a 1.05 → 1 image zoom — same recipe as Hero / ServicesHero).
function initCsIntHeroReveals() {
  if (typeof gsap === 'undefined') return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const inner = document.querySelector('.csIntHero__inner');
  if (!inner) return;

  const title = inner.querySelector('.csIntHero__title');
  const desc = inner.querySelector('.csIntHero__description');
  const imageReveal = inner.querySelector('.csIntHero__imageReveal');
  const image = inner.querySelector('.csIntHero__image');

  if (reduce) {
    [title, desc].filter(Boolean).forEach((el) => gsap.set(el, { autoAlpha: 1, y: 0 }));
    if (imageReveal) gsap.set(imageReveal, { height: '100%' });
    if (image) gsap.set(image, { scale: 1 });
    return;
  }

  // Heading Stagger — words drop-down + fade (ANIMATIONS.md).
  let titleWords = [];
  if (title && typeof SplitText !== 'undefined') {
    titleWords = SplitText.create(title, { type: 'words' }).words;
    gsap.set(titleWords, { yPercent: 50, autoAlpha: 0 });
  }

  // Description — animates as a SINGLE block (not split into lines).
  // The paragraph reads as one continuous text; splitting it into lines
  // makes it look like several disjoint slabs even though it wraps
  // naturally to the column width.
  if (desc) gsap.set(desc, { y: 20, autoAlpha: 0 });

  // Curtain reveal — wrapper grows from height 0, image scales 1.05 → 1.
  if (imageReveal) gsap.set(imageReveal, { height: 0 });
  if (image) gsap.set(image, { scale: 1.05 });

  const tl = gsap.timeline({ delay: 0.15 });

  if (titleWords.length) {
    tl.to(titleWords, {
      yPercent: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.06,
    }, 0.35);
  }
  if (desc) {
    tl.to(desc, { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out' }, 0.55);
  }
  if (imageReveal) {
    tl.to(imageReveal, { height: '100%', duration: 1.1, ease: 'power3.out' }, 0.5);
  }
  if (image) {
    tl.to(image, { scale: 1, duration: 1.1, ease: 'power3.out' }, 0.5);
  }
}

// Navbar hamburger toggle — opens/closes the drawer on tablet/mobile.
function initNavbarToggle() {
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
      if (navbar.contains(e.target)) return;
      setOpen(false);
    });
  });
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

function boot() {
  initNavbarToggle();
  initNavbarEntrance();
  initCsIntHeroReveals();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(boot, 0));
} else {
  setTimeout(boot, 0);
}
