"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-133
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
  //   // Firmo — Services Hero: la sección no tiene entrance bespoke propio.
  //   // En reveal.ts NO existe un bloque on-load para `.section_services-hero`: sus textos
  //   // usan `.scroll-into-view` (reveal-x: x +100→0 + opacity) y su imagen está en
  //   // PARALLAX_PARENTS (`.services-hero_image` → wrapper -110%→0, img 110%→0 + zoom/blur).
  //   // Ambos los maneja la hoja compartida /firmo/scripts/scroll-reveal.js (self-init en
  //   // DOM ready). Por eso aquí no hay entrance: sería duplicar el motor. Fail-safe: sin
  //   // JS el contenido queda visible (no hay opacity:0 inline). Rule 1/2.
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
  //   /* Firmo — shared reveal engine. Port of the template's reveal.ts to a plain global
  //      (no `export`, self-init — Rule 1). Expects window.gsap + window.ScrollTrigger from CDN.
  //      Generic reveals only (parallax images, scroll-into-view slide-in, reveal-up, fade,
  //      logos scrub); page heroes carry their own on-load script. Timings/easings verbatim
  //      from the source (outQuart = power3.out). Honors prefers-reduced-motion. */
  //   (function () {
  //     if (typeof gsap === 'undefined') return; // fail-safe: no JS → content stays visible
  //     if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  //   
  //     if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  //   
  //     var EASE = 'power3.out';
  //     var SLIDE = 0.7;
  //     var PARALLAX = 1.7;
  //     var SLIDE_X = 100;
  //     var SLIDE_Y = 100;
  //   
  //     var PARALLAX_PARENTS = [
  //       '.business_image',
  //       '.support_image',
  //       '.overview_image',
  //       '.contact_image',
  //       '.about-three_image',
  //       '.services-hero_image',
  //       '.experience_image',
  //       '.blog_image',
  //       '.blogs-hero_image',
  //       '.location_image',
  //       '.blogs-three_card-image',
  //       '.team_card-image',
  //     ].join(',');
  //   
  //     function initReveal() {
  //       if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  //         document.documentElement.classList.remove('anim');
  //         return;
  //       }
  //   
  //       // 1) Parallax images — wrapper y -110%→0; img y 110%→0, scale 1.5→1, blur 10→0; 1.7s.
  //       document.querySelectorAll(PARALLAX_PARENTS).forEach(function (parent) {
  //         var wrap = parent.querySelector('.img-wrapper');
  //         var img = wrap && wrap.querySelector('.img');
  //         if (!wrap || !img) return;
  //         gsap.set(wrap, { yPercent: -110, opacity: 1 });
  //         gsap.set(img, { yPercent: 110, scale: 1.5, filter: 'blur(10px)' });
  //         gsap
  //           .timeline({
  //             scrollTrigger: { trigger: parent, start: 'top 85%', once: true },
  //             onComplete: function () { gsap.set([wrap, img], { clearProps: 'transform,filter' }); },
  //           })
  //           .to(wrap, { yPercent: 0, duration: PARALLAX, ease: EASE }, 0)
  //           .to(img, { yPercent: 0, scale: 1, filter: 'blur(0px)', duration: PARALLAX, ease: EASE }, 0);
  //       });
  //   
  //       // 2) [reveal-x] .scroll-into-view → horizontal slide-in: x +100 → 0 + opacity, 0.7s.
  //       gsap.utils.toArray('.scroll-into-view').forEach(function (el) {
  //         if (el.closest('.section_hero')) return;
  //         if (el.closest('.section_logos')) return;
  //         gsap.set(el, { x: SLIDE_X, opacity: 0 });
  //         gsap.to(el, {
  //           x: 0, opacity: 1, duration: SLIDE, ease: EASE,
  //           scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //         });
  //       });
  //   
  //       // 2c) [reveal-y] .reveal-up cards enter from below: y +100 → 0 + opacity.
  //       gsap.utils.toArray('.reveal-up').forEach(function (el) {
  //         if (el.closest('.footer')) return;
  //         gsap.set(el, { y: SLIDE_Y, opacity: 0 });
  //         gsap.to(el, {
  //           y: 0, opacity: 1, duration: SLIDE, ease: EASE,
  //           scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //         });
  //       });
  //   
  //       // 2d) Footer entrance — .reveal-up blocks slide up, staggered, off the .footer container.
  //       var footer = document.querySelector('.footer');
  //       if (footer) {
  //         var items = footer.querySelectorAll('.reveal-up');
  //         gsap.set(items, { y: SLIDE_Y, opacity: 0 });
  //         gsap.to(items, {
  //           y: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.08,
  //           scrollTrigger: { trigger: footer, start: 'top 80%', once: true },
  //         });
  //       }
  //   
  //       // 2e) [reveal-fade] .reveal-fade — opacity 0 → 1, no transform.
  //       gsap.utils.toArray('.reveal-fade').forEach(function (el) {
  //         gsap.set(el, { opacity: 0 });
  //         gsap.to(el, {
  //           opacity: 1, duration: SLIDE, ease: EASE,
  //           scrollTrigger: { trigger: el, start: 'top 90%', once: true },
  //         });
  //       });
  //   
  //       // 3) Logos strip — one-shot slide-in ON VIEW (adapted from the source scroll-scrub
  //       // for the standalone catalog: a scroll-scrub and a clean thumbnail are mutually
  //       // exclusive — the scrub's settled state IS scroll-0, so to SEE motion the strip must
  //       // start off-position, which the thumbnail would then capture. Firing the same
  //       // 30vw→0 slide ONCE when the strip enters view gives both: motion in the opened
  //       // live preview (injectRevealFix runs it on-view in prod) + settled/clean thumbnail.
  //       // Lines fade in. ≤991: fade only.
  //       var logos = document.querySelector('.section_logos');
  //       if (logos) {
  //         var lines = logos.querySelectorAll('.horizontal-line');
  //         var mm = gsap.matchMedia();
  //         mm.add('(min-width: 992px)', function () {
  //           gsap.set(logos, { x: function () { return 0.3 * window.innerWidth; } });
  //           gsap.to(logos, {
  //             x: 0, duration: PARALLAX, ease: EASE,
  //             scrollTrigger: { trigger: logos, start: 'top 90%', once: true },
  //           });
  //           lines.forEach(function (line) {
  //             gsap.set(line, { opacity: 0 });
  //             gsap.to(line, {
  //               opacity: 1, duration: SLIDE, ease: EASE,
  //               scrollTrigger: { trigger: logos, start: 'top 85%', once: true },
  //             });
  //           });
  //         });
  //         mm.add('(max-width: 991px)', function () {
  //           gsap.set(logos, { x: 0 });
  //           gsap.set(lines, { opacity: 1 });
  //           gsap.fromTo(logos, { opacity: 0 }, {
  //             opacity: 1, duration: SLIDE, ease: EASE,
  //             scrollTrigger: { trigger: logos, start: 'top 85%', once: true },
  //           });
  //         });
  //       }
  //   
  //       if (typeof ScrollTrigger !== 'undefined') {
  //         ScrollTrigger.refresh();
  //         window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  //       }
  //     }
  //   
  //     if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initReveal);
  //     else initReveal();
  //   })();
  //   
  //   (function(){var n=0;function d(){var S=window.ScrollTrigger;if(!S){if(n++<60)setTimeout(d,50);return;}var L=S.getAll().filter(function(t){return t.trigger&&t.animation&&!(t.vars&&(t.vars.scrub||t.vars.pin));});if(!L.length){if(n++<60)setTimeout(d,50);return;}var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var a=e.target.__rv;if(a)a.play();});},{threshold:0,rootMargin:"0px 0px -8% 0px"}):null;L.forEach(function(t){var a=t.animation,g=t.trigger;t.kill(false,true);if(!io){a.play();return;}if(a.progress()<1)a.pause(0);g.__rv=a;io.observe(g);});}if(document.readyState==="complete")setTimeout(d,30);else window.addEventListener("load",function(){setTimeout(d,30);});})();
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-secao-133" ref={raiz}>
      <div className="navbar w-nav" role="banner" data-navbar="">
                <div className="padding-global is-navbar">
                  <div className="navbar_content">
                    <a href="/" aria-label="Firmo, home" className="logo-link is-navbar w-nav-brand">
                      <img loading="eager" src={s.imagem} alt="Firmo" className="logo" />
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
            <section id="section_services-hero" className="section_services-hero">
              <div className="padding-global padding-section-small">
                <div className="services-hero_wrapper">
                  <div className="block-wrapper">
                    <div className="header">
                      <div data-wf--label--variant="base" className="label">
                        <div className="text-style-allcaps scroll-into-view">Our services</div>
                      </div>
                      <h1 className="text-wrap-pretty scroll-into-view">{s.titulo}</h1>
                      <div className="text-color-secondary scroll-into-view">At Firmo Always, we offer a broad range of legal services tailored to meet the unique needs of each client.</div>
                    </div>
                    <div className="button-wrapper scroll-into-view">
                      <a data-wf--button-primary--variant="base" href="/contact" className="button w-inline-block">
                        <div className="button-content">
                          <div className="button-text is-one">Free consultation</div>
                          <div className="button-text is-two">Free consultation</div>
                        </div>
                        <div className="button-slide-one"></div>
                        <div className="button-slide-two"></div>
                      </a>
                    </div>
                  </div>
                  <div className="services-hero_image">
                    <div className="img-wrapper"><img src={s.imagem2} loading="lazy" sizes="(max-width: 1764px) 100vw, 1764px" srcSet="https://d173woph5zl366.cloudfront.net/firmo/images/Services-hero---image_1Services-hero---image.webp 500w, https://d173woph5zl366.cloudfront.net/firmo/images/Services-hero---image_1Services-hero---image.webp 800w, https://d173woph5zl366.cloudfront.net/firmo/images/Services-hero---image_1Services-hero---image.webp 1080w, https://d173woph5zl366.cloudfront.net/firmo/images/Services-hero---image_1Services-hero---image.webp 1600w, https://d173woph5zl366.cloudfront.net/firmo/images/Services-hero---image_1.webp 1764w" alt="" className="img is-top-center" /></div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
    </section>
  );
}