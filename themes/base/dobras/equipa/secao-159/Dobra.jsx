"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-159
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
  //   // BlogPostHero — entrance choreography
  //   // Assumes window.gsap, window.ScrollTrigger and window.SplitText are loaded
  //   // from CDN globals in index.html.
  //   
  //   if (typeof window !== 'undefined' && window.gsap) {
  //     if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);
  //     if (window.SplitText) gsap.registerPlugin(window.SplitText);
  //   }
  //   
  //   // ── Navbar entrance — fade-down stagger ────────────────────────────────
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
  //   // ── Navbar drawer toggle (tablet / mobile) ─────────────────────────────
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
  //         if (navbar.contains(e.target)) return;
  //         setOpen(false);
  //       });
  //     });
  //   }
  //   
  //   // ── BlogPostHero reveals ───────────────────────────────────────────────
  //   function initBlogPostHeroReveals() {
  //     if (typeof gsap === 'undefined') return;
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     const inner = document.querySelector('.blogPost__inner');
  //     if (!inner) return;
  //   
  //     const title       = inner.querySelector('.blogPost__title');
  //     const imageReveal = inner.querySelector('.blogPost__imageReveal');
  //     const image       = inner.querySelector('.blogPost__image');
  //     const body        = inner.querySelector('.blogPost__body');
  //     const asideItems  = Array.from(
  //       inner.querySelectorAll('.blogPost__metaLabel, .blogPost__tags, .blogPost__author')
  //     );
  //   
  //     if (reduce) {
  //       if (title) gsap.set(title, { autoAlpha: 1 });
  //       if (imageReveal) gsap.set(imageReveal, { height: '100%' });
  //       if (image) gsap.set(image, { scale: 1 });
  //       asideItems.forEach((el) => gsap.set(el, { autoAlpha: 1, y: 0 }));
  //       if (body) {
  //         Array.from(body.querySelectorAll('p, h2, h3')).forEach((el) =>
  //           gsap.set(el, { y: 0, autoAlpha: 1 })
  //         );
  //       }
  //       return;
  //     }
  //   
  //     // ── Prime all elements ───────────────────────────────────────────────
  //     let titleWords = [];
  //     if (title && typeof SplitText !== 'undefined') {
  //       titleWords = SplitText.create(title, { type: 'words' }).words;
  //       gsap.set(titleWords, { yPercent: 50, autoAlpha: 0 });
  //     }
  //     if (imageReveal) gsap.set(imageReveal, { height: 0 });
  //     if (image)       gsap.set(image, { scale: 1.05 });
  //     if (asideItems.length) gsap.set(asideItems, { y: 20, autoAlpha: 0 });
  //   
  //     const bodyEls = body ? Array.from(body.querySelectorAll('p, h2, h3')) : [];
  //     if (bodyEls.length) gsap.set(bodyEls, { y: 16, autoAlpha: 0 });
  //   
  //     // ── Entrance timeline ────────────────────────────────────────────────
  //     const isLandscape = window.matchMedia('(max-width: 767px)').matches;
  //     const tl = gsap.timeline({ delay: 0.15 });
  //   
  //     if (titleWords.length) {
  //       tl.to(titleWords, {
  //         yPercent: 0, autoAlpha: 1,
  //         duration: 0.8, ease: 'power3.out', stagger: 0.04,
  //       }, 0.35);
  //     }
  //   
  //     if (isLandscape) {
  //       if (asideItems.length) {
  //         tl.to(asideItems, {
  //           y: 0, autoAlpha: 1,
  //           duration: 0.7, ease: 'power3.out', stagger: 0.12,
  //         }, 0.6);
  //       }
  //       if (imageReveal) tl.to(imageReveal, { height: '100%', duration: 1.1, ease: 'power3.out' }, 0.95);
  //       if (image)       tl.to(image,       { scale: 1,        duration: 1.1, ease: 'power3.out' }, 0.95);
  //     } else {
  //       if (imageReveal) tl.to(imageReveal, { height: '100%', duration: 1.1, ease: 'power3.out' }, 0.55);
  //       if (image)       tl.to(image,       { scale: 1,        duration: 1.1, ease: 'power3.out' }, 0.55);
  //       if (asideItems.length) {
  //         tl.to(asideItems, {
  //           y: 0, autoAlpha: 1,
  //           duration: 0.7, ease: 'power3.out', stagger: 0.12,
  //         }, 0.7);
  //       }
  //     }
  //   
  //     // ── Body scroll-reveal — wired AFTER timeline ends ───────────────────
  //     if (bodyEls.length && typeof ScrollTrigger !== 'undefined') {
  //       tl.then(() => {
  //         bodyEls.forEach((el) => {
  //           gsap.to(el, {
  //             y: 0, autoAlpha: 1,
  //             duration: 0.8, ease: 'power2.out',
  //             scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //           });
  //         });
  //       });
  //     }
  //   }
  //   
  //   if (document.readyState === 'loading') {
  //     document.addEventListener('DOMContentLoaded', () => {
  //       setTimeout(initNavbarEntrance, 0);
  //       setTimeout(initNavbarDrawer, 0);
  //       setTimeout(initBlogPostHeroReveals, 0);
  //     });
  //   } else {
  //     setTimeout(initNavbarEntrance, 0);
  //     setTimeout(initNavbarDrawer, 0);
  //     setTimeout(initBlogPostHeroReveals, 0);
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
    <section className="dobra" data-dobra="equipa-secao-159" ref={raiz}>
      <section className="blogPost" aria-label="Article">
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
                  <li><a href="/services" className="navbar__drawerLink">{s.acao7}</a></li>
                  <li><a href="/case-studies" className="navbar__drawerLink">{s.acao8}</a></li>
                  <li><a href="/blog" className="navbar__drawerLink" aria-current="page">{s.acao9}</a></li>
                  <li className="navbar__drawerCtaItem">
                    <a href="/contact" className="btn btn--dark navbar__drawerCta">{s.acao10}</a>
                  </li>
                </ul>
              </div>
            </nav>
      
            <div className="blogPost__inner">
              <h1 className="blogPost__title">{s.titulo}</h1>
      
              <div className="blogPost__layout">
                <div className="blogPost__main">
                  <div className="blogPost__imageWrap">
                    <div className="blogPost__imageReveal">
                      <img src={s.imagem2} alt="Workshop session with the Acelia design team reviewing brand artefacts on a long studio table." width="776" height="400" className="blogPost__image" loading="eager" />
                    </div>
                  </div>
      
                  <div className="blogPost__body">
                    <p>{s.texto}</p>
      
                    <h2>{s.titulo2}</h2>
                    <p>{s.texto2}</p>
      
                    <p>{s.texto3}</p>
      
                    <h2>{s.titulo3}</h2>
                    <p>{s.texto4}</p>
      
                    <h3>{s.subtitulo}</h3>
                    <p>{s.texto5}</p>
                  </div>
                </div>
      
                <aside className="blogPost__aside" aria-label="Article meta">
                  <div className="blogPost__metaGroup">
                    <p className="blogPost__metaLabel">{s.texto6}</p>
                    <div className="blogPost__author">
                      <img src={s.imagem3} alt="Portrait of Mara Ellsworth, Head of Brand at Acelia." width="72" height="72" className="blogPost__authorAvatar" loading="eager" />
                      <div className="blogPost__authorText">
                        <p className="blogPost__authorName">{s.texto7}</p>
                        <p className="blogPost__authorRole">{s.texto8}</p>
                      </div>
                    </div>
                  </div>
      
                  <div className="blogPost__metaGroup">
                    <p className="blogPost__metaLabel">{s.texto9}</p>
                    <div className="blogPost__tags">
                      <span className="tag">{s.rotulo}</span>
                      <span className="tag">{s.rotulo2}</span>
                      <span className="tag">{s.rotulo3}</span>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
    </section>
  );
}