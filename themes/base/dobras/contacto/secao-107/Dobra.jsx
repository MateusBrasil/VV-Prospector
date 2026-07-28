"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-107
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
gsap.registerPlugin(ScrollTrigger);
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   // Acelia — Hero
  //   // =============
  //   // Three things happen in this file, in order:
  //   //   1. Hamburger drawer toggle (tablet / mobile navbar).
  //   //   2. Navbar entrance — fade-down stagger of brand + links + CTA + toggle.
  //   //   3. Hero master timeline — headline split, subhead, CTA, portrait curtain
  //   //      reveal, and the two floating UI cards (Strategy + Financial).
  //   //
  //   // GSAP and the SplitText / ScrollTrigger plugins are loaded as CDN globals
  //   // in index.html, so we use window.gsap, window.SplitText, window.ScrollTrigger
  //   // directly. ScrollTrigger has to be registered before it can attach to a
  //   // timeline.
  //   
  //   if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
  //     window.gsap.registerPlugin(window.ScrollTrigger);
  //   }
  //   
  //   // ─────────────────────────────────────────────────────────────────────────
  //   //  1 · Hamburger drawer
  //   // ─────────────────────────────────────────────────────────────────────────
  //   //  Opens/closes the nav drawer on tablet/mobile. Closes on Escape, on link
  //   //  click inside the drawer, and on outside click.
  //   const navbars = document.querySelectorAll('.navbar');
  //   
  //   navbars.forEach((navbar) => {
  //     const toggle = navbar.querySelector('[data-navbar-toggle]');
  //     const drawer = navbar.querySelector('[data-navbar-drawer]');
  //     if (!toggle || !drawer) return;
  //   
  //     // Keep [hidden] off once JS owns visibility — CSS classes drive state now.
  //     drawer.removeAttribute('hidden');
  //   
  //     function setOpen(open) {
  //       toggle.setAttribute('aria-expanded', String(open));
  //       toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  //       drawer.classList.toggle('is-open', open);
  //     }
  //   
  //     toggle.addEventListener('click', () => {
  //       const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  //       setOpen(!isOpen);
  //     });
  //   
  //     // Close the drawer when any link inside it is clicked.
  //     drawer.addEventListener('click', (e) => {
  //       const t = e.target;
  //       if (t.closest && t.closest('a')) setOpen(false);
  //     });
  //   
  //     // Close on Escape.
  //     document.addEventListener('keydown', (e) => {
  //       if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
  //         setOpen(false);
  //         toggle.focus();
  //       }
  //     });
  //   
  //     // Close on outside click.
  //     document.addEventListener('click', (e) => {
  //       if (toggle.getAttribute('aria-expanded') !== 'true') return;
  //       const t = e.target;
  //       if (navbar.contains(t)) return;
  //       setOpen(false);
  //     });
  //   });
  //   
  //   // ─────────────────────────────────────────────────────────────────────────
  //   //  2 · Navbar entrance — fade-down stagger
  //   // ─────────────────────────────────────────────────────────────────────────
  //   //  Same offsets and ease as the original Hero master-timeline step
  //   //  (delay 0.15s, duration 0.7s, stagger 0.06s, power3.out) so the rest of
  //   //  the hero choreography below lines up with the navbar's settle.
  //   function initNavbarEntrance() {
  //     if (typeof window.gsap === 'undefined') return;
  //   
  //     const navbar = document.querySelector('.navbar');
  //     if (!navbar) return;
  //   
  //     const brand     = navbar.querySelector('.navbar__brand');
  //     const navLinks  = Array.from(navbar.querySelectorAll('.navbar__links > li'));
  //     const navCta    = navbar.querySelector('.navbar__cta');
  //     const navToggle = navbar.querySelector('.navbar__toggle');
  //   
  //     const items = [brand, ...navLinks, navCta, navToggle].filter(Boolean);
  //     if (!items.length) return;
  //   
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     if (reduce) {
  //       window.gsap.set(items, { y: 0, autoAlpha: 1 });
  //       return;
  //     }
  //   
  //     window.gsap.set(items, { y: -14, autoAlpha: 0 });
  //     window.gsap.to(items, {
  //       y: 0,
  //       autoAlpha: 1,
  //       duration: 0.7,
  //       ease: 'power3.out',
  //       stagger: 0.06,
  //       delay: 0.15,
  //       clearProps: 'translate,rotate,scale,transform',
  //     });
  //   }
  //   
  //   // ─────────────────────────────────────────────────────────────────────────
  //   //  3 · Hero master entrance timeline
  //   // ─────────────────────────────────────────────────────────────────────────
  //   //  Information hierarchy driving the staggered sequence:
  //   //
  //   //    Navbar  →  Headline  →  Sub-head + CTA  →  Portrait  →  UI cards
  //   //
  //   //  Every ease is power3.out or power4.out — no elastic, no back, no bounce.
  //   //  The longer durations on the image + cards give a cinematic, "expensive"
  //   //  deceleration that feels like momentum easing into place.
  //   //
  //   //  Rationale for timings (seconds, relative to timeline 0):
  //   //    0.00  Navbar fade-down (0.7s, stagger 0.06) — establishes brand quickly.
  //   //    0.35  H1 masked line reveal (1.0s, power4.out, stagger 0.08) — hero moment.
  //   //    0.65  Portrait curtain reveal (1.2s, power3.out) — unfurls top-down.
  //   //    0.70  Sub-head + primary button rise in (0.7s) — reinforces the claim.
  //   //    0.95  Strategy card scale 0.9 → 1.0 + fade (0.8s) — parallax accent.
  //   //    1.10  Strategy internals (icon, text, progress, counter).
  //   //    1.10  Financial card — same sub-sequence, either joined here if
  //   //          visible on load, or deferred via ScrollTrigger otherwise.
  //   function initHeroMasterTimeline() {
  //     if (typeof window.gsap === 'undefined') return;
  //   
  //     const gsap = window.gsap;
  //     const SplitText = window.SplitText;
  //     const ScrollTrigger = window.ScrollTrigger;
  //   
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     // ── Element lookups ─────────────────────────────────────────────────
  //     //    All queries are made once. Missing nodes are tolerated — the timeline
  //     //    skips whatever isn't on the page so this stays portable.
  //     // Navbar items animate themselves (initNavbarEntrance above).
  //     // The Hero master timeline only owns the rest of the hero composition.
  //     const heading     = document.querySelector('.hero__heading');
  //     const subheading  = document.querySelector('.hero__subheading');
  //     const heroCta     = document.querySelector('.hero__content .btn--hero');
  //     const imageCard   = document.querySelector('.hero__imageCard');
  //     const imageReveal = document.querySelector('[data-image-reveal]');
  //     const strategy    = document.querySelector('[data-strategy-card]');
  //     const financial   = document.querySelector('[data-financial-card]');
  //   
  //     // Strategy card contents
  //     const strategyIcon    = strategy && strategy.querySelector('[data-strategy-icon]');
  //     const strategyLines   = strategy && strategy.querySelectorAll('[data-strategy-split]');
  //     const strategyProg    = strategy && strategy.querySelector('[data-strategy-progress]');
  //     const strategyFill    = strategy && strategy.querySelector('[data-strategy-fill]');
  //     const strategyCounter = strategy && strategy.querySelector('[data-strategy-counter]');
  //     const targetPct = strategyCounter
  //       ? parseFloat(strategyCounter.getAttribute('data-strategy-target')) || 80
  //       : 80;
  //   
  //     // Financial card contents
  //     const finHeader = financial && financial.querySelector('[data-financial-header]');
  //     const finBars   = financial ? [...financial.querySelectorAll('[data-financial-bar]')] : [];
  //     const finLabels = financial ? [...financial.querySelectorAll('[data-financial-label]')] : [];
  //   
  //     // ── Split the H1 into per-word spans (Heading Stagger pattern) ──────
  //     //    Each word starts at yPercent: 50 (above its final position) and drops
  //     //    down to 0 with a fade — the reveal reads as the heading composing
  //     //    itself word by word.
  //     let headingWords = [];
  //     if (heading && typeof SplitText !== 'undefined') {
  //       headingWords = SplitText.create(heading, { type: 'words' }).words;
  //     }
  //   
  //     // ── Split the strategy card text into per-char spans ────────────────
  //     //    Kept so the inner text reveal still feels crafted after the card
  //     //    has arrived.
  //     const strategyChars = [];
  //     if (strategyLines && strategyLines.length) {
  //       strategyLines.forEach((line) => {
  //         const raw = line.textContent;
  //         line.textContent = '';
  //         [...raw].forEach((ch) => {
  //           const span = document.createElement('span');
  //           span.textContent = ch;
  //           span.style.display = 'inline-block';
  //           if (ch === ' ') span.style.whiteSpace = 'pre';
  //           line.appendChild(span);
  //           strategyChars.push(span);
  //         });
  //       });
  //     }
  //   
  //     // ── Prime initial states ────────────────────────────────────────────
  //     // Navbar prime/tween lives in initNavbarEntrance. We only handle the
  //     // hero-specific elements below.
  //   
  //     if (headingWords.length) gsap.set(headingWords, { yPercent: 50, autoAlpha: 0 });
  //   
  //     if (subheading) gsap.set(subheading, { y: 24, autoAlpha: 0 });
  //     if (heroCta)    gsap.set(heroCta,    { y: 24, autoAlpha: 0 });
  //   
  //     // Curtain reveal — the inner wrapper starts at height 0. As it grows
  //     // to 100% the image (sized to the card, not the wrapper) is uncovered
  //     // top-down without moving. overflow: hidden on the wrapper does the clipping.
  //     if (imageReveal) gsap.set(imageReveal, { height: 0 });
  //   
  //     if (strategy)  gsap.set(strategy,  { autoAlpha: 0, scale: 0.9, y: 14, transformOrigin: 'center center' });
  //     if (financial) gsap.set(financial, { autoAlpha: 0, scale: 0.9, y: 14, transformOrigin: 'center center' });
  //   
  //     // Strategy card internal state
  //     if (strategyIcon)    gsap.set(strategyIcon,    { autoAlpha: 0, scale: 0.8, transformOrigin: 'center center' });
  //     if (strategyChars.length) gsap.set(strategyChars, { autoAlpha: 0, y: 8 });
  //     if (strategyProg)    gsap.set(strategyProg,    { autoAlpha: 0 });
  //     if (strategyFill)    gsap.set(strategyFill,    { width: '0%' });
  //     if (strategyCounter) strategyCounter.textContent = '0%';
  //   
  //     // Financial card internal state
  //     if (finHeader) gsap.set(finHeader, { autoAlpha: 0, y: 8 });
  //     if (finBars.length)   gsap.set(finBars,   { scaleY: 0, transformOrigin: 'bottom center' });
  //     if (finLabels.length) gsap.set(finLabels, { autoAlpha: 0, y: 6 });
  //   
  //     // ── Reduced motion shortcut ─────────────────────────────────────────
  //     if (reduce) {
  //       const reveal = [
  //         subheading, heroCta, imageCard,
  //         strategy, financial,
  //         strategyIcon, strategyProg, finHeader,
  //       ].filter(Boolean);
  //       gsap.set(reveal, { y: 0, autoAlpha: 1, scale: 1 });
  //       if (headingWords.length) gsap.set(headingWords, { yPercent: 0, autoAlpha: 1 });
  //       if (imageReveal) gsap.set(imageReveal, { height: '100%' });
  //       if (strategyChars.length) gsap.set(strategyChars, { autoAlpha: 1, y: 0 });
  //       if (strategyFill) gsap.set(strategyFill, { width: targetPct + '%' });
  //       if (strategyCounter) strategyCounter.textContent = targetPct + '%';
  //       if (finBars.length) gsap.set(finBars, { scaleY: 1 });
  //       if (finLabels.length) gsap.set(finLabels, { autoAlpha: 1, y: 0 });
  //       return;
  //     }
  //   
  //     // ── Master timeline ─────────────────────────────────────────────────
  //     const tl = gsap.timeline({ delay: 0.15 });
  //   
  //     // 1 · Navbar entrance runs from initNavbarEntrance.
  //     //    The master timeline below picks up at the same delay so the rest
  //     //    of the hero choreography lines up with the navbar's settle.
  //   
  //     // 2 · H1 word stagger (0.35s) — Heading Stagger pattern.
  //     //    Words drop down from yPercent: 50 → 0 with a fade. power3.out +
  //     //    0.06 stagger + 0.8s duration is the project's house spec.
  //     if (headingWords.length) {
  //       tl.to(headingWords, {
  //         yPercent: 0,
  //         autoAlpha: 1,
  //         duration: 0.8,
  //         ease: 'power3.out',
  //         stagger: 0.06,
  //       }, 0.35);
  //     }
  //   
  //     // 3 · Sub-head + primary CTA (0.55s)
  //     //    Overlaps the H1 reveal by ~0.45s — the eye catches the sub-head just
  //     //    as the final line of the headline starts to settle, so the composition
  //     //    fills in quickly instead of waiting.
  //     //    clearProps lets the hero "Get Started" button accept CSS :hover scale.
  //     const copyTargets = [subheading, heroCta].filter(Boolean);
  //     if (copyTargets.length) {
  //       tl.to(copyTargets, {
  //         y: 0,
  //         autoAlpha: 1,
  //         duration: 0.5,
  //         ease: 'power3.out',
  //         stagger: 0.06,
  //         clearProps: 'translate,rotate,scale,transform',
  //       }, 0.55);
  //     }
  //   
  //     // 4 · Portrait — curtain reveal (0.65s)
  //     //    The reveal wrapper's height animates 0 → 100% with a smooth
  //     //    ease-out, unfurling the image like a curtain dropping. Because
  //     //    the image itself is sized via 100cqh/cqw against the card, the
  //     //    portrait stays anchored at the top while the wrapper grows.
  //     if (imageReveal) {
  //       tl.to(imageReveal, {
  //         height: '100%',
  //         duration: 1.2,
  //         ease: 'power3.out',
  //       }, 0.65);
  //     }
  //   
  //     // Idle float — once the card is settled, we keep it gently breathing up
  //     // and down forever. `sine.inOut` is the right curve for symmetric yoyo
  //     // motion (anything one-sided creates a tiny "lurch" at the midpoint).
  //     // Each card uses a slightly different duration so the two cards never
  //     // sync — reads like two leaves drifting in different breezes.
  //     function startFloaterIdle(el, distance, duration) {
  //       if (!el) return;
  //       gsap.to(el, {
  //         y: -distance,
  //         duration,
  //         ease: 'sine.inOut',
  //         repeat: -1,
  //         yoyo: true,
  //       });
  //     }
  //   
  //     // 5 · UI cards initial arrival (0.95s)
  //     //    Only the Strategy card animates on page load — it sits at the top of
  //     //    the image and is always in view. The Financial card lives at the
  //     //    bottom and often starts off-screen on shorter desktops, so its
  //     //    animation is deferred to a ScrollTrigger timeline below.
  //     if (strategy) {
  //       tl.to(strategy, {
  //         autoAlpha: 1,
  //         scale: 1,
  //         y: 0,
  //         duration: 0.8,
  //         ease: 'power3.out',
  //         onComplete: () => startFloaterIdle(strategy, 8, 3.0),
  //       }, 0.95);
  //     }
  //   
  //     // 6 · Strategy card internals — start while the card is still animating
  //     //    in, so there's no "blank white rectangle" moment. Icon + text kick
  //     //    off ~0.15s after the card starts appearing; progress/counter follow.
  //     if (strategyIcon) {
  //       tl.to(strategyIcon, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'power3.out' }, 1.10);
  //     }
  //     if (strategyChars.length) {
  //       tl.to(strategyChars, {
  //         autoAlpha: 1,
  //         y: 0,
  //         duration: 0.45,
  //         ease: 'power3.out',
  //         stagger: { amount: 0.3 },
  //       }, 1.20);
  //     }
  //     if (strategyProg) tl.to(strategyProg, { autoAlpha: 1, duration: 0.35, ease: 'power2.out' }, 1.35);
  //     if (strategyFill) tl.to(strategyFill, { width: targetPct + '%', duration: 1.1, ease: 'power4.out' }, 1.35);
  //     if (strategyCounter) {
  //       const counterObj = { n: 0 };
  //       tl.to(counterObj, {
  //         n: targetPct,
  //         duration: 1.1,
  //         ease: 'power4.out',
  //         onUpdate: () => { strategyCounter.textContent = Math.round(counterObj.n) + '%'; },
  //         onComplete: () => { strategyCounter.textContent = targetPct + '%'; },
  //       }, 1.35);
  //     }
  //   
  //     // 7 · Financial card — the entrance is viewport-aware.
  //     //    If the card is already visible at first paint, it joins the master
  //     //    timeline alongside the rest of the hero so the whole composition
  //     //    lands as one choreographed sequence. If it sits below the fold
  //     //    (short desktops), we defer to a ScrollTrigger so the animation
  //     //    fires the moment the user scrolls it into view. Same sub-sequence
  //     //    either way — only the scope changes.
  //     const animateFinancial = (scope, basePos) => {
  //       if (!financial) return;
  //       scope.to(financial, {
  //         autoAlpha: 1,
  //         scale: 1,
  //         y: 0,
  //         duration: 0.8,
  //         ease: 'power3.out',
  //         onComplete: () => startFloaterIdle(financial, 7, 3.4),
  //       }, basePos);
  //   
  //       const internals = basePos + 0.15;
  //       if (finHeader) {
  //         scope.to(finHeader, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out' }, internals);
  //       }
  //       if (finBars.length) {
  //         scope.to(finBars, {
  //           scaleY: 1,
  //           duration: 0.8,
  //           ease: 'power4.out',
  //           stagger: 0.05,
  //         }, internals + 0.15);
  //         scope.to(finLabels, {
  //           autoAlpha: 1,
  //           y: 0,
  //           duration: 0.35,
  //           ease: 'power2.out',
  //           stagger: 0.05,
  //         }, internals + 0.35);
  //   
  //         const active = finBars.find((b) => b.getAttribute('data-financial-active') === 'true');
  //         if (active) {
  //           scope.call(() => {
  //             active.classList.add('is-pulsing');
  //             active.addEventListener('animationend', () => {
  //               active.classList.remove('is-pulsing');
  //             }, { once: true });
  //           }, [], internals + 1.0);
  //         }
  //       }
  //     };
  //   
  //     if (financial) {
  //       // Viewport check matches ScrollTrigger's default 'top 88%' threshold
  //       // so both branches fire at the same perceived "in view" moment.
  //       const rect = financial.getBoundingClientRect();
  //       const visibleOnLoad = rect.top < window.innerHeight * 0.88;
  //   
  //       if (visibleOnLoad) {
  //         animateFinancial(tl, 1.10);
  //       } else if (typeof ScrollTrigger !== 'undefined') {
  //         const finTl = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: financial,
  //             start: 'top 88%',
  //             once: true,
  //           },
  //         });
  //         animateFinancial(finTl, 0);
  //       } else {
  //         // No ScrollTrigger available — fall back to the master timeline.
  //         animateFinancial(tl, 1.10);
  //       }
  //     }
  //   }
  //   
  //   // Kick off both animation initialisers.
  //   function bootHero() {
  //     initNavbarEntrance();
  //     initHeroMasterTimeline();
  //   }
  //   
  //   if (document.readyState === 'loading') {
  //     document.addEventListener('DOMContentLoaded', () => setTimeout(bootHero, 0));
  //   } else {
  //     setTimeout(bootHero, 0);
  //   }
  //   
  //   /* Acelia button character-stagger hover.
  //    *
  //    * Wraps every .btn label (plus the case-study CTA, primary nav links and footer
  //    * links) in <span class="btn__text" data-button-animate-chars> containing one
  //    * <span> per character, each with a staggered transition-delay. The CSS in
  //    * global.css drives the roll-up on hover (.btn__text span → translateY(-1.3em),
  //    * with a text-shadow duplicate sliding in from below); this script only builds
  //    * the structure and also lifts the label above the circle-fill disc.
  //    *
  //    * Ported from the source template's BaseLayout.astro (a site-wide script that was
  //    * lost when the sections were migrated to standalone components). Per the porting
  //    * rules this is a plain global that self-initializes — no top-level export.
  //    */
  //   (function () {
  //     function initButtonCharacterStagger() {
  //       const offsetIncrement = 0.01; // seconds between each character
  //       // Targets: all .btn, the case-study "Learn more" CTA, primary desktop nav
  //       // links (but not the "More Links" dropdown toggle), and footer links.
  //       const buttons = document.querySelectorAll(
  //         ".btn, .cases__cta, .navbar__link:not(.navbar__linkMoreBtn), .footer__link"
  //       );
  //   
  //       buttons.forEach((btn) => {
  //         // Skip if already initialized (re-run / hot reload) or already wrapped.
  //         if (btn.dataset.charStaggerInit === "true" || btn.querySelector(".btn__text")) {
  //           btn.dataset.charStaggerInit = "true";
  //           return;
  //         }
  //         const text = btn.textContent.trim();
  //         if (!text) return;
  //         btn.dataset.charStaggerInit = "true";
  //         btn.textContent = "";
  //   
  //         const textEl = document.createElement("span");
  //         textEl.className = "btn__text";
  //         textEl.setAttribute("data-button-animate-chars", "");
  //   
  //         [...text].forEach((char, index) => {
  //           const span = document.createElement("span");
  //           span.textContent = char;
  //           span.style.transitionDelay = `${index * offsetIncrement}s`;
  //           if (char === " ") span.style.whiteSpace = "pre";
  //           textEl.appendChild(span);
  //         });
  //   
  //         btn.appendChild(textEl);
  //       });
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", initButtonCharacterStagger);
  //     } else {
  //       initButtonCharacterStagger();
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="contacto-secao-107" ref={raiz}>
      <section className="hero" aria-label="Hero">
            
            <nav className="navbar" aria-label="Primary">
              <div className="navbar__inner">
                <div className="navbar__left">
                  <a href="/" className="navbar__brand" aria-label="Acelia home">
                    <img src={s.imagem} alt="Acelia" width="92" height="32" className="navbar__logo" />
                  </a>
      
                  <ul className="navbar__links">
                    <li><a href="/about" className="navbar__link">{s.acao}</a></li>
                    <li><a href="/services" className="navbar__link">{s.acao2}</a></li>
                    <li><a href="/case-studies" className="navbar__link">{s.acao3}</a></li>
                    <li><a href="/blog" className="navbar__link">{s.acao4}</a></li>
                  </ul>
                </div>
      
                <div className="navbar__right">
                  <a href="/contact" className="btn navbar__cta">{s.acao5}</a>
      
                  <button type="button" className="navbar__toggle" aria-label="Open menu" aria-expanded="false" aria-controls="navbar-drawer" data-navbar-toggle="" onClick={s.onClick}>
                    <span className="navbar__toggleBar" aria-hidden="true"></span>
                    <span className="navbar__toggleBar" aria-hidden="true"></span>
                    <span className="navbar__toggleBar" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
      
              <div id="navbar-drawer" className="navbar__drawer" data-navbar-drawer="" hidden="">
                <ul className="navbar__drawerLinks">
                  <li><a href="/about" className="navbar__drawerLink">{s.acao6}</a></li>
                  <li><a href="/services" className="navbar__drawerLink">{s.acao7}</a></li>
                  <li><a href="/case-studies" className="navbar__drawerLink">{s.acao8}</a></li>
                  <li><a href="/blog" className="navbar__drawerLink">{s.acao9}</a></li>
                  <li className="navbar__drawerCtaItem">
                    <a href="/contact" className="btn navbar__drawerCta">{s.acao10}</a>
                  </li>
                </ul>
              </div>
            </nav>
      
            <div className="hero__inner">
              <div className="hero__content">
                <div className="hero__text">
                  <h1 className="hero__heading"><span className="hero__headingLine">{s.rotulo}</span> <span className="hero__headingLine">{s.rotulo2}</span></h1>
                  <p className="hero__subheading">{s.texto}</p>
                </div>
                <a href="/contact" className="btn btn--hero">{s.acao11}</a>
              </div>
      
              <div className="hero__imageCard">
                <div className="hero__imageReveal" data-image-reveal="">
                  <img src={s.imagem2} alt="Professional woman — Acelia client portrait" width="1224" height="816" className="hero__image" loading="eager" />
                </div>
      
                <article className="hero__floater hero__floater--strategy" data-strategy-card="">
                  <header className="hero__floaterHeader">
                    <div className="hero__floaterIcon" data-strategy-icon="">
                      <img src={s.imagem3} alt="" width="20" height="20" aria-hidden="true" />
                    </div>
                    <div className="hero__floaterText">
                      <p className="hero__floaterTitle" data-strategy-split="">{s.texto2}</p>
                      <p className="hero__floaterDesc" data-strategy-split="">{s.texto3}</p>
                    </div>
                  </header>
                  <div className="hero__progress" role="img" aria-label="80% complete" data-strategy-progress="">
                    <div className="hero__progressFill" data-strategy-fill="">
                      <span className="hero__progressLabel" data-strategy-counter="" data-strategy-target="80">{s.rotulo3}</span>
                    </div>
                    <div className="hero__progressTrack" aria-hidden="true"></div>
                  </div>
                </article>
      
                <article className="hero__floater hero__floater--financial" data-financial-card="">
                  <header className="hero__floaterText" data-financial-header="">
                    <p className="hero__floaterTitle">{s.texto4}</p>
                    <p className="hero__floaterDesc">{s.texto5}</p>
                  </header>
                  <div className="hero__chart" role="img" aria-label="Weekly activity chart">
                    <div className="hero__chartDay">
                      <span className="hero__chartBar" style={{height: '3.5625em'}} aria-hidden="true" data-financial-bar="" data-financial-active="false"></span>
                      <span className="hero__chartLabel" data-financial-label="">{s.rotulo4}</span>
                    </div>
                    <div className="hero__chartDay">
                      <span className="hero__chartBar" style={{height: '4.125em'}} aria-hidden="true" data-financial-bar="" data-financial-active="false"></span>
                      <span className="hero__chartLabel" data-financial-label="">{s.rotulo5}</span>
                    </div>
                    <div className="hero__chartDay">
                      <span className="hero__chartBar" style={{height: '4.875em'}} aria-hidden="true" data-financial-bar="" data-financial-active="false"></span>
                      <span className="hero__chartLabel" data-financial-label="">{s.rotulo6}</span>
                    </div>
                    <div className="hero__chartDay">
                      <span className="hero__chartBar hero__chartBar--active" style={{height: '5.125em'}} aria-hidden="true" data-financial-bar="" data-financial-active="true"></span>
                      <span className="hero__chartLabel" data-financial-label="">{s.rotulo7}</span>
                    </div>
                    <div className="hero__chartDay">
                      <span className="hero__chartBar" style={{height: '3.875em'}} aria-hidden="true" data-financial-bar="" data-financial-active="false"></span>
                      <span className="hero__chartLabel" data-financial-label="">{s.rotulo8}</span>
                    </div>
                    <div className="hero__chartDay">
                      <span className="hero__chartBar" style={{height: '3.5625em'}} aria-hidden="true" data-financial-bar="" data-financial-active="false"></span>
                      <span className="hero__chartLabel" data-financial-label="">{s.rotulo9}</span>
                    </div>
                    <div className="hero__chartDay">
                      <span className="hero__chartBar" style={{height: '5.25em'}} aria-hidden="true" data-financial-bar="" data-financial-active="false"></span>
                      <span className="hero__chartLabel" data-financial-label="">{s.rotulo10}</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
    </section>
  );
}