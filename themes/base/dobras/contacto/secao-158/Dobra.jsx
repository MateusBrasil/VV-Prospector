"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-158
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
  //   // CaseStudiesHero entrance — heading line-mask reveal + subhead/CTA fade + image
  //   // curtain reveal + stats stagger. Above-the-fold so runs on first paint.
  //   function initCsHeroReveals() {
  //     if (typeof gsap === 'undefined') return;
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     const inner = document.querySelector('.csHero__inner');
  //     if (!inner) return;
  //   
  //     const heading = inner.querySelector('.csHero__heading');
  //     const subheading = inner.querySelector('.csHero__subheading');
  //     const cta = inner.querySelector('.btn');
  //     const imageReveal = inner.querySelector('.csHero__imageReveal');
  //     const image = inner.querySelector('.csHero__image');
  //     const stats = Array.from(inner.querySelectorAll('.csHero__stat'));
  //   
  //     if (reduce) {
  //       const all = [heading, subheading, cta, ...stats].filter(Boolean);
  //       gsap.set(all, { autoAlpha: 1, y: 0, x: 0 });
  //       if (imageReveal) gsap.set(imageReveal, { height: '100%' });
  //       if (image) gsap.set(image, { scale: 1 });
  //       return;
  //     }
  //   
  //     if (stats.length) gsap.set(stats, { autoAlpha: 0, y: 32 });
  //   
  //     // Prime — Heading Stagger pattern (per-word yPercent: 50 → 0 + fade)
  //     let headingWords = [];
  //     if (heading && typeof SplitText !== 'undefined') {
  //       headingWords = SplitText.create(heading, { type: 'words' }).words;
  //       gsap.set(headingWords, { yPercent: 50, autoAlpha: 0 });
  //     }
  //     if (subheading) gsap.set(subheading, { y: 20, autoAlpha: 0 });
  //     if (cta) gsap.set(cta, { y: 20, autoAlpha: 0 });
  //     // Curtain reveal — reveal wrapper grows from height 0 → 100% while the
  //     // inner image scales 1.05 → 1. Same recipe as Hero/ServicesHero.
  //     if (imageReveal) gsap.set(imageReveal, { height: 0 });
  //     if (image) gsap.set(image, { scale: 1.05 });
  //     // Stats stay invisible until the odometer (initialized in BaseLayout)
  //     // fires its scrollTrigger and rebuilds the digit rollers.
  //   
  //     const tl = gsap.timeline({ delay: 0.15 });
  //   
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
  //     if (subheading) {
  //       tl.to(subheading, {
  //         y: 0,
  //         autoAlpha: 1,
  //         duration: 0.6,
  //         ease: 'power3.out',
  //       }, 0.55);
  //     }
  //   
  //     if (cta) {
  //       tl.to(cta, {
  //         y: 0,
  //         autoAlpha: 1,
  //         duration: 0.6,
  //         ease: 'power3.out',
  //         clearProps: 'translate,rotate,scale,transform',
  //       }, 0.65);
  //     }
  //   
  //     if (imageReveal) {
  //       tl.to(imageReveal, {
  //         height: '100%',
  //         duration: 1.7,           /* slower curtain — gives the reveal more
  //                                     presence and pairs with the softer ease */
  //         ease: 'power4.out',      /* steeper tail-off — most of the motion
  //                                     resolves early then floats into place */
  //       }, 0.5);
  //     }
  //     if (image) {
  //       tl.to(image, {
  //         scale: 1,
  //         duration: 1.7,
  //         ease: 'power4.out',
  //       }, 0.5);
  //     }
  //   
  //     if (stats.length) {
  //       tl.to(stats, {
  //         autoAlpha: 1,
  //         y: 0,
  //         duration: 0.8,
  //         ease: 'power3.out',
  //         stagger: 0.12,
  //       }, 0.85);
  //     }
  //   }
  //   
  //   // Navbar entrance — fade-down stagger.
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
  //   // Navbar drawer — hamburger toggle for tablet/mobile.
  //   function initNavbarDrawer() {
  //     const navbars = document.querySelectorAll('.navbar');
  //   
  //     navbars.forEach((navbar) => {
  //       const toggle = navbar.querySelector('[data-navbar-toggle]');
  //       const drawer = navbar.querySelector('[data-navbar-drawer]');
  //       if (!toggle || !drawer) return;
  //   
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
  //       drawer.addEventListener('click', (e) => {
  //         const t = e.target;
  //         if (t.closest && t.closest('a')) setOpen(false);
  //       });
  //   
  //       document.addEventListener('keydown', (e) => {
  //         if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
  //           setOpen(false);
  //           toggle.focus();
  //         }
  //       });
  //   
  //       document.addEventListener('click', (e) => {
  //         if (toggle.getAttribute('aria-expanded') !== 'true') return;
  //         const t = e.target;
  //         if (navbar.contains(t)) return;
  //         setOpen(false);
  //       });
  //     });
  //   }
  //   
  //   if (document.readyState === 'loading') {
  //     document.addEventListener('DOMContentLoaded', () => {
  //       setTimeout(initCsHeroReveals, 0);
  //       setTimeout(initNavbarEntrance, 0);
  //       initNavbarDrawer();
  //     });
  //   } else {
  //     setTimeout(initCsHeroReveals, 0);
  //     setTimeout(initNavbarEntrance, 0);
  //     initNavbarDrawer();
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
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="contacto-secao-158" ref={raiz}>
      <section className="csHero" aria-label="Case studies hero">
            
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
                  <li><a href="/case-studies" className="navbar__drawerLink" aria-current="page">{s.acao8}</a></li>
                  <li><a href="/blog" className="navbar__drawerLink">{s.acao9}</a></li>
                  <li className="navbar__drawerCtaItem">
                    <a href="/contact" className="btn navbar__drawerCta">{s.acao10}</a>
                  </li>
                </ul>
              </div>
            </nav>
      
            <div className="csHero__inner">
              <div className="csHero__text">
                <div className="csHero__top">
                  <div className="csHero__copy">
                    <div className="csHero__label">
                      <span className="csHero__labelDot" aria-hidden="true"></span>
                      <span className="csHero__labelText">{s.rotulo}</span>
                    </div>
                    <h1 className="csHero__heading">{s.titulo}</h1>
                    <p className="csHero__subheading">{s.texto}</p>
                  </div>
                  <a href="/contact" className="btn">{s.acao11}</a>
                </div>
      
                <ul className="csHero__stats" role="list" data-odometer-group="" data-odometer-trigger-start="top 95%" data-odometer-stagger="0.35">
                  <li className="csHero__stat">
                    <p className="csHero__statValue" data-odometer-element="" data-odometer-start="0" data-odometer-duration="3.2">{s.texto2}</p>
                    <p className="csHero__statLabel">{s.texto3}</p>
                  </li>
                  <li className="csHero__stat">
                    <p className="csHero__statValue" data-odometer-element="" data-odometer-start="0" data-odometer-duration="3.2">{s.texto4}</p>
                    <p className="csHero__statLabel">{s.texto5}</p>
                  </li>
                  <li className="csHero__stat">
                    <p className="csHero__statValue" data-odometer-element="" data-odometer-start="0" data-odometer-duration="3.2">{s.texto6}</p>
                    <p className="csHero__statLabel">{s.texto7}</p>
                  </li>
                </ul>
              </div>
      
              <div className="csHero__imageCard">
                <div className="csHero__imageReveal">
                  <img src={s.imagem2} alt="Acelia client portrait — woman thinking about strategic insights" width="780" height="780" className="csHero__image" loading="eager" />
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}