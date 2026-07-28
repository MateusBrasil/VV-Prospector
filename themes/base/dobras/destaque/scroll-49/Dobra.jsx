"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-49
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
  //   // GSAP and ScrollTrigger
  //   gsap.registerPlugin(ScrollTrigger);
  //   
  //   
  //   
  //   const setupLenis = () => {
  //       const wrapper = document.querySelector('.wrapper');
  //       const content = document.querySelector('.content');
  //   
  //       const lenis = new Lenis({
  //           infinite: true,
  //           wrapper: wrapper,
  //           content: content,
  //           syncTouch: true,
  //       });
  //   
  //       const snap = new Snap(lenis, {
  //           type: 'mandatory',
  //           debounce: 500,
  //           duration: 0.9,
  //           easing: (t) => 1 - Math.pow(1 - t, 4),
  //       });
  //   
  //       ScrollTrigger.scrollerProxy(wrapper, {
  //           scrollTop(value) {
  //               // setter: ScrollTrigger wants to set scrollTop (for snapping, etc.)
  //               if (arguments.length) {
  //                   lenis.scrollTo(value, { immediate: true });
  //               } else {
  //                   // getter: ScrollTrigger wants current scrollTop
  //                   // Lenis versions vary, this is the most compatible pattern:
  //                   return lenis.scroll;
  //               }
  //           },
  //           getBoundingClientRect() {
  //               return {
  //                   top: 0,
  //                   left: 0,
  //                   width: wrapper.clientWidth,
  //                   height: wrapper.clientHeight,
  //               };
  //           },
  //       
  //           // Lenis generally plays nicest with transform pinning
  //           pinType: 'transform',
  //       });
  //   
  //       const sections = document.querySelectorAll('section');
  //   
  //       snap.addElements(sections, {
  //           align: 'start',
  //       });
  //   
  //       lenis.on('scroll', ScrollTrigger.update);
  //   
  //       gsap.ticker.add((time) => {
  //           lenis.raf(time * 1000);
  //       });
  //   
  //       gsap.ticker.lagSmoothing(0);
  //   };
  //   
  //   const sectionAnimation = () => {
  //       const wrapper = document.querySelector('.wrapper');
  //       
  //       // Grab all heros
  //       const heros = document.querySelectorAll('.hero');
  //   
  //       // For every hero, lets do some animation
  //       heros.forEach((hero) => {
  //           // Grab the picture element inside each hero
  //           const image = hero.querySelector('picture');
  //   
  //           // Grab the marquee element inside each hero
  //           const marquees = hero.querySelectorAll('svg');
  //   
  //           // DRY Animation values
  //           const ANIMATION = {
  //               IMAGE: {
  //                   before: -50,
  //                   after: 50,
  //               },
  //               MARQUEE: {
  //                   before: 1.5,
  //                   after: 0.5,
  //               },
  //           };
  //   
  //           const SHARED_SETTINGS = {
  //               ease: 'none',
  //               scrollTrigger: {
  //                   scroller: wrapper,
  //                   trigger: hero,
  //                   start: 'top bottom',
  //                   end: 'bottom top',
  //                   scrub: true,
  //                   fastScrollEnd: true,
  //               },
  //           }
  //   
  //   
  //           // Image Animation
  //           // Set initial position
  //           gsap.set(image, {
  //               yPercent: ANIMATION.IMAGE.before,
  //           });
  //           // Parallax animate on scroll
  //           gsap.fromTo(
  //               image,
  //               {
  //                   yPercent: ANIMATION.IMAGE.before,
  //               },
  //               {
  //                   yPercent: ANIMATION.IMAGE.after,
  //                   ...SHARED_SETTINGS,
  //               }
  //           );
  //   
  //   
  //           marquees.forEach((marquee) => {
  //               // Marquee Scaling Animation
  //               // Set initial scale
  //               gsap.set(marquee, {
  //                   scale: ANIMATION.MARQUEE.before,
  //               });
  //               // Scale animate on scroll
  //               gsap.fromTo(
  //                   marquee,
  //                   {
  //                       scale: ANIMATION.MARQUEE.before,
  //                   },
  //                   {
  //                       scale: ANIMATION.MARQUEE.after,
  //                       ...SHARED_SETTINGS,
  //                   }
  //               );
  //           });
  //       });
  //   };
  //   
  //   // When everything is ready in the DOM, run this code.
  //   document.addEventListener('DOMContentLoaded', () => {
  //       setupLenis();
  //       sectionAnimation();
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-49" ref={raiz}>
      <div className="wrapper">
              <div className="content">
       
      
      
                  <section className="hero">
                      <picture className="hero-image">
                          <img src={s.imagem} alt="Hero Image 1" />
                      </picture>
                  </section>
      
                  <section className="hero">
                      <picture className="hero-image">
                          <img src={s.imagem2} alt="Hero Image 2" />
                      </picture>
                  </section>
      
                  <section className="hero">
                      <picture className="hero-image">
                          <img src={s.imagem3} alt="Hero Image 3" />
                      </picture>
                  </section>
      
                  
                  <section className="hero" aria-hidden="true">
                      <picture className="hero-image" aria-hidden="true">
                          <img src={s.imagem4} alt="Hero Image 1 Duplicate" aria-hidden="true" />
                      </picture>
                  </section>
      
      
      
              </div>
          </div>
    </section>
  );
}