"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-142
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
  //   /* Aurae — Product Hero (Shop listing hero).
  //      This is a classic <script> — no imports/exports. All behavior lives in the
  //      shared classic scripts loaded before this file:
  //        /aurae/scripts/product-gallery.js → click/keyboard a thumbnail to crossfade the
  //                                            large image (toggles .is-active opacity).
  //        /aurae/scripts/accordion.js       → Shipping / Return Policy panels: measure the
  //                                            real panel height and drive max-height for a
  //                                            two-way eased open/close.
  //        /aurae/scripts/shop-hero-intro.js → page-load entrance: clip-path reveal on the
  //                                            main image, slide-in thumbnail rail, staggered
  //                                            rise of the info column. fonts.ready gated,
  //                                            finally{} always reveals, reduced-motion guard.
  //        /aurae/scripts/navbar.js          → mobile hamburger menu toggle.
  //      GSAP + ScrollTrigger + SplitText globals are loaded in the head. Nothing to boot here. */
  //   
  //   // navbar.js — Aurae navbar behaviour.
  //   // Desktop: plain Aurae nav links (no dropdown — the Products mega-dropdown was removed).
  //   // Mobile (≤991): OSMO scaling hamburger — state lives in <html data-navigation-status>
  //   // ("active"/"not-active"); CSS in hamburger-nav.css transitions off that attribute.
  //   (function () {
  //     function init() {
  //       const html = document.documentElement;
  //   
  //       // --- OSMO hamburger (mobile) ---
  //       const toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
  //       const closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
  //       const menuLinks = document.querySelectorAll(".hamburger-nav__a");
  //   
  //       const setStatus = (active) => {
  //         html.setAttribute("data-navigation-status", active ? "active" : "not-active");
  //         toggleEls.forEach((el) => el.setAttribute("aria-expanded", String(active)));
  //       };
  //       setStatus(false);
  //   
  //       toggleEls.forEach((btn) =>
  //         btn.addEventListener("click", (e) => {
  //           e.stopPropagation();
  //           setStatus(html.getAttribute("data-navigation-status") !== "active");
  //         })
  //       );
  //       closeEls.forEach((el) => el.addEventListener("click", () => setStatus(false)));
  //       menuLinks.forEach((link) => link.addEventListener("click", () => setStatus(false)));
  //       document.addEventListener("keydown", (e) => {
  //         if (e.key === "Escape") setStatus(false);
  //       });
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   // shop-hero-intro.js — page-load entrance for the Shop hero (ProductGrid inside
  //   // section_product.is-hero). Same patterns as the home/about hero intros (fonts.ready
  //   // gating, finally{} always reveals, prefers-reduced-motion → no motion).
  //   //
  //   // CAREFUL — this hero carries two live interactions we must NOT fight:
  //   //   • product-gallery.js toggles `.is-active` OPACITY on the individual gallery images
  //   //     and thumbnails. So the entrance only animates WRAPPER-level elements with
  //   //     transform/opacity — never the per-image/per-thumb opacity the gallery owns.
  //   //   • accordion.js sets `.accordion_text` max-height on the open "Shipping" accordion.
  //   //     We only animate the accordion CONTAINER's transform/opacity, never its max-height.
  //   (function () {
  //     function run() {
  //       const hero = document.querySelector(".section_product.is-hero");
  //       const list = hero?.querySelector(".w-dyn-list");
  //       const layout = list?.querySelector(".product_layout");
  //       if (!hero || !list || !layout) return;
  //   
  //       try {
  //         const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //         if (reduce) return; // finally reveals; no motion
  //   
  //         const ease = "power3.out";
  //         const info = layout.querySelector(".product_info");
  //         const mainImg = layout.querySelector(".product-image_main");
  //         const thumbs = layout.querySelector(".product-image_list");
  //         const infoItems = info ? Array.from(info.children) : [];
  //   
  //         const tl = gsap.timeline({ defaults: { ease, duration: 0.8 } });
  //         // Gallery main image: clip-path reveal (uncovers bottom→up). clip-path clips the
  //         // container's rendering — it never sets opacity on the stacked crossfade images.
  //         if (mainImg) tl.from(mainImg, { clipPath: "inset(100% 0 0 0)", duration: 1.1 }, 0);
  //         // Thumbnail rail: fade + slide in as one wrapper (not per-thumb).
  //         if (thumbs) tl.from(thumbs, { opacity: 0, x: -16, duration: 0.7 }, 0.2);
  //         // Info column: staggered rise of each block via transform + opacity only.
  //         if (infoItems.length) {
  //           tl.from(infoItems, { y: 24, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.25);
  //         }
  //       } finally {
  //         layout.style.visibility = "visible";
  //       }
  //     }
  //   
  //     // Wait for fonts so the text doesn't reflow after the reveal; fall back if it stalls.
  //     function start() {
  //       if (document.fonts?.ready) {
  //         let done = false;
  //         const go = () => { if (!done) { done = true; run(); } };
  //         document.fonts.ready.then(go);
  //         setTimeout(go, 600);
  //       } else {
  //         run();
  //       }
  //     }
  //   
  //     function init() {
  //       start();
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   // accordion.js — structural toggle for [data-accordion] (product Shipping/Return + FAQ).
  //   // Animates by measuring the panel's real height and driving max-height to that exact
  //   // value, so the easing spans the visible range in BOTH directions.
  //   (function () {
  //     function init() {
  //       document.querySelectorAll("[data-accordion]").forEach((acc) => {
  //         const head = acc.querySelector("[data-accordion-toggle]");
  //         const text = acc.querySelector(".accordion_text");
  //         if (!head) return;
  //   
  //         head.setAttribute("role", "button");
  //         head.setAttribute("tabindex", "0");
  //   
  //         const startOpen = acc.classList.contains("is-open");
  //         head.setAttribute("aria-expanded", String(startOpen));
  //         // A panel that ships open needs no entrance animation: pin it to its full height.
  //         if (startOpen && text) text.style.maxHeight = "none";
  //   
  //         const open = () => {
  //           head.setAttribute("aria-expanded", "true");
  //           if (!text) {
  //             acc.classList.add("is-open");
  //             return;
  //           }
  //           // Measure the full height while still collapsed (scrollHeight ignores the
  //           // max-height clamp), set it as the target, THEN flip the class.
  //           const target = text.scrollHeight;
  //           text.style.maxHeight = target + "px"; // animates from the current 0
  //           acc.classList.add("is-open"); // icon flip; inline max-height overrides CSS `none`
  //           const done = (e) => {
  //             if (e.propertyName !== "max-height") return;
  //             text.style.maxHeight = "none"; // release so it can reflow freely once expanded
  //             text.removeEventListener("transitionend", done);
  //           };
  //           text.addEventListener("transitionend", done);
  //         };
  //   
  //         const close = () => {
  //           head.setAttribute("aria-expanded", "false");
  //           if (text) {
  //             // Give the transition a concrete start value (none → px) before going to 0.
  //             text.style.maxHeight = text.scrollHeight + "px";
  //             void text.offsetHeight; // force reflow so the next change animates
  //             text.style.maxHeight = "0px";
  //           }
  //           acc.classList.remove("is-open");
  //         };
  //   
  //         const toggle = () => (acc.classList.contains("is-open") ? close() : open());
  //   
  //         head.addEventListener("click", toggle);
  //         head.addEventListener("keydown", (e) => {
  //           if (e.key === "Enter" || e.key === " ") {
  //             e.preventDefault();
  //             toggle();
  //           }
  //         });
  //       });
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   // product-gallery.js — click (or keyboard-activate) a thumbnail to swap the large
  //   // image. A light opacity crossfade (CSS handles the fade; this only toggles `.is-active`).
  //   //
  //   // Progressive enhancement: the markup ships with the first main image + first
  //   // thumbnail already `.is-active`, so the gallery is correct even if JS never runs.
  //   (function () {
  //     function initGallery(root) {
  //       const thumbs = Array.from(root.querySelectorAll("[data-thumb]"));
  //       const mains = Array.from(root.querySelectorAll("[data-main]"));
  //       if (thumbs.length < 2 || mains.length < 2) return;
  //   
  //       const select = (index) => {
  //         mains.forEach((m, i) => m.classList.toggle("is-active", i === index));
  //         thumbs.forEach((t, i) => {
  //           const on = i === index;
  //           t.classList.toggle("is-active", on);
  //           t.setAttribute("aria-selected", String(on));
  //           t.tabIndex = on ? 0 : -1; // roving tabindex
  //         });
  //       };
  //   
  //       thumbs.forEach((thumb, i) => {
  //         thumb.addEventListener("click", () => select(i));
  //         thumb.addEventListener("keydown", (e) => {
  //           if (e.key === "Enter" || e.key === " ") {
  //             e.preventDefault();
  //             select(i);
  //           } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
  //             e.preventDefault();
  //             const next = (i + 1) % thumbs.length;
  //             select(next);
  //             thumbs[next].focus();
  //           } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
  //             e.preventDefault();
  //             const prev = (i - 1 + thumbs.length) % thumbs.length;
  //             select(prev);
  //             thumbs[prev].focus();
  //           }
  //         });
  //       });
  //   
  //       // Normalise to the first item (in case markup drifted).
  //       const initial = thumbs.findIndex((t) => t.classList.contains("is-active"));
  //       select(initial >= 0 ? initial : 0);
  //     }
  //   
  //     function init() {
  //       document.querySelectorAll("[data-gallery]").forEach(initGallery);
  //     }
  //   
  //     if (document.readyState === "loading") {
  //       document.addEventListener("DOMContentLoaded", init);
  //     } else {
  //       init();
  //     }
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="contacto-secao-142" ref={raiz}>
      <div className="page-wrapper">
          <div data-navbar="" data-collapse="medium" className="navbar w-nav" role="banner">
            <div className="padding-global is-navbar">
              <div className="navbar_content">
                <a href="/" className="navbar_logo-link w-nav-brand" aria-label="Aurae home">
                  <img loading="eager" src={s.imagem} alt="Aurae" className="navbar_logo" />
                </a>
                <div className="nav_wrap">
                  <nav role="navigation" className="nav_mobile w-nav-menu" data-nav-menu="">
                    <div className="navbar_list">
                      <a href="/about" className="nav_links w-nav-link">{s.acao}</a>
                      <a href="/shop" className="nav_links w-nav-link">{s.acao2}</a>
                      <a href="/blog" className="nav_links w-nav-link">{s.acao3}</a>
                      <a href="/contact" className="nav_links w-nav-link">{s.acao4}</a>
                    </div>
                  </nav>
                </div>
                <div className="nav_buttons-wrap">
                  <div className="login-wrap hide-tablet">
                    <a href="/shop" className="button-component w-inline-block">
                      <div className="button_text">Shop Now</div>
                      <div className="button_background"></div>
                    </a>
                  </div>
                  <div className="hamburger-anchor">
                    <div className="hamburger-nav">
                      <div className="hamburger-nav__bg" aria-hidden="true"></div>
                      <div className="hamburger-nav__group">
                        <p className="hamburger-nav__menu-p">{s.texto}</p>
                        <ul className="hamburger-nav__ul">
                          <li className="hamburger-nav__li"><a href="/about" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto2}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                          <li className="hamburger-nav__li"><a href="/shop" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto3}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                          <li className="hamburger-nav__li"><a href="/blog" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto4}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
                          <li className="hamburger-nav__li"><a href="/contact" className="hamburger-nav__a"><p className="hamburger-nav__p">{s.texto5}</p><div className="hamburger-nav__dot" aria-hidden="true"></div></a></li>
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
          <div data-navigation-toggle="close" className="navigation__dark-bg" aria-hidden="true"></div>
      
          <section className="section_product is-hero">
            <div className="padding-section-small"></div>
            <div className="padding-global">
              <div className="container-large">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="product_layout w-dyn-item">
                      <div className="product_info">
                        <div>
                          <h2 className="text-4xl"><a href="/products/aurae-skincare">{s.acao5}</a></h2>
                          <div className="spacer-xsmall"></div>
                          <div className="price_wrapper">
                            <div className="compared-price">$199.00 USD</div>
                            <div className="h5 italic-heading">$99.00 USD</div>
                          </div>
                        </div>
                        <div className="text-color-secondary">A lightweight serum formulated to improve skin tone, texture, and hydration. Absorbs quickly and works beneath the surface to reveal a healthy-looking glow.</div>
                        <div>
                          <form data-static-cart="" className="w-commerce-commerceaddtocartform add-to-cart_wrapper">
                            <input type="number" inputmode="numeric" min="1" className="w-commerce-commerceaddtocartquantityinput add-to-cart_quantity" value="1" aria-label="Quantity" />
                            <button type="button" className="w-commerce-commerceaddtocartbutton add-to-cart_button" onClick={s.onClick}>{s.acao6}</button>
                          </form>
                        </div>
                        <div className="product_divider"></div>
                        <div className="accordion is-open" data-accordion="">
                          <div className="accordion_heading" data-accordion-toggle="">
                            <div className="text-xl">Shipping</div>
                            <div className="accordion_icon-wrapper">
                              <div className="line-horizontal"></div>
                              <div className="line_vertical"></div>
                            </div>
                          </div>
                          <div accordion="product-accordion" className="accordion_text">
                            <div className="spacer-xsmall"></div>
                            <div className="text-sm text-color-secondary">We offer free shipping on all orders and they typical ship within 1-2 business days. US orders typically arrive in 3-5 business days with standard shipping or 2-3 days with expedited shipping. International orders generally arrive within 7-14 business days, depending on your location.</div>
                          </div>
                        </div>
                        <div className="product_divider"></div>
                        <div className="accordion" data-accordion="">
                          <div className="accordion_heading" data-accordion-toggle="">
                            <div className="text-xl">Return Policy</div>
                            <div className="accordion_icon-wrapper">
                              <div className="line-horizontal"></div>
                              <div className="line_vertical"></div>
                            </div>
                          </div>
                          <div accordion="product-accordion" className="accordion_text">
                            <div className="spacer-xsmall"></div>
                            <div className="text-sm text-color-secondary">We offer free shipping on all orders and they typical ship within 1-2 business days. US orders typically arrive in 3-5 business days with standard shipping or 2-3 days with expedited shipping. International orders generally arrive within 7-14 business days, depending on your location.</div>
                          </div>
                        </div>
                        <div className="product_divider"></div>
                      </div>
                      <div className="product_gallery" data-gallery="">
                        <div className="product-image_list" role="tablist" aria-label="Product image thumbnails">
                          <div className="product-image is-one is-active" data-thumb="0" role="tab" tabIndex="0" aria-selected="true" aria-label="Show product image 1">
                            <img loading="lazy" src={s.imagem2} alt="Aurae Skincare" className="img" />
                          </div>
                          <div className="product-image is-two" data-thumb="1" role="tab" tabIndex="-1" aria-selected="false" aria-label="Show product image 2">
                            <img loading="lazy" src={s.imagem3} alt="Aurae Skincare" className="img" />
                          </div>
                          <div className="product-image is-three" data-thumb="2" role="tab" tabIndex="-1" aria-selected="false" aria-label="Show product image 3">
                            <img loading="lazy" src={s.imagem4} alt="Aurae Skincare" className="img" />
                          </div>
                          <div className="product-image is-four" data-thumb="3" role="tab" tabIndex="-1" aria-selected="false" aria-label="Show product image 4">
                            <img loading="lazy" src={s.imagem5} alt="Aurae Skincare" className="img" />
                          </div>
                        </div>
                        <div className="product-image_main">
                          <img loading="eager" src={s.imagem6} alt="Aurae Skincare" className="img is-product-one is-active" data-main="0" />
                          <img loading="lazy" src={s.imagem7} alt="Aurae Skincare" className="img is-product-two" data-main="1" />
                          <img loading="lazy" src={s.imagem8} alt="Aurae Skincare" className="img is-product-three" data-main="2" />
                          <img loading="lazy" src={s.imagem9} alt="Aurae Skincare" className="img is-product-four" data-main="3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="padding-section-small"></div>
          </section>
        </div>
    </section>
  );
}