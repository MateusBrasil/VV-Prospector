"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-134
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
  //   // Firmo service-detail hero entrance (verbatim del bloque 4d de reveal.ts): la
  //   // imagen .service_image hace counter-slide (wrapper 110%→0, img -110%→0, sin
  //   // zoom/blur), y el texto (label, h1, richtext, button) entra DESDE ABAJO en
  //   // staircase — y:100→0 + opacity, stagger 0.12, 0.7s power3.out; imagen 1.2s.
  //   // Entrance bespoke: la sección no tiene .scroll-into-view ni parallax-img, así que
  //   // NO carga /firmo/scripts/scroll-reveal.js. Fail-safe: si GSAP no carga o
  //   // reduced-motion, el contenido queda visible (no hay opacity:0 inline). Rule 1/2.
  //   function initServiceHero() {
  //     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  //     if (typeof gsap === 'undefined') return;
  //   
  //     const EASE = 'power3.out';
  //     const SLIDE = 0.7;
  //     const SLIDE_Y = 100;
  //   
  //     const serviceHero = document.querySelector('.section_service');
  //     if (!serviceHero) return;
  //   
  //     const texts = [
  //       serviceHero.querySelector('.text-style-allcaps'), // label
  //       serviceHero.querySelector('h1'),
  //       serviceHero.querySelector('.text-rich-text'),
  //       serviceHero.querySelector('.button-wrapper'),
  //     ].filter(Boolean);
  //   
  //     const wrap = serviceHero.querySelector('.service_image .img-wrapper');
  //     const imgs = wrap ? Array.from(wrap.querySelectorAll('.img')) : [];
  //   
  //     gsap.set(texts, { y: SLIDE_Y, opacity: 0 });
  //     if (wrap && imgs.length) {
  //       gsap.set(wrap, { yPercent: 110, opacity: 1 });
  //       gsap.set(imgs, { yPercent: -110 });
  //     }
  //   
  //     const tl = gsap.timeline({ delay: 0.1 });
  //     tl.to(texts, { y: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.12 }, 0);
  //     if (wrap && imgs.length) {
  //       tl.to(wrap, { yPercent: 0, duration: 1.2, ease: EASE }, 0);
  //       tl.to(imgs, { yPercent: 0, duration: 1.2, ease: EASE }, 0);
  //     }
  //   }
  //   if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initServiceHero);
  //   else initServiceHero();
  //   
  //   /* ===== TEMLIS-INLINED-NAVBAR: firmo-navbar behavior ===== */
  //   // Firmo navbar — sticky bar + self-contained mobile overlay toggle (data-nav-*).
  //   // Plain global, self-initializes on DOM ready (no `export` — Rule 1).
  //   function initNavbar() {
  //     const navbar = document.querySelector('[data-navbar]');
  //     const toggle = navbar && navbar.querySelector('[data-nav-toggle]');
  //     if (!navbar || !toggle) return;
  //     // Expose the sticky bar's height so the full-screen overlay starts right below it.
  //     const setNavH = () => navbar.style.setProperty('--nav-h', navbar.getBoundingClientRect().height + 'px');
  //     const close = () => {
  //       navbar.classList.remove('is-open');
  //       toggle.setAttribute('aria-expanded', 'false');
  //       document.documentElement.classList.remove('nav-open');
  //     };
  //     setNavH();
  //     toggle.addEventListener('click', () => {
  //       setNavH();
  //       const open = navbar.classList.toggle('is-open');
  //       toggle.setAttribute('aria-expanded', String(open));
  //       document.documentElement.classList.toggle('nav-open', open);
  //     });
  //     navbar.querySelectorAll('[data-nav-menu] a').forEach((a) => a.addEventListener('click', close));
  //     document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  //     window.addEventListener('resize', () => {
  //       setNavH();
  //       if (window.innerWidth > 991 && navbar.classList.contains('is-open')) close();
  //     });
  //   }
  //   if (document.readyState !== 'loading') initNavbar();
  //   else document.addEventListener('DOMContentLoaded', initNavbar);
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-secao-134" ref={raiz}>
      <div className="navbar w-nav" role="banner" data-navbar="">
                <div className="padding-global is-navbar">
                  <div className="navbar_content">
                    <a href="/" aria-label="Firmo, home" className="logo-link is-navbar w-nav-brand">
                      <img loading="eager" src={s.imagem2} alt="Firmo" className="logo" />
                    </a>
                    <div className="nav_wrap">
                      <nav role="navigation" className="nav_mobile" data-nav-menu="">
                        <div className="navbar_list">
                          <a href="/about" className="nav_links"><span className="nav_links-label">{s.rotulo}</span></a>
                          <a href="/services" className="nav_links"><span className="nav_links-label">{s.rotulo2}</span></a>
                          <a href="/locations" className="nav_links"><span className="nav_links-label">{s.rotulo3}</span></a>
                          <a href="/blog" className="nav_links"><span className="nav_links-label">{s.rotulo4}</span></a>
                        </div>
                        <div className="nav_menu-footer">
                          <a data-wf--button-primary--variant="navbar" href="/contact" className="button w-variant-0a5a4e46-93c8-03da-c26d-6aff6dad3a28 w-inline-block nav_menu-cta">
                            <div className="button-content">
                              <div className="button-text is-one">Free consultation</div>
                              <div className="button-text is-two">Free consultation</div>
                            </div>
                            <div className="button-slide-one"></div>
                            <div className="button-slide-two"></div>
                          </a>
                          <div className="nav_menu-contact">
                            <div className="text-style-allcaps nav_menu-contact-label">Get in touch</div>
                            <a href="mailto:firmo@lawyers.com" className="nav_menu-contact-link text-font-lora">{s.acao}</a>
                            <div className="nav_menu-contact-addr">456 Law Street, Suite 101 · Chicago, IL 60601</div>
                          </div>
                        </div>
                      </nav>
                    </div>
                    <div className="nav_buttons-wrap">
                      <div className="login-wrap nav_bar-cta">
                        <a data-wf--button-primary--variant="navbar" href="/contact" className="button w-variant-0a5a4e46-93c8-03da-c26d-6aff6dad3a28 w-inline-block">
                          <div className="button-content">
                            <div className="button-text is-one">Free consultation</div>
                            <div className="button-text is-two">Free consultation</div>
                          </div>
                          <div className="button-slide-one"></div>
                          <div className="button-slide-two"></div>
                        </a>
                      </div>
                      <button type="button" className="menu-button" data-nav-toggle="" aria-label="Toggle menu" aria-expanded="false" onClick={s.onClick}>
                        <span className="menu-button_line"></span>
                        <span className="menu-button_line"></span>
                        <span className="menu-button_line"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
      
        <div className="page-wrapper">
          <main className="main-wrapper">
            <section className="section_service">
              <div className="w-layout-grid service_wrapper">
                <div className="service_content">
                  <div className="header is-internal-service">
                    <div className="label">
                      <div className="text-style-allcaps">Child Custody</div>
                    </div>
                    <h1>{s.titulo}</h1>
                  </div>
                  <div className="block-wrapper is-internal-service">
                    <div className="text-rich-text w-richtext">
                      <p>{s.texto}</p>
                      <p>{s.texto2}</p>
                      <p>{s.texto3}</p>
                      <p>{s.texto4}</p>
                    </div>
                    <div className="button-wrapper">
                      <a href="/contact" className="button w-inline-block">
                        <div className="button-content">
                          <div className="button-text is-one">Free consultation</div>
                          <div className="button-text is-two">Free consultation</div>
                        </div>
                        <div className="button-slide-one"></div>
                        <div className="button-slide-two"></div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="service_image">
                  <div className="img-wrapper">
                    <div className="img is-service-image" style={{backgroundImage: `url(${s.imagem})`}}></div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
    </section>
  );
}