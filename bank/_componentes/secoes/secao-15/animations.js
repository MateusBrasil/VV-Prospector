/* Catalis — shared scroll-reveal + entrance animations (CDN-global port of
   src/scripts/scroll-reveal.ts). Self-initializes per page by hook presence. */
(function () {
  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger,
      SplitText = window.SplitText, CustomEase = window.CustomEase;
  if (!gsap) { console.warn('[catalis] gsap missing'); return; }
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

// Scroll-reveal system (GSAP ScrollTrigger) — faithful port of the template's
// Webflow IX2 "View" reveals. Each element enters as it crosses the viewport.
//
// Source IX2 (catalis webflow.js): actionLists `a`/`a-4`/`a-6` ("View - 0.1/0.2/0.3s")
//   from: opacity 0, translateY 15% (% of own height)
//   to:   opacity 1, translateY 0  —  easing outQuart, duration 700ms
// Webflow→GSAP easing: outQuart === power3.out (Quart = power3).
// The per-element ScrollTrigger reproduces Webflow's baked-in stagger naturally
// (each sibling crosses the trigger line a beat apart), so we omit the uniform
// 100/200/300ms delays.
//
// Honors prefers-reduced-motion (elements shown immediately, no motion).



// Webflow IX2 "ease" = the CSS default cubic-bezier(0.25, 0.1, 0.25, 1), expressed
// as the equivalent SVG cubic path (CustomEase's cubic-bezier input format).
const WF_EASE = CustomEase.create('wfEase', 'M0,0 C0.25,0.1 0.25,1 1,1');

// Elements that get the universal "View" reveal — the source's IX2 `a` "View"
// actionList (SCROLL_INTO_VIEW): opacity 0→1 + translateY 15%→0, outQuart 0.7s.
// Only `.scroll-into-view` carries that list. The `[animation="heading|description|
// card"]` hooks are NOT here — they belong to the on-LOAD timeline (initHeroEntrance),
// not a scroll View; and `[animation="large-heading"]` is the scrubbed split-words
// reveal (initLargeHeadingReveal). `.blog_main-img` is an on-LOAD reveal too (IX3
// t-669149ec, action ta-dc3e342f) — it's handled by initHeroEntrance, NOT here.
const VIEW_SELECTOR = ['.scroll-into-view'].join(',');

function initScrollReveal() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // The home hero has its own load choreography (initHeroEntrance) — its text is
  // static and its cards/badge animate differently, so exclude it here.
  const els = Array.from(document.querySelectorAll(VIEW_SELECTOR)).filter(
    (el) => !el.closest('.section_home'),
  );

  if (reduce) {
    els.forEach((el) => gsap.set(el, { clearProps: 'all', opacity: 1 }));
    return;
  }

  els.forEach((el) => {
    // The source's `a` "View" reveal translates a FIXED 3rem (verified: the live
    // initial state is translate3d(0, 3rem, 0)) — NOT a percentage of the element's
    // own height. (The 15% variants a-4/a-6 are bound to a few specific elements,
    // not the `.scroll-into-view` class.)
    // `.is-fade` opts out of the rise → opacity-only fade (e.g. the Pricing comparison
    // table, which the owner wants to fade in place without shifting).
    const fadeOnly = el.classList.contains('is-fade');
    gsap.set(el, { opacity: 0, y: fadeOnly ? 0 : '3rem' });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () =>
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out', // outQuart
          // settle to the natural state so later CSS transforms aren't blocked
          onComplete: () => gsap.set(el, { clearProps: 'transform' }),
        }),
    });
  });

  ScrollTrigger.refresh();
}

// Section-heading reveal — faithful port of IX3 timeline t-802b3d1d (SITE scope,
// `wf:scroll`, SCRUBBED). Each `[animation="large-heading"]` is split into WORDS
// that fall from above (yPercent -100 + fade) as the heading scrolls through the
// viewport. The motion is TIED to scroll position (scrub 0.8), not play-once.
//   source scrollTriggerConfig: clamp, start "50% bottom", end "bottom 50%"
//   action ta-1b31e456: SplitText words, from {y:-100%, opacity:0}, stagger 0.4, ease 29 (sine.out)
function initLargeHeadingReveal() {
  const heads = Array.from(
    document.querySelectorAll('[animation="large-heading"]'),
  );
  if (!heads.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    heads.forEach((el) => gsap.set(el, { clearProps: 'all', opacity: 1 }));
    return;
  }

  // SplitText needs the final fonts loaded to measure word boxes correctly.
  document.fonts.ready.then(() => {
    heads.forEach((el) => {
      // Lift the anti-FOUC guard on the container; the split words carry the reveal.
      gsap.set(el, { opacity: 1 });
      const split = new SplitText(el, { type: 'words' });
      gsap.from(split.words, {
        yPercent: -100,
        opacity: 0,
        ease: 'sine.out',
        duration: 0.8,
        stagger: { amount: 0.4 },
        // Catálogo: cada sección se previsualiza STANDALONE (ocupa el viewport, sin
        // scroll para scrubbear) → el reveal scrubbed dejaba el título en su estado
        // inicial (y:-100%, opacity:0) = título invisible. Convertido a play-once
        // on-enter (skill: scroll-scrub → reveal on-view para el preview standalone).
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });
    });
    ScrollTrigger.refresh();
  });
}

