"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cursor/crosshair-mouse-cursor-distortion
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
  //   
  //           // --- UTILS ---
  //           const lerp = (a, b, n) => (1 - n) * a + n * b;
  //           const getMousePos = e => ({ x : e.clientX, y : e.clientY });
  //   
  //           // Track global mouse position
  //           let mouse = {x: window.innerWidth / 2, y: window.innerHeight / 2};
  //           window.addEventListener('mousemove', ev => mouse = getMousePos(ev));
  //   
  //           // --- CURSOR CLASS ---
  //           class Cursor {
  //               constructor(el) {
  //                   this.DOM = {el: el};
  //                   this.DOM.lines = this.DOM.el.children;
  //                   [this.DOM.lineHorizontal, this.DOM.lineVertical] = this.DOM.lines;
  //                   
  //                   // Hide initially
  //                   gsap.set(this.DOM.lines, {opacity: 0});
  //                   
  //                   this.renderedStyles = {
  //                       tx: {previous: window.innerWidth / 2, current: window.innerWidth / 2, amt: 0.15},
  //                       ty: {previous: window.innerHeight / 2, current: window.innerHeight / 2, amt: 0.15}
  //                   };
  //   
  //                   // On first move, fade in crosshair and launch rendering loop
  //                   this.onMouseMoveEv = () => {
  //                       this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mouse.x;
  //                       this.renderedStyles.ty.previous = this.renderedStyles.ty.current = mouse.y;
  //                       gsap.to(this.DOM.lines, {duration: 0.9, ease: 'Power3.easeOut', opacity: 1});
  //                       requestAnimationFrame(() => this.render());
  //                       window.removeEventListener('mousemove', this.onMouseMoveEv);
  //                   };
  //                   window.addEventListener('mousemove', this.onMouseMoveEv);
  //   
  //                   this.filterId = {
  //                       x: '#filter-noise-x',
  //                       y: '#filter-noise-y'
  //                   };
  //   
  //                   this.DOM.feTurbulence = {
  //                       x: document.querySelector(`${this.filterId.x} > feTurbulence`),
  //                       y: document.querySelector(`${this.filterId.y} > feTurbulence`)
  //                   };
  //   
  //                   this.primitiveValues = {turbulence: 0};
  //                   this.createNoiseTimeline();
  //               }
  //   
  //               enter() {
  //                   // Trigger dynamic turbulence timeline
  //                   this.tl.restart();
  //               }
  //   
  //               leave() {
  //                   // Force timeline end and terminate
  //                   this.tl.progress(1).kill();
  //               }
  //   
  //               createNoiseTimeline() {
  //                   this.tl = gsap.timeline({
  //                       paused: true,
  //                       onStart: () => {
  //                           this.DOM.lineHorizontal.style.filter = `url(${this.filterId.x})`;
  //                           this.DOM.lineVertical.style.filter = `url(${this.filterId.y})`;
  //                       },
  //                       onUpdate: () => {
  //                           this.DOM.feTurbulence.x.setAttribute('baseFrequency', this.primitiveValues.turbulence);
  //                           this.DOM.feTurbulence.y.setAttribute('baseFrequency', this.primitiveValues.turbulence);
  //                       },
  //                       onComplete: () => {
  //                           this.DOM.lineHorizontal.style.filter = this.DOM.lineVertical.style.filter = 'none';
  //                       }
  //                   })
  //                   .to(this.primitiveValues, { 
  //                       duration: 0.5,
  //                       ease: 'power1.out',
  //                       startAt: {turbulence: 0.18}, // Set a visible initial turbulence scale
  //                       turbulence: 0
  //                   });
  //               }
  //   
  //               render() {
  //                   this.renderedStyles['tx'].current = mouse.x;
  //                   this.renderedStyles['ty'].current = mouse.y;
  //   
  //                   for (const key in this.renderedStyles) {
  //                       this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
  //                   }
  //   
  //                   gsap.set(this.DOM.lineVertical, {x: this.renderedStyles['tx'].previous});
  //                   gsap.set(this.DOM.lineHorizontal, {y: this.renderedStyles['ty'].previous});
  //   
  //                   requestAnimationFrame(() => this.render());
  //               }
  //           }
  //   
  //           // --- MENU ITEM CLASS ---
  //           class MenuItem {
  //               constructor(el) {
  //                   this.DOM = {el};
  //                   this.DOM.titleChars = this.DOM.el.querySelectorAll('span.char');
  //                   
  //                   const bodyComputedStyle = getComputedStyle(document.body);
  //                   this.colors = {
  //                       initial: bodyComputedStyle.getPropertyValue('--color-menu').trim(), 
  //                       final: bodyComputedStyle.getPropertyValue('--color-link').trim()
  //                   };
  //                   
  //                   this.initEvents();
  //               }
  //   
  //               initEvents() {
  //                   this.onMouseEnterEv = () => this.onMouseEnter();
  //                   this.DOM.el.addEventListener('mouseenter', this.onMouseEnterEv);
  //   
  //                   this.onMouseLeaveEv = () => this.onMouseLeave();
  //                   this.DOM.el.addEventListener('mouseleave', this.onMouseLeaveEv);
  //               }
  //   
  //               onMouseEnter() {
  //                   if (this.leaveTimeline) {
  //                       this.leaveTimeline.kill();
  //                   }
  //   
  //                   // Mimic a rich glitch sequence on the characters using spatial/rotational offsets and colors
  //                   this.enterTimeline = gsap.timeline({
  //                       defaults: {
  //                           duration: 0.05,
  //                           ease: 'power3.inOut',
  //                           x: () => gsap.utils.random(-15, 15),
  //                           y: () => gsap.utils.random(-20, 10),
  //                           rotation: () => gsap.utils.random(-5, 5),
  //                           color: () => gsap.utils.random(0, 3) < 1.5 ? this.colors.final : this.colors.initial
  //                       }
  //                   })
  //                   .to(this.DOM.titleChars, {
  //                       repeat: 3,
  //                       repeatRefresh: true
  //                   }, 0)
  //                   .to(this.DOM.titleChars, {
  //                       x: 0, 
  //                       y: 0, 
  //                       rotation: 0,
  //                       color: this.colors.final,
  //                       duration: 0.1
  //                   }, '+=0.05');
  //               }
  //   
  //               onMouseLeave() {
  //                   if (this.enterTimeline) {
  //                       this.enterTimeline.kill();
  //                   }
  //   
  //                   this.leaveTimeline = gsap.timeline()
  //                   .to(this.DOM.titleChars, {
  //                       duration: 0.4,
  //                       ease: 'power3.out',
  //                       x: 0,
  //                       y: 0,
  //                       rotation: 0,
  //                       color: this.colors.initial
  //                   });
  //               }
  //           }
  //   
  //           // --- INITS ---
  //           window.addEventListener('DOMContentLoaded', () => {
  //               // Remove loading screen
  //               document.documentElement.classList.remove('loading');
  //   
  //               // Initialize Splitting.js to split word strings into characters
  //               Splitting();
  //   
  //               // Initialize Custom Cursor
  //               const cursor = new Cursor(document.querySelector('.cursor'));
  //   
  //               // Initialize Glitchy Menu Items
  //               [...document.querySelectorAll('.menu > a')].forEach(el => new MenuItem(el));
  //   
  //               // Setup crosshair feedback loop for hoverable elements (links)
  //               [...document.querySelectorAll('a')].forEach(link => {
  //                   link.addEventListener('mouseenter', () => cursor.enter());
  //                   link.addEventListener('mouseleave', () => cursor.leave());
  //               });
  //           });
  //       
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="cursor-crosshair-mouse-cursor-distortion" ref={raiz}>
      <main>
              
              <div className="frame">
                  <div className="frame__title-wrap">
                      <h1 className="frame__title">{s.titulo}</h1>
                  </div>
              </div>
      
              
              <nav className="menu">
                  <a href="#content-1" className="menu__item">
                      <span data-splitting className="menu__item-title">{s.rotulo}</span>
                      <span data-splitting className="menu__item-sub">{s.rotulo2}</span>
                  </a>
                  <a href="#content-1" className="menu__item">
                      <span data-splitting className="menu__item-title">{s.rotulo3}</span>
                      <span data-splitting className="menu__item-sub">{s.rotulo4}</span>
                  </a>
                  <a href="#content-1" className="menu__item">
                      <span data-splitting className="menu__item-title">{s.rotulo5}</span>
                      <span data-splitting className="menu__item-sub">{s.rotulo6}</span>
                  </a>
              </nav>
          </main>
      
          
          <div className="cursor">
              <svg className="cursor__line cursor__line--horizontal" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <defs>
                      <filter id="filter-noise-x" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
                          <feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="1" result="warp" />
                          <feOffset dx="-30" result="warpOffset" />
                          <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
                      </filter>
                  </defs>
                  <line className="cursor__line-element" x1="0" y1="10" x2="200" y2="10" shapeRendering="crispEdges" vectorEffect="non-scaling-stroke" />
              </svg>
              <svg className="cursor__line cursor__line--vertical" viewBox="0 0 20 200" preserveAspectRatio="none">
                  <defs>
                      <filter id="filter-noise-y" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
                          <feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="1" result="warp" />
                          <feOffset dy="-30" result="warpOffset" />
                          <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
                      </filter>
                  </defs>
                  <line className="cursor__line-element" x1="10" y1="0" x2="10" y2="200" shapeRendering="crispEdges" vectorEffect="non-scaling-stroke" />
              </svg>
          </div>
    </section>
  );
}