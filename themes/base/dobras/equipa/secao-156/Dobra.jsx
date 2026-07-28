"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-156
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   (function () {
  //     'use strict';
  //   
  //     // ── Navbar entrance — fade-down stagger ──────────────────────────────
  //     function initNavbarEntrance() {
  //       if (typeof window.gsap === 'undefined') return;
  //       const gsap = window.gsap;
  //   
  //       const navbar = document.querySelector('.navbar');
  //       if (!navbar) return;
  //   
  //       const brand = navbar.querySelector('.navbar__brand');
  //       const navLinks = Array.from(navbar.querySelectorAll('.navbar__links > li'));
  //       const navCta = navbar.querySelector('.navbar__cta');
  //       const navToggle = navbar.querySelector('.navbar__toggle');
  //   
  //       const items = [brand, ...navLinks, navCta, navToggle].filter(Boolean);
  //       if (!items.length) return;
  //   
  //       const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //       if (reduce) {
  //         gsap.set(items, { y: 0, autoAlpha: 1 });
  //         return;
  //       }
  //   
  //       gsap.set(items, { y: -14, autoAlpha: 0 });
  //       gsap.to(items, {
  //         y: 0,
  //         autoAlpha: 1,
  //         duration: 0.7,
  //         ease: 'power3.out',
  //         stagger: 0.06,
  //         delay: 0.15,
  //         clearProps: 'translate,rotate,scale,transform',
  //       });
  //     }
  //   
  //     // ── Navbar drawer toggle (tablet/mobile) ─────────────────────────────
  //     function initNavbarDrawer() {
  //       const navbars = document.querySelectorAll('.navbar');
  //   
  //       navbars.forEach((navbar) => {
  //         const toggle = navbar.querySelector('[data-navbar-toggle]');
  //         const drawer = navbar.querySelector('[data-navbar-drawer]');
  //         if (!toggle || !drawer) return;
  //   
  //         drawer.removeAttribute('hidden');
  //   
  //         function setOpen(open) {
  //           toggle.setAttribute('aria-expanded', String(open));
  //           toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  //           drawer.classList.toggle('is-open', open);
  //         }
  //   
  //         toggle.addEventListener('click', () => {
  //           const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  //           setOpen(!isOpen);
  //         });
  //   
  //         drawer.addEventListener('click', (e) => {
  //           const t = e.target;
  //           if (t.closest && t.closest('a')) setOpen(false);
  //         });
  //   
  //         document.addEventListener('keydown', (e) => {
  //           if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
  //             setOpen(false);
  //             toggle.focus();
  //           }
  //         });
  //   
  //         document.addEventListener('click', (e) => {
  //           if (toggle.getAttribute('aria-expanded') !== 'true') return;
  //           const t = e.target;
  //           if (navbar.contains(t)) return;
  //           setOpen(false);
  //         });
  //       });
  //     }
  //   
  //     // ── Services hero entrance ───────────────────────────────────────────
  //     function initServicesHeroReveals() {
  //       if (typeof window.gsap === 'undefined') return;
  //       const gsap = window.gsap;
  //       const SplitText = window.SplitText;
  //       const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //       const inner = document.querySelector('.servicesHero__inner');
  //       if (!inner) return;
  //   
  //       const heading = inner.querySelector('.servicesHero__heading');
  //       const subheading = inner.querySelector('.servicesHero__subheading');
  //       const cta = inner.querySelector('.servicesHero__cta');
  //       const imageReveal = inner.querySelector('.servicesHero__imageReveal');
  //       const image = inner.querySelector('.servicesHero__image');
  //   
  //       if (reduce) {
  //         if (heading) gsap.set(heading, { autoAlpha: 1 });
  //         if (subheading) gsap.set(subheading, { autoAlpha: 1, y: 0 });
  //         if (cta) gsap.set(cta, { autoAlpha: 1, y: 0 });
  //         if (imageReveal) gsap.set(imageReveal, { height: '100%' });
  //         if (image) gsap.set(image, { scale: 1 });
  //         return;
  //       }
  //   
  //       // Heading Stagger — words drop down from yPercent 50 → 0 with fade
  //       let headingWords = [];
  //       if (heading && typeof SplitText !== 'undefined') {
  //         const split = SplitText.create(heading, { type: 'words' });
  //         headingWords = split.words;
  //         gsap.set(headingWords, { yPercent: 50, autoAlpha: 0 });
  //       }
  //       if (subheading) gsap.set(subheading, { autoAlpha: 0, y: 20 });
  //       if (cta) gsap.set(cta, { autoAlpha: 0, y: 20 });
  //       if (imageReveal) gsap.set(imageReveal, { height: 0 });
  //       if (image) gsap.set(image, { scale: 1.05 });
  //   
  //       // Responsive: from tablet onward the layout flips to TEXT-then-IMAGE
  //       // stacked, so the staircase animation order has to flip to match. At
  //       // desktop the image curtain anchors the left column and reveals while
  //       // the heading falls into place on the right — both can play near t=0.
  //       // At responsive the user sees a single column scrolling down: heading →
  //       // subhead → CTA → image, so each piece reveals in that visual order.
  //       const isStacked = window.matchMedia('(max-width: 991px)').matches;
  //   
  //       const tl = gsap.timeline({ delay: 0.15 });
  //   
  //       if (isStacked) {
  //         // ── Stacked staircase: text first, image last ───────────────────
  //         if (headingWords.length) {
  //           tl.to(headingWords, {
  //             yPercent: 0, autoAlpha: 1,
  //             duration: 0.8, ease: 'power3.out', stagger: 0.06,
  //           }, 0);
  //         }
  //         if (subheading) {
  //           tl.to(subheading, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.3);
  //         }
  //         if (cta) {
  //           tl.to(cta, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.5);
  //         }
  //         if (imageReveal) {
  //           tl.to(imageReveal, { height: '100%', duration: 1.1, ease: 'power3.out' }, 0.7);
  //         }
  //         if (image) {
  //           tl.to(image, { scale: 1, duration: 1.1, ease: 'power3.out' }, 0.7);
  //         }
  //       } else {
  //         // ── Side-by-side: image curtain anchors the left, text rises right ─
  //         if (imageReveal) {
  //           tl.to(imageReveal, { height: '100%', duration: 1.2, ease: 'power3.out' }, 0);
  //         }
  //         if (image) {
  //           tl.to(image, { scale: 1, duration: 1.2, ease: 'power3.out' }, 0);
  //         }
  //         if (headingWords.length) {
  //           tl.to(headingWords, {
  //             yPercent: 0, autoAlpha: 1,
  //             duration: 0.8, ease: 'power3.out', stagger: 0.06,
  //           }, 0.2);
  //         }
  //         if (subheading) {
  //           tl.to(subheading, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.5);
  //         }
  //         if (cta) {
  //           tl.to(cta, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.7);
  //         }
  //       }
  //     }
  //   
  //     function init() {
  //       initNavbarDrawer();
  //       initNavbarEntrance();
  //       initServicesHeroReveals();
  //     }
  //   
  //     if (document.readyState === 'loading') {
  //       document.addEventListener('DOMContentLoaded', () => setTimeout(init, 0));
  //     } else {
  //       setTimeout(init, 0);
  //     }
  //   })();
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
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="equipa-secao-156" ref={raiz}>
      <section className="servicesHero" aria-label="Services hero">
            
            <nav className="navbar navbar--light" aria-label="Primary">
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
                  <a href="/contact" className="btn btn--dark navbar__cta">{s.acao5}</a>
      
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
                  <li><a href="/services" className="navbar__drawerLink" aria-current="page">{s.acao7}</a></li>
                  <li><a href="/case-studies" className="navbar__drawerLink">{s.acao8}</a></li>
                  <li><a href="/blog" className="navbar__drawerLink">{s.acao9}</a></li>
                  <li className="navbar__drawerCtaItem">
                    <a href="/contact" className="btn btn--dark navbar__drawerCta">{s.acao10}</a>
                  </li>
                </ul>
              </div>
            </nav>
      
            <div className="servicesHero__inner">
              <div className="servicesHero__imageWrap">
                <div className="servicesHero__imageReveal">
                  <img src={s.imagem2} alt="Acelia consultant working at a laptop" width="822" height="707" className="servicesHero__image" loading="eager" />
                </div>
              </div>
      
              <div className="servicesHero__content">
                <div className="servicesHero__text">
                  <h1 className="servicesHero__heading">
                    <span className="servicesHero__headingLine">{s.rotulo}</span>
                    <span className="servicesHero__headingLine">{s.rotulo2}</span>
                  </h1>
                  <p className="servicesHero__subheading">{s.texto}</p>
                </div>
                <a href="/contact" className="btn btn--dark servicesHero__cta">{s.acao11}</a>
              </div>
            </div>
          </section>
    </section>
  );
}