// About section reveals — faithful ports of the source's class-based IX2
// SCROLL_INTO_VIEW interactions (play-once as each element enters the viewport),
// verified against the live site. These elements are always below the fold, so
// the JS-applied start states cause no FOUC (no CSS guard needed).
//   .about_image            (a-35): scale 0→1, sine.out, 0.6s
//   .about_image-card.is-right (a-33): xPercent 150→0 + scale .5→1, sine.out, 0.7s, delay 0.3
//   .about_image-card.is-left  (a-34): xPercent -150→0 + scale .5→1, sine.out, 0.7s, delay 0.3
// (The stats grow-in is handled by the shared initGrowReveal — see below.)
// The image + cards share the image's trigger so they fire as one (cards delayed 0.3s).
function initAboutReveal() {
  const img = document.querySelector('.about_image');
  const cardR = document.querySelector('.about_image-card.is-right');
  const cardL = document.querySelector('.about_image-card.is-left');
  if (!img && !cardR && !cardL) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return; // leave everything at its natural state

  if (img) {
    gsap.set(img, { scale: 0 });
    ScrollTrigger.create({
      trigger: img,
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(img, { scale: 1, duration: 0.6, ease: 'sine.out', clearProps: 'scale' }),
    });
  }

  const slideCard = (el, fromXPercent) => {
    if (!el) return;
    gsap.set(el, { xPercent: fromXPercent, scale: 0.5 });
    ScrollTrigger.create({
      trigger: img || el, // sync with the image entering
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(el, {
          xPercent: 0,
          scale: 1,
          duration: 0.7,
          ease: 'sine.out',
          delay: 0.3,
          clearProps: 'transform',
        }),
    });
  };
  slideCard(cardR, 150);
  slideCard(cardL, -150);

  ScrollTrigger.refresh();
}

// "About Three" image scale-in — the source's a-56 IX2 interaction (SCROLL_INTO_VIEW,
// play-once), used in the section_about-two layout (About / Pricing pages). The image
// FRAME (`.about_img-three`) and its floating income card (`.about_income`) each scale
// from 0 → 1; the income card is staggered 0.25s after the frame. Verified against the
// live: scale 0→1, ease circ.out (outCirc), 0.5s, income delay 0.25s (the inner <img>
// is NOT transformed). Always below the fold → the JS start states cause no FOUC.
function initAboutThreeReveal() {
  const frames = Array.from(document.querySelectorAll('.about_img-three'));
  if (!frames.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return; // leave everything at its natural state

  frames.forEach((frame) => {
    const income = frame.querySelector('.about_income');
    gsap.set(frame, { scale: 0 });
    if (income) gsap.set(income, { scale: 0 });
    ScrollTrigger.create({
      trigger: frame,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(frame, { scale: 1, duration: 0.5, ease: 'circ.out', clearProps: 'scale' });
        if (income) {
          gsap.to(income, {
            scale: 1,
            duration: 0.5,
            delay: 0.25,
            ease: 'circ.out',
            clearProps: 'scale',
          });
        }
      },
    });
  });

  ScrollTrigger.refresh();
}

// "Grow-in" reveal — the source's `growIn` IX2 interaction (SCROLL_INTO_VIEW),
// shared by every `.grow-element` (About stats, Benefits / Core / Pricing-teaser
// gallery cards). Each element grows from scale .75 + fades in as it enters the
// viewport: power2.out (outCubic), 0.8s, play-once. Verified local==live (About
// stats + Benefits cards: same curve). Per-element trigger = Webflow's per-element
// SCROLL_INTO_VIEW (siblings in one row fire together; a vertical stack cascades).
// The reveal does not touch layout, so it's independent of the deferred mobile
// horizontal-scroll fallback of the gallery containers.
function initGrowReveal() {
  const els = Array.from(document.querySelectorAll('.grow-element'));
  if (!els.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  els.forEach((el) => {
    gsap.set(el, { scale: 0.75, opacity: 0 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(el, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out', // outCubic
          clearProps: 'transform,opacity',
        }),
    });
  });

  ScrollTrigger.refresh();
}

