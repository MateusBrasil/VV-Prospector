"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-127
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
  //   // stayli-property-hero — no local logic. Reveals ([data-reveal] gallery strip,
  //   // title/tags, description, price/rating) are driven by
  //   // /stayli/scripts/scroll-reveal.js (IntersectionObserver, fail-safe). The Reserve
  //   // stub form is handled by /stayli/scripts/forms.js. The booking type radios use a
  //   // CSS-only :checked reflection (style.css). Stub kept for the 4-file convention.
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
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="contacto-secao-127" ref={raiz}>
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
                            <a href="/contact" className="nav_links">{s.acao4}</a>
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
          <div className="section_hero">
            <div className="padding-global is-listing">
              <div className="listing_content">
                
                <div className="listing_top" data-reveal>
                  <div className="listing_hero-item">
                    <div className="listing_hero-item_img">
                      <img src={s.imagem2} loading="lazy" alt="Cityscape Lofts" className="img" />
                    </div>
                  </div>
                  <div className="listing_hero-item">
                    <div className="listing_hero-item_img">
                      <img src={s.imagem3} loading="lazy" alt="Cityscape Lofts" className="img" />
                    </div>
                  </div>
                  <div className="listing_hero-item">
                    <div className="listing_hero-item_img">
                      <img src={s.imagem4} loading="lazy" alt="Cityscape Lofts" className="img" />
                    </div>
                  </div>
                  <div className="listing_hero-item">
                    <div className="listing_hero-item_img">
                      <img src={s.imagem5} loading="lazy" alt="Cityscape Lofts" className="img" />
                    </div>
                  </div>
                  <div className="listing_hero-item">
                    <div className="listing_hero-item_img">
                      <img src={s.imagem6} loading="lazy" alt="Cityscape Lofts" className="img" />
                    </div>
                  </div>
                </div>
      
                <div className="listing_bottom">
                  <div className="padding-global">
                    <div className="container-large">
                      <div className="listing_bottom-content">
                        <div className="listing_left-wrap">
                          <div className="listing_title-wrap" data-reveal>
                            <h1 className="heading-style-h2 text-color-primary">{s.titulo}</h1>
                            <div className="listing_tag-list">
                              <div className="listing_tag">
                                <img src={s.imagem7} loading="lazy" alt="" className="icon-1x1-xmedium" />
                                <div>New York Downtown</div>
                              </div>
                              <div className="listing_tag">
                                <img src={s.imagem8} loading="lazy" alt="" className="icon-1x1-xmedium" />
                                <div className="listing_wrap">
                                  <div>1</div>
                                  <div>Bedroom</div>
                                </div>
                              </div>
                              <div className="listing_tag">
                                <img src={s.imagem9} loading="lazy" alt="" className="icon-1x1-xmedium" />
                                <div className="listing_wrap">
                                  <div>2</div>
                                  <div>Guest</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-rich-text w-richtext">
                            <p>{s.texto6}</p>
                            <ul>
                              <li>{s.item}</li>
                              <li>{s.item2}</li>
                              <li>{s.item3}</li>
                            </ul>
                          </div>
                        </div>
      
                        
                        <div className="listing_right-wrap">
                          <div className="listing_form w-form">
                            <form data-stub-form>
                              <div className="listing_form-content">
                                <div className="listing_form-top">
                                  <div className="listing_wrap is-price">
                                    <div className="text-pricing is-pricing">$</div>
                                    <div className="text-pricing is-pricing">180</div>
                                    <div className="text-pricing">/night</div>
                                  </div>
                                  <div className="listing_discount-tag" data-reveal>
                                    <div>20% OFF</div>
                                  </div>
                                </div>
                                <div className="listing_stars-wrap" data-reveal>
                                  <div className="stars_list">
                                    <div className="start_item"><img src={s.imagem10} loading="lazy" width="16" alt="" /></div>
                                    <div className="start_item"><img src={s.imagem11} loading="lazy" alt="" /></div>
                                    <div className="start_item"><img src={s.imagem12} loading="lazy" alt="" /></div>
                                    <div className="start_item"><img src={s.imagem13} loading="lazy" alt="" /></div>
                                    <div className="start_item"><img src={s.imagem14} loading="lazy" alt="" /></div>
                                  </div>
                                  <div className="text-color-primary text-weight-normal">25 reviews</div>
                                </div>
                                <div>
                                  <div className="text-weight-normal">Type</div>
                                  <div className="spacer-rem"></div>
                                  <div className="listing_type">
                                    <label className="listing_button w-radio">
                                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom listing_radio-button w-radio-input"></div>
                                      <input type="radio" name="Type" id="Standard-Room" value="Standard Room" className="listing_radio-native" />
                                      <span className="w-form-label" htmlFor="Standard-Room">{s.rotulo}</span>
                                    </label>
                                    <label className="listing_button w-radio">
                                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom listing_radio-button w-radio-input"></div>
                                      <input type="radio" name="Type" id="Deluxe-Room" value="Deluxe Room" className="listing_radio-native" />
                                      <span className="w-form-label" htmlFor="Deluxe-Room">{s.rotulo2}</span>
                                    </label>
                                    <label className="listing_button w-radio">
                                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom listing_radio-button w-radio-input"></div>
                                      <input type="radio" name="Type" id="Suite-Room" value="Suite Room" checked={true} className="listing_radio-native" />
                                      <span className="w-form-label" htmlFor="Suite-Room">{s.rotulo3}</span>
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-weight-normal">Night</div>
                                  <div className="spacer-rem"></div>
                                  <select id="Nights" name="Nights" className="form_input is-select-input w-select">
                                    <option value="">Select one...</option>
                                    <option value="First">1</option>
                                    <option value="Second">2</option>
                                    <option value="Third">3</option>
                                  </select>
                                </div>
                                <input type="submit" className="button w-button" value="Reserve" />
                              </div>
                            </form>
                            <p className="form_message" data-form-message hidden={true}>{s.texto7}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}