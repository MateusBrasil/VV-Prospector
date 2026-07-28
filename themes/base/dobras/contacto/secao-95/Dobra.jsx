"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-95
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   // stayli-contact-hero — no local logic. Scroll reveals ([data-reveal] → .is-in)
  //   // are handled by the shared /stayli/scripts/scroll-reveal.js (IntersectionObserver,
  //   // fail-safe, no GSAP). The stub contact form ([data-stub-form]) is intercepted by
  //   // /stayli/scripts/forms.js, which shows [data-form-message] and resets — no backend.
  //   // The inlined navbar is driven by /stayli/scripts/navbar.js. Stub kept for the
  //   // 4-file convention.
  //   
  //   /* ===== TEMLIS-INLINED-NAVBAR: stayli-navbar behavior ===== */
  //   // stayli-navbar — no local logic. The scaling-hamburger toggle (data-navigation-*)
  //   // is driven by the shared /stayli/scripts/navbar.js. Stub kept for the 4-file
  //   // convention.
  //   
  //   /* Stayli — static-site form stub. Port of forms.ts to a plain global
  //      (no `export`, self-init — Rule 1). Any form with [data-stub-form] is
  //      intercepted, shows its sibling [data-form-message], and resets. No backend.
  //      Used by: footer, contact-hero, blog-hero, listings-hero, booking form. */
  //   (function () {
  //     function initForms() {
  //       document.querySelectorAll('form[data-stub-form]').forEach(function (form) {
  //         form.addEventListener('submit', function (e) {
  //           e.preventDefault();
  //           var msg = form.parentElement
  //             ? form.parentElement.querySelector('[data-form-message]')
  //             : null;
  //           if (msg) msg.hidden = false;
  //           form.reset();
  //         });
  //       });
  //     }
  //   
  //     if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initForms);
  //     else initForms();
  //   })();
  //   
  //   /* Stayli — shared reveal engine. Port of animations.ts to a plain global
  //      (no `export`, self-init — Rule 1). NO GSAP: reveals are CSS keyframes +
  //      IntersectionObserver. Two parts:
  //        - Hero entrance: [data-hero-reveal] gets `.is-in` on load (the actual
  //          motion is pure CSS keyframes in /stayli/styles.css — heroRise / heroDeblur
  //          / heroKenBurns / heroShadowIn — so the hero animates even with this off).
  //        - Scroll reveals: [data-reveal] gets `.is-in` as it enters the viewport,
  //          with a 90ms top->bottom cascade for siblings entering together.
  //      FAIL-SAFE: the hidden start state lives in CSS under `html.reveal-js [data-reveal]`
  //      and only inside `@media (prefers-reduced-motion: no-preference)`. The `reveal-js`
  //      flag is set inline in <head> before first paint. If this script never runs,
  //      `.is-in` is never added but content is already visible (blur-free) unless the
  //      flag + motion gate are both on — and a stalled observer would leave blur, so
  //      this script MUST load. Reduced-motion users get `.is-in` immediately, no motion. */
  //   (function () {
  //     var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   
  //     function runHeroEntrance() {
  //       var els = document.querySelectorAll("[data-hero-reveal]");
  //       if (!els.length) return;
  //       if (REDUCE) {
  //         els.forEach(function (el) { el.classList.add("is-in"); });
  //         return;
  //       }
  //       requestAnimationFrame(function () {
  //         els.forEach(function (el) { el.classList.add("is-in"); });
  //       });
  //     }
  //   
  //     function runScrollReveals() {
  //       var els = document.querySelectorAll("[data-reveal]");
  //       if (!els.length) return;
  //       if (REDUCE) {
  //         els.forEach(function (el) { el.classList.add("is-in"); });
  //         return;
  //       }
  //       var STAGGER = 90; // ms between siblings entering together
  //       var io = new IntersectionObserver(
  //         function (entries) {
  //           var entering = entries
  //             .filter(function (e) { return e.isIntersecting; })
  //             .sort(function (a, b) {
  //               return a.target.compareDocumentPosition(b.target) &
  //                 Node.DOCUMENT_POSITION_FOLLOWING
  //                 ? -1
  //                 : 1;
  //             });
  //           entering.forEach(function (entry, i) {
  //             var el = entry.target;
  //             var delay = Math.min(i, 8) * STAGGER;
  //             if (delay) window.setTimeout(function () { el.classList.add("is-in"); }, delay);
  //             else el.classList.add("is-in");
  //             io.unobserve(el);
  //           });
  //         },
  //         { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  //       );
  //       els.forEach(function (el) { io.observe(el); });
  //     }
  //   
  //     function init() {
  //       runHeroEntrance();
  //       runScrollReveals();
  //     }
  //   
  //     if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  //     else init();
  //   })();
  //   
  //   /* Stayli — scaling-hamburger navbar toggle. Port of navbar.ts to a plain global
  //      (no `export`, self-init — Rule 1). No animation library — pure CSS transitions
  //      keyed off `<html data-navigation-status>` ("active"/"not-active").
  //      toggle / close-backdrop / menu-link-click / Escape all flip the attribute;
  //      sticky hide-on-scroll-down / show-on-scroll-up on [data-navbar]. */
  //   (function () {
  //     function initNavbar() {
  //       var html = document.documentElement;
  //       var toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
  //       var closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
  //       var menuLinks = document.querySelectorAll('.hamburger-nav__a');
  //   
  //       function setStatus(active) {
  //         html.setAttribute('data-navigation-status', active ? 'active' : 'not-active');
  //         html.style.overflow = active ? 'hidden' : '';
  //         toggleEls.forEach(function (el) { el.setAttribute('aria-expanded', String(active)); });
  //       }
  //       setStatus(false);
  //   
  //       toggleEls.forEach(function (btn) {
  //         btn.addEventListener('click', function (e) {
  //           e.stopPropagation();
  //           setStatus(html.getAttribute('data-navigation-status') !== 'active');
  //         });
  //       });
  //       closeEls.forEach(function (el) { el.addEventListener('click', function () { setStatus(false); }); });
  //       menuLinks.forEach(function (link) { link.addEventListener('click', function () { setStatus(false); }); });
  //       document.addEventListener('keydown', function (e) {
  //         if (e.key === 'Escape' && html.getAttribute('data-navigation-status') === 'active') setStatus(false);
  //       });
  //   
  //       // Sticky hide-on-scroll-down / show-on-scroll-up. Page scroll is locked while
  //       // the menu is open, so the two never conflict.
  //       var navbar = document.querySelector('[data-navbar]');
  //       if (navbar) {
  //         var lastY = window.scrollY;
  //         window.addEventListener('scroll', function () {
  //           var y = window.scrollY;
  //           if (y > lastY && y > 200) navbar.classList.add('is-hidden');
  //           else navbar.classList.remove('is-hidden');
  //           lastY = y;
  //         }, { passive: true });
  //       }
  //     }
  //   
  //     if (document.readyState !== 'loading') initNavbar();
  //     else document.addEventListener('DOMContentLoaded', initNavbar);
  //   })();
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="contacto-secao-95" ref={raiz}>
      <div data-navbar-root="">
                <div className="navbar" data-navbar="" role="banner">
                  <div className="padding-global is-navbar">
                    <div className="container-large">
                      <div className="navbar_content">
                        <div className="nav_wrap">
                          <a href="/" aria-label="Stayli, home" className="navbar_logo-link w-inline-block">
                            <img src={s.imagem} loading="eager" alt="Stayli" className="navbar_logo" />
                          </a>
                        </div>
          
                        
                        <nav role="navigation" className="nav_mobile" aria-label="Primary">
                          <div className="navbar_list">
                            <a href="/about" className="nav_links">{s.acao}</a>
                            <a href="/listings" className="nav_links">{s.acao2}</a>
                            <a href="/blog" className="nav_links">{s.acao3}</a>
                            <a href="/contact" aria-current="page" className="nav_links">{s.acao4}</a>
                          </div>
                        </nav>
          
                        <div className="nav_buttons-wrap">
                          <div className="login-wrap hide-mobile-landscape">
                            <a href="/listings" className="button w-button">{s.acao5}</a>
                          </div>
          
                          
                          <div className="hamburger-anchor" data-nav-theme="dark">
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
                                    <a href="/listings" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto3}</p>
                                      <div className="hamburger-nav__dot" aria-hidden="true"></div>
                                    </a>
                                  </li>
                                  <li className="hamburger-nav__li">
                                    <a href="/blog" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto4}</p>
                                      <div className="hamburger-nav__dot" aria-hidden="true"></div>
                                    </a>
                                  </li>
                                  <li className="hamburger-nav__li">
                                    <a href="/contact" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto5}</p>
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
          <div className="section_hero is-beige">
            <div className="padding-global is-contact-1">
              <div className="container-large">
                <div className="contact-1_content">
                  <div className="contact-1_left-column">
                    <div className="listing_about-list">
                      <div className="listing_about-item_wrap" data-reveal>
                        <div className="listing_about-item">
                          <div className="custom_icon"><img src={s.imagem2} loading="lazy" alt="" className="icon-1x1-medium" /></div>
                          <div className="text-2xl">Email to Us</div>
                        </div>
                        <div className="listing_about-item_p-wrap">
                          <p className="text-base text-color-grey">{s.texto6}</p>
                        </div>
                      </div>
                      <div className="listing_about-item_wrap" data-reveal>
                        <div className="listing_about-item">
                          <div className="custom_icon"><img src={s.imagem3} loading="lazy" alt="" className="icon-1x1-medium" /></div>
                          <div className="text-2xl">Phone number</div>
                        </div>
                        <div className="listing_about-item_p-wrap">
                          <p className="text-base text-color-grey">{s.texto7}</p>
                        </div>
                      </div>
                      <div className="listing_about-item_wrap" data-reveal>
                        <div className="listing_about-item">
                          <div className="custom_icon"><img src={s.imagem4} loading="lazy" alt="" className="icon-1x1-medium" /></div>
                          <div className="text-2xl">Office</div>
                        </div>
                        <div className="listing_about-item_p-wrap">
                          <p className="text-base text-color-grey">{s.texto8}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact-1_right-column w-form">
                    <form name="email-form-2" className="contact-1_form-content" data-reveal data-stub-form>
                      <div className="contact-1_top-form">
                        <div className="text-subtitle">Contact</div>
                        <h1 className="heading-style-h2">{s.titulo}</h1>
                        <div className="text-base text-color-grey">We&#x27;d love to hear from you!</div>
                      </div>
                      <div className="form-field_wrap">
                        <div className="text-base text-weight-normal">Name</div><input className="form_input is-regular w-input" maxLength="256" name="Name" placeholder="Your full name" type="text" id="Name" required={true} />
                      </div>
                      <div className="form-field_wrap">
                        <div className="text-base text-weight-normal">Your email</div><input className="form_input is-regular w-input" maxLength="256" name="Email" placeholder="Your email address" type="email" id="Email" required={true} />
                      </div>
                      <div className="form-field_wrap">
                        <div className="text-base text-weight-normal">Your messages</div><textarea placeholder="Your messages here" maxLength="5000" id="Your-message-2" name="Your-message" className="form_input is-regular is-text-area w-input"></textarea>
                      </div><input type="submit" className="button w-button" value="Submit" />
                    </form>
                    <p className="form_message" data-form-message hidden={true}>{s.texto9}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}