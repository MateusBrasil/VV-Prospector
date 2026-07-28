"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-48
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
  //   import lottie from "lottie-web";
  //   
  //   gsap.registerPlugin(ScrollTrigger);
  //   
  //   const lenis = new Lenis();
  //   lenis.on("scroll", ScrollTrigger.update);
  //   gsap.ticker.add((time) => {
  //     lenis.raf(time * 1000);
  //   });
  //   gsap.ticker.lagSmoothing(0);
  //   
  //   let scrollDirection = "down";
  //   let lastScrollY = 0;
  //   
  //   lenis.on("scroll", ({ scroll }) => {
  //     scrollDirection = scroll > lastScrollY ? "down" : "up";
  //     lastScrollY = scroll;
  //   });
  //   
  //   const heroImg = document.querySelector(".hero-img");
  //   const lottieContainer = document.querySelector(".lottie");
  //   
  //   const lottieAnimation = lottie.loadAnimation({
  //     container: lottieContainer,
  //     path: "/duck.json",
  //     renderer: "svg",
  //     autoplay: false,
  //   });
  //   
  //   const heroImgInitialWidth = heroImg.offsetWidth;
  //   const heroImgTargetWidth = 300;
  //   
  //   ScrollTrigger.create({
  //     trigger: ".about",
  //     start: "top bottom",
  //     end: "top 30%",
  //     scrub: 1,
  //     onUpdate: (self) => {
  //       const heroImgCurrentWidth =
  //         heroImgInitialWidth -
  //         self.progress * (heroImgInitialWidth - heroImgTargetWidth);
  //       gsap.set(heroImg, { width: `${heroImgCurrentWidth}px` });
  //     },
  //   });
  //   
  //   let isAnimationPaused = false;
  //   
  //   ScrollTrigger.create({
  //     trigger: ".about",
  //     start: "top 30%",
  //     end: "bottom top",
  //     scrub: 1,
  //     onUpdate: (self) => {
  //       const lottieOffset = self.progress * window.innerHeight * 1.1;
  //   
  //       isAnimationPaused = self.progress > 0;
  //   
  //       gsap.set(lottieContainer, {
  //         y: -lottieOffset,
  //         rotateY: scrollDirection === "up" ? -180 : 0,
  //       });
  //     },
  //   });
  //   
  //   ScrollTrigger.create({
  //     trigger: ".hero",
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: 1,
  //     onUpdate: (self) => {
  //       if (!isAnimationPaused) {
  //         const scrollDistance = self.scroll() - self.start;
  //         const pixelsPerFrame = 3;
  //         const frame =
  //           Math.floor(scrollDistance / pixelsPerFrame) %
  //           lottieAnimation.totalFrames;
  //         lottieAnimation.goToAndStop(frame, true);
  //       }
  //   
  //       gsap.set(lottieContainer, {
  //         rotateY: scrollDirection === "up" ? -180 : 0,
  //       });
  //     },
  //   });
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-48" ref={raiz}>
      <nav>
            <a href="#">{s.acao}</a>
          </nav>
      
          <section className="hero"></section>
      
          <section className="about">
            <h1>{s.titulo}</h1>
          </section>
      
          <div className="lottie-container">
            <div className="lottie"></div>
            <div className="hero-img">
              <img src={s.imagem} alt="" />
            </div>
          </div>
    </section>
  );
}