"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-38
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Dobra.css';
gsap.registerPlugin(ScrollTrigger);
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: modulo-es).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   import gsap from "gsap";
  //   import { ScrollTrigger } from "gsap/ScrollTrigger";
  //   import Lenis from "lenis";
  //   
  //   gsap.registerPlugin(ScrollTrigger);
  //   
  //   const lenis = new Lenis();
  //   lenis.on("scroll", ScrollTrigger.update);
  //   gsap.ticker.add((time) => lenis.raf(time * 1000));
  //   gsap.ticker.lagSmoothing(0);
  //   
  //   const stickyCards = document.querySelectorAll(".card");
  //   const frontStickyCard = document.querySelector(".card-front");
  //   const backStickyCards = document.querySelectorAll(".card-back");
  //   const heroHeadline = document.querySelector(".hero-content");
  //   const stickyCardCount = backStickyCards.length;
  //   
  //   const CARDS_ENTER_END = 100;
  //   const CARD_FLIP_TRIGGER = 200;
  //   const CARD_DISMISS_START = 300;
  //   const CARD_DISMISS_DURATION = 100;
  //   const TOTAL_SCROLL_SVH =
  //     CARD_DISMISS_START + stickyCardCount * CARD_DISMISS_DURATION;
  //   
  //   const svhToProgress = (svh) => svh / TOTAL_SCROLL_SVH;
  //   const totalScroll = window.innerHeight * (TOTAL_SCROLL_SVH / 100);
  //   
  //   const cardFlipTiltAngles = [-10, -20, -5, 10];
  //   const cardDismissTiltAngles = [-50, -60, -45, 50];
  //   
  //   const cardDismissRanges = Array.from({ length: stickyCardCount }, (_, i) => {
  //     const dismissOrder = stickyCardCount - 1 - i;
  //     return [
  //       svhToProgress(CARD_DISMISS_START + dismissOrder * CARD_DISMISS_DURATION),
  //       svhToProgress(
  //         CARD_DISMISS_START + (dismissOrder + 1) * CARD_DISMISS_DURATION,
  //       ),
  //     ];
  //   });
  //   
  //   gsap.set(frontStickyCard, { rotationY: 0 });
  //   gsap.set(backStickyCards, { rotationY: -180 });
  //   
  //   let isFlipped = false;
  //   
  //   const revealBackCards = () => {
  //     gsap.to(frontStickyCard, {
  //       rotationY: 180,
  //       duration: 1,
  //       ease: "elastic.out(1,0.5)",
  //     });
  //     backStickyCards.forEach((card, i) => {
  //       gsap.to(card, {
  //         rotationY: 0,
  //         rotationZ: cardFlipTiltAngles[i],
  //         duration: 1,
  //         ease: "elastic.out(1,0.5)",
  //       });
  //     });
  //   };
  //   
  //   const concealBackCards = () => {
  //     gsap.to(frontStickyCard, {
  //       rotationY: 0,
  //       duration: 1,
  //       ease: "elastic.out(1,0.5)",
  //     });
  //     backStickyCards.forEach((card) => {
  //       gsap.to(card, {
  //         rotationY: -180,
  //         rotationZ: 0,
  //         duration: 1,
  //         ease: "elastic.out(1,0.5)",
  //       });
  //     });
  //   };
  //   
  //   ScrollTrigger.create({
  //     trigger: ".hero",
  //     start: "top top",
  //     end: `+=${totalScroll}px`,
  //     pin: true,
  //     pinSpacing: true,
  //     scrub: true,
  //     onUpdate: ({ progress }) => {
  //       const enterProgress = gsap.utils.clamp(
  //         0,
  //         1,
  //         gsap.utils.mapRange(0, svhToProgress(CARDS_ENTER_END), 0, 1, progress),
  //       );
  //   
  //       gsap.set(stickyCards, {
  //         y: `${gsap.utils.mapRange(0, 1, 50, -50, enterProgress)}%`,
  //       });
  //       gsap.set(heroHeadline, {
  //         y: `${gsap.utils.mapRange(0, 1, 0, -100, enterProgress)}%`,
  //       });
  //   
  //       if (progress > svhToProgress(CARD_FLIP_TRIGGER) && !isFlipped) {
  //         revealBackCards();
  //         isFlipped = true;
  //       } else if (progress <= svhToProgress(CARD_FLIP_TRIGGER) && isFlipped) {
  //         concealBackCards();
  //         isFlipped = false;
  //       }
  //   
  //       backStickyCards.forEach((card, i) => {
  //         const [dismissStart, dismissEnd] = cardDismissRanges[i];
  //         const dismissProgress = gsap.utils.clamp(
  //           0,
  //           1,
  //           gsap.utils.mapRange(dismissStart, dismissEnd, 0, 1, progress),
  //         );
  //         gsap.set(card, {
  //           y: `${gsap.utils.mapRange(0, 1, -50, -250, dismissProgress)}%`,
  //           rotation: gsap.utils.mapRange(
  //             0,
  //             1,
  //             cardFlipTiltAngles[i],
  //             cardDismissTiltAngles[i],
  //             dismissProgress,
  //           ),
  //         });
  //       });
  //     },
  //   });
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-38" ref={raiz}>
      <section className="hero">
            <div className="hero-content">
              <h1>{s.titulo}</h1>
            </div>
      
            <div className="sticky-cards">
              <div className="card card-front">
                <h3>{s.subtitulo}</h3>
                <span>{s.rotulo}</span>
                <p>{s.texto}</p>
                <div className="icon"><ion-icon name="caret-down"></ion-icon></div>
              </div>
      
              <div className="card card-back" id="card-1">
                <h3>{s.subtitulo2}</h3>
                <div className="icon"><ion-icon name="lock-open"></ion-icon></div>
                <p>{s.texto2}</p>
              </div>
              <div className="card card-back" id="card-2">
                <h3>{s.subtitulo3}</h3>
                <div className="icon"><ion-icon name="layers"></ion-icon></div>
                <p>{s.texto3}</p>
              </div>
              <div className="card card-back" id="card-3">
                <h3>{s.subtitulo4}</h3>
                <div className="icon"><ion-icon name="prism"></ion-icon></div>
                <p>{s.texto4}</p>
              </div>
              <div className="card card-back" id="card-4">
                <h3>{s.subtitulo5}</h3>
                <div className="icon"><ion-icon name="infinite"></ion-icon></div>
                <p>{s.texto5}</p>
              </div>
            </div>
          </section>
      
          <section className="about">
            <h3>{s.subtitulo6}</h3>
          </section>
    </section>
  );
}