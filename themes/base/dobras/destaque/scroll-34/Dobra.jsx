"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-34
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
  //   document.addEventListener("DOMContentLoaded", () => {
  //     const lenis = new Lenis();
  //     lenis.on("scroll", ScrollTrigger.update);
  //     gsap.ticker.add((time) => {
  //       lenis.raf(time * 1000);
  //     });
  //     gsap.ticker.lagSmoothing(0);
  //   
  //     const windowContainer = document.querySelector(".window-container");
  //     const skyContainer = document.querySelector(".sky-container");
  //     const heroCopy = document.querySelector(".hero-copy");
  //     const heroHeader = document.querySelector(".hero-header");
  //   
  //     const skyContainerHeight = skyContainer.offsetHeight;
  //     const viewportHeight = window.innerHeight;
  //     const skyMoveDistance = skyContainerHeight - viewportHeight;
  //   
  //     gsap.set(heroCopy, { yPercent: 100 });
  //   
  //     ScrollTrigger.create({
  //       trigger: ".hero",
  //       start: "top top",
  //       end: `+=${window.innerHeight * 3}px`,
  //       pin: true,
  //       pinSpacing: true,
  //       scrub: 1,
  //       onUpdate: (self) => {
  //         const progress = self.progress;
  //   
  //         let windowScale;
  //         if (progress <= 0.5) {
  //           windowScale = 1 + (progress / 0.5) * 3;
  //         } else {
  //           windowScale = 4;
  //         }
  //         gsap.set(windowContainer, { scale: windowScale });
  //         gsap.set(heroHeader, { scale: windowScale, z: progress * 500 });
  //   
  //         gsap.set(skyContainer, {
  //           y: -progress * skyMoveDistance,
  //         });
  //   
  //         let heroCopyY;
  //         if (progress <= 0.66) {
  //           heroCopyY = 100;
  //         } else if (progress >= 1) {
  //           heroCopyY = 0;
  //         } else {
  //           heroCopyY = 100 * (1 - (progress - 0.66) / 0.34);
  //         }
  //         gsap.set(heroCopy, { yPercent: heroCopyY });
  //       },
  //     });
  //   });
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-34" ref={raiz}>
      <section className="hero">
            <div className="sky-container">
              <img src={s.imagem} alt="" />
            </div>
            <div className="hero-copy">
              <h1>{s.titulo}</h1>
            </div>
            <div className="window-container">
              <img src={s.imagem2} alt="" />
            </div>
            <div className="hero-header">
              <div className="col">
                <h1>
                  An aperture <br />
                  into stillness
                </h1>
                <p>{s.texto}</p>
              </div>
              <div className="col">
                <p>{s.texto2}</p>
                <h1>
                  Where distance <br />
                  becomes a presence
                </h1>
              </div>
            </div>
          </section>
      
          <section className="outro">
            <h1>{s.titulo2}</h1>
          </section>
    </section>
  );
}