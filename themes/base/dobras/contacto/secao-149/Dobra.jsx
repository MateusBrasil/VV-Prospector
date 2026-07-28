"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-149
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
    // Above-the-fold: master gsap.timeline() — `pipely_above_fold_master_timeline`.
    (() => {
      const gsap = window.gsap;
      if (typeof gsap === 'undefined') return;
    
      const section = raiz.current.querySelector('.case-study-hero');
      if (!section) return;
    
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;
    
      const heading = section.querySelector('.case-study-hero__heading');
      const sub = section.querySelector('.case-study-hero__sub');
      const img = section.querySelector('.case-study-hero__media img');
    
      const textItems = [heading, sub].filter(Boolean);
      gsap.set(textItems, { autoAlpha: 0, x: 60 });
      if (img) gsap.set(img, { scale: 1.1, autoAlpha: 0 });
    
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
      textItems.forEach((el, i) => {
        tl.to(el, { autoAlpha: 1, x: 0 }, i * 0.1);
      });
      if (img) {
        tl.to(img, { scale: 1, autoAlpha: 1, duration: 1, ease: 'power2.out' }, 0.2);
      }
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
    <section className="dobra" data-dobra="contacto-secao-149" ref={raiz}>
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
      
        <main id="main-content">
          <section className="case-study" aria-label="Case study">
            <div className="container container--padded">
              <article className="case-study__card">
                <div className="case-study-hero">
                  <header className="case-study-hero__header">
                    <h1 className="case-study-hero__heading">{s.titulo}</h1>
                    <p className="case-study-hero__sub">{s.texto}</p>
                  </header>
      
                  <div className="case-study-hero__media">
                    <img src={s.imagem2} alt="Sequoia Logistics dispatch cockpit shown on a desktop browser" width="1128" height="687" loading="eager" fetchpriority="high" />
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>
    </section>
  );
}