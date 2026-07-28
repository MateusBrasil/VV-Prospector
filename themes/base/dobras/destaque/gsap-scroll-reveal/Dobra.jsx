"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/gsap-scroll-reveal
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
  //     // Register the GSAP plugin
  //     gsap.registerPlugin(ScrollTrigger);
  //   
  //     // Initialize Lenis smooth scroll
  //     const lenis = new Lenis({
  //       duration: 1.2,
  //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //       smooth: true,
  //       gestureDirection: "vertical",
  //       smoothTouch: true,
  //       touchMultiplier: 2
  //     });
  //   
  //     function raf(time) {
  //       lenis.raf(time);
  //       ScrollTrigger.update();
  //       requestAnimationFrame(raf);
  //     }
  //   
  //     requestAnimationFrame(raf);
  //   
  //     // Set z-index for images
  //     document.querySelectorAll(".arch__right .img-wrapper").forEach((element) => {
  //       const order = element.getAttribute("data-index");
  //       if (order !== null) {
  //         element.style.zIndex = order;
  //       }
  //     });
  //   
  //     // Mobile layout handler (only handle order)
  //     function handleMobileLayout() {
  //       const isMobile = window.matchMedia("(max-width: 768px)").matches;
  //       const leftItems = gsap.utils.toArray(".arch__left .arch__info");
  //       const rightItems = gsap.utils.toArray(".arch__right .img-wrapper");
  //   
  //       if (isMobile) {
  //         // Interleave items using order
  //         leftItems.forEach((item, i) => {
  //           item.style.order = i * 2;
  //         });
  //         rightItems.forEach((item, i) => {
  //           item.style.order = i * 2 + 1;
  //         });
  //       } else {
  //         // Clear order for desktop
  //         leftItems.forEach((item) => {
  //           item.style.order = "";
  //         });
  //         rightItems.forEach((item) => {
  //           item.style.order = "";
  //         });
  //       }
  //     }
  //   
  //     // Debounce resize for performance
  //     let resizeTimeout;
  //     window.addEventListener("resize", () => {
  //       clearTimeout(resizeTimeout);
  //       resizeTimeout = setTimeout(handleMobileLayout, 100);
  //     });
  //   
  //     // Run on initial load
  //     handleMobileLayout();
  //   
  //     const imgs = gsap.utils.toArray(".img-wrapper img");
  //     const bgColors = ["#EDF9FF", "#FFECF2", "#FFE8DB"];
  //   
  //     // GSAP Animation with Media Query
  //     ScrollTrigger.matchMedia({
  //       "(min-width: 769px)": function () {
  //         const mainTimeline = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: ".arch",
  //             start: "top top",
  //             end: "bottom bottom",
  //             pin: ".arch__right",
  //             scrub: true
  //           }
  //         });
  //   
  //         gsap.set(imgs, {
  //           clipPath: "inset(0)",
  //           objectPosition: "0px 0%"
  //         });
  //   
  //         imgs.forEach((_, index) => {
  //           const currentImage = imgs[index];
  //           const nextImage = imgs[index + 1] ? imgs[index + 1] : null;
  //   
  //           const sectionTimeline = gsap.timeline();
  //   
  //           if (nextImage) {
  //             sectionTimeline
  //               .to(
  //                 "body",
  //                 {
  //                   backgroundColor: bgColors[index],
  //                   duration: 1.5,
  //                   ease: "power2.inOut"
  //                 },
  //                 0
  //               )
  //               .to(
  //                 currentImage,
  //                 {
  //                   clipPath: "inset(0px 0px 100%)",
  //                   objectPosition: "0px 60%",
  //                   duration: 1.5,
  //                   ease: "none"
  //                 },
  //                 0
  //               )
  //               .to(
  //                 nextImage,
  //                 {
  //                   objectPosition: "0px 40%",
  //                   duration: 1.5,
  //                   ease: "none"
  //                 },
  //                 0
  //               );
  //           }
  //   
  //           mainTimeline.add(sectionTimeline);
  //         });
  //       },
  //       "(max-width: 768px)": function () {
  //         const mbTimeline = gsap.timeline();
  //         gsap.set(imgs, {
  //           objectPosition: "0px 60%"
  //         });
  //   
  //         imgs.forEach((image, index) => {
  //           const innerTimeline = gsap.timeline({
  //             scrollTrigger: {
  //               trigger: image,
  //               start: "top-=70% top+=50%",
  //               end: "bottom+=200% bottom",
  //               scrub: true
  //             }
  //           });
  //   
  //           innerTimeline
  //             .to(image, {
  //               objectPosition: "0px 30%",
  //               duration: 5,
  //               ease: "none"
  //             })
  //             .to("body", {
  //               backgroundColor: bgColors[index],
  //               duration: 1.5,
  //               ease: "power2.inOut"
  //             });
  //   
  //           mbTimeline.add(innerTimeline);
  //         });
  //       }
  //     });
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-gsap-scroll-reveal" ref={raiz}>
      <div className="container">
        <div className="spacer"></div>
      
        <div className="arch">
          <div className="arch__left">
            <div className="arch__info" id="green-arch">
              <div className="content">
                <h2 className="header">{s.titulo}</h2>
                <p className="desc">{s.texto}</p>
                <a className="link" href="#" style={{backgroundColor: 'var(--acento)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
                    <path fill="var(--base-600)" d="M5 2c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11 3.5c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6 9a2 2 0 1 1-4 0c0-1.105.895-3 2-3s2 1.895 2 3Z" />
                  </svg> <span>{s.rotulo}</span></a>
              </div>
            </div>
      
            <div className="arch__info" id="blue-arch">
              <div className="content">
                <h2 className="header">{s.titulo2}</h2>
                <p className="desc">{s.texto2}</p>
                <a className="link" href="#" style={{backgroundColor: 'var(--base-200)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
                    <path fill="var(--base-600)" d="M5 2c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11 3.5c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6 9a2 2 0 1 1-4 0c0-1.105.895-3 2-3s2 1.895 2 3Z" />
                  </svg> <span>{s.rotulo2}</span></a>
              </div>
            </div>
      
            <div className="arch__info" id="pink-arch">
              <div className="content">
                <h2 className="header">{s.titulo3}</h2>
                <p className="desc">{s.texto3}</p>
                <a className="link" href="#" style={{backgroundColor: 'var(--base-200)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
                    <path fill="var(--base-600)" d="M5 2c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11 3.5c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6 9a2 2 0 1 1-4 0c0-1.105.895-3 2-3s2 1.895 2 3Z" />
                  </svg> <span>{s.rotulo3}</span></a>
              </div>
            </div>
      
            <div className="arch__info" id="orange-arch">
              <div className="content">
                <h2 className="header">{s.titulo4}</h2>
                <p className="desc">{s.texto4}</p>
                <a className="link" href="#" style={{backgroundColor: 'var(--base-200)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
                    <path fill="var(--base-600)" d="M5 2c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11 3.5c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6 9a2 2 0 1 1-4 0c0-1.105.895-3 2-3s2 1.895 2 3Z" />
                  </svg> <span>{s.rotulo4}</span></a>
              </div>
            </div>
          </div>
      
          <div className="arch__right">
            <div className="img-wrapper" data-index="4">
              <img src={s.imagem} alt="Green Architecture" />
            </div>
      
            <div className="img-wrapper" data-index="3">
              <img src={s.imagem2} alt="Blue Architecture" />
            </div>
      
            <div className="img-wrapper" data-index="2">
              <img src={s.imagem3} alt="Pink Architecture" />
            </div>
      
            <div className="img-wrapper" data-index="1">
              <img src={s.imagem4} alt="Orange Architecture" />
            </div>
          </div>
        </div>
      
        <div className="spacer"></div>
      </div>
    </section>
  );
}