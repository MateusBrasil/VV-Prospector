// Acelia — Hero
// =============
// Three things happen in this file, in order:
//   1. Hamburger drawer toggle (tablet / mobile navbar).
//   2. Navbar entrance — fade-down stagger of brand + links + CTA + toggle.
//   3. Hero master timeline — headline split, subhead, CTA, portrait curtain
//      reveal, and the two floating UI cards (Strategy + Financial).
//
// GSAP and the SplitText / ScrollTrigger plugins are loaded as CDN globals
// in index.html, so we use window.gsap, window.SplitText, window.ScrollTrigger
// directly. ScrollTrigger has to be registered before it can attach to a
// timeline.

if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
  window.gsap.registerPlugin(window.ScrollTrigger);
}

// ─────────────────────────────────────────────────────────────────────────
//  1 · Hamburger drawer
// ─────────────────────────────────────────────────────────────────────────
//  Opens/closes the nav drawer on tablet/mobile. Closes on Escape, on link
//  click inside the drawer, and on outside click.
const navbars = document.querySelectorAll('.navbar');

navbars.forEach((navbar) => {
  const toggle = navbar.querySelector('[data-navbar-toggle]');
  const drawer = navbar.querySelector('[data-navbar-drawer]');
  if (!toggle || !drawer) return;

  // Keep [hidden] off once JS owns visibility — CSS classes drive state now.
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

  // Close the drawer when any link inside it is clicked.
  drawer.addEventListener('click', (e) => {
    const t = e.target;
    if (t.closest && t.closest('a')) setOpen(false);
  });

  // Close on Escape.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close on outside click.
  document.addEventListener('click', (e) => {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    const t = e.target;
    if (navbar.contains(t)) return;
    setOpen(false);
  });
});

// ─────────────────────────────────────────────────────────────────────────
//  2 · Navbar entrance — fade-down stagger
// ─────────────────────────────────────────────────────────────────────────
//  Same offsets and ease as the original Hero master-timeline step
//  (delay 0.15s, duration 0.7s, stagger 0.06s, power3.out) so the rest of
//  the hero choreography below lines up with the navbar's settle.
function initNavbarEntrance() {
  if (typeof window.gsap === 'undefined') return;

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
    window.gsap.set(items, { y: 0, autoAlpha: 1 });
    return;
  }

  window.gsap.set(items, { y: -14, autoAlpha: 0 });
  window.gsap.to(items, {
    y: 0,
    autoAlpha: 1,
    duration: 0.7,
    ease: 'power3.out',
    stagger: 0.06,
    delay: 0.15,
    clearProps: 'translate,rotate,scale,transform',
  });
}

