// AboutHero entrance — above-the-fold master timeline (no ScrollTrigger).
// Card entrance branches by how many cards are PAINTED at the current
// viewport (3 / 2 / 1) — the responsive CSS hides 1 or 2 cards via
// `display: none` at the ≤767 / ≤479 breakpoints, so the entrance must
// adapt to whichever cards are actually visible.
//
//   3 cards (≥768): "deck deal" — center rises from below, then side cards
//     slide out from BEHIND the center at the same final y. They never
//     start above; they emerge level with the center and fan outward with
//     a slight rotation that untilts.
//   2 cards (480–767): both start stacked at the midpoint between their
//     final positions, lifted from below with rotation. They rise + fade
//     in still overlapped, then separate horizontally while the rotation
//     untilts.
//   1 card (<480): no displacement — just a rise + small rotate from -6
//     back to 0 with a fade.
//
// Curves + durations: Pipely DNA — power3.out, 0.8–1.2s phases.
(() => {
  const gsap = window.gsap;
  if (typeof gsap === 'undefined') return;
  const section = document.querySelector('.about-hero');
  if (!section) return;

  const heading = section.querySelector('.about-hero__heading');
  const sub = section.querySelector('.about-hero__sub');
  const allCards = Array.from(section.querySelectorAll('.about-hero__gallery-item'));
  // Only animate cards actually painted at this viewport.
  const cards = allCards.filter((c) => getComputedStyle(c).display !== 'none');

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    gsap.set([heading, sub, ...allCards], { autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: 0 });
    return;
  }

  // ── Prime heading + sub (fade-from-right) ───────────────────────────
  gsap.set([heading, sub], { autoAlpha: 0, x: 60 });

  // ── Prime cards by visible count ────────────────────────────────────
  if (cards.length === 3) {
    const [leftCard, centerCard, rightCard] = cards;
    const lRect = leftCard.getBoundingClientRect();
    const cRect = centerCard.getBoundingClientRect();
    const rRect = rightCard.getBoundingClientRect();
    const leftFromCenter = cRect.left - lRect.left;
    const rightFromCenter = cRect.left - rRect.left;

    // Side cards begin stacked behind the center at the SAME y as center's
    // final position — no upward offset. The "deal" reads as a horizontal
    // fan, not a fall from above.
    gsap.set([leftCard, rightCard], {
      autoAlpha: 0, scale: 0.9, y: 0, zIndex: 1, transformOrigin: '50% 50%',
    });
    gsap.set(leftCard,  { x: leftFromCenter,  rotation: -8 });
    gsap.set(rightCard, { x: rightFromCenter, rotation:  8 });

    gsap.set(centerCard, {
      autoAlpha: 0, y: 80, scale: 0.94, zIndex: 2, transformOrigin: '50% 100%',
    });
  } else if (cards.length === 2) {
    const [backCard, frontCard] = cards;
    const fRect = backCard.getBoundingClientRect();
    const sRect = frontCard.getBoundingClientRect();
    // Each card travels toward the midpoint (half the edge-to-edge stride)
    // in the opposite direction so they overlap before splitting.
    const halfStride = (sRect.left - fRect.left) / 2;

    gsap.set([backCard, frontCard], {
      autoAlpha: 0, y: 60, transformOrigin: '50% 50%',
    });
    gsap.set(backCard,  { x:  halfStride, rotation: -8 });
    gsap.set(frontCard, { x: -halfStride, rotation:  8 });
  } else if (cards.length === 1) {
    gsap.set(cards[0], {
      autoAlpha: 0, y: 40, rotation: -6, transformOrigin: '50% 50%',
    });
  }

  // ── Timeline ────────────────────────────────────────────────────────
  const tl = gsap.timeline({ delay: 0.15 });

  // Heading + sub fade-from-right (Pipely DNA cascade)
  tl.to(heading, { autoAlpha: 1, x: 0, duration: 0.9, ease: 'power3.out' }, 0)
    .to(sub,     { autoAlpha: 1, x: 0, duration: 0.85, ease: 'power3.out' }, 0.08);

  // Cards start the moment the heading starts (time = 0). The user wants
  // the gallery to begin animating as soon as the heading fade-in begins
  // — not held until the heading settles.
  if (cards.length === 3) {
    const [leftCard, centerCard, rightCard] = cards;

    // 1) Center rises from below.
    tl.to(centerCard, {
      y: 0, scale: 1, autoAlpha: 1, duration: 1.0, ease: 'power3.out',
    }, 0);

    // 2) Side cards deal outward FROM behind the center, at the same y.
    //    No vertical drop — just slide x → 0 and rotation → 0. Tiny stagger
    //    so left-then-right reads as deliberate.
    tl.to(leftCard, {
      x: 0, rotation: 0, scale: 1, autoAlpha: 1, duration: 1.2, ease: 'power3.out',
    }, 0.3);
    tl.to(rightCard, {
      x: 0, rotation: 0, scale: 1, autoAlpha: 1, duration: 1.2, ease: 'power3.out',
    }, 0.38);

    tl.set(cards, { clearProps: 'zIndex,willChange' });
  } else if (cards.length === 2) {
    const [backCard, frontCard] = cards;

    // Phase 1 — both rise from below; only FRONT card fades in. Snappy rise
    // + early hand-off into phase 2 so the entrance never feels paused.
    tl.to([backCard, frontCard], { y: 0, duration: 0.55, ease: 'power3.out' }, 0);
    tl.to(frontCard, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' }, 0);

    // Phase 2 — separate + untilt. Starts slightly before rise settles so
    // motion stays continuous; back card fades in over the spread to
    // complete the "one card splits into two" reveal.
    tl.to([backCard, frontCard], {
      x: 0, rotation: 0, duration: 0.6, ease: 'power3.out',
    }, 0.35);
    tl.to(backCard, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' }, 0.4);

    tl.set(cards, { clearProps: 'willChange' });
  } else if (cards.length === 1) {
    // Portrait: rise from below + rotate + fade.
    tl.to(cards[0], {
      y: 0, rotation: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out',
    }, 0);
    tl.set(cards, { clearProps: 'willChange' });
  }
})();

/* ===== TEMLIS-INLINED-NAVBAR: pipely-navbar behavior ===== */
(() => {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const toggle = nav.querySelector('.navbar__toggle');
  const panel = nav.querySelector('.navbar__panel');
  if (!toggle || !panel) return;

  const setOpen = (open) => {
    nav.dataset.open = String(open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Toggle menu');
    // `inert` makes the panel non-interactive + invisible to assistive tech when
    // closed, but keeps it rendered so we can animate height/opacity.
    panel.toggleAttribute('inert', !open);
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = nav.dataset.open !== 'true';
    setOpen(open);
  });

  // Close panel when clicking a nav link or CTA inside it
  panel.querySelectorAll('.navbar__panel-link, .navbar__panel-cta').forEach((el) => {
    el.addEventListener('click', () => setOpen(false));
  });

  // Close when clicking outside the nav (or on the backdrop)
  document.addEventListener('click', (e) => {
    if (nav.dataset.open !== 'true') return;
    if (!nav.contains(e.target)) return setOpen(false);
    // clicks INSIDE nav: only close on backdrop
    if (e.target.classList.contains('navbar__backdrop')) setOpen(false);
  });

  // Esc closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.dataset.open === 'true') setOpen(false);
  });

  // Close panel when viewport grows past tablet breakpoint
  const mq = window.matchMedia('(min-width: 992px)');
  const onChange = () => {
    if (mq.matches) setOpen(false);
  };
  mq.addEventListener('change', onChange);
})();

// === Entrance: nav cluster falls in from top with stagger, runs in parallel
// with the Hero master timeline so the page reveal feels coordinated. ===
(() => {
  const gsap = window.gsap;
  if (typeof gsap === 'undefined') return;
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Select visible entrance candidates only — links are display:none on tablet+,
  // toggle is display:none on desktop, cta hides on portrait, etc.
  const candidates = nav.querySelectorAll(
    '.navbar__brand, .navbar__link, .navbar__cta, .navbar__toggle'
  );
  const items = Array.from(candidates).filter(
    (el) => getComputedStyle(el).display !== 'none'
  );
  if (!items.length) return;

  if (prefersReduced) {
    gsap.set(items, { autoAlpha: 1, y: 0 });
    return;
  }

  gsap.set(items, { autoAlpha: 0, y: -12 });
  gsap.to(items, {
    autoAlpha: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.07,
    delay: 0.05,
    onComplete: () => {
      // Strip the inline transform props GSAP leaves behind so the CSS hover
      // `scale` rule can transition smoothly (CSS can't animate from `none`).
      gsap.set(items, { clearProps: 'translate,rotate,scale,transform,y' });
    },
  });
})();
