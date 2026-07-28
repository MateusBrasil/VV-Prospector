"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-121
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
  //   // stayli-listings-hero — local logic: the House/Apartment tab toggle (vanilla,
  //   // ported 1:1 from the source ListingsHero.astro inline <script>). Click or
  //   // Enter/Space on a tab link swaps the active pane (w--current on links,
  //   // w--tab-active on panes). Wrapped in an IIFE so there is NO top-level export
  //   // (a classic <script src> with a top-level export is a silent SyntaxError that
  //   // would kill the file). Self-inits on load.
  //   //
  //   // The reveal of the form card is handled by the shared scroll-reveal.js
  //   // ([data-reveal] -> .is-in). The stub form submit is handled by the shared
  //   // forms.js ([data-stub-form] -> shows [data-form-message]). The inlined navbar
  //   // hamburger is driven by the shared navbar.js.
  //   (function () {
  //     document.querySelectorAll("[data-listings-tabs]").forEach((tabsEl) => {
  //       const links = [...tabsEl.querySelectorAll(".w-tab-link")];
  //       const panes = [...tabsEl.querySelectorAll(".w-tab-pane")];
  //   
  //       const activate = (target) => {
  //         links.forEach((l) => {
  //           const on = l.getAttribute("data-w-tab") === target;
  //           l.classList.toggle("w--current", on);
  //           l.setAttribute("aria-selected", on ? "true" : "false");
  //         });
  //         panes.forEach((p) => {
  //           p.classList.toggle("w--tab-active", p.getAttribute("data-w-tab") === target);
  //         });
  //       };
  //   
  //       links.forEach((link) => {
  //         const target = link.getAttribute("data-w-tab");
  //         if (!target) return;
  //         link.addEventListener("click", (e) => {
  //           e.preventDefault();
  //           activate(target);
  //         });
  //         link.addEventListener("keydown", (e) => {
  //           if (e.key === "Enter" || e.key === " ") {
  //             e.preventDefault();
  //             activate(target);
  //           }
  //         });
  //       });
  //     });
  //   })();
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
    <section className="dobra" data-dobra="contacto-secao-121" ref={raiz}>
      <div data-navbar-root="">
                <div className="navbar is-absolute" data-navbar="" role="banner">
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
                            <a href="/about" className="nav_links text-color-white">{s.acao}</a>
                            <a href="/listings" className="nav_links text-color-white">{s.acao2}</a>
                            <a href="/blog" className="nav_links text-color-white">{s.acao3}</a>
                            <a href="/contact" className="nav_links text-color-white">{s.acao4}</a>
                          </div>
                        </nav>
          
                        <div className="nav_buttons-wrap">
                          <div className="login-wrap hide-mobile-landscape">
                            <a href="/listings" className="button w-button">{s.acao5}</a>
                          </div>
          
                          
                          <div className="hamburger-anchor" data-nav-theme="light">
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
          <div className="section_hero-listings">
            <div className="padding-global is-hero-listings">
              <div className="container-large">
                <div className="hero_listings-content">
                  <div className="hero_listing-form" data-reveal>
                    <form className="hero_listing-form_content" data-stub-form>
                      <div className="listings_form-top">
                        <h1 className="heading-style-h2">{s.titulo}</h1>
                        <div className="listings_form-p_wrap">
                          <p className="text-base">{s.texto6}</p>
                        </div>
                      </div>
                      <div className="listings_form-tabs w-tabs" data-listings-tabs>
                        <div className="listings_form-tabs_list w-tab-menu" role="tablist">
                          <a data-w-tab="Tab 1" className="listings_form-tab w-inline-block w-tab-link w--current" role="tab" aria-selected="true" tabIndex="0">
                            <div>House</div>
                          </a>
                          <a data-w-tab="Tab 2" className="listings_form-tab w-inline-block w-tab-link" role="tab" aria-selected="false" tabIndex="0">
                            <div>Apartment</div>
                          </a>
                        </div>
                        <div className="listing_tabs-content w-tab-content">
                          <div data-w-tab="Tab 1" className="listings_tab w-tab-pane w--tab-active" role="tabpanel">
                            <div className="listings_tab-content">
                              <div className="listings_filter">
                                <div className="text-xs text-color-grey">Location</div>
                                <select name="location" className="listings_select w-select">
                                  <option value="Tokyo">Tokyo</option>
                                  <option value="Paris">Paris</option>
                                  <option value="New York">New York</option>
                                  <option value="Bali">Bali</option>
                                </select>
                              </div>
                              <div className="listings_divider"></div>
                              <div className="listings_filter">
                                <div className="text-xs text-color-grey">Floor</div>
                                <select name="floor" className="listings_select w-select">
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </select>
                              </div>
                              <div className="listings_divider"></div>
                              <div className="listings_filter">
                                <div className="text-xs text-color-grey">Size</div>
                                <select name="size" className="listings_select w-select">
                                  <option value="300 ft2">300 ft2</option>
                                  <option value="500 ft2">500 ft2</option>
                                  <option value="750 ft2">750 ft2</option>
                                  <option value="1000 ft2">1000 ft2</option>
                                </select>
                              </div>
                              <div className="listings_divider"></div>
                              <div className="listings_filter">
                                <div className="text-xs text-color-grey">Bedrooms</div>
                                <select name="bedrooms" className="listings_select w-select">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div data-w-tab="Tab 2" className="listings_tab w-tab-pane" role="tabpanel">
                            <div className="listings_tab-content">
                              <div className="listings_filter">
                                <div className="text-xs text-color-grey">Location</div>
                                <select name="location" className="listings_select w-select">
                                  <option value="Tokyo">Tokyo</option>
                                  <option value="Paris">Paris</option>
                                  <option value="New York">New York</option>
                                  <option value="Bali">Bali</option>
                                </select>
                              </div>
                              <div className="listings_divider"></div>
                              <div className="listings_filter">
                                <div className="text-xs text-color-grey">Floor</div>
                                <select name="floor" className="listings_select w-select">
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </select>
                              </div>
                              <div className="listings_divider"></div>
                              <div className="listings_filter">
                                <div className="text-xs text-color-grey">Size</div>
                                <select name="size" className="listings_select w-select">
                                  <option value="300 ft2">300 ft2</option>
                                  <option value="500 ft2">500 ft2</option>
                                  <option value="750 ft2">750 ft2</option>
                                  <option value="1000 ft2">1000 ft2</option>
                                </select>
                              </div>
                              <div className="listings_divider"></div>
                              <div className="listings_filter">
                                <div className="text-xs text-color-grey">Bedrooms</div>
                                <select name="bedrooms" className="listings_select w-select">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input type="submit" className="button w-button" value="Search now" />
                    </form>
                    <p className="form_message" data-form-message hidden={true}>{s.texto7}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}