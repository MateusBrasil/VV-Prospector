"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-svg/animacoes-svg-11
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
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
  //   
  //   const config = {
  //     smoothing: 0.1,
  //     movementThreshold: 0.01,
  //     sizeFromSpeed: 0.2,
  //     expandMultiplier: 2,
  //     expandTime: 2,
  //     expandEase: "power1.inOut",
  //     dissolveStart: 2,
  //     dissolveTime: 3,
  //     dissolveEase: "power3.in",
  //   };
  //   
  //   const heroSection = document.querySelector(".hero");
  //   const smudgeSVG = document.querySelector(".smudge-revealer");
  //   const smudgeContainer = document.querySelector(".smudge-blobs");
  //   
  //   const pointer = { x: 0, y: 0 };
  //   const smoothPointer = { x: 0, y: 0 };
  //   let hasStarted = false;
  //   
  //   function onPointerMove(x, y) {
  //     if (!hasStarted) {
  //       pointer.x = smoothPointer.x = x;
  //       pointer.y = smoothPointer.y = y;
  //       hasStarted = true;
  //       return;
  //     }
  //   
  //     pointer.x = x;
  //     pointer.y = y;
  //   }
  //   
  //   heroSection.addEventListener("mousemove", function (e) {
  //     onPointerMove(e.pageX, e.pageY);
  //   });
  //   
  //   heroSection.addEventListener(
  //     "touchstart",
  //     function (e) {
  //       e.preventDefault();
  //       onPointerMove(e.touches[0].pageX, e.touches[0].pageY);
  //     },
  //     { passive: false },
  //   );
  //   
  //   heroSection.addEventListener(
  //     "touchmove",
  //     function (e) {
  //       e.preventDefault();
  //       onPointerMove(e.touches[0].pageX, e.touches[0].pageY);
  //     },
  //     { passive: false },
  //   );
  //   
  //   function matchSVGToViewport() {
  //     smudgeSVG.style.width = window.innerWidth + "px";
  //     smudgeSVG.style.height = window.innerHeight + "px";
  //   }
  //   
  //   matchSVGToViewport();
  //   window.addEventListener("resize", matchSVGToViewport);
  //   
  //   function stampSmudgeAt(x, y, radius) {
  //     const circle = document.createElementNS(
  //       "http://www.w3.org/2000/svg",
  //       "circle",
  //     );
  //   
  //     circle.setAttribute("cx", x);
  //     circle.setAttribute("cy", y);
  //     circle.setAttribute("r", radius);
  //     circle.setAttribute("fill", "#fff");
  //   
  //     smudgeContainer.prepend(circle);
  //   
  //     const animatedRadius = { current: radius };
  //   
  //     const timeline = gsap.timeline({
  //       onUpdate() {
  //         circle.setAttribute("r", Math.max(0, animatedRadius.current));
  //       },
  //       onComplete() {
  //         timeline.kill();
  //         circle.remove();
  //       },
  //     });
  //   
  //     timeline.to(animatedRadius, {
  //       current: radius * config.expandMultiplier,
  //       duration: config.expandTime,
  //       ease: config.expandEase,
  //     });
  //   
  //     timeline.to(
  //       animatedRadius,
  //       {
  //         current: 0,
  //         duration: config.dissolveTime,
  //         ease: config.dissolveEase,
  //       },
  //       config.dissolveStart,
  //     );
  //   }
  //   
  //   function update() {
  //     if (hasStarted) {
  //       smoothPointer.x += (pointer.x - smoothPointer.x) * config.smoothing;
  //       smoothPointer.y += (pointer.y - smoothPointer.y) * config.smoothing;
  //   
  //       const speed = Math.hypot(
  //         pointer.x - smoothPointer.x,
  //         pointer.y - smoothPointer.y,
  //       );
  //   
  //       if (speed > config.movementThreshold) {
  //         stampSmudgeAt(
  //           smoothPointer.x,
  //           smoothPointer.y,
  //           speed * config.sizeFromSpeed,
  //         );
  //       }
  //     }
  //   
  //     requestAnimationFrame(update);
  //   }
  //   
  //   requestAnimationFrame(update);
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-animacoes-svg-11" ref={raiz}>
      <section className="hero">
            <div className="hero-content-foreground">
              <h1>{s.titulo}</h1>
            </div>
      
            <div className="hero-content-background">
              <h3>{s.subtitulo}</h3>
            </div>
      
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="smudge-revealer"
            >
              <defs>
                <filter id="smudge-goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
                  <feColorMatrix
                    type="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -14"
                  />
                </filter>
              </defs>
              <mask id="smudge-mask">
                <g className="smudge-blobs" filter="url(#smudge-goo)"></g>
              </mask>
            </svg>
          </section>
    </section>
  );
}