// Testimonials marquee entrance — the `.loop_wrap` reveals as it scrolls into view
// (the continuous slide itself is a CSS animation; see components.css). Verified
// against the live: opacity 0→1 + translateY 3rem→0, outQuart (power3.out), 0.7s.
// Below the fold → the JS start state causes no FOUC.
function initTestimonialReveal() {
  const wrap = document.querySelector('.loop_wrap');
  if (!wrap) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  gsap.set(wrap, { opacity: 0, y: '3rem' });
  ScrollTrigger.create({
    trigger: wrap,
    start: 'top 85%',
    once: true,
    onEnter: () =>
      gsap.to(wrap, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out', // outQuart
        clearProps: 'transform,opacity',
      }),
  });
}

// CTA "Join" floating cards — source's a-53 / a-54 (SCROLL_INTO_VIEW). Each card
// grows from nothing while rotating into its settled tilt (is-left +7°, is-right
// −15°, matching the CSS settle state). The source runs scale and rotation as TWO
// separate tweens with different timing (verified against the live):
//   scale    0→1    power3.out (outQuart)  0.6s
//   rotation 0→tilt linear                 0.5s
// Below the fold → no FOUC. clearProps restores the CSS rotate after both finish.
function initJoinReveal() {
  const cards = Array.from(document.querySelectorAll('.join_img'));
  if (!cards.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  cards.forEach((el) => {
    const tilt = el.classList.contains('is-left') ? 7 : -15; // CSS settle tilt
    gsap.set(el, { scale: 0, rotation: 0 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(el, { rotation: tilt, duration: 0.5, ease: 'none' });
        gsap.to(el, {
          scale: 1,
          duration: 0.6,
          ease: 'power3.out', // outQuart
          onComplete: () => gsap.set(el, { clearProps: 'transform' }),
        });
      },
    });
  });

  ScrollTrigger.refresh();
}

// Section badge reveal — source's a-52 "Badge Animation" (SCROLL_INTO_VIEW),
// bound to every section badge (`.badge-wrapper .badge`). NOT the hero badge,
// which uses a-65 (slower: 1s inOutQuart) inside initHeroEntrance. The pill starts
// collapsed to its icon (width 2.5rem) with the label hidden (scaleX 0); after a
// 0.5s hold it expands to full width while the label wipes in from the left
// (transform-origin:0% in CSS). Both 0.5s, Webflow "ease". No opacity/scale change.
// Verified against the live: badge_text scaleX hits ~0.80 at the 250ms midpoint.
// Features hero image + floating card (IX2 a-48 / a-49, SCROLL_INTO_VIEW — they sit
// above the fold, so they fire on load). The image frame scales up from nothing; the
// card slides in from the left while scaling, a beat later (delay 0.3). sine.out, 0.7s.
// We deliberately DON'T clearProps: the settled inline transform (scale 1) overrides
// the CSS anti-FOUC guard, so it never re-hides them. Reduced-motion / no-JS: the guard
// is gated on `js-anim` + no-preference, so the elements show at their natural state.
function initFeatureHeroReveal() {
  const img = document.querySelector('.hero_features-img');
  const card = document.querySelector('.hero_features-card');
  if (!img && !card) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  if (img) {
    gsap.set(img, { scale: 0 });
    ScrollTrigger.create({
      trigger: img,
      start: 'top 85%',
      once: true,
      onEnter: () => gsap.to(img, { scale: 1, duration: 0.7, ease: 'sine.out' }),
    });
  }
  if (card) {
    gsap.set(card, { xPercent: -150, scale: 0.5 });
    ScrollTrigger.create({
      trigger: img || card, // fire together with the image
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(card, { xPercent: 0, scale: 1, duration: 0.7, delay: 0.3, ease: 'sine.out' }),
    });
  }

  ScrollTrigger.refresh();
}

