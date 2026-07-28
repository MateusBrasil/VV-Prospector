// Navbar — hamburger toggle on tablet/mobile.
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

// Navbar entrance — fade-down stagger.
function initNavbarEntrance() {
  if (typeof gsap === 'undefined') return;

  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const brand = navbar.querySelector('.navbar__brand');
  const navLinks = Array.from(navbar.querySelectorAll('.navbar__links > li'));
  const navCta = navbar.querySelector('.navbar__cta');
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

// Soft entrance — title word stagger + form fields + info card cascade.
// Mirrors the heading + image cascade pattern used in `CaseStudyHero`
// (above-the-fold, no ScrollTrigger needed).
function initContactHeroReveals() {
  if (typeof gsap === 'undefined') return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const inner = document.querySelector('.contactHero__inner');
  if (!inner) return;

  const title = inner.querySelector('.contactHero__title');
  const fields = Array.from(inner.querySelectorAll('.contactHero__field'));
  const submit = inner.querySelector('.contactHero__submit');
  const info = inner.querySelector('.contactHero__info');

  if (reduce) {
    [title, ...fields, submit, info].filter(Boolean).forEach((el) =>
      gsap.set(el, { autoAlpha: 1, y: 0 })
    );
    return;
  }

  // Heading word stagger — ANIMATIONS.md "Heading Stagger" recipe.
  let titleWords = [];
  if (title && typeof SplitText !== 'undefined') {
    titleWords = SplitText.create(title, { type: 'words' }).words;
    gsap.set(titleWords, { yPercent: 50, autoAlpha: 0 });
  }
  if (fields.length) gsap.set(fields, { y: 24, autoAlpha: 0 });
  if (submit) gsap.set(submit, { y: 24, autoAlpha: 0 });
  if (info) gsap.set(info, { y: 24, autoAlpha: 0 });

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
  if (fields.length) {
    tl.to(fields, {
      y: 0,
      autoAlpha: 1,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.1,
    }, 0.55);
  }
  if (submit) {
    tl.to(submit, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out' }, 0.85);
  }
  if (info) {
    tl.to(info, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }, 0.55);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initNavbarEntrance, 0);
    setTimeout(initContactHeroReveals, 0);
  });
} else {
  setTimeout(initNavbarEntrance, 0);
  setTimeout(initContactHeroReveals, 0);
}
