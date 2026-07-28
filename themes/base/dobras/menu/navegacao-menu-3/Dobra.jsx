"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/navegacao-menu-3
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
  //   /* =====================================================
  //      CURVED MENU — script.js
  //      Animates a side-slide menu with a curved left edge.
  //      All motion is built as ONE GSAP timeline (paused by default)
  //      and we simply .play() / .reverse() it to toggle the menu.
  //      ===================================================== */
  //   
  //   /* ── DOM references ─────────────────────────────────── */
  //   const menuBtn   = document.getElementById('js-menu-btn');    // circular button
  //   const burger    = document.getElementById('js-burger');      // burger icon inside the button
  //   const menu      = document.getElementById('js-menu');        // the slide-in panel
  //   const nav       = document.getElementById('js-nav');         // nav wrapper (for mouseleave)
  //   const curvePath = document.getElementById('js-curve-path');  // <path> inside the SVG curve
  //   const links     = document.querySelectorAll('.menu__link');  // every nav row
  //   
  //   /* How far the menu has to travel off-screen to the right.
  //      = panel width (480) + 100px gap so the SVG curve also hides. */
  //   const OFFSCREEN = 480 + 100;
  //   
  //   /* ── SVG curve paths ────────────────────────────────────
  //      The left edge of the menu is drawn by an SVG <path>.
  //      We animate its "d" attribute between two shapes:
  //        - initialPath: the curve bows INWARD  (Q-100 ...) — closed state
  //        - targetPath:  the curve is STRAIGHT (Q100 ...)  — open state
  //      Using functions (not constants) so innerHeight is always fresh,
  //      which matters on window resize.
  //      ───────────────────────────────────────────────────── */
  //   const initialPath = () =>
  //      `M100 0 L200 0 L200 ${innerHeight} L100 ${innerHeight} Q-100 ${innerHeight / 2} 100 0`;
  //   
  //   const targetPath = () =>
  //      `M100 0 L200 0 L200 ${innerHeight} L100 ${innerHeight} Q100 ${innerHeight / 2} 100 0`;
  //   
  //   /* Set the initial (closed) curve shape before the timeline builds */
  //   curvePath.setAttribute('d', initialPath());
  //   
  //   /* ── State ─────────────────────────────────────────── */
  //   let currentHref = '/';            // which nav item is currently "active"
  //   const ease = "power3.inOut";      // approx. the cubic-bezier(0.76, 0, 0.24, 1) from the original
  //   
  //   /* ── Main timeline ──────────────────────────────────────
  //      Built ONCE, in the "opening" direction, and kept paused.
  //      Click the button → tl.play()    (opens)
  //      Click again       → tl.reverse() (closes — GSAP plays it back)
  //      This removes all the duplicate code you would otherwise
  //      need for open() vs close().
  //      ───────────────────────────────────────────────────── */
  //   const tl = gsap.timeline({
  //      paused: true,
  //      defaults: { duration: 0.8, ease },
  //   });
  //   
  //   tl
  //      /* 1. Panel slides in from the right.
  //            fromTo() guarantees the starting x even on first play. */
  //      .fromTo(menu,
  //         { x: OFFSCREEN },
  //         { x: 0 },
  //         0  // 0 = start at time 0 of the timeline (parallel with next tweens)
  //      )
  //   
  //      /* 2. Curve morphs from "bowed" to "straight" in parallel.
  //            `attr: { d: ... }` tells GSAP to animate the SVG "d" attribute. */
  //      .fromTo(curvePath,
  //         { attr: { d: initialPath() } },
  //         { attr: { d: targetPath()  }, duration: 1 },
  //         0
  //      )
  //   
  //      /* 3. Nav links slide in from x: 80 with a stagger.
  //            Each link starts 0.05s after the previous one. */
  //      .fromTo(links,
  //         { x: 80 },
  //         { x: 0, stagger: 0.05 },
  //         0
  //      );
  //   
  //   /* ── Resize handling ────────────────────────────────────
  //      The curve path depends on innerHeight. If the user resizes
  //      while the menu is in a certain state, re-apply the correct
  //      path so the curve fills the full height. */
  //   window.addEventListener('resize', () => {
  //      // A positive, non-reversed progress means the menu is opening or open.
  //      const isOpen = tl.progress() > 0 && !tl.reversed();
  //      curvePath.setAttribute('d', isOpen ? targetPath() : initialPath());
  //   });
  //   
  //   /* ── Toggle button ───────────────────────────────────── */
  //   menuBtn.addEventListener('click', () => {
  //      // If the timeline is reversed (or untouched), play forward = open
  //      if (tl.reversed() || tl.progress() === 0) {
  //         burger.classList.add('header__burger--active');
  //         tl.play();
  //         setIndicator(currentHref);  // light up the dot for the current page
  //      } else {
  //         // Otherwise play backwards = close
  //         burger.classList.remove('header__burger--active');
  //         gsap.to('.menu__indicator', { scale: 0, duration: 0.3 }); // hide all dots
  //         tl.reverse();
  //      }
  //   });
  //   
  //   /* ── Indicator (the small white dot) ────────────────────
  //      Scales up the dot for the hovered (or current) link
  //      and scales the others down. */
  //   function setIndicator(href) {
  //      links.forEach(link => {
  //         const dot = link.querySelector('.menu__indicator');
  //         gsap.to(dot, {
  //            scale: link.dataset.href === href ? 1 : 0,
  //            duration: 0.3,
  //            ease: "power2.out",
  //         });
  //      });
  //   }
  //   
  //   /* Hovering a link highlights its dot */
  //   links.forEach(link => {
  //      link.addEventListener('mouseenter', () => setIndicator(link.dataset.href));
  //   });
  //   
  //   /* Leaving the nav area snaps the dot back to the current page */
  //   nav.addEventListener('mouseleave', () => setIndicator(currentHref));
  //   
  //   /* Clicking a link "navigates" (updates current) and closes the menu */
  //   links.forEach(link => {
  //      link.querySelector('a').addEventListener('click', (e) => {
  //         e.preventDefault();
  //         currentHref = link.dataset.href;
  //         burger.classList.remove('header__burger--active');
  //         gsap.to('.menu__indicator', { scale: 0, duration: 0.3 });
  //         tl.reverse();
  //      });
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-navegacao-menu-3" ref={raiz}>
      <main className="page">Curved Menu Demo</main>
      
         
         <header className="header">
            <div className="header__button" id="js-menu-btn">
               <div className="header__burger" id="js-burger"></div>
            </div>
         </header>
      
         
         <div className="menu" id="js-menu">
            <div className="menu__body">
      
               
               <nav className="menu__nav" id="js-nav">
                  <div className="menu__header"><p>{s.texto}</p></div>
      
                  
                  <div className="menu__link" data-href="/">
                     <div className="menu__indicator"></div>
                     <a href="#">{s.acao}</a>
                  </div>
                  <div className="menu__link" data-href="/work">
                     <div className="menu__indicator"></div>
                     <a href="#">{s.acao2}</a>
                  </div>
                  <div className="menu__link" data-href="/about">
                     <div className="menu__indicator"></div>
                     <a href="#">{s.acao3}</a>
                  </div>
                  <div className="menu__link" data-href="/contact">
                     <div className="menu__indicator"></div>
                     <a href="#">{s.acao4}</a>
                  </div>
               </nav>
      
               
               <div className="menu__footer">
                  <a>{s.acao5}</a>
                  <a>{s.acao6}</a>
                  <a>{s.acao7}</a>
                  <a>{s.acao8}</a>
               </div>
            </div>
      
            
            <svg className="menu__curve">
               <path id="js-curve-path"></path>
            </svg>
         </div>
    </section>
  );
}