function initBadgeReveal() {
  // SECTION badges only (a-52). A HERO badge carries `animation="badge"` and is driven
  // by the on-load timeline (initHeroEntrance) — exclude it so it isn't double-animated.
  // (On most pages the hero badge sits outside `.badge-wrapper`, but the Blog hero nests
  // it inside one, so filter by the hook rather than relying on structure.)
  const badges = Array.from(
    // Section badges live in a `.badge-wrapper`, except the Features "Core features"
    // badge, which sits in `.core_title` — include it so it wipes like the rest.
    document.querySelectorAll('.badge-wrapper .badge, .core_title .badge'),
  ).filter((b) => b.getAttribute('animation') !== 'badge');
  if (!badges.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  badges.forEach((badge) => {
    const txt = badge.querySelector('.badge_text');
    const naturalW = badge.getBoundingClientRect().width;
    gsap.set(badge, { width: '2.5rem' });
    if (txt) gsap.set(txt, { scaleX: 0 });
    ScrollTrigger.create({
      trigger: badge,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(badge, {
          width: naturalW,
          duration: 0.5,
          delay: 0.5,
          ease: WF_EASE,
          onComplete: () => gsap.set(badge, { clearProps: 'width' }),
        });
        if (txt) gsap.to(txt, { scaleX: 1, duration: 0.5, delay: 0.5, ease: WF_EASE });
      },
    });
  });

  ScrollTrigger.refresh();
}

// Nav entrance (page load). Source IX2: each navbar item scales 0 → 1 (opacity
// stays 1, no fade), eased outQuad (power1.out) over ~0.5s, with a CENTER-OUT
// stagger — the middle item pops first, then symmetric pairs radiate outward
// (~0.15s between rings). We animate only the items visible at the current
// breakpoint (desktop: logo + links + CTA; mobile: logo + hamburger).
function initNavEntrance() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Visible = laid out at this breakpoint. Use offsetWidth (layout box, unaffected
  // by the scale(0) reveal guard) — getBoundingClientRect would read 0 while scaled.
  const items = Array.from(
    document.querySelectorAll('[data-nav-item]'),
  ).filter((el) => el.offsetWidth > 0 && el.offsetHeight > 0);
  if (!items.length) {
    // Catálogo: las secciones standalone SIN navbar nunca seteaban html.nav-in, y la
    // transición de los .button_text (el hover-swap is-one/is-two) está gateada en
    // html.nav-in → los botones solo animaban en los heroes. Lo seteamos igual aquí.
    document.documentElement.classList.add('nav-in');
    return;
  }

  if (reduce) {
    items.forEach((el) => gsap.set(el, { clearProps: 'all' }));
    return;
  }

  const center = (items.length - 1) / 2;
  const dist = items.map((_, i) => Math.abs(i - center));
  const minD = Math.min(...dist);

  // Hold the visible items at scale 0 inline, then release the CSS guard (.nav-in)
  // so that clearProps on completion settles to the natural state instead of being
  // re-hidden by the guard rule.
  gsap.set(items, { scale: 0, transformOrigin: '50% 50%' });
  document.documentElement.classList.add('nav-in');
  items.forEach((el, i) => {
    gsap.to(el, {
      scale: 1,
      duration: 0.5,
      ease: 'power1.out', // outQuad
      delay: Math.round(dist[i] - minD) * 0.15,
      // settle to the natural state so the CTA/hamburger keep their own transforms
      onComplete: () => gsap.set(el, { clearProps: 'transform' }),
    });
  });
}

