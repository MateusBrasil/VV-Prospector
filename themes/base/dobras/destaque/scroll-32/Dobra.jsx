"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-32
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
  //   document.addEventListener("DOMContentLoaded", () => {
  //     gsap.registerPlugin(ScrollTrigger, Flip)
  //   
  //     const lightColor = getComputedStyle(document.documentElement)
  //       .getPropertyValue("--light")
  //       .trim()
  //     const darkColor = getComputedStyle(document.documentElement)
  //       .getPropertyValue("--dark")
  //       .trim()
  //   
  //     function interpolateColor(color1, color2, factor) {
  //       return gsap.utils.interpolate(color1, color2, factor)
  //     }
  //   
  //     gsap.to(".marquee-images", {
  //       scrollTrigger: {
  //         trigger: ".marquee",
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: true,
  //         onUpdate: self => {
  //           const xPosition = -75 + self.progress * 25
  //           gsap.set(".marquee-images", { x: `${xPosition}%` })
  //         },
  //       },
  //     })
  //   
  //     let pinnedMarqueeImgClone = null
  //     let isImgCloneActive = false
  //   
  //     function createPinnedMarqueeImgClone() {
  //       if (isImgCloneActive) return
  //   
  //       const originalMarqueeImg = document.querySelector(".marquee-img.pin img")
  //       const rect = originalMarqueeImg.getBoundingClientRect()
  //       const centerX = rect.left + rect.width / 2
  //       const centerY = rect.top + rect.height / 2
  //   
  //       pinnedMarqueeImgClone = originalMarqueeImg.cloneNode(true)
  //   
  //       gsap.set(pinnedMarqueeImgClone, {
  //         position: "fixed",
  //         left: centerX - originalMarqueeImg.offsetWidth / 2,
  //         top: centerY - originalMarqueeImg.offsetHeight / 2,
  //         width: originalMarqueeImg.offsetWidth,
  //         height: originalMarqueeImg.offsetHeight,
  //         transform: "rotate(-5deg)",
  //         transformOrigin: "center center",
  //         pointerEvents: "none",
  //         willChange: "transform",
  //         zIndex: 100,
  //       })
  //   
  //       document.body.appendChild(pinnedMarqueeImgClone)
  //       gsap.set(originalMarqueeImg, { opacity: 0 })
  //       isImgCloneActive = true
  //     }
  //   
  //     function removePinnedMarqueeImgClone() {
  //       if (!isImgCloneActive) return
  //       if (pinnedMarqueeImgClone) {
  //         pinnedMarqueeImgClone.remove()
  //         pinnedMarqueeImgClone = null
  //       }
  //       const originalMarqueeImg = document.querySelector(".marquee-img.pin img")
  //       gsap.set(originalMarqueeImg, { opacity: 1 })
  //       isImgCloneActive = false
  //     }
  //   
  //     ScrollTrigger.create({
  //       trigger: ".horizontal-scroll",
  //       start: "top top",
  //       end: () => `+=${window.innerHeight * 5}`,
  //       pin: true,
  //     })
  //   
  //     ScrollTrigger.create({
  //       trigger: ".marquee",
  //       start: "top top",
  //       onEnter: createPinnedMarqueeImgClone,
  //       onEnterBack: createPinnedMarqueeImgClone,
  //       onLeaveBack: removePinnedMarqueeImgClone,
  //     })
  //   
  //     let flipAnimation = null
  //   
  //     ScrollTrigger.create({
  //       trigger: ".horizontal-scroll",
  //       start: "top 50%",
  //       end: () => `+=${window.innerHeight * 5.5}`,
  //       onEnter: () => {
  //         if (pinnedMarqueeImgClone && isImgCloneActive && !flipAnimation) {
  //           const state = Flip.getState(pinnedMarqueeImgClone)
  //   
  //           gsap.set(pinnedMarqueeImgClone, {
  //             position: "fixed",
  //             left: 0,
  //             top: 0,
  //             width: "100%",
  //             height: "100svh",
  //             transform: "rotate(0deg)",
  //             transformOrigin: "center center",
  //           })
  //   
  //           flipAnimation = Flip.from(state, {
  //             duration: 1,
  //             ease: "none",
  //             paused: true,
  //           })
  //         }
  //       },
  //       onLeaveBack: () => {
  //         if (flipAnimation) {
  //           flipAnimation.kill()
  //           flipAnimation = null
  //         }
  //         gsap.set(".container", { backgroundColor: lightColor })
  //         gsap.set(".horizontal-scroll-wrapper", { x: "0%" })
  //       },
  //     })
  //   
  //     ScrollTrigger.create({
  //       trigger: ".horizontal-scroll",
  //       start: "top 50%",
  //       end: () => `+=${window.innerHeight * 5.5}`,
  //       onUpdate: self => {
  //         const progress = self.progress
  //   
  //         if (progress <= 0.05) {
  //           const bgColorProgress = Math.min(progress / 0.05, 1)
  //           gsap.set(".container", {
  //             backgroundColor: interpolateColor(
  //               lightColor,
  //               darkColor,
  //               bgColorProgress
  //             ),
  //           })
  //         } else {
  //           gsap.set(".container", { backgroundColor: darkColor })
  //         }
  //   
  //         if (progress <= 0.2 && flipAnimation) {
  //           flipAnimation.progress(progress / 0.2)
  //         }
  //   
  //         if (progress > 0.2 && progress <= 0.95) {
  //           if (flipAnimation) flipAnimation.progress(1)
  //   
  //           const horizontalProgress = (progress - 0.2) / 0.75
  //           gsap.set(".horizontal-scroll-wrapper", {
  //             x: `${-66.67 * horizontalProgress}%`,
  //           })
  //   
  //           const imageTranslateX = -((66.67 / 100) * 3 * horizontalProgress) * 100
  //           gsap.set(pinnedMarqueeImgClone, { x: `${imageTranslateX}%` })
  //         }
  //   
  //         if (progress > 0.95) {
  //           if (flipAnimation) flipAnimation.progress(1)
  //           gsap.set(pinnedMarqueeImgClone, { x: "-200%" })
  //           gsap.set(".horizontal-scroll-wrapper", { x: "-66.67%" })
  //         }
  //       },
  //     })
  //   })
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-32" ref={raiz}>
      <div className="container">
            <section className="hero">
               <h1>{s.titulo}</h1>
            </section>
      
            <section className="marquee">
               <div className="marquee-wrapper">
                  <div className="marquee-images">
                     <div className="marquee-img"><img src={s.imagem} /></div>
                     <div className="marquee-img"><img src={s.imagem2} /></div>
                     <div className="marquee-img"><img src={s.imagem3} /></div>
                     <div className="marquee-img"><img src={s.imagem4} /></div>
                     <div className="marquee-img"><img src={s.imagem5} /></div>
                     <div className="marquee-img"><img src={s.imagem6} /></div>
                     <div className="marquee-img pin"><img src={s.imagem7} /></div>
                     <div className="marquee-img"><img src={s.imagem8} /></div>
                     <div className="marquee-img"><img src={s.imagem9} /></div>
                     <div className="marquee-img"><img src={s.imagem10} /></div>
                     <div className="marquee-img"><img src={s.imagem11} /></div>
                     <div className="marquee-img"><img src={s.imagem12} /></div>
                     <div className="marquee-img"><img src={s.imagem13} /></div>
                  </div>
               </div>
            </section>
      
            <section className="horizontal-scroll">
               <div className="horizontal-scroll-wrapper">
                  <div className="horizontal-slide horizontal-spacer"></div>
                  <div className="horizontal-slide">
                     <div className="col">
                        <h3>{s.subtitulo}</h3>
                     </div>
                     <div className="col">
                        <img src={s.imagem14} />
                     </div>
                  </div>
                  <div className="horizontal-slide">
                     <div className="col">
                        <h3>{s.subtitulo2}</h3>
                     </div>
                     <div className="col">
                        <img src={s.imagem15} />
                     </div>
                  </div>
               </div>
            </section>
      
            <section className="outro">
               <h1>{s.titulo2}</h1>
            </section>
         </div>
    </section>
  );
}