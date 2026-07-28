"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-147
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
    
      const section = raiz.current.querySelector('.services-hero');
      if (!section) return;
    
      const bg = section.querySelector('.services-hero__bg');
      const heading = section.querySelector('.services-hero__heading');
      const sub = section.querySelector('.services-hero__sub');
      const button = section.querySelector('.services-hero__btn');
    
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        gsap.set([bg, heading, sub, button], { autoAlpha: 1, x: 0, scale: 1, filter: 'none' });
        return;
      }
    
      gsap.set(bg, { scale: 1.05, filter: 'blur(8px)' });
      gsap.set([heading, sub, button], { autoAlpha: 0, x: 60 });
    
      const tl = gsap.timeline({ delay: 0.15 });
    
      tl.to(bg, { scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }, 0)
        .to(heading, { autoAlpha: 1, x: 0, duration: 0.9, ease: 'power3.out' }, 0.15)
        .to(sub, { autoAlpha: 1, x: 0, duration: 0.85, ease: 'power3.out' }, 0.23)
        .to(button, { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 0.31);
    
      tl.call(() => {
        gsap.set(button, { clearProps: 'translate,rotate,scale,transform,x' });
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
    <section className="dobra" data-dobra="equipa-secao-147" ref={raiz}>
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
      
          <section className="services-hero">
            <div className="container container--padded">
              <div className="services-hero__card">
                <div className="services-hero__bg-wrap" aria-hidden="true">
                  <img className="services-hero__bg" src={s.imagem2} alt="Consulting professional working on a laptop" width="1673" height="938" />
                </div>
                <div className="services-hero__content">
                  <div className="services-hero__text">
                    <h1 className="hero__heading services-hero__heading">{s.titulo}</h1>
                    <p className="services-hero__sub">{s.texto}</p>
                  </div>
                  <a href="/contact" className="btn btn--primary services-hero__btn">
                    <span className="btn__mask">
                      <span className="btn__text">{s.rotulo13}</span>
                      <span className="btn__text" aria-hidden="true">{s.rotulo14}</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
    </section>
  );
}