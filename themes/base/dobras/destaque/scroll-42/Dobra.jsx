"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-42
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
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: modulo-es).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   import { cubesData } from "./cubesData.js";
  //   
  //   document.addEventListener("DOMContentLoaded", () => {
  //     const lenis = new Lenis();
  //     lenis.on("scroll", ScrollTrigger.update);
  //     gsap.ticker.add((time) => {
  //       lenis.raf(time * 1000);
  //     });
  //     gsap.ticker.lagSmoothing(0);
  //   
  //     const stickySection = document.querySelector(".sticky");
  //     const logo = document.querySelector(".logo");
  //     const cubesContainer = document.querySelector(".cubes");
  //     const header1 = document.querySelector(".header-1");
  //     const header2 = document.querySelector(".header-2");
  //   
  //     const stickyHeight = window.innerHeight * 4;
  //   
  //     const cubeFaces = document.querySelectorAll(".cube > div");
  //     let imageCounter = 1;
  //   
  //     cubeFaces.forEach((face) => {
  //       const img = document.createElement("img");
  //       img.src = `./assets/img${imageCounter}.jpeg`;
  //       img.alt = `Cube face image ${imageCounter}`;
  //       face.textContent = "";
  //       face.appendChild(img);
  //       imageCounter++;
  //     });
  //   
  //     const interpolate = (start, end, progress) => {
  //       return start + (end - start) * progress;
  //     };
  //   
  //     ScrollTrigger.create({
  //       trigger: stickySection,
  //       start: "top top",
  //       end: `+=${stickyHeight}px`,
  //       scrub: 1,
  //       pin: true,
  //       pinSpacing: true,
  //       onUpdate: (self) => {
  //         const initialProgress = Math.min(self.progress * 20, 1);
  //         logo.style.filter = `blur(${interpolate(0, 20, initialProgress)}px)`;
  //   
  //         const logoOpacityProgress =
  //           self.progress >= 0.02 ? Math.min((self.progress - 0.02) * 100, 1) : 0;
  //         logo.style.opacity = 1 - logoOpacityProgress;
  //   
  //         const cubesOpacityProgress =
  //           self.progress >= 0.01 ? Math.min((self.progress - 0.01) * 100, 1) : 0;
  //         cubesContainer.style.opacity = cubesOpacityProgress;
  //   
  //         const header1Progress = Math.min(self.progress * 2.5, 1);
  //         header1.style.transform = `translate(-50%, -50%) scale(${interpolate(
  //           1,
  //           1.5,
  //           header1Progress
  //         )})`;
  //         header1.style.filter = `blur(${interpolate(0, 20, header1Progress)}px)`;
  //         header1.style.opacity = 1 - header1Progress;
  //   
  //         const header2StartProgress = (self.progress - 0.4) * 10;
  //         const header2Progress = Math.max(0, Math.min(header2StartProgress, 1));
  //         const header2Scale = interpolate(0.75, 1, header2Progress);
  //         const header2Blur = interpolate(10, 0, header2Progress);
  //   
  //         header2.style.transform = `translate(-50%, -50%) scale(${header2Scale})`;
  //         header2.style.filter = `blur(${header2Blur}px)`;
  //         header2.style.opacity = header2Progress;
  //   
  //         const firstPhaseProgress = Math.min(self.progress * 2, 1);
  //         const secondPhaseProgress =
  //           self.progress >= 0.5 ? (self.progress - 0.5) * 2 : 0;
  //   
  //         Object.entries(cubesData).forEach(([cubeClass, data]) => {
  //           const cube = document.querySelector(`.${cubeClass}`);
  //           const { initial, final } = data;
  //   
  //           const currentTop = interpolate(
  //             initial.top,
  //             final.top,
  //             firstPhaseProgress
  //           );
  //           const currentLeft = interpolate(
  //             initial.left,
  //             final.left,
  //             firstPhaseProgress
  //           );
  //           const currentRotateX = interpolate(
  //             initial.rotateX,
  //             final.rotateX,
  //             firstPhaseProgress
  //           );
  //           const currentRotateY = interpolate(
  //             initial.rotateY,
  //             final.rotateY,
  //             firstPhaseProgress
  //           );
  //           const currentRotateZ = interpolate(
  //             initial.rotateZ,
  //             final.rotateZ,
  //             firstPhaseProgress
  //           );
  //           const currentZ = interpolate(initial.z, final.z, firstPhaseProgress);
  //   
  //           let additionalRotation = 0;
  //           if (cubeClass === "cube-2") {
  //             additionalRotation = interpolate(0, 180, secondPhaseProgress);
  //           } else if (cubeClass === "cube-4") {
  //             additionalRotation = interpolate(0, -180, secondPhaseProgress);
  //           }
  //   
  //           cube.style.top = `${currentTop}%`;
  //           cube.style.left = `${currentLeft}%`;
  //           cube.style.transform = `
  //               translate3d(-50%, -50%, ${currentZ}px)
  //               rotateX(${currentRotateX}deg)
  //               rotateY(${currentRotateY + additionalRotation}deg)
  //               rotateZ(${currentRotateZ}deg)
  //           `;
  //         });
  //       },
  //     });
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-42" ref={raiz}>
      <section className="sticky">
            <div className="logo">
              <div className="col">
                <div className="block block-1"></div>
                <div className="block block-2"></div>
              </div>
              <div className="col">
                <div className="block block-3"></div>
                <div className="block block-4"></div>
              </div>
              <div className="col">
                <div className="block block-5"></div>
                <div className="block block-6"></div>
              </div>
            </div>
      
            <div className="cubes">
              <div className="cube cube-1">
                <div className="front"></div>
                <div className="back"></div>
                <div className="right"></div>
                <div className="left"></div>
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
      
              <div className="cube cube-2">
                <div className="front"></div>
                <div className="back"></div>
                <div className="right"></div>
                <div className="left"></div>
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
      
              <div className="cube cube-3">
                <div className="front"></div>
                <div className="back"></div>
                <div className="right"></div>
                <div className="left"></div>
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
      
              <div className="cube cube-4">
                <div className="front"></div>
                <div className="back"></div>
                <div className="right"></div>
                <div className="left"></div>
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
      
              <div className="cube cube-5">
                <div className="front"></div>
                <div className="back"></div>
                <div className="right"></div>
                <div className="left"></div>
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
      
              <div className="cube cube-6">
                <div className="front"></div>
                <div className="back"></div>
                <div className="right"></div>
                <div className="left"></div>
                <div className="top"></div>
                <div className="bottom"></div>
              </div>
            </div>
      
            <div className="header-1">
              <h1>{s.titulo}</h1>
            </div>
      
            <div className="header-2">
              <h2>{s.titulo2}</h2>
              <p>{s.texto}</p>
            </div>
          </section>
      
          <section className="about">
            <h2>{s.titulo3}</h2>
          </section>
    </section>
  );
}