// ─────────────────────────────────────────────────────────────────────────
//  3 · Hero master entrance timeline
// ─────────────────────────────────────────────────────────────────────────
//  Information hierarchy driving the staggered sequence:
//
//    Navbar  →  Headline  →  Sub-head + CTA  →  Portrait  →  UI cards
//
//  Every ease is power3.out or power4.out — no elastic, no back, no bounce.
//  The longer durations on the image + cards give a cinematic, "expensive"
//  deceleration that feels like momentum easing into place.
//
//  Rationale for timings (seconds, relative to timeline 0):
//    0.00  Navbar fade-down (0.7s, stagger 0.06) — establishes brand quickly.
//    0.35  H1 masked line reveal (1.0s, power4.out, stagger 0.08) — hero moment.
//    0.65  Portrait curtain reveal (1.2s, power3.out) — unfurls top-down.
//    0.70  Sub-head + primary button rise in (0.7s) — reinforces the claim.
//    0.95  Strategy card scale 0.9 → 1.0 + fade (0.8s) — parallax accent.
//    1.10  Strategy internals (icon, text, progress, counter).
//    1.10  Financial card — same sub-sequence, either joined here if
//          visible on load, or deferred via ScrollTrigger otherwise.
function initHeroMasterTimeline() {
  if (typeof window.gsap === 'undefined') return;

  const gsap = window.gsap;
  const SplitText = window.SplitText;
  const ScrollTrigger = window.ScrollTrigger;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Element lookups ─────────────────────────────────────────────────
  //    All queries are made once. Missing nodes are tolerated — the timeline
  //    skips whatever isn't on the page so this stays portable.
  // Navbar items animate themselves (initNavbarEntrance above).
  // The Hero master timeline only owns the rest of the hero composition.
  const heading     = document.querySelector('.hero__heading');
  const subheading  = document.querySelector('.hero__subheading');
  const heroCta     = document.querySelector('.hero__content .btn--hero');
  const imageCard   = document.querySelector('.hero__imageCard');
  const imageReveal = document.querySelector('[data-image-reveal]');
  const strategy    = document.querySelector('[data-strategy-card]');
  const financial   = document.querySelector('[data-financial-card]');

  // Strategy card contents
  const strategyIcon    = strategy && strategy.querySelector('[data-strategy-icon]');
  const strategyLines   = strategy && strategy.querySelectorAll('[data-strategy-split]');
  const strategyProg    = strategy && strategy.querySelector('[data-strategy-progress]');
  const strategyFill    = strategy && strategy.querySelector('[data-strategy-fill]');
  const strategyCounter = strategy && strategy.querySelector('[data-strategy-counter]');
  const targetPct = strategyCounter
    ? parseFloat(strategyCounter.getAttribute('data-strategy-target')) || 80
    : 80;

  // Financial card contents
  const finHeader = financial && financial.querySelector('[data-financial-header]');
  const finBars   = financial ? [...financial.querySelectorAll('[data-financial-bar]')] : [];
  const finLabels = financial ? [...financial.querySelectorAll('[data-financial-label]')] : [];

  // ── Split the H1 into per-word spans (Heading Stagger pattern) ──────
  //    Each word starts at yPercent: 50 (above its final position) and drops
  //    down to 0 with a fade — the reveal reads as the heading composing
  //    itself word by word.
  let headingWords = [];
  if (heading && typeof SplitText !== 'undefined') {
    headingWords = SplitText.create(heading, { type: 'words' }).words;
  }

  // ── Split the strategy card text into per-char spans ────────────────
  //    Kept so the inner text reveal still feels crafted after the card
  //    has arrived.
  const strategyChars = [];
  if (strategyLines && strategyLines.length) {
    strategyLines.forEach((line) => {
      const raw = line.textContent;
      line.textContent = '';
      [...raw].forEach((ch) => {
        const span = document.createElement('span');
        span.textContent = ch;
        span.style.display = 'inline-block';
        if (ch === ' ') span.style.whiteSpace = 'pre';
        line.appendChild(span);
        strategyChars.push(span);
      });
    });
  }

  // ── Prime initial states ────────────────────────────────────────────
  // Navbar prime/tween lives in initNavbarEntrance. We only handle the
  // hero-specific elements below.

  if (headingWords.length) gsap.set(headingWords, { yPercent: 50, autoAlpha: 0 });

  if (subheading) gsap.set(subheading, { y: 24, autoAlpha: 0 });
  if (heroCta)    gsap.set(heroCta,    { y: 24, autoAlpha: 0 });

  // Curtain reveal — the inner wrapper starts at height 0. As it grows
  // to 100% the image (sized to the card, not the wrapper) is uncovered
  // top-down without moving. overflow: hidden on the wrapper does the clipping.
  if (imageReveal) gsap.set(imageReveal, { height: 0 });

  if (strategy)  gsap.set(strategy,  { autoAlpha: 0, scale: 0.9, y: 14, transformOrigin: 'center center' });
  if (financial) gsap.set(financial, { autoAlpha: 0, scale: 0.9, y: 14, transformOrigin: 'center center' });

  // Strategy card internal state
  if (strategyIcon)    gsap.set(strategyIcon,    { autoAlpha: 0, scale: 0.8, transformOrigin: 'center center' });
  if (strategyChars.length) gsap.set(strategyChars, { autoAlpha: 0, y: 8 });
  if (strategyProg)    gsap.set(strategyProg,    { autoAlpha: 0 });
  if (strategyFill)    gsap.set(strategyFill,    { width: '0%' });
  if (strategyCounter) strategyCounter.textContent = '0%';

  // Financial card internal state
  if (finHeader) gsap.set(finHeader, { autoAlpha: 0, y: 8 });
  if (finBars.length)   gsap.set(finBars,   { scaleY: 0, transformOrigin: 'bottom center' });
  if (finLabels.length) gsap.set(finLabels, { autoAlpha: 0, y: 6 });

  // ── Reduced motion shortcut ─────────────────────────────────────────
  if (reduce) {
    const reveal = [
      subheading, heroCta, imageCard,
      strategy, financial,
      strategyIcon, strategyProg, finHeader,
    ].filter(Boolean);
    gsap.set(reveal, { y: 0, autoAlpha: 1, scale: 1 });
    if (headingWords.length) gsap.set(headingWords, { yPercent: 0, autoAlpha: 1 });
    if (imageReveal) gsap.set(imageReveal, { height: '100%' });
    if (strategyChars.length) gsap.set(strategyChars, { autoAlpha: 1, y: 0 });
    if (strategyFill) gsap.set(strategyFill, { width: targetPct + '%' });
    if (strategyCounter) strategyCounter.textContent = targetPct + '%';
    if (finBars.length) gsap.set(finBars, { scaleY: 1 });
    if (finLabels.length) gsap.set(finLabels, { autoAlpha: 1, y: 0 });
    return;
  }

  // ── Master timeline ─────────────────────────────────────────────────
  const tl = gsap.timeline({ delay: 0.15 });

  // 1 · Navbar entrance runs from initNavbarEntrance.
  //    The master timeline below picks up at the same delay so the rest
  //    of the hero choreography lines up with the navbar's settle.

  // 2 · H1 word stagger (0.35s) — Heading Stagger pattern.
  //    Words drop down from yPercent: 50 → 0 with a fade. power3.out +
  //    0.06 stagger + 0.8s duration is the project's house spec.
  if (headingWords.length) {
    tl.to(headingWords, {
      yPercent: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.06,
    }, 0.35);
  }

  // 3 · Sub-head + primary CTA (0.55s)
  //    Overlaps the H1 reveal by ~0.45s — the eye catches the sub-head just
  //    as the final line of the headline starts to settle, so the composition
  //    fills in quickly instead of waiting.
  //    clearProps lets the hero "Get Started" button accept CSS :hover scale.
  const copyTargets = [subheading, heroCta].filter(Boolean);
  if (copyTargets.length) {
    tl.to(copyTargets, {
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      ease: 'power3.out',
      stagger: 0.06,
      clearProps: 'translate,rotate,scale,transform',
    }, 0.55);
  }

  // 4 · Portrait — curtain reveal (0.65s)
  //    The reveal wrapper's height animates 0 → 100% with a smooth
  //    ease-out, unfurling the image like a curtain dropping. Because
  //    the image itself is sized via 100cqh/cqw against the card, the
  //    portrait stays anchored at the top while the wrapper grows.
  if (imageReveal) {
    tl.to(imageReveal, {
      height: '100%',
      duration: 1.2,
      ease: 'power3.out',
    }, 0.65);
  }

  // Idle float — once the card is settled, we keep it gently breathing up
  // and down forever. `sine.inOut` is the right curve for symmetric yoyo
  // motion (anything one-sided creates a tiny "lurch" at the midpoint).
  // Each card uses a slightly different duration so the two cards never
  // sync — reads like two leaves drifting in different breezes.
  function startFloaterIdle(el, distance, duration) {
    if (!el) return;
    gsap.to(el, {
      y: -distance,
      duration,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }

  // 5 · UI cards initial arrival (0.95s)
  //    Only the Strategy card animates on page load — it sits at the top of
  //    the image and is always in view. The Financial card lives at the
  //    bottom and often starts off-screen on shorter desktops, so its
  //    animation is deferred to a ScrollTrigger timeline below.
  if (strategy) {
    tl.to(strategy, {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      onComplete: () => startFloaterIdle(strategy, 8, 3.0),
    }, 0.95);
  }

  // 6 · Strategy card internals — start while the card is still animating
  //    in, so there's no "blank white rectangle" moment. Icon + text kick
  //    off ~0.15s after the card starts appearing; progress/counter follow.
  if (strategyIcon) {
    tl.to(strategyIcon, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'power3.out' }, 1.10);
  }
  if (strategyChars.length) {
    tl.to(strategyChars, {
      autoAlpha: 1,
      y: 0,
      duration: 0.45,
      ease: 'power3.out',
      stagger: { amount: 0.3 },
    }, 1.20);
  }
  if (strategyProg) tl.to(strategyProg, { autoAlpha: 1, duration: 0.35, ease: 'power2.out' }, 1.35);
  if (strategyFill) tl.to(strategyFill, { width: targetPct + '%', duration: 1.1, ease: 'power4.out' }, 1.35);
  if (strategyCounter) {
    const counterObj = { n: 0 };
    tl.to(counterObj, {
      n: targetPct,
      duration: 1.1,
      ease: 'power4.out',
      onUpdate: () => { strategyCounter.textContent = Math.round(counterObj.n) + '%'; },
      onComplete: () => { strategyCounter.textContent = targetPct + '%'; },
    }, 1.35);
  }

  // 7 · Financial card — the entrance is viewport-aware.
  //    If the card is already visible at first paint, it joins the master
  //    timeline alongside the rest of the hero so the whole composition
  //    lands as one choreographed sequence. If it sits below the fold
  //    (short desktops), we defer to a ScrollTrigger so the animation
  //    fires the moment the user scrolls it into view. Same sub-sequence
  //    either way — only the scope changes.
  const animateFinancial = (scope, basePos) => {
    if (!financial) return;
    scope.to(financial, {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      onComplete: () => startFloaterIdle(financial, 7, 3.4),
    }, basePos);

    const internals = basePos + 0.15;
    if (finHeader) {
      scope.to(finHeader, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out' }, internals);
    }
    if (finBars.length) {
      scope.to(finBars, {
        scaleY: 1,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.05,
      }, internals + 0.15);
      scope.to(finLabels, {
        autoAlpha: 1,
        y: 0,
        duration: 0.35,
        ease: 'power2.out',
        stagger: 0.05,
      }, internals + 0.35);

      const active = finBars.find((b) => b.getAttribute('data-financial-active') === 'true');
      if (active) {
        scope.call(() => {
          active.classList.add('is-pulsing');
          active.addEventListener('animationend', () => {
            active.classList.remove('is-pulsing');
          }, { once: true });
        }, [], internals + 1.0);
      }
    }
  };

  if (financial) {
    // Viewport check matches ScrollTrigger's default 'top 88%' threshold
    // so both branches fire at the same perceived "in view" moment.
    const rect = financial.getBoundingClientRect();
    const visibleOnLoad = rect.top < window.innerHeight * 0.88;

    if (visibleOnLoad) {
      animateFinancial(tl, 1.10);
    } else if (typeof ScrollTrigger !== 'undefined') {
      const finTl = gsap.timeline({
        scrollTrigger: {
          trigger: financial,
          start: 'top 88%',
          once: true,
        },
      });
      animateFinancial(finTl, 0);
    } else {
      // No ScrollTrigger available — fall back to the master timeline.
      animateFinancial(tl, 1.10);
    }
  }
}

// Kick off both animation initialisers.
function bootHero() {
  initNavbarEntrance();
  initHeroMasterTimeline();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(bootHero, 0));
} else {
  setTimeout(bootHero, 0);
}
