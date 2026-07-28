"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/sticky-grid-scroll
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
  //   
  //       // Register GSAP Plugin
  //       gsap.registerPlugin(ScrollTrigger);
  //   
  //       class StickyGridScroll {
  //         constructor() {
  //           this.getElements();
  //   
  //           this.initContent();
  //           this.groupItemsByColumn();
  //   
  //           this.addParallaxOnScroll();
  //           this.animateTitleOnScroll();
  //           this.animateGridOnScroll();
  //         }
  //   
  //         /**
  //          * Select and store the DOM elements needed for the animation
  //          */
  //         getElements() {
  //           this.block = document.querySelector(".block--main");
  //   
  //           if (this.block) {
  //             this.wrapper = this.block.querySelector(".block__wrapper");
  //             this.content = this.block.querySelector(".content");
  //             this.title = this.block.querySelector(".content__title");
  //             this.description = this.block.querySelector(".content__description");
  //             this.button = this.block.querySelector(".content__button");
  //             this.grid = this.block.querySelector(".gallery__grid");
  //             this.items = this.block.querySelectorAll(".gallery__item");
  //           }
  //         }
  //   
  //         /**
  //          * Initializes the visual state of the content before animations
  //          */
  //         initContent() {
  //           if (this.description && this.button) {
  //             gsap.set([this.description, this.button], { opacity: 0, pointerEvents: "none" });
  //           }
  //   
  //           if (this.content && this.title) {
  //             const dy = (this.content.offsetHeight - this.title.offsetHeight) / 2;
  //             this.titleOffsetY = (dy / this.content.offsetHeight) * 100;
  //             gsap.set(this.title, { yPercent: this.titleOffsetY });
  //           }
  //         }
  //   
  //         /**
  //          * Group grid items into a fixed number of columns (default: 3)
  //          */
  //         groupItemsByColumn() {
  //           this.numColumns = 3;
  //           this.columns = Array.from({ length: this.numColumns }, () => []);
  //   
  //           this.items.forEach((item, index) => {
  //             this.columns[index % this.numColumns].push(item);
  //           });
  //         }
  //   
  //         /**
  //          * Apply a parallax effect to the wrapper when scrolling
  //          */
  //         addParallaxOnScroll() {
  //           if (!this.block || !this.wrapper) return;
  //   
  //           gsap.from(this.wrapper, {
  //             yPercent: -100,
  //             ease: "none",
  //             scrollTrigger: {
  //               trigger: this.block,
  //               start: "top bottom",
  //               end: "top top",
  //               scrub: true,
  //             },
  //           });
  //         }
  //   
  //         /**
  //          * Animate the title element when the block scrolls into view
  //          */
  //         animateTitleOnScroll() {
  //           if (!this.block || !this.title) return;
  //   
  //           gsap.from(this.title, {
  //             opacity: 0,
  //             duration: 0.7,
  //             ease: "power1.out",
  //             scrollTrigger: {
  //               trigger: this.block,
  //               start: "top 57%",
  //               toggleActions: "play none none reset",
  //             },
  //           });
  //         }
  //   
  //         /**
  //          * Create a GSAP timeline to reveal the grid items with vertical animation
  //          */
  //         gridRevealTimeline(columns = this.columns) {
  //           const timeline = gsap.timeline();
  //           const wh = window.innerHeight;
  //           const dy = wh - (wh - this.grid.offsetHeight) / 2;
  //   
  //           columns.forEach((column, colIndex) => {
  //             const fromTop = colIndex % 2 === 0;
  //   
  //             timeline.from(
  //               column,
  //               {
  //                 y: dy * (fromTop ? -1 : 1),
  //                 stagger: {
  //                   each: 0.06,
  //                   from: fromTop ? "end" : "start",
  //                 },
  //                 ease: "power1.inOut",
  //               },
  //               "grid-reveal"
  //             );
  //           });
  //   
  //           return timeline;
  //         }
  //   
  //         /**
  //          * Create a GSAP timeline to zoom the grid
  //          */
  //         gridZoomTimeline(columns = this.columns) {
  //           const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power3.inOut" } });
  //   
  //           timeline.to(this.grid, { scale: 2.05 });
  //           timeline.to(columns[0], { xPercent: -40 }, "<");
  //           timeline.to(columns[2], { xPercent: 40 }, "<");
  //   
  //           timeline.to(
  //             columns[1],
  //             {
  //               yPercent: (index) => (index < Math.floor(columns[1].length / 2) ? -1 : 1) * 40,
  //               duration: 0.5,
  //               ease: "power1.inOut",
  //             },
  //             "-=0.5"
  //           );
  //   
  //           return timeline;
  //         }
  //   
  //         /**
  //          * Toggle the visibility of content elements
  //          */
  //         toggleContent(isVisible = true) {
  //           if (!this.title || !this.description || !this.button) return;
  //   
  //           gsap.timeline({ defaults: { overwrite: true } })
  //             .to(this.title, {
  //               yPercent: isVisible ? 0 : this.titleOffsetY,
  //               duration: 0.7,
  //               ease: "power2.inOut",
  //             })
  //             .to(
  //               [this.description, this.button],
  //               {
  //                 opacity: isVisible ? 1 : 0,
  //                 duration: 0.4,
  //                 ease: `power1.${isVisible ? "inOut" : "out"}`,
  //                 pointerEvents: isVisible ? "all" : "none",
  //               },
  //               isVisible ? "-=90%" : "<"
  //             );
  //         }
  //   
  //         /**
  //          * Animate the grid based on scroll position
  //          */
  //         animateGridOnScroll() {
  //           const timeline = gsap.timeline({
  //             scrollTrigger: {
  //               trigger: this.block,
  //               start: "top 25%",
  //               end: "bottom bottom",
  //               scrub: true,
  //             },
  //           });
  //   
  //           timeline
  //             .add(this.gridRevealTimeline())
  //             .add(this.gridZoomTimeline(), "-=0.6")
  //             .add(() => this.toggleContent(timeline.scrollTrigger.direction === 1), "-=0.32");
  //         }
  //       }
  //   
  //       // UTILITIES
  //       const preloadImages = (selector = "img") => {
  //         return new Promise((resolve) => {
  //           imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
  //         });
  //       };
  //   
  //       function initSmoothScrolling() {
  //         const lenis = new Lenis({
  //           lerp: 0.08,
  //           wheelMultiplier: 1.4,
  //         });
  //   
  //         lenis.on("scroll", ScrollTrigger.update);
  //   
  //         gsap.ticker.add((time) => {
  //           lenis.raf(time * 1000);
  //         });
  //   
  //         gsap.ticker.lagSmoothing(0);
  //       }
  //   
  //       // INIT
  //       preloadImages().then(() => {
  //         document.body.classList.remove("loading");
  //         initSmoothScrolling();
  //         new StickyGridScroll();
  //       });
  //     
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="vitrine-sticky-grid-scroll" ref={raiz}>
      <header className="frame">
          <div className="frame__infos">
            <h1>{s.titulo}</h1>
          </div>
        </header>
        
        <main>
          <section className="block block--intro">
            <figure className="media">
              
              <img className="media__image" src={s.imagem} alt="Intro Image" crossOrigin="anonymous" />
              <figcaption className="media__caption">Scroll-driven layout experiment</figcaption>
            </figure>
          </section>
          
          <section className="block block--main">
            <div className="block__wrapper">
              <div className="content">
                <h2 className="content__title">{s.titulo2}</h2>
                <p className="content__description">{s.texto}</p>
                <a className="content__button" href="#">{s.acao}</a>
              </div>
              <div className="gallery">
                <ul className="gallery__grid">
                  
                  <li className="gallery__item">
                    <img className="gallery__image" src={s.imagem2} alt="Image 1" crossOrigin="anonymous" />
                  </li>
                  <li className="gallery__item">
                    <img className="gallery__image" src={s.imagem3} alt="Image 2" crossOrigin="anonymous" />
                  </li>
                  <li className="gallery__item">
                    <img className="gallery__image" src={s.imagem4} alt="Image 3" crossOrigin="anonymous" />
                  </li>
                  <li className="gallery__item">
                    <img className="gallery__image" src={s.imagem5} alt="Image 4" crossOrigin="anonymous" />
                  </li>
                  <li className="gallery__item">
                    <img className="gallery__image" src={s.imagem6} alt="Image 5" crossOrigin="anonymous" />
                  </li>
                  <li className="gallery__item">
                    <img className="gallery__image" src={s.imagem7} alt="Image 6" crossOrigin="anonymous" />
                  </li>
                  <li className="gallery__item">
                    <img className="gallery__image" src={s.imagem8} alt="Image 7" crossOrigin="anonymous" />
                  </li>
                  <li className="gallery__item">
                    <img className="gallery__image" src={s.imagem9} alt="Image 8" crossOrigin="anonymous" />
                  </li>
                  <li className="gallery__item">
                    <img className="gallery__image" src={s.imagem10} alt="Image 9" crossOrigin="anonymous" />
                  </li>
                  <li className="gallery__item">
                    <img className="gallery__image" src={s.imagem11} alt="Image 10" crossOrigin="anonymous" />
                  </li>
                  <li className="gallery__item">
                    <img className="gallery__image" src={s.imagem12} alt="Image 11" crossOrigin="anonymous" />
                  </li>
                  <li className="gallery__item">
                    <img className="gallery__image" src={s.imagem13} alt="Image 12" crossOrigin="anonymous" />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
    </section>
  );
}