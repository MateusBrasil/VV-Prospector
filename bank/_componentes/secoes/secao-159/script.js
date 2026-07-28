// BlogPostHero — entrance choreography
// Assumes window.gsap, window.ScrollTrigger and window.SplitText are loaded
// from CDN globals in index.html.

if (typeof window !== 'undefined' && window.gsap) {
  if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);
  if (window.SplitText) gsap.registerPlugin(window.SplitText);
}

// ── Navbar entrance — fade-down stagger ────────────────────────────────
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

// ── Navbar drawer toggle (tablet / mobile) ─────────────────────────────
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
      if (navbar.contains(e.target)) return;
      setOpen(false);
    });
  });
}

// ── BlogPostHero reveals ───────────────────────────────────────────────
function initBlogPostHeroReveals() {
  if (typeof gsap === 'undefined') return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const inner = document.querySelector('.blogPost__inner');
  if (!inner) return;

  const title       = inner.querySelector('.blogPost__title');
  const imageReveal = inner.querySelector('.blogPost__imageReveal');
  const image       = inner.querySelector('.blogPost__image');
  const body        = inner.querySelector('.blogPost__body');
  const asideItems  = Array.from(
    inner.querySelectorAll('.blogPost__metaLabel, .blogPost__tags, .blogPost__author')
  );

  if (reduce) {
    if (title) gsap.set(title, { autoAlpha: 1 });
    if (imageReveal) gsap.set(imageReveal, { height: '100%' });
    if (image) gsap.set(image, { scale: 1 });
    asideItems.forEach((el) => gsap.set(el, { autoAlpha: 1, y: 0 }));
    if (body) {
      Array.from(body.querySelectorAll('p, h2, h3')).forEach((el) =>
        gsap.set(el, { y: 0, autoAlpha: 1 })
      );
    }
    return;
  }

  // ── Prime all elements ───────────────────────────────────────────────
  let titleWords = [];
  if (title && typeof SplitText !== 'undefined') {
    titleWords = SplitText.create(title, { type: 'words' }).words;
    gsap.set(titleWords, { yPercent: 50, autoAlpha: 0 });
  }
  if (imageReveal) gsap.set(imageReveal, { height: 0 });
  if (image)       gsap.set(image, { scale: 1.05 });
  if (asideItems.length) gsap.set(asideItems, { y: 20, autoAlpha: 0 });

  const bodyEls = body ? Array.from(body.querySelectorAll('p, h2, h3')) : [];
  if (bodyEls.length) gsap.set(bodyEls, { y: 16, autoAlpha: 0 });

  // ── Entrance timeline ────────────────────────────────────────────────
  const isLandscape = window.matchMedia('(max-width: 767px)').matches;
  const tl = gsap.timeline({ delay: 0.15 });

  if (titleWords.length) {
    tl.to(titleWords, {
      yPercent: 0, autoAlpha: 1,
      duration: 0.8, ease: 'power3.out', stagger: 0.04,
    }, 0.35);
  }

  if (isLandscape) {
    if (asideItems.length) {
      tl.to(asideItems, {
        y: 0, autoAlpha: 1,
        duration: 0.7, ease: 'power3.out', stagger: 0.12,
      }, 0.6);
    }
    if (imageReveal) tl.to(imageReveal, { height: '100%', duration: 1.1, ease: 'power3.out' }, 0.95);
    if (image)       tl.to(image,       { scale: 1,        duration: 1.1, ease: 'power3.out' }, 0.95);
  } else {
    if (imageReveal) tl.to(imageReveal, { height: '100%', duration: 1.1, ease: 'power3.out' }, 0.55);
    if (image)       tl.to(image,       { scale: 1,        duration: 1.1, ease: 'power3.out' }, 0.55);
    if (asideItems.length) {
      tl.to(asideItems, {
        y: 0, autoAlpha: 1,
        duration: 0.7, ease: 'power3.out', stagger: 0.12,
      }, 0.7);
    }
  }

  // ── Body scroll-reveal — wired AFTER timeline ends ───────────────────
  if (bodyEls.length && typeof ScrollTrigger !== 'undefined') {
    tl.then(() => {
      bodyEls.forEach((el) => {
        gsap.to(el, {
          y: 0, autoAlpha: 1,
          duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initNavbarEntrance, 0);
    setTimeout(initNavbarDrawer, 0);
    setTimeout(initBlogPostHeroReveals, 0);
  });
} else {
  setTimeout(initNavbarEntrance, 0);
  setTimeout(initNavbarDrawer, 0);
  setTimeout(initBlogPostHeroReveals, 0);
}
