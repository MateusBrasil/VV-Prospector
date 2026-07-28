"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/navegacao-menu-16
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
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   document.addEventListener('DOMContentLoaded', () => {
  //     const body = document.body;
  //     const menu = document.querySelector('.menu');
  //     const toggle = document.querySelector('.menu-toggle');
  //     const toggleText = document.querySelector('.menu-toggle-text');
  //     const backdrop = document.querySelector('.menu-backdrop');
  //     const frame = document.querySelector('.menu-frame');
  //     const strips = document.querySelectorAll('.menu-strip');
  //     const navLinks = document.querySelectorAll('.menu-link span');
  //     const meta = document.querySelector('.menu-meta p');
  //     const footer = document.querySelector('.menu-footer p');
  //     const hero = document.querySelector('.hero-shell');
  //     const openLabel = toggleText.dataset.open || 'MENU';
  //     const closeLabel = toggleText.dataset.close || 'CLOSE';
  //   
  //     let busy = false;
  //   
  //     gsap.set(menu, { autoAlpha: 1, pointerEvents: 'none' });
  //     gsap.set(backdrop, { autoAlpha: 0 });
  //     gsap.set(frame, { autoAlpha: 0, scale: 0.96 });
  //     gsap.set(hero, { scale: 1, filter: 'blur(0px)' });
  //     gsap.set(strips, {
  //       scaleY: 0,
  //       transformOrigin: (i) => (i % 2 === 0 ? 'top center' : 'bottom center')
  //     });
  //     gsap.set(navLinks, { yPercent: 115, rotation: 4, autoAlpha: 0 });
  //     gsap.set([meta, footer], { y: 18, autoAlpha: 0 });
  //   
  //     const tl = gsap.timeline({
  //       paused: true,
  //       defaults: { ease: 'power4.inOut' },
  //       onStart: () => {
  //         busy = true;
  //         body.classList.add('menu-open');
  //         menu.style.pointerEvents = 'auto';
  //         menu.setAttribute('aria-hidden', 'false');
  //         toggle.classList.add('is-open');
  //         toggleText.textContent = closeLabel;
  //       },
  //       onComplete: () => {
  //         busy = false;
  //       },
  //       onReverseComplete: () => {
  //         busy = false;
  //         body.classList.remove('menu-open');
  //         menu.style.pointerEvents = 'none';
  //         menu.setAttribute('aria-hidden', 'true');
  //         toggle.classList.remove('is-open');
  //         toggleText.textContent = openLabel;
  //       }
  //     });
  //   
  //     tl.to(backdrop, {
  //         duration: 0.22,
  //         autoAlpha: 1,
  //         ease: 'linear'
  //       }, 0)
  //       .to(hero, {
  //         duration: 0.8,
  //         scale: 0.94,
  //         filter: 'blur(8px)',
  //         ease: 'power3.inOut'
  //       }, 0)
  //       .to(strips, {
  //         duration: 0.7,
  //         scaleY: 1,
  //         stagger: 0.06
  //       }, 0)
  //       .to(frame, {
  //         duration: 0.48,
  //         autoAlpha: 1,
  //         scale: 1,
  //         ease: 'power2.out'
  //       }, 0.28)
  //       .to([meta, footer], {
  //         duration: 0.4,
  //         y: 0,
  //         autoAlpha: 1,
  //         stagger: 0.04,
  //         ease: 'power2.out'
  //       }, 0.42)
  //       .to(navLinks, {
  //         duration: 0.75,
  //         yPercent: 0,
  //         rotation: 0,
  //         autoAlpha: 1,
  //         stagger: 0.07,
  //         ease: 'power4.out'
  //       }, 0.36);
  //   
  //     toggle.addEventListener('click', () => {
  //       if (busy) return;
  //       if (tl.progress() === 0 || tl.reversed()) {
  //         tl.play();
  //       } else {
  //         tl.reverse();
  //       }
  //     });
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-navegacao-menu-16" ref={raiz}>
      <div className="noise"></div>
      
        <header className="site-header">
          <a className="brand" href="#" aria-label="Noir Mode home">
            <span className="brand-mark"></span>
            <span className="brand-name">{s.rotulo}</span>
          </a>
      
          <button className="menu-toggle" type="button" aria-label="Toggle menu" onClick={s.onClick}>
            <span className="menu-toggle-text" data-open="MENU" data-close="CLOSE">{s.rotulo2}</span>
            <span className="menu-toggle-icon">
              <span></span>
              <span></span>
            </span>
          </button>
        </header>
      
        <main className="hero-shell">
          <section className="hero-copy">
            <p className="hero-kicker">{s.texto}</p>
            <h1>
              BIG<br />
              DARK<br />
              MOTION
            </h1>
          </section>
      
          <section className="hero-card hero-card-main">
            <div className="hero-card-inner">
              <div className="orb orb-one"></div>
              <div className="orb orb-two"></div>
              <p>{s.texto2}</p>
            </div>
          </section>
      
          <section className="hero-card hero-card-side">
            <div className="hero-card-inner hero-card-lines">
              <span></span><span></span><span></span>
            </div>
          </section>
        </main>
      
        <aside className="menu" aria-hidden="true">
          <div className="menu-backdrop"></div>
      
          <div className="menu-strips">
            <span className="menu-strip"></span>
            <span className="menu-strip"></span>
            <span className="menu-strip"></span>
            <span className="menu-strip"></span>
          </div>
      
          <div className="menu-frame"></div>
      
          <div className="menu-inner">
            <div className="menu-meta">
              <p>{s.texto3}</p>
            </div>
      
            <nav className="menu-nav">
              <a href="#" className="menu-link"><span>{s.rotulo3}</span></a>
              <a href="#" className="menu-link"><span>{s.rotulo4}</span></a>
              <a href="#" className="menu-link"><span>{s.rotulo5}</span></a>
              <a href="#" className="menu-link"><span>{s.rotulo6}</span></a>
            </nav>
          </div>
        </aside>
    </section>
  );
}