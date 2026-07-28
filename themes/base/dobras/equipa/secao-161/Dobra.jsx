"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-161
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
  //   // Acelia — AboutHero entrance choreography + Navbar entrance + drawer toggle.
  //   // GSAP and SplitText are loaded from CDN as globals (window.gsap, window.SplitText).
  //   
  //   // ── Navbar drawer (hamburger toggle) ─────────────────────────────────────
  //   (function initNavbarDrawer() {
  //     const navbars = document.querySelectorAll('.navbar');
  //   
  //     navbars.forEach((navbar) => {
  //       const toggle = navbar.querySelector('[data-navbar-toggle]');
  //       const drawer = navbar.querySelector('[data-navbar-drawer]');
  //       if (!toggle || !drawer) return;
  //   
  //       // Keep [hidden] off once JS owns visibility — CSS classes drive state now.
  //       drawer.removeAttribute('hidden');
  //   
  //       function setOpen(open) {
  //         toggle.setAttribute('aria-expanded', String(open));
  //         toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  //         drawer.classList.toggle('is-open', open);
  //       }
  //   
  //       toggle.addEventListener('click', () => {
  //         const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  //         setOpen(!isOpen);
  //       });
  //   
  //       // Close the drawer when any link inside it is clicked.
  //       drawer.addEventListener('click', (e) => {
  //         const t = e.target;
  //         if (t.closest('a')) setOpen(false);
  //       });
  //   
  //       // Close on Escape.
  //       document.addEventListener('keydown', (e) => {
  //         if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
  //           setOpen(false);
  //           toggle.focus();
  //         }
  //       });
  //   
  //       // Close on outside click.
  //       document.addEventListener('click', (e) => {
  //         if (toggle.getAttribute('aria-expanded') !== 'true') return;
  //         const t = e.target;
  //         if (navbar.contains(t)) return;
  //         setOpen(false);
  //       });
  //     });
  //   })();
  //   
  //   // ── Navbar entrance — fade-down stagger ───────────────────────────────────
  //   function initNavbarEntrance() {
  //     if (typeof gsap === 'undefined') return;
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
  //       gsap.set(items, { y: 0, autoAlpha: 1 });
  //       return;
  //     }
  //   
  //     gsap.set(items, { y: -14, autoAlpha: 0 });
  //     gsap.to(items, {
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
  //   // ── AboutHero entrance — heading line-mask reveal + subhead fade + image
  //   //    cards staircase. Single timeline driven on first paint (above the fold).
  //   function initAboutHeroReveals() {
  //     if (typeof gsap === 'undefined') return;
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     const inner = document.querySelector('.aboutHero__inner');
  //     if (!inner) return;
  //   
  //     const heading = inner.querySelector('.aboutHero__heading');
  //     const subheading = inner.querySelector('.aboutHero__subheading');
  //     const allCards = Array.from(inner.querySelectorAll('.aboutHero__card'));
  //     // Filter to cards actually painted at this viewport — the ≤767px and
  //     // ≤479px breakpoints `display: none` the third (and second) card and
  //     // the entrance animation must adapt to whichever cards are visible.
  //     const cards = allCards.filter((c) => getComputedStyle(c).display !== 'none');
  //   
  //     if (reduce) {
  //       if (heading) gsap.set(heading, { autoAlpha: 1 });
  //       if (subheading) gsap.set(subheading, { autoAlpha: 1, y: 0 });
  //       allCards.forEach((c) => gsap.set(c, { autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: 0 }));
  //       return;
  //     }
  //   
  //     // ── Prime states ───────────────────────────────────────────────────
  //     // Heading Stagger pattern — words drop down from yPercent: 50 → 0 with a fade.
  //     let headingWords = [];
  //     if (heading && typeof SplitText !== 'undefined') {
  //       const split = SplitText.create(heading, { type: 'words' });
  //       headingWords = split.words;
  //       gsap.set(headingWords, { yPercent: 50, autoAlpha: 0 });
  //     }
  //     if (subheading) gsap.set(subheading, { autoAlpha: 0, y: 20 });
  //   
  //     // Card entrance — three branches by visible count:
  //     //
  //     //   3 cards (desktop/tablet, ≥768px): "deck deal" — center rises from
  //     //     below, then side cards slide out from BEHIND the center at the
  //     //     same final y. They never start above; they emerge level with the
  //     //     center and fan outward with a slight rotation that untilts.
  //     //
  //     //   2 cards (landscape, 480–767px): both start stacked at the midpoint
  //     //     between their final positions, lifted from below with their own
  //     //     rotation. They rise + fade in still overlapped, then separate
  //     //     horizontally to their final spots while rotation untilts.
  //     //
  //     //   1 card  (portrait, <480px): no displacement — just rotate from a
  //     //     small tilt back to 0 with a fade in.
  //     if (cards.length === 3) {
  //       const [leftCard, centerCard, rightCard] = cards;
  //       const lRect = leftCard.getBoundingClientRect();
  //       const cRect = centerCard.getBoundingClientRect();
  //       const rRect = rightCard.getBoundingClientRect();
  //       const leftFromCenter = cRect.left - lRect.left;
  //       const rightFromCenter = cRect.left - rRect.left;
  //   
  //       // Side cards begin stacked behind the center, at the SAME y as the
  //       // center's final position — no upward offset. The "deal" reads as a
  //       // horizontal fan, not a fall from above.
  //       gsap.set([leftCard, rightCard], {
  //         autoAlpha: 0,
  //         scale: 0.9,
  //         y: 0,
  //         zIndex: 1,
  //         transformOrigin: '50% 50%',
  //       });
  //       gsap.set(leftCard, { x: leftFromCenter, rotation: -8 });
  //       gsap.set(rightCard, { x: rightFromCenter, rotation: 8 });
  //   
  //       gsap.set(centerCard, {
  //         autoAlpha: 0,
  //         y: 80,
  //         scale: 0.94,
  //         zIndex: 2,
  //         transformOrigin: '50% 100%',
  //       });
  //     } else if (cards.length === 2) {
  //       const [backCard, frontCard] = cards;
  //       const fRect = backCard.getBoundingClientRect();
  //       const sRect = frontCard.getBoundingClientRect();
  //       // Both cards travel toward the midpoint between them (one half of the
  //       // edge-to-edge stride each, in opposite directions) so they overlap.
  //       const halfStride = (sRect.left - fRect.left) / 2;
  //   
  //       // Back card stays at 0 opacity for the entire vertical rise — it only
  //       // fades in once the cards begin to separate horizontally so the entrance
  //       // reads as "one card splits into two".
  //       gsap.set([backCard, frontCard], {
  //         autoAlpha: 0,
  //         y: 60,
  //         transformOrigin: '50% 50%',
  //       });
  //       gsap.set(backCard,  { x:  halfStride, rotation: -8 });
  //       gsap.set(frontCard, { x: -halfStride, rotation:  8 });
  //     } else if (cards.length === 1) {
  //       gsap.set(cards[0], {
  //         autoAlpha: 0,
  //         y: 40,
  //         rotation: -6,
  //         transformOrigin: '50% 50%',
  //       });
  //     }
  //   
  //     // ── Timeline (no ScrollTrigger — hero is above the fold) ───────────
  //     const tl = gsap.timeline({ delay: 0.15 });
  //   
  //     if (headingWords.length) {
  //       tl.to(headingWords, {
  //         yPercent: 0,
  //         autoAlpha: 1,
  //         duration: 0.8,
  //         ease: 'power3.out',
  //         stagger: 0.06,
  //       }, 0);
  //     }
  //   
  //     if (subheading) {
  //       tl.to(subheading, {
  //         autoAlpha: 1,
  //         y: 0,
  //         duration: 0.7,
  //         ease: 'power3.out',
  //       }, 0.5);
  //     }
  //   
  //     if (cards.length === 3) {
  //       const [leftCard, centerCard, rightCard] = cards;
  //   
  //       // 1) Center rises from below.
  //       tl.to(centerCard, {
  //         y: 0,
  //         scale: 1,
  //         autoAlpha: 1,
  //         duration: 1.0,
  //         ease: 'power3.out',
  //       }, 0.7);
  //   
  //       // 2) Side cards deal outward FROM behind the center, at the same y.
  //       //    No vertical drop — just slide x → 0 and rotation → 0. Tiny stagger
  //       //    so left-then-right reads as deliberate.
  //       tl.to(leftCard, {
  //         x: 0,
  //         rotation: 0,
  //         scale: 1,
  //         autoAlpha: 1,
  //         duration: 1.2,
  //         ease: 'power3.out',
  //       }, 1.0);
  //   
  //       tl.to(rightCard, {
  //         x: 0,
  //         rotation: 0,
  //         scale: 1,
  //         autoAlpha: 1,
  //         duration: 1.2,
  //         ease: 'power3.out',
  //       }, 1.08);
  //   
  //       tl.set(cards, { clearProps: 'zIndex,willChange' });
  //     } else if (cards.length === 2) {
  //       const [backCard, frontCard] = cards;
  //   
  //       // Phase 1 — both rise from below; only the FRONT card fades in.
  //       // Snappy rise + early hand-off into phase 2 so the entrance never
  //       // feels paused.
  //       tl.to([backCard, frontCard], {
  //         y: 0,
  //         duration: 0.55,
  //         ease: 'power3.out',
  //       }, 0.6);
  //       tl.to(frontCard, {
  //         autoAlpha: 1,
  //         duration: 0.4,
  //         ease: 'power2.out',
  //       }, 0.6);
  //   
  //       // Phase 2 — separate + untilt. Starts slightly before the rise
  //       // settles so motion stays continuous; back card fades in over the
  //       // spread to complete the "one card splits into two" reveal.
  //       tl.to([backCard, frontCard], {
  //         x: 0,
  //         rotation: 0,
  //         duration: 0.6,
  //         ease: 'power3.out',
  //       }, 0.95);
  //       tl.to(backCard, {
  //         autoAlpha: 1,
  //         duration: 0.4,
  //         ease: 'power2.out',
  //       }, 1.0);
  //   
  //       tl.set(cards, { clearProps: 'willChange' });
  //     } else if (cards.length === 1) {
  //       // Portrait: rise from below + rotate + fade.
  //       tl.to(cards[0], {
  //         y: 0,
  //         rotation: 0,
  //         autoAlpha: 1,
  //         duration: 0.9,
  //         ease: 'power3.out',
  //       }, 0.7);
  //   
  //       tl.set(cards, { clearProps: 'willChange' });
  //     }
  //   }
  //   
  //   if (document.readyState === 'loading') {
  //     document.addEventListener('DOMContentLoaded', () => {
  //       setTimeout(initNavbarEntrance, 0);
  //       setTimeout(initAboutHeroReveals, 0);
  //     });
  //   } else {
  //     setTimeout(initNavbarEntrance, 0);
  //     setTimeout(initAboutHeroReveals, 0);
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
    <section className="dobra" data-dobra="equipa-secao-161" ref={raiz}>
      <section className="aboutHero" aria-label="About hero">
            
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
                  <li><a href="/about" className="navbar__drawerLink" aria-current="page">{s.acao6}</a></li>
                  <li><a href="/services" className="navbar__drawerLink">{s.acao7}</a></li>
                  <li><a href="/case-studies" className="navbar__drawerLink">{s.acao8}</a></li>
                  <li><a href="/blog" className="navbar__drawerLink">{s.acao9}</a></li>
                  <li className="navbar__drawerCtaItem">
                    <a href="/contact" className="btn navbar__drawerCta">{s.acao10}</a>
                  </li>
                </ul>
              </div>
            </nav>
      
            <div className="aboutHero__inner">
              <div className="aboutHero__header">
                <h1 className="aboutHero__heading">
                  Your strategic partner for <br className="aboutHero__br" />business success
                </h1>
                <p className="aboutHero__subheading">{s.texto}</p>
              </div>
      
              <div className="aboutHero__gallery">
                <div className="aboutHero__card">
                  <img src={s.imagem2} alt="Acelia consultant working on a tablet" width="752" height="960" className="aboutHero__image" loading="eager" />
                </div>
                <div className="aboutHero__card">
                  <img src={s.imagem3} alt="Two team members meeting at a desk" width="752" height="960" className="aboutHero__image" loading="eager" />
                </div>
                <div className="aboutHero__card">
                  <img src={s.imagem4} alt="Field consultant with safety vest and helmet" width="752" height="960" className="aboutHero__image" loading="eager" />
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}