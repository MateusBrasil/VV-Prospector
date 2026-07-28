(function () {
  'use strict';

  // ── Navbar entrance — fade-down stagger ──────────────────────────────
  function initNavbarEntrance() {
    if (typeof window.gsap === 'undefined') return;
    const gsap = window.gsap;

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

  // ── Navbar drawer toggle (tablet/mobile) ─────────────────────────────
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

  // ── Services hero entrance ───────────────────────────────────────────
  function initServicesHeroReveals() {
    if (typeof window.gsap === 'undefined') return;
    const gsap = window.gsap;
    const SplitText = window.SplitText;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const inner = document.querySelector('.servicesHero__inner');
    if (!inner) return;

    const heading = inner.querySelector('.servicesHero__heading');
    const subheading = inner.querySelector('.servicesHero__subheading');
    const cta = inner.querySelector('.servicesHero__cta');
    const imageReveal = inner.querySelector('.servicesHero__imageReveal');
    const image = inner.querySelector('.servicesHero__image');

    if (reduce) {
      if (heading) gsap.set(heading, { autoAlpha: 1 });
      if (subheading) gsap.set(subheading, { autoAlpha: 1, y: 0 });
      if (cta) gsap.set(cta, { autoAlpha: 1, y: 0 });
      if (imageReveal) gsap.set(imageReveal, { height: '100%' });
      if (image) gsap.set(image, { scale: 1 });
      return;
    }

    // Heading Stagger — words drop down from yPercent 50 → 0 with fade
    let headingWords = [];
    if (heading && typeof SplitText !== 'undefined') {
      const split = SplitText.create(heading, { type: 'words' });
      headingWords = split.words;
      gsap.set(headingWords, { yPercent: 50, autoAlpha: 0 });
    }
    if (subheading) gsap.set(subheading, { autoAlpha: 0, y: 20 });
    if (cta) gsap.set(cta, { autoAlpha: 0, y: 20 });
    if (imageReveal) gsap.set(imageReveal, { height: 0 });
    if (image) gsap.set(image, { scale: 1.05 });

    // Responsive: from tablet onward the layout flips to TEXT-then-IMAGE
    // stacked, so the staircase animation order has to flip to match. At
    // desktop the image curtain anchors the left column and reveals while
    // the heading falls into place on the right — both can play near t=0.
    // At responsive the user sees a single column scrolling down: heading →
    // subhead → CTA → image, so each piece reveals in that visual order.
    const isStacked = window.matchMedia('(max-width: 991px)').matches;

    const tl = gsap.timeline({ delay: 0.15 });

    if (isStacked) {
      // ── Stacked staircase: text first, image last ───────────────────
      if (headingWords.length) {
        tl.to(headingWords, {
          yPercent: 0, autoAlpha: 1,
          duration: 0.8, ease: 'power3.out', stagger: 0.06,
        }, 0);
      }
      if (subheading) {
        tl.to(subheading, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.3);
      }
      if (cta) {
        tl.to(cta, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.5);
      }
      if (imageReveal) {
        tl.to(imageReveal, { height: '100%', duration: 1.1, ease: 'power3.out' }, 0.7);
      }
      if (image) {
        tl.to(image, { scale: 1, duration: 1.1, ease: 'power3.out' }, 0.7);
      }
    } else {
      // ── Side-by-side: image curtain anchors the left, text rises right ─
      if (imageReveal) {
        tl.to(imageReveal, { height: '100%', duration: 1.2, ease: 'power3.out' }, 0);
      }
      if (image) {
        tl.to(image, { scale: 1, duration: 1.2, ease: 'power3.out' }, 0);
      }
      if (headingWords.length) {
        tl.to(headingWords, {
          yPercent: 0, autoAlpha: 1,
          duration: 0.8, ease: 'power3.out', stagger: 0.06,
        }, 0.2);
      }
      if (subheading) {
        tl.to(subheading, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.5);
      }
      if (cta) {
        tl.to(cta, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.7);
      }
    }
  }

  function init() {
    initNavbarDrawer();
    initNavbarEntrance();
    initServicesHeroReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(init, 0));
  } else {
    setTimeout(init, 0);
  }
})();
