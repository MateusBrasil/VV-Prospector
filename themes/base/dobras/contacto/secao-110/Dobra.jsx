"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-110
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    (() => {
      const gsap = window.gsap;
      if (typeof gsap === 'undefined') return;
      const section = raiz.current.querySelector('.hero');
      if (!section) return;
    
      const bg = section.querySelector('.hero__bg');
      const heading = section.querySelector('.hero__heading');
      const sub = section.querySelector('.hero__sub');
      const buttons = Array.from(section.querySelectorAll('.hero__btn'));
      const avatars = Array.from(section.querySelectorAll('.hero__avatar'));
      const proof = section.querySelector('.hero__proof');
    
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        // Skip animation — everything visible at rest
        gsap.set([bg, heading, sub, ...buttons, ...avatars, proof], { autoAlpha: 1, xPercent: 0, scale: 1, filter: 'none' });
        return;
      }
    
      // Prime states — every text/cta element enters from the right (matches site-wide fade-from-right pattern)
      gsap.set(bg, { scale: 1.05, filter: 'blur(8px)' });
      gsap.set([heading, sub, ...buttons, proof], { autoAlpha: 0, x: 60 });
      // Avatars keep their existing slide-in-from-right-blur (xPercent: 300 + blur clear)
      gsap.set(avatars, { autoAlpha: 0, xPercent: 300, filter: 'blur(20px)' });
    
      const tl = gsap.timeline({ delay: 0.15 });
    
      // Background image: scale-down + blur-clear (image-focus-in) — anchors the whole reveal
      tl.to(bg, { scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }, 0)
        // Content elements cascade with a tight 0.08s gap so reveals feel independent but snappy
        .to(heading, { autoAlpha: 1, x: 0, duration: 0.9, ease: 'power3.out' }, 0.15)
        .to(sub, { autoAlpha: 1, x: 0, duration: 0.85, ease: 'power3.out' }, 0.23)
        .to(buttons, { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 }, 0.31)
        .to(avatars, {
          autoAlpha: 1,
          xPercent: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.08,
        }, 0.39)
        .to(proof, { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 0.47);
    
      // After reveal completes, strip the inline transform props GSAP leaves on
      // .hero__btn so the global .btn:hover scale rule can transition smoothly
      // (CSS can't interpolate from `scale: none` to a numeric value).
      tl.call(() => {
        gsap.set(buttons, { clearProps: 'translate,rotate,scale,transform,x' });
      });
    })();
    
    /* ===== TEMLIS-INLINED-NAVBAR: pipely-navbar behavior ===== */
    (() => {
      const nav = raiz.current.querySelector('.navbar');
      if (!nav) return;
      const toggle = nav.querySelector('.navbar__toggle');
      const panel = nav.querySelector('.navbar__panel');
      if (!toggle || !panel) return;
    
      const setOpen = (open) => {
        nav.dataset.open = String(open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Toggle menu');
        // `inert` makes the panel non-interactive + invisible to assistive tech when
        // closed, but keeps it rendered so we can animate height/opacity.
        panel.toggleAttribute('inert', !open);
      };
    
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = nav.dataset.open !== 'true';
        setOpen(open);
      });
    
      // Close panel when clicking a nav link or CTA inside it
      panel.querySelectorAll('.navbar__panel-link, .navbar__panel-cta').forEach((el) => {
        el.addEventListener('click', () => setOpen(false));
      });
    
      // Close when clicking outside the nav (or on the backdrop)
      document.addEventListener('click', (e) => {
        if (nav.dataset.open !== 'true') return;
        if (!nav.contains(e.target)) return setOpen(false);
        // clicks INSIDE nav: only close on backdrop
        if (e.target.classList.contains('navbar__backdrop')) setOpen(false);
      });
    
      // Esc closes
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.dataset.open === 'true') setOpen(false);
      });
    
      // Close panel when viewport grows past tablet breakpoint
      const mq = window.matchMedia('(min-width: 992px)');
      const onChange = () => {
        if (mq.matches) setOpen(false);
      };
      mq.addEventListener('change', onChange);
    })();
    
    // === Entrance: nav cluster falls in from top with stagger, runs in parallel
    // with the Hero master timeline so the page reveal feels coordinated. ===
    (() => {
      const gsap = window.gsap;
      if (typeof gsap === 'undefined') return;
      const nav = raiz.current.querySelector('.navbar');
      if (!nav) return;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
      // Select visible entrance candidates only — links are display:none on tablet+,
      // toggle is display:none on desktop, cta hides on portrait, etc.
      const candidates = nav.querySelectorAll(
        '.navbar__brand, .navbar__link, .navbar__cta, .navbar__toggle'
      );
      const items = Array.from(candidates).filter(
        (el) => getComputedStyle(el).display !== 'none'
      );
      if (!items.length) return;
    
      if (prefersReduced) {
        gsap.set(items, { autoAlpha: 1, y: 0 });
        return;
      }
    
      gsap.set(items, { autoAlpha: 0, y: -12 });
      gsap.to(items, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.07,
        delay: 0.05,
        onComplete: () => {
          // Strip the inline transform props GSAP leaves behind so the CSS hover
          // `scale` rule can transition smoothly (CSS can't animate from `none`).
          gsap.set(items, { clearProps: 'translate,rotate,scale,transform,y' });
        },
      });
    })();
    
    
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="contacto-secao-110" ref={raiz}>
      <header className="navbar-wrap">
                <div className="container container--padded">
                  <nav className="navbar" aria-label="Primary" data-open="false">
                    <div className="navbar__bar">
                      <a href="/" className="navbar__brand" aria-label="Pipely home">
                        <img className="navbar__logo" src={s.imagem} alt="Pipely" width="114" height="40" />
                      </a>
          
                      <ul className="navbar__menu">
                        <li>
                          <a className="navbar__link" href="/services">
                            <span className="navbar__link-mask">
                              <span className="navbar__link-text">{s.rotulo}</span>
                              <span className="navbar__link-text" aria-hidden="true">{s.rotulo2}</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="navbar__link" href="/case-studies">
                            <span className="navbar__link-mask">
                              <span className="navbar__link-text">{s.rotulo3}</span>
                              <span className="navbar__link-text" aria-hidden="true">{s.rotulo4}</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="navbar__link" href="/about">
                            <span className="navbar__link-mask">
                              <span className="navbar__link-text">{s.rotulo5}</span>
                              <span className="navbar__link-text" aria-hidden="true">{s.rotulo6}</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="navbar__link" href="/blog">
                            <span className="navbar__link-mask">
                              <span className="navbar__link-text">{s.rotulo7}</span>
                              <span className="navbar__link-text" aria-hidden="true">{s.rotulo8}</span>
                            </span>
                          </a>
                        </li>
                      </ul>
          
                      <div className="navbar__actions">
                        <a href="/contact" className="btn btn--primary navbar__cta">
                          <span className="btn__mask">
                            <span className="btn__text">{s.rotulo9}</span>
                            <span className="btn__text" aria-hidden="true">{s.rotulo10}</span>
                          </span>
                        </a>
                        <button type="button" className="navbar__toggle" aria-label="Toggle menu" aria-controls="navbar-panel" aria-expanded="false" onClick={s.onClick}>
                          <span className="navbar__toggle-burger" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                          <span className="navbar__toggle-close" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <line x1="5" y1="5" x2="19" y2="19"></line>
                              <line x1="19" y1="5" x2="5" y2="19"></line>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
          
                    <div className="navbar__panel" id="navbar-panel" inert="">
                      <div className="navbar__panel-inner">
                        <ul className="navbar__panel-menu">
                          <li>
                            <a className="navbar__panel-link" href="/services">{s.acao}</a>
                          </li>
                          <li>
                            <a className="navbar__panel-link" href="/case-studies">{s.acao2}</a>
                          </li>
                          <li>
                            <a className="navbar__panel-link" href="/about">{s.acao3}</a>
                          </li>
                          <li>
                            <a className="navbar__panel-link" href="/blog">{s.acao4}</a>
                          </li>
                        </ul>
                        <a href="/contact" className="btn btn--primary navbar__panel-cta">
                          <span className="btn__mask">
                            <span className="btn__text">{s.rotulo11}</span>
                            <span className="btn__text" aria-hidden="true">{s.rotulo12}</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="navbar__backdrop" aria-hidden="true"></div>
                  </nav>
                </div>
              </header>
      
          <section className="hero">
            <div className="container container--padded">
              <div className="hero__card">
                <img className="hero__bg" src={s.imagem2} alt="A consultant working on a laptop at a wooden table" width="2122" height="1189" />
                <div className="hero__content">
                  <div className="hero__main">
                    <div className="hero__text">
                      <h1 className="hero__heading">{s.titulo}</h1>
                      <p className="hero__sub">{s.texto}</p>
                    </div>
                    <div className="hero__actions">
                      <a href="/contact" className="btn btn--primary hero__btn">
                        <span className="btn__mask">
                          <span className="btn__text">{s.rotulo13}</span>
                          <span className="btn__text" aria-hidden="true">{s.rotulo14}</span>
                        </span>
                      </a>
                      <a href="/case-studies" className="btn btn--outline hero__btn">
                        <span className="btn__mask">
                          <span className="btn__text">{s.rotulo15}</span>
                          <span className="btn__text" aria-hidden="true">{s.rotulo16}</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="hero__social">
                    <div className="hero__avatars" aria-hidden="true">
                      <span className="hero__avatar">
                        <img src={s.imagem3} alt="" width="100" height="100" />
                      </span>
                      <span className="hero__avatar">
                        <img src={s.imagem4} alt="" width="100" height="100" />
                      </span>
                      <span className="hero__avatar">
                        <img src={s.imagem5} alt="" width="100" height="100" />
                      </span>
                      <span className="hero__avatar">
                        <img src={s.imagem6} alt="" width="100" height="100" />
                      </span>
                      <span className="hero__avatar hero__avatar--count">{s.rotulo17}</span>
                    </div>
                    <p className="hero__proof">{s.texto2}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}