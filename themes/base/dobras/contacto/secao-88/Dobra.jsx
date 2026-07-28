"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-88
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
  //   // Firmo contact hero entrance (verbatim del bloque 4h de reveal.ts): el header
  //   // (label/h1/subtext) entra como reveal-x STAIRCASE (x +100px→0 + opacity, stagger);
  //   // los campos del form suben yPercent 15→0 + opacity, staggered (patrón Webflow form
  //   // SlideUp). Los .contact_info.scroll-into-view conservan su reveal-x (lo aporta el
  //   // motor compartido /firmo/scripts/scroll-reveal.js). Fail-safe: si GSAP no carga o
  //   // reduced-motion, el contenido queda visible (no hay opacity:0 inline). Rule 1/2.
  //   function initContactHero() {
  //     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  //     if (typeof gsap === 'undefined') return;
  //   
  //     const EASE = 'power3.out';
  //     const SLIDE = 0.7;
  //     const SLIDE_X = 100;
  //     const contactHero = document.querySelector('.section_contact-one');
  //     if (!contactHero) return;
  //   
  //     const headerTexts = [
  //       contactHero.querySelector('.header .text-style-allcaps'),
  //       contactHero.querySelector('.header h1'),
  //       contactHero.querySelector('.header .text-color-secondary'),
  //     ].filter(Boolean);
  //     if (headerTexts.length) {
  //       gsap.set(headerTexts, { x: SLIDE_X, opacity: 0 });
  //       gsap
  //         .timeline({ delay: 0.1 })
  //         .to(headerTexts, { x: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.12 }, 0);
  //     }
  //   
  //     const fields = Array.from(contactHero.querySelectorAll('.form-input, .form .button'));
  //     if (fields.length) {
  //       gsap.set(fields, { yPercent: 15, opacity: 0 });
  //       gsap
  //         .timeline({ delay: 0.2 })
  //         .to(fields, { yPercent: 0, opacity: 1, duration: SLIDE, ease: EASE, stagger: 0.1 }, 0);
  //     }
  //   }
  //   if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initContactHero);
  //   else initContactHero();
  //   
  //   // Contact form — STATIC DEMO. Sin backend: muestra el mensaje de éxito sin enviar
  //   // nada (action="#"). Para envíos reales: conectar Formspree/Resend (apunta el form
  //   // `action` a tu endpoint y pon DEMO = false). Self-init, sin `export` (Rule 1).
  //   function initContactForm() {
  //     const DEMO = true;
  //     const form = document.getElementById('email-form');
  //     if (!form) return;
  //     const block = form.closest('.w-form');
  //     const done = block && block.querySelector('.w-form-done');
  //     const fail = block && block.querySelector('.w-form-fail');
  //     const succeed = () => {
  //       form.reset();
  //       form.style.display = 'none';
  //       if (done) done.style.display = 'block';
  //     };
  //     form.addEventListener('submit', async (e) => {
  //       e.preventDefault();
  //       if (!form.reportValidity()) return;
  //       if (fail) fail.style.display = 'none';
  //       if (DEMO) { succeed(); return; }
  //       try {
  //         const res = await fetch(form.action, { method: 'POST', body: new FormData(form) });
  //         if (!res.ok) throw new Error(String(res.status));
  //         succeed();
  //       } catch {
  //         if (fail) fail.style.display = 'block';
  //       }
  //     });
  //   }
  //   if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initContactForm);
  //   else initContactForm();
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
    <section className="dobra" data-dobra="contacto-secao-88" ref={raiz}>
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
            <section className="section_contact-one">
              <div className="padding-global padding-section-medium">
                <div className="content-wrapper">
                  <div className="header is-centered">
                    <div data-wf--label--variant="base" className="label">
                      <div className="text-style-allcaps">Contact us</div>
                    </div>
                    <h1>{s.titulo}</h1>
                    <div className="text-color-secondary">You can also use the feedback form below to reach out to us directly through our website.</div>
                  </div>
                  <div className="form-block w-form">
                    
                    <form action="#" method="post" id="email-form" name="email-form" data-name="Email Form" className="form">
                      <div className="inputs-wrapper">
                        <input className="form-input w-input" maxLength="256" name="name" data-name="Name" placeholder="First name" type="text" id="name" required="" />
                        <input className="form-input w-node-_78345a78-61ab-a6f8-7b65-76a846385b0a-585c1946 w-input" maxLength="256" name="Last-Name" data-name="Last Name" placeholder="Last name" type="text" id="Last-Name" required="" />
                        <input className="form-input w-node-_5dd73dac-4c31-d68e-30b2-db8febdde8ce-585c1946 w-input" maxLength="256" name="Phone" data-name="Phone" placeholder="Phone Number" type="tel" id="Phone" required="" />
                        <input className="form-input w-node-_5d1acfbd-6df5-ff1f-8142-2213b97a2e7b-585c1946 w-input" maxLength="256" name="Email" data-name="Email" placeholder="Email address" type="email" id="Email" required="" />
                        <textarea className="form-input is-textarea w-node-_42ac0d76-1f1c-38f9-dca3-b2aa061625e3-585c1946 w-input" maxLength="5000" name="field" data-name="Field" placeholder="Describe your case" id="field" required=""></textarea>
                      </div><button type="submit" className="button" onClick={s.onClick}>
                        <div className="button-content">
                          <div className="button-text is-one">Contact Us</div>
                          <div className="button-text is-two">Contact Us</div>
                        </div>
                      </button>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                  <div className="contact_bottom">
                    <a href="tel:+189738173" className="contact_info scroll-into-view w-inline-block">
                      <div style={{backgroundColor: 'rgb(236,236,231)', color: 'rgb(10,10,10)'}} className="contact_info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none">
                          <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"></path>
                        </svg></div>
                      <div className="text-color-secondary">+189738173</div>
                    </a>
                    <a href="mailto:firmo@lawyers.com" className="contact_info scroll-into-view w-inline-block">
                      <div style={{backgroundColor: 'rgb(236,236,231)', color: 'rgb(10,10,10)'}} className="contact_info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none">
                          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"></path>
                        </svg></div>
                      <div className="text-color-secondary">firmo@lawyers.com</div>
                    </a>
                    <a href={s.destino || '#'} target="_blank" rel="noopener" className="contact_info scroll-into-view w-inline-block">
                      <div style={{backgroundColor: 'rgb(236,236,231)', color: 'rgb(10,10,10)'}} className="contact_info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none">
                          <path d="M20.3837 9.169H3.19023C3.20225 8.96953 3.20225 8.76952 3.19023 8.57006C3.17303 8.4646 3.18948 8.3564 3.23727 8.26083C3.28505 8.16526 3.36173 8.08718 3.45642 8.03766C6.20178 6.14944 8.94092 4.25412 11.6739 2.3517C11.7034 2.324 11.7425 2.30859 11.783 2.30859C11.8235 2.30859 11.8625 2.324 11.8921 2.3517C14.6801 4.28784 17.4698 6.21954 20.2613 8.1468C20.3011 8.16883 20.3336 8.20195 20.3548 8.24212C20.3761 8.2823 20.3852 8.3278 20.3811 8.37307C20.3784 8.63394 20.3837 8.89481 20.3837 9.169Z" fill="currentColor"></path>
                          <path d="M3.07812 21.4248V20.4745H3.52267V19.5215H20.0427V20.4665H20.4979V21.4248H3.07812Z" fill="currentColor"></path>
                          <path d="M7.00903 19.1399H5.35862V18.9429C5.35862 16.5383 5.35862 14.1345 5.35862 11.7317C5.35173 11.5076 5.29656 11.2877 5.19686 11.0869C5.09717 10.8862 4.95531 10.7093 4.78098 10.5684C4.73451 10.5405 4.68064 10.5275 4.62659 10.5311C4.24859 10.5311 4.27787 10.5764 4.27787 10.1744V9.72986C4.27787 9.62604 4.32046 9.57812 4.4296 9.57812H7.9274C8.04186 9.57812 8.08712 9.62604 8.08712 9.73784C8.08712 9.95346 8.08712 10.1664 8.08712 10.382C8.08712 10.4992 8.03388 10.5524 7.92474 10.5311C7.65854 10.4752 7.48818 10.6323 7.33379 10.8292C7.11425 11.1039 6.99751 11.4466 7.00371 11.7982C7.00371 14.178 7.00371 16.5578 7.00371 18.9403L7.00903 19.1399Z" fill="currentColor"></path>
                          <path d="M12.6115 19.1406H10.9611V18.941C10.9611 16.5363 10.9611 14.1326 10.9611 11.7297C10.9547 11.5058 10.8992 11.2859 10.7985 11.0858C10.6977 10.8857 10.5542 10.7102 10.3781 10.5717C10.3249 10.5212 10.2051 10.5345 10.1119 10.5318C9.875 10.5318 9.875 10.5318 9.875 10.3002C9.875 10.1086 9.875 9.91691 9.875 9.72524C9.875 9.62143 9.92292 9.57617 10.0294 9.57617H13.5352C13.6523 9.57617 13.6949 9.62675 13.6922 9.73589C13.6922 9.95151 13.6922 10.1671 13.6922 10.3801C13.6922 10.4866 13.6496 10.5505 13.5432 10.5292C13.253 10.4706 13.088 10.633 12.9309 10.8406C12.7198 11.1091 12.6063 11.4414 12.6088 11.7829C12.6088 14.1787 12.6088 16.5532 12.6088 18.9383L12.6115 19.1406Z" fill="currentColor"></path>
                          <path d="M18.2155 19.1406H16.5651V18.941C16.5651 16.5363 16.5651 14.1326 16.5651 11.7297C16.5586 11.5061 16.5032 11.2866 16.403 11.0866C16.3028 10.8866 16.16 10.7109 15.9848 10.5717C15.9289 10.5212 15.8091 10.5345 15.7186 10.5318C15.4844 10.5318 15.4844 10.5318 15.4844 10.3002C15.4844 10.1139 15.4844 9.92755 15.4844 9.74121C15.4844 9.63207 15.5216 9.57617 15.6388 9.57617H19.1286C19.243 9.57617 19.2856 9.62675 19.2856 9.73855C19.2856 9.95151 19.2856 10.1671 19.2856 10.3801C19.2856 10.4866 19.2404 10.5505 19.1339 10.5292C18.8464 10.4706 18.6814 10.633 18.5243 10.8406C18.3106 11.1087 18.1967 11.4428 18.2022 11.7856C18.2022 14.169 18.2022 16.5532 18.2022 18.9383L18.2155 19.1406Z" fill="currentColor"></path>
                        </svg></div>
                      <div className="text-color-secondary">IL 456 Law Street, Suite 101 <br />Chicago, IL 60601</div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
    </section>
  );
}