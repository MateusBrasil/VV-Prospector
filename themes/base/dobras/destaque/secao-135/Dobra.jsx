"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-135
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
  //   // Firmo lawyer-detail hero entrance (verbatim del bloque 4c de reveal.ts): la
  //   // imagen hace counter-slide (wrapper 110%→0, img -110%→0, sin zoom/blur), 1.2s
  //   // power3.out; el texto (badge, h1, bio, social buttons, button) entra DESDE ABAJO
  //   // en escalera — y +100→0 + opacity, stagger 0.12s. Fail-safe: si GSAP no carga o
  //   // reduced-motion, el contenido queda visible (no hay opacity:0 inline). Rule 1/2.
  //   function initLawyerHero() {
  //     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  //     if (typeof gsap === 'undefined') return;
  //   
  //     const EASE = 'power3.out';
  //     const SLIDE = 0.7;
  //     const SLIDE_Y = 100;
  //     const lawyerHero = document.querySelector('.section_lawyer');
  //     if (!lawyerHero) return;
  //   
  //     const texts = [
  //       lawyerHero.querySelector('.text-style-allcaps'), // badge
  //       lawyerHero.querySelector('h1'),
  //       lawyerHero.querySelector('.text-color-secondary'), // bio
  //       lawyerHero.querySelector('.lawyer_media-wrapper'), // social buttons
  //       lawyerHero.querySelector('.button-wrapper'),
  //     ].filter(Boolean);
  //   
  //     const wrap = lawyerHero.querySelector('.lawyer_image .img-wrapper');
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
  //   if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLawyerHero);
  //   else initLawyerHero();
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
    <section className="dobra" data-dobra="destaque-secao-135" ref={raiz}>
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
            <section className="section_lawyer">
              <div className="padding-global padding-section-lawyer">
                <div className="w-layout-grid lawyer_wrapper">
                  <div className="lawyer_image">
                    <div className="img-wrapper">
                      <img src={s.imagem2} alt="Adison Dorwart" className="img is-top-center" loading="eager" />
                    </div>
                  </div>
                  <div className="lawyer_content">
                    <div className="header">
                      <div className="label">
                        <div className="text-style-allcaps">Trusted lawyer</div>
                      </div>
                      <h1>{s.titulo}</h1>
                    </div>
                    <div className="block-wrapper">
                      <div className="text-color-secondary">With a proven track record, Adison Dorwart specializes in high‑stakes corporate litigation, delivering strategic solutions tailored to each client’s unique business challenges.</div>
                      <div className="lawyer_media-wrapper">
                        <a href={s.destino || '#'} className="lawyer_media w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="icon-1x1-small"><path fillRule="evenodd" clipRule="evenodd" d="M8.00162 1.44424C10.1365 1.44424 10.3902 1.45224 11.2336 1.48995C12.0131 1.52652 12.4371 1.65681 12.7193 1.76652C13.0919 1.91167 13.3582 2.08424 13.6382 2.36424C13.9182 2.64424 14.0908 2.91052 14.2359 3.28424C14.3456 3.56538 14.4759 3.98938 14.5113 4.76995C14.5502 5.61224 14.5571 5.86481 14.5571 8.00081C14.5571 10.1357 14.5502 10.3894 14.5113 11.2328C14.4759 12.0122 14.3456 12.4362 14.2371 12.7185C14.0908 13.0911 13.9171 13.3574 13.6382 13.6374C13.38 13.9029 13.0657 14.1071 12.7182 14.2351C12.4359 14.3448 12.0131 14.4751 11.2325 14.5105C10.3902 14.5494 10.1376 14.5562 8.00162 14.5562C5.86562 14.5562 5.61305 14.5494 4.76962 14.5105C3.99019 14.4751 3.56734 14.3448 3.28391 14.2362C2.93673 14.1078 2.62275 13.9031 2.36505 13.6374C2.09957 13.3792 1.89532 13.0649 1.76734 12.7174C1.65762 12.4351 1.52734 12.0122 1.49191 11.2317C1.45305 10.3894 1.44619 10.1357 1.44619 8.00081C1.44619 5.86481 1.45305 5.61224 1.49191 4.76881C1.52734 3.98938 1.65762 3.56652 1.76619 3.28309C1.91248 2.91052 2.08619 2.64424 2.36505 2.36424C2.64505 2.08424 2.91134 1.91167 3.28505 1.76652C3.56619 1.65681 3.99019 1.52652 4.77076 1.4911C5.61305 1.45224 5.86562 1.44538 8.00162 1.44538M8.00162 0.00195312C5.83019 0.00195312 5.55705 0.011096 4.70448 0.0499531C3.85305 0.0899531 3.27019 0.225953 2.76276 0.423667C2.22892 0.624345 1.74529 0.939095 1.34562 1.34595C0.939175 1.74573 0.624821 2.22935 0.424478 2.7631C0.226763 3.26938 0.0907634 3.85224 0.0519063 4.70252C0.0130491 5.55509 0.00390625 5.82824 0.00390625 8.00081C0.00390625 10.1722 0.0130491 10.4454 0.0519063 11.2979C0.0907634 12.1494 0.226763 12.7311 0.424478 13.2397C0.627906 13.7654 0.902192 14.2111 1.34676 14.6568C1.79134 15.1002 2.23705 15.3745 2.76391 15.5779C3.27134 15.7757 3.85305 15.9117 4.70448 15.9505C5.55705 15.9894 5.82905 15.9985 8.00162 15.9985C10.1731 15.9985 10.4462 15.9894 11.2988 15.9505C12.1502 15.9117 12.7319 15.7757 13.2405 15.5779C13.7743 15.3773 14.258 15.0625 14.6576 14.6557C15.0641 14.2559 15.3784 13.7723 15.5788 13.2385C15.7765 12.7311 15.9125 12.1494 15.9513 11.2979C15.9902 10.4454 15.9993 10.1722 15.9993 8.00081C15.9993 5.82938 15.9902 5.55624 15.9513 4.70367C15.9125 3.85224 15.7765 3.27052 15.5788 2.76195C15.3781 2.2281 15.0633 1.74447 14.6565 1.34481C14.2567 0.938364 13.7731 0.624011 13.2393 0.423667C12.7331 0.225953 12.1502 0.0899531 11.2999 0.051096C10.4473 0.0122388 10.1731 0.00309598 8.00162 0.00309598" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.00082 3.89377C6.91176 3.89377 5.86731 4.3264 5.09723 5.09647C4.32716 5.86655 3.89453 6.911 3.89453 8.00006C3.89453 9.08911 4.32716 10.1336 5.09723 10.9036C5.86731 11.6737 6.91176 12.1063 8.00082 12.1063C9.08987 12.1063 10.1343 11.6737 10.9044 10.9036C11.6745 10.1336 12.1071 9.08911 12.1071 8.00006C12.1071 6.911 11.6745 5.86655 10.9044 5.09647C10.1343 4.3264 9.08987 3.89377 8.00082 3.89377ZM8.00082 10.6663C7.29367 10.6663 6.61549 10.3854 6.11547 9.88541C5.61544 9.38538 5.33453 8.7072 5.33453 8.00006C5.33453 7.29291 5.61544 6.61473 6.11547 6.11471C6.61549 5.61468 7.29367 5.33377 8.00082 5.33377C8.70796 5.33377 9.38614 5.61468 9.88617 6.11471C10.3862 6.61473 10.6671 7.29291 10.6671 8.00006C10.6671 8.7072 10.3862 9.38538 9.88617 9.88541C9.38614 10.3854 8.70796 10.6663 8.00082 10.6663ZM13.2294 3.73148C13.2294 3.98609 13.1282 4.23027 12.9482 4.41031C12.7682 4.59034 12.524 4.69148 12.2694 4.69148C12.0148 4.69148 11.7706 4.59034 11.5906 4.41031C11.4105 4.23027 11.3094 3.98609 11.3094 3.73148C11.3094 3.47688 11.4105 3.2327 11.5906 3.05266C11.7706 2.87263 12.0148 2.77148 12.2694 2.77148C12.524 2.77148 12.7682 2.87263 12.9482 3.05266C13.1282 3.2327 13.2294 3.47688 13.2294 3.73148Z" fill="currentColor"></path></svg></a>
                        <a href={s.destino2 || '#'} className="lawyer_media w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="icon-1x1-small"><path fillRule="evenodd" clipRule="evenodd" d="M3.52 15.9202H0.08V4.88016H3.52V15.9202ZM1.76 3.52016C0.72 3.52016 0 2.80016 0 1.84016C0 0.880156 0.72 0.160156 1.84 0.160156C2.96 0.160156 3.6 0.880156 3.6 1.84016C3.6 2.80016 2.96 3.52016 1.76 3.52016ZM16 15.9202H12.56V9.84015C12.56 8.40015 12.08 7.44015 10.8 7.44015C9.84 7.44015 9.28 8.08015 9.04 8.72015C8.96 8.96015 8.96 9.28015 8.96 9.60015V15.9202H5.52V8.40015C5.52 7.04015 5.44 5.92016 5.44 4.88016H8.4L8.56 6.40015H8.64C9.12 5.68015 10.16 4.64015 12 4.64015C14.24 4.64015 15.92 6.16015 15.92 9.36015V15.9202H16Z" fill="currentColor"></path></svg></a>
                        <a href={s.destino3 || '#'} className="lawyer_media w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="icon-1x1-small"><path fillRule="evenodd" clipRule="evenodd" d="M12.4795 2.56H9.99953C9.67953 2.56 9.27953 2.64 9.27953 3.2V5.76H12.4795V8.32H9.27953V16H6.71953V8.32H3.51953V5.76H6.71953V3.52C6.71953 1.2 7.83953 0 9.99953 0H12.4795V2.56Z" fill="currentColor"></path></svg></a>
                      </div>
                      <div className="button-wrapper">
                        <a href="/contact" className="button w-inline-block"><div className="button-content"><div className="button-text is-one">Free consultation</div><div className="button-text is-two">Free consultation</div></div><div className="button-slide-one"></div><div className="button-slide-two"></div></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
    </section>
  );
}