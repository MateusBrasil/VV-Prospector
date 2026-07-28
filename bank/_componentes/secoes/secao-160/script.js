// Navbar entrance — fade-down stagger.
// Same offsets and ease as the original Hero master-timeline step so the
// rest of the hero choreography lines up.
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

// Navbar drawer — opens/closes on tablet/mobile.
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
      if (t.closest('a')) setOpen(false);
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

// Entrance — title word stagger + featured curtain reveal + body fade-up.
// Above-the-fold, runs on first paint.
function initBlogHeroReveals() {
  if (typeof gsap === 'undefined') return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const inner = document.querySelector('.blogHero__inner');
  if (!inner) return;

  const title = inner.querySelector('.blogHero__title');
  const imageReveal = inner.querySelector('.blogHero__featuredImageReveal');
  const image = inner.querySelector('.blogHero__featuredImage');
  const body = inner.querySelector('.blogHero__featuredBody');

  if (reduce) {
    [title, body].filter(Boolean).forEach((el) =>
      gsap.set(el, { autoAlpha: 1, y: 0 })
    );
    if (imageReveal) gsap.set(imageReveal, { height: '100%' });
    if (image) gsap.set(image, { scale: 1 });
    return;
  }

  let titleWords = [];
  if (title && typeof SplitText !== 'undefined') {
    titleWords = SplitText.create(title, { type: 'words' }).words;
    gsap.set(titleWords, { yPercent: 50, autoAlpha: 0 });
  }
  if (imageReveal) gsap.set(imageReveal, { height: 0 });
  if (image) gsap.set(image, { scale: 1.05 });
  if (body) gsap.set(body, { y: 24, autoAlpha: 0 });

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
  if (imageReveal) {
    tl.to(imageReveal, { height: '100%', duration: 1.1, ease: 'power3.out' }, 0.55);
  }
  if (image) {
    tl.to(image, { scale: 1, duration: 1.1, ease: 'power3.out' }, 0.55);
  }
  if (body) {
    tl.to(body, { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out' }, 0.75);
  }
}

function boot() {
  initNavbarDrawer();
  initNavbarEntrance();
  initBlogHeroReveals();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(boot, 0));
} else {
  setTimeout(boot, 0);
}
