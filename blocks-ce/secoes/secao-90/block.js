(function(){
  var __root = document.querySelector('[data-blk="secoes-secao-90"]');
  if(!__root) return;
  var __q = function(s){ return __root.querySelector(s) || document.querySelector(s); };
  var __qa = function(s){ var r = __root.querySelectorAll(s); return r.length ? r : document.querySelectorAll(s); };

/* hero-load.js */
// Page-load intro choreography (Phase 5B) -- reconstructed from the source hooks.
//
// The Webflow source drove this with a GSAP-attribute library (animation="hero-first"
// | "ani-button" | "badge-appear", floating="up|down", nav="") loaded as project
// custom code that was NOT included in the static export -- only the hooks + a
// `visibility:hidden` FOUC guard survived. The exact durations/eases are therefore a
// faithful reconstruction (SplitText was loaded by the source -> the heading was a
// line reveal), tuned cinematic per Edgar. Tune freely; this is the signature moment.
//
//   nav            -> slides down on load (every page)
//   heading (h1)   -> SplitText lines mask up, staggered
//   description    -> fade-up
//   buttons        -> fade-up, staggered
//   badges         -> scale/fade in (back.out) -> then continuous float loop (up/down)
//
// Initial hidden state lives in reveal.css (`html.reveal-on ... { visibility:hidden }`,
// no !important so gsap.set can override). JS off / reduced-motion -> never hidden.
(function () {
  gsap.registerPlugin(SplitText);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // SplitText line reveal helper (heading): make container visible, split into masked
  // lines, park them below, return the lines for the caller to tween up.
  function splitLines(heading) {
    gsap.set(heading, { autoAlpha: 1 });
    const split = new SplitText(heading, { type: 'lines', mask: 'lines' });
    gsap.set(split.lines, { yPercent: 110 });
    return split.lines;
  }

  function run() {
    const nav = __q('[data-navbar]');

    // HOME hero (`/`).
    const home = __q('.section_home.is-one');
    const hHeading = home?.querySelector('.hero_heading h1') ?? null;
    const hDesc = home?.querySelector('.max-description') ?? null;
    const hButtons = home
      ? Array.from(home.querySelectorAll('.hero_buttons .button_component'))
      : [];
    const badges = home
      ? Array.from(home.querySelectorAll('.hero_badge-wrap'))
      : [];

    // ABOUT hero (`/about`) -- same load language as home (SplitText h1 + fade-ups).
    const about = __q('.section_about-hero');
    const aEyebrow = about?.querySelector('.about_content-left .section_title') ?? null;
    const aH1 = about?.querySelector('h1') ?? null;
    const aImg = about?.querySelector('.about_hero-img .img') ?? null;
    const aDesc = about?.querySelector('.text-color-subtle') ?? null;
    const aMono = about?.querySelector('.about_hero-content .font-mono') ?? null;
    const aH2 = about?.querySelector('.about_hero-content h2') ?? null;
    const aButtons = about
      ? Array.from(about.querySelectorAll('.hero_buttons .button_component'))
      : [];

    // SERVICES hero (`/services`) -- like about, plus floating badges + stats.
    const services = __q('.section_services-hero');
    const sEyebrow = services?.querySelector('.services-hero_top .section_title') ?? null;
    const sH1 = services?.querySelector('h1') ?? null;
    const sDesc = services?.querySelector('.services-hero_top .text-color-subtle') ?? null;
    const sImg = services?.querySelector('.services-hero_img .img') ?? null;
    const sH2 = services?.querySelector('.service-hero_stats h2') ?? null;
    const sStats = services
      ? Array.from(services.querySelectorAll('.stat-wrap'))
      : [];
    const sButtons = services
      ? Array.from(services.querySelectorAll('.hero_buttons .button_component'))
      : [];
    const sBadges = services
      ? Array.from(services.querySelectorAll('.badge_wrapper'))
      : [];

    // BLOG hero (`/blog`) -- top (eyebrow + h1 + desc) + a featured-post card.
    const blog = __q('.section_blogs-hero');
    const bEyebrow = blog?.querySelector('.section_title') ?? null;
    const bH1 = blog?.querySelector('h1') ?? null;
    const bDesc = blog?.querySelector('.text-color-subtle') ?? null;
    const bImg = blog?.querySelector('.blog-hero_img .img') ?? null;
    const bCard = blog
      ? Array.from(blog.querySelectorAll('.blog_content > *'))
      : [];

    // TEAM hero (`/team/[slug]`) -- portrait + name + role + bio + socials.
    const team = __q('.section_team-hero');
    const tImg = team?.querySelector('.team-hero_img .img') ?? null;
    const tH1 = team?.querySelector('.team-hero_right h1') ?? null;
    const tText = team
      ? Array.from(team.querySelectorAll('.team-hero_right .text-color-secondary, .team-hero_right .w-richtext'))
      : [];
    const tSocials = team
      ? Array.from(team.querySelectorAll('.socials_grid .social_item'))
      : [];

    // CONTACT hero (`/contact`) -- left info column + the form (no image).
    const contact = __q('.section_contact');
    const cEyebrow = contact?.querySelector('.contact-hero_left .section_title') ?? null;
    const cH1 = contact?.querySelector('h1') ?? null;
    const cDesc = contact?.querySelector('.contact-hero_left .text-color-secondary') ?? null;
    const cData = contact
      ? Array.from(contact.querySelectorAll('.contact_data'))
      : [];
    const cForm = contact?.querySelector('.form_wrapper') ?? null;

    // BLOG DETAIL hero (`/blog/[slug]`) -- simple fade-ups + image zoom (no SplitText,
    // per Edgar). The article rich text is intentionally NOT animated.
    const blogDetail = __q('.section_blog-hero');
    const bdDate = blogDetail?.querySelector('.font-mono') ?? null;
    const bdH1 = blogDetail?.querySelector('h1') ?? null;
    const bdDesc = blogDetail?.querySelector('.blog-hero_desc') ?? null;
    const bdImg = blogDetail?.querySelector('.blog-hero_visual .img') ?? null;

    // SERVICE DETAIL hero (`/services/[slug]`) -- source hooks animation="hero-icon"
    // (icon), "hero-first" (h1 + body), "hero-img" (image). The by-attribute GSAP lib
    // wasn't exported -> reconstructed in the site's established hero language.
    const svcDetail = __q('.section_service');
    const sdIcon = svcDetail?.querySelector('[animation="hero-icon"]') ?? null;
    const sdH1 = svcDetail?.querySelector('h1') ?? null;
    const sdBody = svcDetail?.querySelector('[animation="hero-first"]:not(h1)') ?? null;
    const sdButtons = svcDetail
      ? Array.from(svcDetail.querySelectorAll('.hero_buttons .button_component'))
      : [];
    const sdImg = svcDetail?.querySelector('.service-hero_img .img') ?? null;

    const guarded = [
      nav, hHeading, hDesc, ...hButtons, ...badges,
      aEyebrow, aH1, aImg, aDesc, aMono, aH2, ...aButtons,
      sEyebrow, sH1, sImg, sDesc, sH2, ...sStats, ...sButtons, ...sBadges,
      bEyebrow, bH1, bDesc, bImg, ...bCard,
      tImg, tH1, ...tText, ...tSocials,
      cEyebrow, cH1, cDesc, ...cData, cForm,
      bdDate, bdH1, bdDesc, bdImg,
      sdIcon, sdH1, sdBody, ...sdButtons, sdImg,
    ].filter(Boolean);

    // Reduced motion: just reveal everything in place, no choreography.
    if (reduce) {
      gsap.set(guarded, { autoAlpha: 1, clearProps: 'transform' });
      return;
    }

    // Set each element's FROM state (offset + autoAlpha:0) up front, so nothing is ever
    // painted at its resting position first -- that was the nav "snap up then down" bug.
    // .to() then animates into place. autoAlpha drives visibility+opacity together.
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Nav drops in from above (every page). The navbar carries a CSS `transition:
    // transform .3s` (sticky hide/show); left on it fights GSAP's per-frame transform
    // (settle -> jump up -> drop). Disable for the intro, restore on complete.
    if (nav) {
      nav.style.transition = 'none';
      tl.fromTo(
        nav,
        { y: -110, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1.1, clearProps: 'transform', onComplete: () => { nav.style.transition = ''; } },
        0
      );
    }

    // ---- HOME ----
    if (hHeading) tl.to(splitLines(hHeading), { yPercent: 0, duration: 1.2, stagger: 0.18 }, 0.2);
    if (hDesc) { gsap.set(hDesc, { y: 32, autoAlpha: 0 }); tl.to(hDesc, { y: 0, autoAlpha: 1, duration: 1.1 }, 0.6); }
    if (hButtons.length) { gsap.set(hButtons, { y: 28, autoAlpha: 0 }); tl.to(hButtons, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.14 }, 0.85); }
    if (badges.length) {
      gsap.set(badges, { scale: 0.5, autoAlpha: 0 });
      tl.to(badges, { scale: 1, autoAlpha: 1, duration: 1.1, stagger: 0.12, ease: 'back.out(1.5)' }, 0.7);
      // Continuous float loop after the appear settles (source `floating=up|down`).
      badges.forEach((b, i) => {
        const dir = b.dataset.float === 'up' ? -1 : 1;
        gsap.to(b, { y: 10 * dir, duration: 2.6 + i * 0.3, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 + i * 0.15 });
      });
    }

    // ---- ABOUT ----
    if (aEyebrow) { gsap.set(aEyebrow, { y: 20, autoAlpha: 0 }); tl.to(aEyebrow, { y: 0, autoAlpha: 1, duration: 1 }, 0.2); }
    if (aH1) tl.to(splitLines(aH1), { yPercent: 0, duration: 1.2, stagger: 0.15 }, 0.3);
    // Image enters with a zoom-out ONLY (no fade -- always visible, per Edgar) inside its
    // clipped wrapper (source scaleIn / hero-user-img). Initial scale 1.25 is set in
    // reveal.css so it's pre-zoomed before paint; here we just animate it back to 1.
    if (aImg) { gsap.set(aImg, { scale: 1.25 }); tl.to(aImg, { scale: 1, duration: 1.4 }, 0.4); }
    if (aDesc) { gsap.set(aDesc, { y: 32, autoAlpha: 0 }); tl.to(aDesc, { y: 0, autoAlpha: 1, duration: 1.1 }, 0.6); }
    if (aMono) { gsap.set(aMono, { y: 24, autoAlpha: 0 }); tl.to(aMono, { y: 0, autoAlpha: 1, duration: 1 }, 0.7); }
    if (aH2) { gsap.set(aH2, { y: 28, autoAlpha: 0 }); tl.to(aH2, { y: 0, autoAlpha: 1, duration: 1.1 }, 0.8); }
    if (aButtons.length) { gsap.set(aButtons, { y: 28, autoAlpha: 0 }); tl.to(aButtons, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.14 }, 0.95); }

    // ---- SERVICES ----
    if (sEyebrow) { gsap.set(sEyebrow, { y: 20, autoAlpha: 0 }); tl.to(sEyebrow, { y: 0, autoAlpha: 1, duration: 1 }, 0.2); }
    if (sH1) tl.to(splitLines(sH1), { yPercent: 0, duration: 1.2, stagger: 0.15 }, 0.3);
    if (sDesc) { gsap.set(sDesc, { y: 32, autoAlpha: 0 }); tl.to(sDesc, { y: 0, autoAlpha: 1, duration: 1.1 }, 0.45); }
    // Image: zoom-out only (no fade -- always visible), initial scale in reveal.css.
    if (sImg) { gsap.set(sImg, { scale: 1.25 }); tl.to(sImg, { scale: 1, duration: 1.4 }, 0.45); }
    if (sH2) { gsap.set(sH2, { y: 28, autoAlpha: 0 }); tl.to(sH2, { y: 0, autoAlpha: 1, duration: 1.1 }, 0.6); }
    if (sStats.length) { gsap.set(sStats, { y: 24, autoAlpha: 0 }); tl.to(sStats, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.12 }, 0.7); }
    if (sButtons.length) { gsap.set(sButtons, { y: 28, autoAlpha: 0 }); tl.to(sButtons, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.14 }, 0.75); }
    if (sBadges.length) { gsap.set(sBadges, { scale: 0.5, autoAlpha: 0 }); tl.to(sBadges, { scale: 1, autoAlpha: 1, duration: 1, stagger: 0.1, ease: 'back.out(1.5)' }, 0.65); }

    // ---- BLOG ----
    if (bEyebrow) { gsap.set(bEyebrow, { y: 20, autoAlpha: 0 }); tl.to(bEyebrow, { y: 0, autoAlpha: 1, duration: 1 }, 0.2); }
    if (bH1) tl.to(splitLines(bH1), { yPercent: 0, duration: 1.2, stagger: 0.15 }, 0.3);
    if (bDesc) { gsap.set(bDesc, { y: 32, autoAlpha: 0 }); tl.to(bDesc, { y: 0, autoAlpha: 1, duration: 1.1 }, 0.45); }
    if (bImg) { gsap.set(bImg, { scale: 1.25 }); tl.to(bImg, { scale: 1, duration: 1.4 }, 0.45); }
    if (bCard.length) { gsap.set(bCard, { y: 28, autoAlpha: 0 }); tl.to(bCard, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.1 }, 0.6); }

    // ---- TEAM ----
    if (tImg) { gsap.set(tImg, { scale: 1.25 }); tl.to(tImg, { scale: 1, duration: 1.4 }, 0.3); }
    if (tH1) tl.to(splitLines(tH1), { yPercent: 0, duration: 1.2, stagger: 0.15 }, 0.3);
    if (tText.length) { gsap.set(tText, { y: 28, autoAlpha: 0 }); tl.to(tText, { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.12 }, 0.5); }
    if (tSocials.length) { gsap.set(tSocials, { y: 24, autoAlpha: 0 }); tl.to(tSocials, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.1 }, 0.7); }

    // ---- CONTACT ----
    if (cEyebrow) { gsap.set(cEyebrow, { y: 20, autoAlpha: 0 }); tl.to(cEyebrow, { y: 0, autoAlpha: 1, duration: 1 }, 0.2); }
    if (cH1) tl.to(splitLines(cH1), { yPercent: 0, duration: 1.2, stagger: 0.15 }, 0.3);
    if (cDesc) { gsap.set(cDesc, { y: 32, autoAlpha: 0 }); tl.to(cDesc, { y: 0, autoAlpha: 1, duration: 1.1 }, 0.45); }
    if (cForm) { gsap.set(cForm, { y: 32, autoAlpha: 0 }); tl.to(cForm, { y: 0, autoAlpha: 1, duration: 1.1 }, 0.5); }
    if (cData.length) { gsap.set(cData, { y: 24, autoAlpha: 0 }); tl.to(cData, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.1 }, 0.55); }

    // ---- BLOG DETAIL ---- (simple: meta + title + desc fade up, image zooms)
    if (bdDate) { gsap.set(bdDate, { y: 20, autoAlpha: 0 }); tl.to(bdDate, { y: 0, autoAlpha: 1, duration: 1 }, 0.2); }
    if (bdH1) { gsap.set(bdH1, { y: 28, autoAlpha: 0 }); tl.to(bdH1, { y: 0, autoAlpha: 1, duration: 1.1 }, 0.3); }
    if (bdDesc) { gsap.set(bdDesc, { y: 32, autoAlpha: 0 }); tl.to(bdDesc, { y: 0, autoAlpha: 1, duration: 1.1 }, 0.45); }
    if (bdImg) { gsap.set(bdImg, { scale: 1.25 }); tl.to(bdImg, { scale: 1, duration: 1.4 }, 0.4); }

    // ---- SERVICE DETAIL ---- (icon pop, SplitText h1, body + button fade-up, image zoom)
    if (sdIcon) { gsap.set(sdIcon, { scale: 0.5, autoAlpha: 0 }); tl.to(sdIcon, { scale: 1, autoAlpha: 1, duration: 1, ease: 'back.out(1.5)' }, 0.2); }
    if (sdH1) tl.to(splitLines(sdH1), { yPercent: 0, duration: 1.2, stagger: 0.15 }, 0.3);
    if (sdBody) { gsap.set(sdBody, { y: 32, autoAlpha: 0 }); tl.to(sdBody, { y: 0, autoAlpha: 1, duration: 1.1 }, 0.5); }
    if (sdButtons.length) { gsap.set(sdButtons, { y: 28, autoAlpha: 0 }); tl.to(sdButtons, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.14 }, 0.65); }
    if (sdImg) { gsap.set(sdImg, { scale: 1.25 }); tl.to(sdImg, { scale: 1, duration: 1.4 }, 0.4); }
  }

  function start() {
    // Wait for fonts so SplitText measures correct line breaks; fall back after 1.5s.
    const fontsReady =
      'fonts' in document ? document.fonts.ready : Promise.resolve();
    Promise.race([fontsReady, new Promise((r) => setTimeout(r, 1500))]).then(() => {
      try {
        run();
      } catch {
        // Never leave the hero hidden if anything throws.
        document.documentElement.classList.remove('reveal-on');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();


/* button-hover.js */
// Button hover -- per-letter slide + button press (Phase 5B).
//
// Source effect (driven by the GSAP-attribute custom code that wasn't exported;
// reconstructed to the remembered spec): the label is split into letters; on hover
// each letter slides up 1.5rem (staggered) while the button scales down to 0.95.
// `.button_text` carries `text-shadow: 0 1.5rem 0 <text colour>` (webflow.css) -- a
// clone of each letter 1.5rem below, clipped by `.button_mask` (overflow:hidden) --
// so as a letter slides up, its shadow lands exactly where it was: a per-letter
// self-swap. Letters move UP (negative) so the +1.5rem shadow takes their place.
//
// GSAP-only (no CSS :hover) -- a CSS transform-transition would fight the per-frame
// writes (same class of bug as the navbar intro). prefers-reduced-motion -> static.
(function () {
  gsap.registerPlugin(SplitText);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const MOVE = '-1.5rem';
  // Nav links use em (not rem): the clone offset is `1.5em` in CSS (relative to the
  // link's own font-size), so the GSAP travel must match in the same unit.
  const NAV_MOVE = '-1.5em';
  const TEXT = { duration: 0.635, ease: 'power4.inOut', stagger: { amount: 0.1 } };
  const SCALE = { duration: 0.5, ease: 'sine.inOut' };

  function initButtonHovers() {
    if (reduce) return;

    __qa('.button_component').forEach((btn) => {
      const textEl = btn.querySelector('.button_text');
      if (!textEl) return;

      const chars = new SplitText(textEl, { type: 'chars' }).chars;

      btn.addEventListener('mouseenter', () => {
        gsap.to(chars, { y: MOVE, ...TEXT, overwrite: 'auto' });
        gsap.to(btn, { scale: 0.95, ...SCALE, overwrite: 'auto' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(chars, { y: 0, ...TEXT, overwrite: 'auto' });
        gsap.to(btn, { scale: 1, ...SCALE, overwrite: 'auto' });
      });
    });
  }

  // Nav links -- same per-letter swap as the buttons (no button scale). The clone is
  // `.nav_link-text`'s `text-shadow: ...currentColor` (components.css), masked by its
  // overflow:hidden. Hover is bound on the whole `<a>` so the full link is the target.
  function initNavLinkHovers() {
    if (reduce) return;

    __qa('.nav_links').forEach((link) => {
      const textEl = link.querySelector('.nav_link-text');
      if (!textEl) return;

      const chars = new SplitText(textEl, { type: 'chars' }).chars;

      link.addEventListener('mouseenter', () => {
        gsap.to(chars, { y: NAV_MOVE, ...TEXT, overwrite: 'auto' });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(chars, { y: 0, ...TEXT, overwrite: 'auto' });
      });
    });
  }

  function init() {
    initButtonHovers();
    initNavLinkHovers();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


/* script.js */
// upmind-contact-section — form demo handler only.
//
// The intro reveal (left info column + form) and the submit button's per-letter
// hover are supplied by the shared classic scripts loaded in index.html:
//   /upmind/scripts/hero-load.js   — reveals the .section_contact eyebrow, the
//     SplitText h1, the description, each .contact_data row, and the .form_wrapper
//     on page load (self-initializes; degrades to "show everything" under
//     prefers-reduced-motion).
//   /upmind/scripts/button-hover.js — the slide + press micro-interaction on the
//     submit .button_component (self-initializes on DOM ready).
//
// Hidden start-states live in /upmind/styles.css, gated on `html.reveal-on`, so
// if JS fails the content stays fully visible.
//
// This standalone port has no SSR backend (the source Astro build was static and
// shipped no server endpoint). Demo behavior only: intercept submit, hide the
// form, reveal the .w-form-done success block — mirrors the source component.
(function () {
  __qa("form#wf-form-Form").forEach(function (form) {
    var wrapper = form.closest(".w-form");
    var done = wrapper ? wrapper.querySelector(".w-form-done") : null;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.style.display = "none";
      if (done) done.style.display = "block";
    });
  });
})();

})();