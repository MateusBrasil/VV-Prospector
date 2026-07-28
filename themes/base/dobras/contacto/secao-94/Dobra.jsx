"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-94
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
  //   // Navbar — hamburger toggle on tablet/mobile.
  //   const navbars = document.querySelectorAll('.navbar');
  //   
  //   navbars.forEach((navbar) => {
  //     const toggle = navbar.querySelector('[data-navbar-toggle]');
  //     const drawer = navbar.querySelector('[data-navbar-drawer]');
  //     if (!toggle || !drawer) return;
  //   
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
  //     drawer.addEventListener('click', (e) => {
  //       const t = e.target;
  //       if (t.closest && t.closest('a')) setOpen(false);
  //     });
  //   
  //     document.addEventListener('keydown', (e) => {
  //       if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
  //         setOpen(false);
  //         toggle.focus();
  //       }
  //     });
  //   
  //     document.addEventListener('click', (e) => {
  //       if (toggle.getAttribute('aria-expanded') !== 'true') return;
  //       const t = e.target;
  //       if (navbar.contains(t)) return;
  //       setOpen(false);
  //     });
  //   });
  //   
  //   // Navbar entrance — fade-down stagger.
  //   function initNavbarEntrance() {
  //     if (typeof gsap === 'undefined') return;
  //   
  //     const navbar = document.querySelector('.navbar');
  //     if (!navbar) return;
  //   
  //     const brand = navbar.querySelector('.navbar__brand');
  //     const navLinks = Array.from(navbar.querySelectorAll('.navbar__links > li'));
  //     const navCta = navbar.querySelector('.navbar__cta');
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
  //   // Soft entrance — title word stagger + form fields + info card cascade.
  //   // Mirrors the heading + image cascade pattern used in `CaseStudyHero`
  //   // (above-the-fold, no ScrollTrigger needed).
  //   function initContactHeroReveals() {
  //     if (typeof gsap === 'undefined') return;
  //     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //   
  //     const inner = document.querySelector('.contactHero__inner');
  //     if (!inner) return;
  //   
  //     const title = inner.querySelector('.contactHero__title');
  //     const fields = Array.from(inner.querySelectorAll('.contactHero__field'));
  //     const submit = inner.querySelector('.contactHero__submit');
  //     const info = inner.querySelector('.contactHero__info');
  //   
  //     if (reduce) {
  //       [title, ...fields, submit, info].filter(Boolean).forEach((el) =>
  //         gsap.set(el, { autoAlpha: 1, y: 0 })
  //       );
  //       return;
  //     }
  //   
  //     // Heading word stagger — ANIMATIONS.md "Heading Stagger" recipe.
  //     let titleWords = [];
  //     if (title && typeof SplitText !== 'undefined') {
  //       titleWords = SplitText.create(title, { type: 'words' }).words;
  //       gsap.set(titleWords, { yPercent: 50, autoAlpha: 0 });
  //     }
  //     if (fields.length) gsap.set(fields, { y: 24, autoAlpha: 0 });
  //     if (submit) gsap.set(submit, { y: 24, autoAlpha: 0 });
  //     if (info) gsap.set(info, { y: 24, autoAlpha: 0 });
  //   
  //     const tl = gsap.timeline({ delay: 0.15 });
  //   
  //     if (titleWords.length) {
  //       tl.to(titleWords, {
  //         yPercent: 0,
  //         autoAlpha: 1,
  //         duration: 0.8,
  //         ease: 'power3.out',
  //         stagger: 0.06,
  //       }, 0.35);
  //     }
  //     if (fields.length) {
  //       tl.to(fields, {
  //         y: 0,
  //         autoAlpha: 1,
  //         duration: 0.7,
  //         ease: 'power3.out',
  //         stagger: 0.1,
  //       }, 0.55);
  //     }
  //     if (submit) {
  //       tl.to(submit, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out' }, 0.85);
  //     }
  //     if (info) {
  //       tl.to(info, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }, 0.55);
  //     }
  //   }
  //   
  //   if (document.readyState === 'loading') {
  //     document.addEventListener('DOMContentLoaded', () => {
  //       setTimeout(initNavbarEntrance, 0);
  //       setTimeout(initContactHeroReveals, 0);
  //     });
  //   } else {
  //     setTimeout(initNavbarEntrance, 0);
  //     setTimeout(initContactHeroReveals, 0);
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
    <section className="dobra" data-dobra="contacto-secao-94" ref={raiz}>
      <section className="contactHero" aria-label="Contact form hero">
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
                  <li><a href="/blog" className="navbar__drawerLink">{s.acao9}</a></li>
                  <li className="navbar__drawerCtaItem">
                    <a href="/contact" className="btn btn--dark navbar__drawerCta">{s.acao10}</a>
                  </li>
                </ul>
              </div>
            </nav>
      
            <div className="contactHero__inner">
              <h1 className="contactHero__title">{s.titulo}</h1>
      
              <div className="contactHero__layout">
                <form className="contactHero__form" noValidate="">
                  <div className="contactHero__field">
                    <label className="contactHero__label" htmlFor="contact-name">Full name</label>
                    <input className="contactHero__input" id="contact-name" name="name" type="text" placeholder="Your full name" autoComplete="name" required="" />
                  </div>
      
                  <div className="contactHero__field">
                    <label className="contactHero__label" htmlFor="contact-email">Email address</label>
                    <input className="contactHero__input" id="contact-email" name="email" type="email" placeholder="Your email address" autoComplete="email" required="" />
                  </div>
      
                  <div className="contactHero__field">
                    <label className="contactHero__label" htmlFor="contact-message">Messages</label>
                    <textarea className="contactHero__input contactHero__input--textarea" id="contact-message" name="message" placeholder="Your messages here.." rows="6" required=""></textarea>
                  </div>
      
                  <button type="submit" className="btn btn--dark contactHero__submit" onClick={s.onClick}>{s.acao11}</button>
                </form>
      
                <aside className="contactHero__info" aria-label="Contact details">
                  <div className="contactHero__infoItem">
                    <p className="contactHero__infoLabel">{s.texto}</p>
                    <p className="contactHero__infoValue">{s.texto2}</p>
                  </div>
      
                  <div className="contactHero__infoItem">
                    <p className="contactHero__infoLabel">{s.texto3}</p>
                    <p className="contactHero__infoValue">{s.texto4}</p>
                  </div>
      
                  <div className="contactHero__infoItem">
                    <p className="contactHero__infoLabel">{s.texto5}</p>
                    <p className="contactHero__infoValue">{s.texto6}</p>
                  </div>
      
                  <div className="contactHero__infoItem">
                    <p className="contactHero__infoLabel">{s.texto7}</p>
                    <ul className="contactHero__socials" role="list">
                      <li>
                        <a href={s.destino || '#'} className="contactHero__social" aria-label="Follow Acelia on Instagram">
                          <span className="contactHero__socialIcon" aria-hidden="true">
                            <svg width="100%" height="100%" overflow="visible" style={{display: 'block'}} viewBox="-2.5 -2.5 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M10.8333 0C11.9384 0 12.9982 0.438987 13.7796 1.22039C14.561 2.00179 15 3.0616 15 4.16667V10.8333C15 11.9384 14.561 12.9982 13.7796 13.7796C12.9982 14.561 11.9384 15 10.8333 15H4.16667C3.0616 15 2.00179 14.561 1.22039 13.7796C0.438987 12.9982 0 11.9384 0 10.8333V4.16667C0 3.0616 0.438987 2.00179 1.22039 1.22039C2.00179 0.438987 3.0616 0 4.16667 0H10.8333ZM7.5 4.16667C6.61594 4.16667 5.7681 4.51786 5.14298 5.14298C4.51786 5.7681 4.16667 6.61594 4.16667 7.5C4.16667 8.38405 4.51786 9.2319 5.14298 9.85702C5.7681 10.4821 6.61594 10.8333 7.5 10.8333C8.38405 10.8333 9.2319 10.4821 9.85702 9.85702C10.4821 9.2319 10.8333 8.38405 10.8333 7.5C10.8333 6.61594 10.4821 5.7681 9.85702 5.14298C9.2319 4.51786 8.38405 4.16667 7.5 4.16667ZM7.5 5.83333C7.94203 5.83333 8.36595 6.00893 8.67851 6.32149C8.99107 6.63405 9.16667 7.05797 9.16667 7.5C9.16667 7.94203 8.99107 8.36595 8.67851 8.67851C8.36595 8.99107 7.94203 9.16667 7.5 9.16667C7.05797 9.16667 6.63405 8.99107 6.32149 8.67851C6.00893 8.36595 5.83333 7.94203 5.83333 7.5C5.83333 7.05797 6.00893 6.63405 6.32149 6.32149C6.63405 6.00893 7.05797 5.83333 7.5 5.83333ZM11.25 2.91667C11.029 2.91667 10.817 3.00446 10.6607 3.16074C10.5045 3.31702 10.4167 3.52899 10.4167 3.75C10.4167 3.97101 10.5045 4.18298 10.6607 4.33926C10.817 4.49554 11.029 4.58333 11.25 4.58333C11.471 4.58333 11.683 4.49554 11.8393 4.33926C11.9955 4.18298 12.0833 3.97101 12.0833 3.75C12.0833 3.52899 11.9955 3.31702 11.8393 3.16074C11.683 3.00446 11.471 2.91667 11.25 2.91667Z" fill="currentColor"></path>
                              </g>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href={s.destino2 || '#'} className="contactHero__social" aria-label="Follow Acelia on Facebook">
                          <span className="contactHero__socialIcon" aria-hidden="true">
                            <svg width="100%" height="100%" overflow="visible" style={{display: 'block'}} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M18.3346 10.0013C18.3346 5.4013 14.6013 1.66797 10.0013 1.66797C5.4013 1.66797 1.66797 5.4013 1.66797 10.0013C1.66797 14.0346 4.53464 17.393 8.33464 18.168V12.5013H6.66797V10.0013H8.33464V7.91797C8.33464 6.30964 9.64297 5.0013 11.2513 5.0013H13.3346V7.5013H11.668C11.2096 7.5013 10.8346 7.8763 10.8346 8.33464V10.0013H13.3346V12.5013H10.8346V18.293C15.043 17.8763 18.3346 14.3263 18.3346 10.0013Z" fill="currentColor"></path>
                              </g>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href={s.destino3 || '#'} className="contactHero__social" aria-label="Follow Acelia on LinkedIn">
                          <span className="contactHero__socialIcon" aria-hidden="true">
                            <svg width="100%" height="100%" overflow="visible" style={{display: 'block'}} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M14.4192 1.875H5.58083C4.59799 1.875 3.65539 2.26543 2.96041 2.96041C2.26543 3.65539 1.875 4.59799 1.875 5.58083V14.4192C1.875 15.402 2.26543 16.3446 2.96041 17.0396C3.65539 17.7346 4.59799 18.125 5.58083 18.125H14.4192C15.402 18.125 16.3446 17.7346 17.0396 17.0396C17.7346 16.3446 18.125 15.402 18.125 14.4192V5.58083C18.125 4.59799 17.7346 3.65539 17.0396 2.96041C16.3446 2.26543 15.402 1.875 14.4192 1.875ZM7.36917 14.9933C7.37178 15.0387 7.36509 15.0841 7.34951 15.1268C7.33394 15.1695 7.3098 15.2085 7.27858 15.2415C7.24736 15.2745 7.20973 15.3008 7.16798 15.3188C7.12624 15.3367 7.08127 15.3459 7.03583 15.3458H5.5525C5.46305 15.3437 5.37802 15.3065 5.31569 15.2423C5.25336 15.1781 5.2187 15.092 5.21917 15.0025V8.83333C5.21794 8.78879 5.22566 8.74446 5.24186 8.70296C5.25806 8.66145 5.28242 8.62361 5.3135 8.59168C5.34457 8.55975 5.38173 8.53438 5.42279 8.51705C5.46384 8.49973 5.50794 8.49082 5.5525 8.49083H7.03583C7.08039 8.49082 7.1245 8.49973 7.16555 8.51705C7.2066 8.53438 7.24376 8.55975 7.27484 8.59168C7.30591 8.62361 7.33027 8.66145 7.34647 8.70296C7.36268 8.74446 7.37039 8.78879 7.36917 8.83333V14.9933ZM6.26667 7.19333C6.10607 7.19213 5.94728 7.15931 5.79937 7.09674C5.65146 7.03417 5.51733 6.94308 5.40462 6.82867C5.29191 6.71426 5.20284 6.57877 5.1425 6.42994C5.08215 6.28111 5.05171 6.12185 5.05292 5.96125C5.05412 5.80065 5.08694 5.64187 5.14951 5.49396C5.21208 5.34605 5.30317 5.21191 5.41758 5.0992C5.53199 4.98649 5.66748 4.89743 5.81631 4.83708C5.96514 4.77674 6.1244 4.7463 6.285 4.7475C6.60376 4.75787 6.90586 4.89239 7.12682 5.12238C7.34778 5.35237 7.47012 5.6596 7.46773 5.97852C7.46534 6.29745 7.3384 6.60281 7.11402 6.82946C6.88963 7.0561 6.58555 7.18608 6.26667 7.19167M15.2808 14.9833C15.2804 15.0675 15.2474 15.1483 15.1886 15.2086C15.1299 15.2689 15.05 15.3041 14.9658 15.3067H13.4C13.3157 15.3041 13.2357 15.2688 13.1769 15.2083C13.1181 15.1478 13.0852 15.0668 13.085 14.9825V12.1292C13.085 11.7033 13.215 10.2767 11.955 10.2767C10.9725 10.2767 10.7783 11.2767 10.7408 11.7217V15.0475C10.7409 15.132 10.708 15.2132 10.6492 15.2738C10.5904 15.3345 10.5103 15.3699 10.4258 15.3725H8.90667C8.82062 15.3723 8.73816 15.3379 8.6774 15.277C8.61663 15.2161 8.5825 15.1336 8.5825 15.0475V8.80333C8.5851 8.71888 8.62049 8.63876 8.68115 8.57996C8.74182 8.52116 8.82301 8.48829 8.9075 8.48833H10.4258C10.5103 8.48829 10.5915 8.52116 10.6522 8.57996C10.7128 8.63876 10.7482 8.71888 10.7508 8.80333V9.34083C10.9725 9.01635 11.2786 8.75855 11.6361 8.59525C11.9935 8.43195 12.3887 8.36933 12.7792 8.41417C15.3083 8.41417 15.2992 10.7767 15.2992 12.12L15.2808 14.9833Z" fill="currentColor"></path>
                              </g>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href={s.destino4 || '#'} className="contactHero__social" aria-label="Follow Acelia on Twitter">
                          <span className="contactHero__socialIcon" aria-hidden="true">
                            <svg width="100%" height="100%" overflow="visible" style={{display: 'block'}} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M8.7387 12.2092L12.707 17.5H18.5404L11.992 8.76833L17.4404 2.5H15.232L10.9679 7.405L7.29036 2.5H1.45703L7.71536 10.8458L1.93203 17.5H4.14036L8.7387 12.2092ZM13.5404 15.8333L4.79036 4.16667H6.45703L15.207 15.8333H13.5404Z" fill="currentColor"></path>
                              </g>
                            </svg>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </section>
    </section>
  );
}