"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-10
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
  //   import "./style.css"
  //   
  //   import { preloadImages } from './utils.js'
  //   
  //   import gsap from "gsap"
  //   import { ScrollTrigger } from "gsap/ScrollTrigger"
  //   import { ScrollSmoother } from "gsap/ScrollSmoother"
  //   
  //   gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  //   
  //   class Animation {
  //     constructor() {
  //       this.dom = document.querySelector(".section")
  //       this.frontImages = this.dom.querySelectorAll(".section__media__front")
  //       this.smallImages = this.dom.querySelectorAll(".section__images img")
  //     }
  //   
  //     init() {
  //       this.timeline = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: this.dom,
  //           start: "top top",
  //           end: "bottom top",
  //           scrub: true,
  //           pin: true,
  //           onUpdate: (self) => {
  //             const easedProgress = gsap.parseEase("power1.inOut")(self.progress)
  //             this.dom.style.setProperty("--progress", easedProgress)
  //           }
  //         }
  //       })
  //   
  //       this.animate()
  //     }
  //   
  //     animate() {
  //       gsap.set(this.smallImages, {
  //         transformStyle: "preserve-3d",
  //         backfaceVisibility: "hidden",
  //         force3D: true
  //       })
  //   
  //       this.timeline.to(this.smallImages, {
  //         z: "100vh",
  //         duration: 1,
  //         ease: "power1.inOut",
  //         stagger: {
  //           amount: 0.2,
  //           from: "center"
  //         }
  //       })
  //   
  //       this.timeline.to(this.frontImages, {
  //         scale: 1,
  //         duration: 1,
  //         ease: "power1.inOut",
  //         delay: .1,
  //       }, 0.6)
  //   
  //       this.timeline.to(this.frontImages, {
  //         duration: 1,
  //         filter: "blur(0px)",
  //         ease: "power1.inOut",
  //         delay: .4,
  //         stagger: {
  //           amount: 0.2,
  //           from: "end"
  //         }
  //       }, 0.6)
  //     }
  //   }
  //   
  //   const scroller = ScrollSmoother.create({
  //     wrapper: ".wrapper",
  //     content: ".content",
  //     smooth: 1.5,
  //     effects: true,
  //     normalizeScroll: true
  //   })
  //   
  //   const animation = new Animation()
  //   
  //   preloadImages('.wrapper img').then(() => {
  //     animation.init()
  //     document.body.classList.remove('loading')
  //   })
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-10" ref={raiz}>
      <main>
      
      
            <div className="wrapper">
              <div className="content">
                <div className="section">
                  <h1>
                    <span className="left">{s.rotulo}</span>
                    <span className="right">{s.rotulo2}</span>
                  </h1>
      
                  <div className="section__media">
                    <div className="section__media__back">
                      <img src={s.imagem} alt="Image" />
                    </div>
      
                    <div className="section__media__front front-1">
                      <img src={s.imagem2} alt="Image" />
                    </div>
                    <div className="section__media__front front-2">
                      <img src={s.imagem3} alt="Image" />
                    </div>
                    <div className="section__media__front front-3">
                      <img src={s.imagem4} alt="Image" />
                    </div>
                    <div className="section__media__front front-4">
                      <img src={s.imagem5} alt="Image" />
                    </div>
                    <div className="section__media__front front-5">
                      <img src={s.imagem6} alt="Image" />
                    </div>
                    <div className="section__media__front front-6">
                      <img src={s.imagem7} alt="Image" />
                    </div>
                  </div>
      
                  <div className="section__images">
                    <img src={s.imagem8} alt="Image" />
                    <img src={s.imagem9} alt="Image" />
                    <img src={s.imagem10} alt="Image" />
                    <img src={s.imagem11} alt="Image" />
                    <img src={s.imagem12} alt="Image" />
                    <img src={s.imagem13} alt="Image" />
                    <img src={s.imagem14} alt="Image" />
                    <img src={s.imagem15} alt="Image" />
                    <img src={s.imagem16} alt="Image" />
                    <img src={s.imagem17} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </main>
    </section>
  );
}