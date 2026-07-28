"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-32
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
    /* ============================================================
       Plasticity Navbar
       Desktop (>=1025px): full pill, entrance reveal on load.
       Mobile  (<=1024px): links collapse behind a toggle that
       opens a GSAP dropdown panel.
       ============================================================ */
    
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    
    const nav = raiz.current.querySelector('[data-nav]');
    const logo = raiz.current.querySelector('.plasticity-nav__logo');
    const toggle = raiz.current.querySelector('[data-toggle]');
    const panel = raiz.current.querySelector('[data-menu]');
    const items = gsap.utils.toArray('.plasticity-nav__item');
    const cta = raiz.current.querySelector('.plasticity-nav__cta');
    
    const mm = gsap.matchMedia();
    
    /* ── Desktop: inline pill entrance ─────────────────────────── */
    mm.add('(min-width: 1025px)', () => {
      if (prefersReducedMotion) {
        gsap.set([nav, '[data-stagger]'], { opacity: 1, y: 0, scale: 1 });
        return;
      }
    
      gsap.set(nav, { opacity: 0, y: 24, scale: 0.96 });
      gsap.set('[data-stagger]', { opacity: 0, y: 10 });
    
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.to(nav, { opacity: 1, y: 0, scale: 1, duration: 0.8 }).to(
        '[data-stagger]',
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: 'power3.out' },
        0.2
      );
    });
    
    /* ── Mobile: bar entrance + collapsible dropdown ───────────── */
    mm.add('(max-width: 1024px)', () => {
      let isOpen = false;
    
      /* Bar entrance (logo + toggle) */
      if (prefersReducedMotion) {
        gsap.set([nav, logo, toggle], { opacity: 1, y: 0, scale: 1 });
      } else {
        gsap.set(nav, { opacity: 0, y: 24, scale: 0.96 });
        gsap.set([logo, toggle], { opacity: 0, y: 10 });
    
        const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
        intro.to(nav, { opacity: 1, y: 0, scale: 1, duration: 0.8 }).to(
          [logo, toggle],
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
          0.2
        );
      }
    
      /* Closed initial state */
      const panelContents = [...items, cta];
      gsap.set(panel, { autoAlpha: 0, y: -8 });
      gsap.set(panelContents, { autoAlpha: 0, y: 8 });
    
      function openMenu() {
        isOpen = true;
        toggle.setAttribute('aria-expanded', 'true');
        gsap.killTweensOf([panel, ...panelContents]);
        gsap.to(panel, {
          autoAlpha: 1,
          y: 0,
          duration: prefersReducedMotion ? 0.01 : 0.35,
          ease: 'power3.out',
          overwrite: 'auto',
        });
        gsap.to(panelContents, {
          autoAlpha: 1,
          y: 0,
          duration: prefersReducedMotion ? 0.01 : 0.3,
          stagger: prefersReducedMotion ? 0 : 0.05,
          delay: prefersReducedMotion ? 0 : 0.08,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    
      function closeMenu() {
        isOpen = false;
        toggle.setAttribute('aria-expanded', 'false');
        gsap.killTweensOf([panel, ...panelContents]);
        gsap.to(panelContents, {
          autoAlpha: 0,
          y: 8,
          duration: prefersReducedMotion ? 0.01 : 0.2,
          ease: 'power2.in',
          overwrite: 'auto',
        });
        gsap.to(panel, {
          autoAlpha: 0,
          y: -8,
          duration: prefersReducedMotion ? 0.01 : 0.25,
          delay: prefersReducedMotion ? 0 : 0.04,
          ease: 'power2.in',
          overwrite: 'auto',
        });
      }
    
      function onToggle() {
        isOpen ? closeMenu() : openMenu();
      }
    
      function onKeydown(e) {
        if (e.key === 'Escape' && isOpen) {
          closeMenu();
          toggle.focus();
        }
      }
    
      function onDocClick(e) {
        if (isOpen && !nav.contains(e.target)) {
          closeMenu();
        }
      }
    
      toggle.addEventListener('click', onToggle);
      document.addEventListener('keydown', onKeydown);
      document.addEventListener('click', onDocClick);
    
      const onLinkClick = () => closeMenu();
      const links = panel.querySelectorAll('.plasticity-nav__link, .plasticity-nav__cta');
      links.forEach((link) => link.addEventListener('click', onLinkClick));
    
      return () => {
        toggle.removeEventListener('click', onToggle);
        document.removeEventListener('keydown', onKeydown);
        document.removeEventListener('click', onDocClick);
        links.forEach((link) => link.removeEventListener('click', onLinkClick));
        toggle.setAttribute('aria-expanded', 'false');
        gsap.killTweensOf([panel, ...panelContents]);
      };
    });
    
    window.addEventListener('beforeunload', () => {
      mm.revert();
    });
    
    
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="precos-secao-32" ref={raiz}>
      <header className="plasticity-nav" data-nav>
            <a
              href="#"
              className="plasticity-nav__logo"
              aria-label="Plasticity, home"
              data-stagger
            >
              <svg
                className="plasticity-nav__logo-mark"
                viewBox="0 0 106 20"
                role="img"
                aria-label="Plasticity"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.0922 19.256L0 0H7.36519L14.8191 12.8669L18.4573 6.47782L14.8191 0H22.1843L26 6.47782L22.3618 13.0444L14.8191 12.8669L11.0922 19.256Z" fill="currentColor" />
                <path d="M98.7272 14.486L101.471 9.48796L98.7832 4.54596H100.183L102.241 8.53596L104.299 4.54596H105.671L102.983 9.50196L105.727 14.486H104.327L102.213 10.44L100.099 14.486H98.7272Z" fill="currentColor" />
                <path d="M89.0726 14.486V13.31H91.5506V5.72196H89.0726V4.54596H95.2326V5.72196H92.7546V13.31H95.2326V14.486H89.0726Z" fill="currentColor" />
                <path d="M81.4761 14.486V5.72196H78.4381V4.54596H85.7181V5.72196H82.6801V14.486H81.4761Z" fill="currentColor" />
                <path d="M69.2036 14.486V4.54596H70.4076V13.926L69.8056 13.31H75.3636V14.486H69.2036Z" fill="currentColor" />
                <path d="M61.929 14.71C60.8836 14.71 60.0623 14.3786 59.465 13.716C58.8676 13.0533 58.569 12.1526 58.569 11.014V4.54596H59.773V11.014C59.773 11.8353 59.955 12.4606 60.319 12.89C60.6923 13.3193 61.229 13.534 61.929 13.534C62.629 13.534 63.161 13.3193 63.525 12.89C63.8983 12.4606 64.085 11.8353 64.085 11.014V4.54596H65.289V11.014C65.289 12.1526 64.9903 13.0533 64.393 13.716C63.7956 14.3786 62.9743 14.71 61.929 14.71Z" fill="currentColor" />
                <path d="M48.0184 14.486L51.0424 4.54596H52.6664L55.6904 14.486H54.4024L51.8544 5.63796L49.3064 14.486H48.0184ZM49.5444 11.658L49.9644 10.482H53.7444L54.1644 11.658H49.5444Z" fill="currentColor" />
                <path d="M40.996 14.486L38 4.54596H39.288L41.948 13.702H41.612L44.272 4.54596H45.56L42.564 14.486H40.996Z" fill="currentColor" />
              </svg>
            </a>
      
            <button
              className="plasticity-nav__toggle"
              type="button"
              data-toggle
              aria-label="Toggle menu"
              aria-expanded="false"
              aria-controls="plasticity-menu"
             onClick={s.onClick}>
              <span className="plasticity-nav__toggle-line plasticity-nav__toggle-line--top" aria-hidden="true"></span>
              <span className="plasticity-nav__toggle-line plasticity-nav__toggle-line--mid" aria-hidden="true"></span>
              <span className="plasticity-nav__toggle-line plasticity-nav__toggle-line--bot" aria-hidden="true"></span>
            </button>
      
            <nav className="plasticity-nav__nav" id="plasticity-menu" aria-label="Primary" data-menu>
              <ul className="plasticity-nav__list">
                <li className="plasticity-nav__item plasticity-nav__item--emerald" data-stagger>
                  <a href="#features" className="plasticity-nav__link">
                    <span className="plasticity-nav__dot" aria-hidden="true"></span>
                    <span className="plasticity-nav__label">{s.rotulo}</span>
                  </a>
                </li>
                <li className="plasticity-nav__item plasticity-nav__item--pink" data-stagger>
                  <a href="#models" className="plasticity-nav__link">
                    <span className="plasticity-nav__dot" aria-hidden="true"></span>
                    <span className="plasticity-nav__label">{s.rotulo2}</span>
                  </a>
                </li>
                <li className="plasticity-nav__item plasticity-nav__item--orange" data-stagger>
                  <a href="#pricing" className="plasticity-nav__link">
                    <span className="plasticity-nav__dot" aria-hidden="true"></span>
                    <span className="plasticity-nav__label">{s.rotulo3}</span>
                  </a>
                </li>
                <li className="plasticity-nav__item plasticity-nav__item--yellow" data-stagger>
                  <a href="#api" className="plasticity-nav__link">
                    <span className="plasticity-nav__dot" aria-hidden="true"></span>
                    <span className="plasticity-nav__label">{s.rotulo4}</span>
                  </a>
                </li>
                <li className="plasticity-nav__item plasticity-nav__item--teal" data-stagger>
                  <a href="#enterprise" className="plasticity-nav__link">
                    <span className="plasticity-nav__dot" aria-hidden="true"></span>
                    <span className="plasticity-nav__label">{s.rotulo5}</span>
                  </a>
                </li>
                <li className="plasticity-nav__item plasticity-nav__item--white" data-stagger>
                  <a href="#login" className="plasticity-nav__link">
                    <span className="plasticity-nav__dot" aria-hidden="true"></span>
                    <span className="plasticity-nav__label">{s.rotulo6}</span>
                  </a>
                </li>
              </ul>
      
              <a href="#try" className="plasticity-nav__cta" data-stagger>
                <span className="plasticity-nav__cta-label">{s.rotulo7}</span>
                <svg
                  className="plasticity-nav__cta-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </nav>
          </header>
    </section>
  );
}