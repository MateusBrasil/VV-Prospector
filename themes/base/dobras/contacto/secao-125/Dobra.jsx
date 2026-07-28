"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-125
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
  //   // vetic-service-hero — no local logic. The entrance reveals ([data-reveal="view"]
  //   // staggered 0.1/0.2/0.3/0.4s + the [data-reveal="curtain"] framed image) run from
  //   // the shared /vetic/scripts/scroll-reveal.js (GSAP + ScrollTrigger via CDN).
  //   // Stub kept for the 4-file convention.
  //   
  //   /* ===== TEMLIS-INLINED-NAVBAR: vetic-navbar behavior ===== */
  //   // vetic-navbar — no local logic. The scaling-hamburger toggle (data-navigation-*)
  //   // is driven by the shared /vetic/scripts/navbar.js. Stub kept for the 4-file
  //   // convention.
  //   
  //   /* =============================================================================
  //      vetic/scripts/scroll-reveal.js — SHARED reveal engine for all Vetic ports.
  //      Ported from the template's src/scripts/scroll-reveal.ts (TS + ESM -> plain
  //      classic script: NO top-level export, gsap/ScrollTrigger come from the CDN
  //      globals). Reveals [data-reveal] elements as they enter the viewport.
  //      Type per element via data-reveal="view|down|left|right|scale|fade|button|curtain".
  //      Honors prefers-reduced-motion (elements shown immediately, no motion).
  //      ============================================================================= */
  //   
  //   gsap.registerPlugin(ScrollTrigger);
  //   
  //   // Reveal presets. `view` is the STANDARD entrance: opacity 0 + a 15% (of the
  //   // element's own height) translateY, eased outQuart over 0.7s. The other types
  //   // (down/left/right/scale/fade) reuse the same fade and are kept as generic
  //   // variants for the few non-standard reveals.
  //   var VETIC_REVEAL_FROM = {
  //     view: { yPercent: 15, opacity: 0 },
  //     down: { yPercent: -15, opacity: 0 },
  //     left: { x: -48, opacity: 0 },
  //     right: { x: 48, opacity: 0 },
  //     scale: { scale: 0.92, opacity: 0 },
  //     fade: { opacity: 0 },
  //     // Standard "hero button" entrance — rise 30% of own height + fade on an
  //     // outBack overshoot over 1s. Apply data-reveal="button" to the WRAPPER of a
  //     // hero-style button so the button's own transform stays free for its :hover.
  //     button: { yPercent: 30, opacity: 0 },
  //   };
  //   
  //   // Per-type easing / duration overrides (default: outQuart, 0.7s).
  //   // `button` matches the hero exactly: GSAP's default back.out constant
  //   // (1.70158) IS the hero's cubic-bezier(0.34, 1.56, 0.64, 1).
  //   var VETIC_REVEAL_EASE = { button: 'back.out' };
  //   var VETIC_REVEAL_DURATION = { button: 1 };
  //   
  //   function initVeticScrollReveal() {
  //     var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  //     var els = document.querySelectorAll('[data-reveal]');
  //   
  //     if (reduce) {
  //       els.forEach(function (el) { gsap.set(el, { clearProps: 'all', opacity: 1 }); });
  //       return;
  //     }
  //   
  //     els.forEach(function (el) {
  //       var dir = el.dataset.reveal || 'view';
  //       var delay = parseFloat(el.dataset.revealDelay || '0');
  //   
  //       // Curtain reveal: the framed image drops in behind its clip while the inner
  //       // photo zooms out from 1.5x and a blur sharpens. Animates the element's
  //       // nested .img-wrapper + .img, not the element. A slow 2s glide on outQuart.
  //       if (dir === 'curtain') {
  //         var wrap = el.querySelector('.img-wrapper');
  //         var img = el.querySelector('.img');
  //         if (wrap && img) {
  //           gsap.set(wrap, { yPercent: -110 });
  //           gsap.set(img, { yPercent: 100, scale: 1.5, filter: 'blur(10px)' });
  //           ScrollTrigger.create({
  //             trigger: el,
  //             start: 'top 85%',
  //             once: true,
  //             onEnter: function () {
  //               // clearProps on finish so the settled (natural) state takes over —
  //               // lets a later CSS :hover on the same .img win, which a leftover
  //               // GSAP inline transform would otherwise block.
  //               gsap.to(wrap, {
  //                 yPercent: 0, duration: 2, delay: delay, ease: 'power4.out',
  //                 onComplete: function () { gsap.set(wrap, { clearProps: 'transform' }); },
  //               });
  //               gsap.to(img, {
  //                 yPercent: 0, scale: 1, filter: 'blur(0px)', duration: 2, delay: delay, ease: 'power4.out',
  //                 onComplete: function () { gsap.set(img, { clearProps: 'transform,filter' }); },
  //               });
  //             },
  //           });
  //           return;
  //         }
  //       }
  //   
  //       var from = VETIC_REVEAL_FROM[dir] || VETIC_REVEAL_FROM.view;
  //       gsap.set(el, from);
  //       ScrollTrigger.create({
  //         trigger: el,
  //         start: 'top 85%',
  //         once: true,
  //         onEnter: function () {
  //           gsap.to(el, {
  //             x: 0,
  //             y: 0,
  //             xPercent: 0,
  //             yPercent: 0,
  //             scale: 1,
  //             opacity: 1,
  //             duration: VETIC_REVEAL_DURATION[dir] || 0.7,
  //             delay: delay,
  //             ease: VETIC_REVEAL_EASE[dir] || 'power4.out', // default: outQuart
  //           });
  //         },
  //       });
  //     });
  //   
  //     ScrollTrigger.refresh();
  //     fireUnreachableReveals();
  //     // Image loads change layout; re-check after every refresh (load, resize).
  //     ScrollTrigger.addEventListener('refresh', fireUnreachableReveals);
  //   }
  //   
  //   // Standalone section pages are short: an element near the bottom can have its
  //   // trigger start BEYOND the page's max scroll, so it would stay hidden forever
  //   // (e.g. last services row: start 1054 > maxScroll 1016). Fire those instantly.
  //   function fireUnreachableReveals() {
  //     var maxS = ScrollTrigger.maxScroll(window);
  //     ScrollTrigger.getAll().forEach(function (t) {
  //       if (t.start > maxS && t.vars && t.vars.onEnter) {
  //         var fn = t.vars.onEnter;
  //         t.kill();
  //         fn();
  //       }
  //     });
  //   }
  //   
  //   if (document.readyState !== 'loading') initVeticScrollReveal();
  //   else document.addEventListener('DOMContentLoaded', initVeticScrollReveal);
  //   
  //   /* =============================================================================
  //      vetic/scripts/navbar.js — SHARED scaling-hamburger toggle for all Vetic ports.
  //      Ported from the inline <script> in the template's Navbar.astro (TS -> plain
  //      classic script: NO top-level export). State lives on <html
  //      data-navigation-status> ("active"/"not-active") so the pill (in the navbar)
  //      and the dim backdrop (fixed sibling) react together via CSS. No GSAP — pure
  //      CSS transitions.
  //      ============================================================================= */
  //   
  //   function initVeticNavbar() {
  //     var html = document.documentElement;
  //     var toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
  //     var closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
  //     var menuLinks = document.querySelectorAll('.hamburger-nav__a');
  //   
  //     var setStatus = function (active) {
  //       html.setAttribute('data-navigation-status', active ? 'active' : 'not-active');
  //       html.style.overflow = active ? 'hidden' : '';
  //       toggleEls.forEach(function (el) { el.setAttribute('aria-expanded', String(active)); });
  //     };
  //     setStatus(false);
  //   
  //     toggleEls.forEach(function (btn) {
  //       btn.addEventListener('click', function (e) {
  //         e.stopPropagation();
  //         setStatus(html.getAttribute('data-navigation-status') !== 'active');
  //       });
  //     });
  //     closeEls.forEach(function (el) { el.addEventListener('click', function () { setStatus(false); }); });
  //     menuLinks.forEach(function (link) { link.addEventListener('click', function () { setStatus(false); }); });
  //     document.addEventListener('keydown', function (e) {
  //       if (e.key === 'Escape' && html.getAttribute('data-navigation-status') === 'active') {
  //         setStatus(false);
  //       }
  //     });
  //   }
  //   
  //   if (document.readyState !== 'loading') initVeticNavbar();
  //   else document.addEventListener('DOMContentLoaded', initVeticNavbar);
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="contacto-secao-125" ref={raiz}>
      <div data-navbar-root="">
                
                <div role="banner" className="navbar w-nav" data-navbar="">
                  <div className="padding-nav">
                    <div className="container-nav">
                      <div className="navbar_content">
                        <a href="/" className="navbar_logo-link w-nav-brand" aria-label="Vetic home">
                          <img loading="eager" src={s.imagem} alt="Vetic" className="navbar_logo" />
                        </a>
          
                        
                        <div className="nav_wrap">
                          <div className="navbar_list">
                            <a href="/about" className="nav_links w-nav-link">{s.acao}</a>
                            <a href="/products" className="nav_links w-nav-link">{s.acao2}</a>
                            <a href="/services" className="nav_links w-nav-link">{s.acao3}</a>
                            <a href="/blog" className="nav_links w-nav-link">{s.acao4}</a>
                          </div>
                        </div>
          
                        <div className="nav_buttons-wrap">
                          <a href="/contact" className="button w-button">{s.acao5}</a>
          
                          
                          <div className="hamburger-anchor">
                            <div className="hamburger-nav">
                              <div className="hamburger-nav__bg" aria-hidden="true"></div>
                              <div className="hamburger-nav__group">
                                <p className="hamburger-nav__menu-p">{s.texto}</p>
                                <ul className="hamburger-nav__ul">
                                  <li className="hamburger-nav__li">
                                    <a href="/about" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto2}</p>
                                      <div className="hamburger-nav__dot" aria-hidden="true"></div>
                                    </a>
                                  </li>
                                  <li className="hamburger-nav__li">
                                    <a href="/products" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto3}</p>
                                      <div className="hamburger-nav__dot" aria-hidden="true"></div>
                                    </a>
                                  </li>
                                  <li className="hamburger-nav__li">
                                    <a href="/services" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto4}</p>
                                      <div className="hamburger-nav__dot" aria-hidden="true"></div>
                                    </a>
                                  </li>
                                  <li className="hamburger-nav__li">
                                    <a href="/blog" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto5}</p>
                                      <div className="hamburger-nav__dot" aria-hidden="true"></div>
                                    </a>
                                  </li>
                                  <li className="hamburger-nav__li">
                                    <a href="/contact" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto6}</p>
                                      <div className="hamburger-nav__dot" aria-hidden="true"></div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <button type="button" data-navigation-toggle="toggle" aria-label="Toggle menu" aria-expanded="false" className="hamburger-nav__toggle" onClick={s.onClick}>
                                <div className="hamburger-nav__toggle-bar"></div>
                                <div className="hamburger-nav__toggle-bar"></div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          
                
                <div data-navigation-toggle="close" className="navigation__dark-bg" aria-hidden="true"></div>
              </div>
      
        <div className="page-wrapper">
      <section className="section_service-hero"> <div className="padding-global padding-section-small"> <div className="container-large"> <div className="services_hero"> <div className="services_img" data-reveal="curtain"> <div className="img-wrapper"><img src={s.imagem2} alt="A dog at the vet" className="img" loading="eager" /></div> </div> <div className="services_hero-content"> <div className="services_header">  <div data-reveal="view" data-reveal-delay="0.1"> <div className="tag"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>Pet solutions</div> </div> </div> <h1 className="heading-style-h2" data-reveal="view" data-reveal-delay="0.2">Veterinary services tailored for <span className="line">{s.rotulo}</span>needs</h1> <div className="services_description" data-reveal="view" data-reveal-delay="0.3"> <div>Explore our range of pet health services, including vaccinations, surgery, and preventative care.</div> </div> </div> <div data-reveal="view" data-reveal-delay="0.4"> <a data-wf--button--variant="base" href="/contact" className="button-primary w-inline-block"> <div className="button-left"><div>Contact us</div></div> <div className="button-right"><div className="button-right_center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" className="button_icon"><path d="M9.75569 11.3981C9.75569 9.83007 8.48393 8.55859 6.91565 8.55859C5.34737 8.55859 4.07617 9.83007 4.07617 11.3981C4.07617 12.9672 5.34709 14.2381 6.91565 14.2381C8.48421 14.2381 9.75569 12.9672 9.75569 11.3981ZM21.0803 9.11327C19.5123 9.11327 18.2408 10.3848 18.2408 11.9528C18.2408 13.5219 19.5123 14.7922 21.0803 14.7922C22.6486 14.7922 23.9201 13.5219 23.9201 11.9528C23.9201 10.3848 22.6489 9.11327 21.0803 9.11327ZM18.5012 15.1137C18.3038 14.8704 18.0244 14.5887 17.7035 14.2933C16.8473 13.1836 15.508 12.4657 13.9983 12.4657C12.6545 12.4657 11.4466 13.0347 10.5929 13.9413C10.1079 14.3633 9.67673 14.7752 9.40233 15.114L9.21865 15.3382C8.36185 16.3829 7.29533 17.6827 7.30317 19.8882C7.31073 21.9364 8.97869 23.6038 11.021 23.6038C11.5878 23.6051 12.1472 23.4753 12.6555 23.2248C13.1639 22.9742 13.6075 22.6096 13.9518 22.1593C14.2961 22.6097 14.7398 22.9744 15.2484 23.2249C15.7569 23.4755 16.3165 23.6052 16.8834 23.6038C18.9249 23.6038 20.5925 21.9367 20.6004 19.8882C20.6082 17.6827 19.5414 16.3829 18.6849 15.3382L18.5012 15.1137Z" fill="currentColor"></path><path d="M14.1974 10.6545C15.9255 10.6545 17.3264 9.25358 17.3264 7.52548C17.3264 5.79739 15.9255 4.39648 14.1974 4.39648C12.4693 4.39648 11.0684 5.79739 11.0684 7.52548C11.0684 9.25358 12.4693 10.6545 14.1974 10.6545Z" fill="currentColor"></path></svg></div></div> </a> </div> </div> </div> </div> </div> </section>
        </div>
    </section>
  );
}