// Page hero / on-load entrance — faithful port of the SITE-WIDE Webflow IX3 load
// timeline `t-669149ec` (`wf:load`), decoded from webflow.js. It fires on EVERY
// page for whichever hooks are present, so this one function drives every page's
// hero (Home, About, Features, Contact, Pricing) and the on-load reveals. Every
// action uses ease 29 = sine.out; positions are absolute on one timeline:
//   badge        @0.00  from {opacity:0, y:-40%, scale:0.8}              dur 0.4
//   heading      @0.20  SplitText chars, from {y:-100%, opacity:0}       dur 0.4  stagger 0.5
//   cards        @0.20  from {y:100%, scale:0} (NO fade)                 dur 0.5  stagger 0.5
//   description  @0.50  SplitText words, from {opacity:0, y:-100%}       dur 0.4  stagger 0.1
//   about-imgs   @0.60  children from {opacity:0, scale:0.8, x:50%}      dur 0.5  stagger each 0.2 from start
//   buttons      @0.73  children from {opacity:0, scale:0, origin top}   dur 0.4  stagger 0.2
//
// The cards keep their CSS tilt (a `from` tween on y/scale leaves rotation alone).
// The HOME hero badge ALSO runs the a-65 "Badge Animation" wipe (width + label
// scaleX); other pages' hero badges have no data-w-id → only the IX3 container
// entrance. Verified against the live source.
function initHeroEntrance() {
  // The hero hooks only exist in a page's hero, so a document-wide query targets
  // the current page's hero wherever it lives (not just `.section_home`).
  const heading = document.querySelector('[animation="heading"]');
  const desc = document.querySelector('[animation="description"]');
  const buttonsWrap = document.querySelector('[animation="buttons"]');
  const buttons = buttonsWrap ? Array.from(buttonsWrap.children) : [];
  const cards = Array.from(document.querySelectorAll('[animation="card"]'));
  const badge = document.querySelector('[animation="badge"]');
  const aboutImgs = document.querySelector('[animation="about-imgs"]');
  const aboutKids = aboutImgs ? (Array.from(aboutImgs.children)) : [];
  const pricingGrid = document.querySelector('[animation="pricing"]');
  const pricingKids = pricingGrid ? (Array.from(pricingGrid.children)) : [];
  // The blog-detail hero's main image is part of the same on-load timeline (it has no
  // `animation=` hook — it's targeted by class), so it's driven here, not as a scroll View.
  const mainImg = document.querySelector('.blog_main-img');
  // The contact page form rises + scales in on load (its own IX3 timeline t-418ac621).
  const contactForm = document.querySelector('[animation="contact-form"]');
  // The Features hero stats: the container is static, each `.stat` child pops in.
  const statsWrap = document.querySelector('[animation="stats"]');
  const statsKids = statsWrap ? (Array.from(statsWrap.children)) : [];
  const all = [
    heading,
    desc,
    buttonsWrap,
    badge,
    aboutImgs,
    pricingGrid,
    mainImg,
    contactForm,
    statsWrap,
    ...cards,
  ].filter(Boolean);
  if (!all.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    all.forEach((el) => gsap.set(el, { clearProps: 'all', opacity: 1 }));
    return;
  }

  // Split text needs final fonts to measure line breaks correctly — wait for them
  // (the header .otf is preloaded, so this resolves near-instantly).
  document.fonts.ready.then(() => {
    // Lift the anti-FOUC guard (opacity:0): the per-element `from` start states
    // below provide the hidden look, so reveal the containers now.
    gsap.set(all, { opacity: 1 });

    const headingSplit = heading
      ? new SplitText(heading, { type: 'words,chars', linesClass: 'split-line' })
      : null;
    const descSplit = desc ? new SplitText(desc, { type: 'words' }) : null;

    const tl = gsap.timeline({
      onComplete: () => {
        // Match the source: the SplitText wrappers are KEPT (the live site never
        // reverts), so the letters keep their split spacing throughout and never
        // reflow/"snap together" at the end. Only clear the per-fragment transforms.
        if (headingSplit) gsap.set(headingSplit.chars, { clearProps: 'transform,opacity' });
        if (descSplit) gsap.set(descSplit.words, { clearProps: 'transform,opacity' });
        gsap.set(cards, { clearProps: 'transform' });
        if (aboutKids.length) gsap.set(aboutKids, { clearProps: 'transform,opacity' });
        if (pricingKids.length) gsap.set(pricingKids, { clearProps: 'transform,opacity' });
        // mainImg + contactForm are themselves anti-FOUC-guarded (`opacity:0`), so we
        // must KEEP their inline `opacity:1` (set above) — clearing it would let the
        // guard re-hide them the instant the timeline ends. Only clear the transform.
        if (mainImg) gsap.set(mainImg, { clearProps: 'transform' });
        if (contactForm) gsap.set(contactForm, { clearProps: 'transform' });
        if (statsKids.length) gsap.set(statsKids, { clearProps: 'transform,opacity' });
        // Restore the buttons' CSS transition (cleared above for the entrance) and drop
        // the inline transform so they rest at their natural scale and hover works.
        if (buttons.length) gsap.set(buttons, { clearProps: 'transition,transform' });
      },
    });

    if (badge) {
      // Container entrance (IX3 t-669149ec): fade + rise + scale.
      tl.from(badge, { opacity: 0, yPercent: -40, scale: 0.8, duration: 0.4, ease: 'sine.out' }, 0);
      // "Badge Animation" wipe (IX2 a-65) — HOME hero badge only (the only one with
      // the data-w-id binding). The pill starts collapsed to its icon (width 2.5rem)
      // and expands to full width while the label wipes in from the left (scaleX 0→1),
      // both inOutQuart (power3.inOut), 1s, delayed 0.5s. transform-origin:0% in CSS.
      if (badge.closest('.section_home')) {
        const naturalW = badge.getBoundingClientRect().width;
        const badgeText = badge.querySelector('.badge_text');
        gsap.set(badge, { width: '2.5rem' });
        tl.to(
          badge,
          {
            width: naturalW,
            duration: 1,
            ease: 'power3.inOut',
            onComplete: () => gsap.set(badge, { clearProps: 'width' }),
          },
          0.5,
        );
        if (badgeText) {
          gsap.set(badgeText, { scaleX: 0 });
          tl.to(badgeText, { scaleX: 1, duration: 1, ease: 'power3.inOut' }, 0.5);
        }
      }
    }
    if (headingSplit) {
      tl.from(
        headingSplit.chars,
        { yPercent: -100, opacity: 0, duration: 0.4, ease: 'sine.out', stagger: { amount: 0.5 } },
        0.2,
      );
    }
    if (cards.length) {
      // No opacity in the tween — cards never fade (they rise + scale only).
      tl.from(
        cards,
        { yPercent: 100, scale: 0, duration: 0.5, ease: 'sine.out', stagger: { amount: 0.5 } },
        0.2,
      );
    }
    if (descSplit) {
      tl.from(
        descSplit.words,
        { opacity: 0, yPercent: -100, duration: 0.4, ease: 'sine.out', stagger: { amount: 0.1 } },
        0.5,
      );
    }
    if (mainImg) {
      // Blog-detail main image (IX3 t-669149ec, action ta-dc3e342f): rises + scales +
      // fades in. Verified against the live (yPercent 40 ≈ 165px on a ~412px image).
      tl.from(
        mainImg,
        { opacity: 0, yPercent: 40, scale: 0.8, duration: 0.5, ease: 'sine.out' },
        0.5,
      );
    }
    if (contactForm) {
      // Contact form (IX3 t-418ac621): rises a half-height + scales up + fades in.
      // Verified against the live (yPercent 50 ≈ 223px on a ~447px form).
      tl.from(
        contactForm,
        { opacity: 0, yPercent: 50, scale: 0.5, duration: 0.7, ease: 'sine.out' },
        0.45,
      );
    }
    if (statsKids.length) {
      // Features hero stats pop in (scale + fade), one after the other, near the end.
      tl.from(
        statsKids,
        { opacity: 0, scale: 0, duration: 0.4, ease: 'sine.out', stagger: { amount: 0.15 } },
        0.7,
      );
    }
    if (aboutKids.length) {
      // About hero images slide in from the right + scale + fade, front-to-back.
      tl.from(
        aboutKids,
        {
          opacity: 0,
          scale: 0.8,
          xPercent: 50,
          duration: 0.5,
          ease: 'sine.out',
          stagger: { each: 0.2, from: 'start' },
        },
        0.6,
      );
    }
    if (pricingKids.length) {
      // Pricing cards slide in from the left + scale up + fade, staggered from the
      // last card to the first (`from: 'end'`).
      tl.from(
        pricingKids,
        {
          opacity: 0,
          xPercent: -50,
          scale: 0.5,
          duration: 0.5,
          ease: 'sine.out',
          stagger: { each: 0.2, from: 'end' },
        },
        0.6,
      );
    }
    if (buttons.length) {
      // The buttons are `.button_component`, which carries a CSS `transition: transform`
      // (for the hover scale). That transition fights this GSAP scale tween and leaves
      // the buttons stuck at scale(0). Disable it inline for the entrance; it's restored
      // (with the transform cleared) in the timeline's onComplete so hover still works.
      gsap.set(buttons, { transition: 'none' });
      tl.from(
        buttons,
        {
          opacity: 0,
          scale: 0,
          transformOrigin: '50% 0%',
          duration: 0.4,
          ease: 'sine.out',
          stagger: { amount: 0.2 },
        },
        0.73,
      );
    }
  });
}

function init() {
  initNavEntrance();
  initHeroEntrance();
  initScrollReveal();
  initLargeHeadingReveal();
  initAboutReveal();
  initAboutThreeReveal();
  initFeatureHeroReveal();
  initGrowReveal();
  initBadgeReveal();
  initJoinReveal();
  initTestimonialReveal();
}

if (document.readyState !== 'loading') init();
else document.addEventListener('DOMContentLoaded', init);
})();
