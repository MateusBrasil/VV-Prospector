"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/navegacao-menu-7
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
  //   /* =====================================================
  //      PURITY OF NOISE — MENU
  //      script.js
  //   
  //      One paused GSAP timeline, played forward to open and
  //      reversed to close.
  //   
  //      How the wave works now (previous jittery version removed):
  //      The SVG <path> has the wave shape BAKED IN — its bottom
  //      edge is a permanent curve. We never morph it.
  //   
  //      Instead, the whole .overlay element translates:
  //        closed: translateY(-100%)   (sits above the viewport)
  //        open:   translateY(0)        (covers the viewport, curve
  //                                      hanging below the fold)
  //   
  //      One transform property interpolated linearly = perfectly
  //      smooth, GPU-accelerated, and reverses identically.
  //      ===================================================== */
  //   
  //   document.addEventListener('DOMContentLoaded', () => {
  //   
  //      /* ── DOM refs ── */
  //      const toggle    = document.getElementById('js-toggle')
  //      const menu      = document.getElementById('js-menu')
  //      const overlay   = document.querySelector('.overlay')
  //      const menuLinks = document.querySelectorAll('.menu-link')
  //   
  //      /* ── Initial states ── */
  //      gsap.set(menu, { visibility: 'hidden' })
  //      gsap.set(menuLinks, { top: '100%' })
  //   
  //      /* ── Main timeline ── */
  //      const tl = gsap.timeline({ paused: true })
  //   
  //      tl
  //         /* 1. Overlay slides down from above — ONE transform tween.
  //               Because we're animating a single `y` number (not an
  //               SVG path with multiple control points), the motion
  //               is perfectly continuous. The wave shape is static;
  //               it only travels through space.
  //               `power3.inOut` gives a natural accelerate-decelerate
  //               curve that looks clean both forward AND reversed. */
  //         .to(overlay, {
  //            y: 0,
  //            duration: 1.2,
  //            ease: 'power3.inOut',
  //         }, 0)
  //   
  //         /* 2. Reveal menu container when wave has just covered us */
  //         .set(menu, { visibility: 'visible' }, 0.55)
  //         .call(() => menu.classList.add('is-open'), null, 0.55)
  //   
  //         /* 3. Menu links slide up out of their clipped containers */
  //         .to(menuLinks, {
  //            top: 0,
  //            duration: 0.9,
  //            stagger: 0.07,
  //            ease: 'power3.out',
  //         }, 0.6)
  //   
  //      /* ── Toggle click ── */
  //      toggle.addEventListener('click', () => {
  //         /* "Currently open" = timeline played forward AND not reversed back */
  //         const isOpen = !tl.reversed() && tl.progress() > 0
  //   
  //         if (isOpen) {
  //            toggle.classList.remove('is-active')
  //            toggle.setAttribute('aria-expanded', 'false')
  //            menu.setAttribute('aria-hidden', 'true')
  //            menu.classList.remove('is-open')
  //            tl.reverse()
  //         } else {
  //            toggle.classList.add('is-active')
  //            toggle.setAttribute('aria-expanded', 'true')
  //            menu.setAttribute('aria-hidden', 'false')
  //            tl.play()
  //         }
  //      })
  //   
  //      /* Close on Escape */
  //      document.addEventListener('keydown', (e) => {
  //         if (e.key === 'Escape' && !tl.reversed() && tl.progress() > 0) {
  //            toggle.click()
  //         }
  //      })
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-navegacao-menu-7" ref={raiz}>
      <section className="hero">
            <h1 className="hero__title">
               <span className="hero__row hero__row--top">
                  <em>the</em> PURITY
               </span>
               <span className="hero__row hero__row--bottom">
                  <em>of</em> NOISE
               </span>
            </h1>
      
            <p className="hero__caption">{s.texto}</p>
         </section>
      
         
         <button className="menu-toggle" id="js-toggle" type="button"
                 aria-label="Open navigation" aria-expanded="false" onClick={s.onClick}>
            <span className="menu-toggle__outline menu-toggle__outline--a"></span>
            <span className="menu-toggle__outline menu-toggle__outline--b"></span>
      
            <span className="menu-toggle__icon">
               <span className="menu-toggle__line menu-toggle__line--top"></span>
               <span className="menu-toggle__line menu-toggle__line--bottom"></span>
            </span>
         </button>
      
         
         <div className="overlay" aria-hidden="true">
            <svg className="overlay__svg" viewBox="0 0 1000 1100" preserveAspectRatio="none">
               
               <path className="overlay__path"
                     d="M 0 0 L 1000 0 L 1000 1000 Q 500 1200 0 1000 Z"></path>
            </svg>
         </div>
      
         
         <nav className="menu" id="js-menu" aria-hidden="true">
      
            <div className="menu__col menu__col--primary">
               <ul className="menu__list">
                  <li className="menu-item menu-item--offset-sm">
                     <a className="menu-link menu-link--primary" href="#">
                        <span className="menu-link__num">I</span>
                        <span className="menu-link__text">{s.rotulo}</span>
                     </a>
                  </li>
                  <li className="menu-item">
                     <a className="menu-link menu-link--primary" href="#">
                        <span className="menu-link__num">{s.rotulo2}</span>
                        <span className="menu-link__text">{s.rotulo3}</span>
                     </a>
                  </li>
                  <li className="menu-item menu-item--offset-sm">
                     <a className="menu-link menu-link--primary" href="#">
                        <span className="menu-link__num">{s.rotulo4}</span>
                        <span className="menu-link__text">{s.rotulo5}</span>
                     </a>
                  </li>
               </ul>
            </div>
      
            <div className="menu__col menu__col--secondary">
               <ul className="menu__list menu__list--top">
                  <li className="menu-item">
                     <a className="menu-link menu-link--secondary" href="#">{s.acao}</a>
                  </li>
                  <li className="menu-item">
                     <a className="menu-link menu-link--secondary" href="#">{s.acao2}</a>
                  </li>
                  <li className="menu-item">
                     <a className="menu-link menu-link--secondary" href="#">{s.acao3}</a>
                  </li>
               </ul>
      
               <ul className="menu__list menu__list--bottom">
                  <li className="menu-item">
                     <a className="menu-link menu-link--secondary" href="#">{s.acao4}</a>
                  </li>
               </ul>
            </div>
         </nav>
    </section>
  );
}