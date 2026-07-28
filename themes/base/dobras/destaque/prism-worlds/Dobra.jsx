"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/prism-worlds
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
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
  //         // Setup image preloading functionality
  //         const preloadImages = (selector = 'img') => {
  //           return new Promise((resolve) => {
  //             imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
  //           });
  //         };
  //   
  //         // Initialize the 3D entry animation
  //         const init = () => {
  //           const breakPoint = "53em";
  //           const mm = gsap.matchMedia();
  //   
  //           mm.add(
  //             {
  //               isDesktop: `(min-width: ${breakPoint})`,
  //               isMobile: `(max-width: ${breakPoint})`,
  //             },
  //             (context) => {
  //               let { isDesktop } = context.conditions;
  //   
  //               const image = document.querySelector(".card__img");
  //               const cardList = gsap.utils.toArray(".card");
  //               const count = cardList.length;
  //               const sliceAngle = (2 * Math.PI) / count;
  //   
  //               // Distance from image center to screen center
  //               const radius1 = 50 + image.clientHeight / 2;
  //               const radius2 = isDesktop ? 250 - radius1 : 180 - radius1;
  //   
  //               gsap
  //                 .timeline()
  //                 .from(cardList, {
  //                   y: window.innerHeight / 2 + image.clientHeight * 1.5,
  //                   rotateX: -180,
  //                   stagger: 0.1,
  //                   duration: 0.5,
  //                   opacity: 0.8,
  //                   scale: 3,
  //                 })
  //                 .set(cardList, {
  //                   transformOrigin: `center ${radius1 + image.clientHeight / 2}px`,
  //                 })
  //                 .set(".group", {
  //                   transformStyle: "preserve-3d",
  //                 })
  //                 .to(cardList, {
  //                   y: -radius1,
  //                   duration: 0.5,
  //                   ease: "power1.out",
  //                 })
  //                 .to(
  //                   cardList,
  //                   {
  //                     rotation: (index) => {
  //                       return (index * 360) / count;
  //                     },
  //                     rotateY: 15,
  //                     duration: 1,
  //                     ease: "power1.out",
  //                   },
  //                   "<"
  //                 )
  //                 .to(cardList, {
  //                   // Expand the circular radius 
  //                   x: (index) => {
  //                     return Math.round(
  //                       radius2 * Math.cos(sliceAngle * index - Math.PI / 4)
  //                     );
  //                   },
  //                   y: (index) => {
  //                     return (
  //                       Math.round(radius2 * Math.sin(sliceAngle * index - Math.PI / 4)) -
  //                       radius1
  //                     );
  //                   },
  //                   rotation: (index) => {
  //                     return (index + 1) * (360 / count);
  //                   },
  //                 })
  //                 .to(
  //                   cardList,
  //                   {
  //                     rotateY: 180,
  //                     opacity: 0.8,
  //                     duration: 1,
  //                   },
  //                   "<"
  //                 )
  //                 .from(
  //                   ".headings",
  //                   {
  //                     opacity: 0,
  //                     filter: "blur(60px)",
  //                     duration: 1,
  //                   },
  //                   "<"
  //                 )
  //                 .to(cardList, {
  //                   repeat: -1,
  //                   duration: 2,
  //                   onRepeat: () => {
  //                     gsap.to(cardList[Math.floor(Math.random() * count)], {
  //                       rotateY: "+=180",
  //                     });
  //                   },
  //                 })
  //                 .to(
  //                   ".group",
  //                   {
  //                     rotation: 360,
  //                     duration: 20,
  //                     repeat: -1,
  //                     ease: "none",
  //                   },
  //                   "<-=2"
  //                 );
  //   
  //               return () => {};
  //             }
  //           );
  //         };
  //   
  //         // Run code after loading images
  //         preloadImages(".card__img").then(() => {
  //           document.body.classList.remove("loading");
  //           init();
  //         });
  //       
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-prism-worlds" ref={raiz}>
      <main>
            <header className="frame">
              <h1 className="frame__title">{s.titulo}</h1>
            </header>
            <div className="content">
              <div className="scene">
                <div className="group">
                  <div className="card">
                    <div className="card__img" style={{backgroundImage: `url(${s.imagem})`}}></div>
                  </div>
                  <div className="card">
                    <div className="card__img" style={{backgroundImage: `url(${s.imagem2})`}}></div>
                  </div>
                  <div className="card">
                    <div className="card__img" style={{backgroundImage: `url(${s.imagem3})`}}></div>
                  </div>
                  <div className="card">
                    <div className="card__img" style={{backgroundImage: `url(${s.imagem4})`}}></div>
                  </div>
                  <div className="card">
                    <div className="card__img" style={{backgroundImage: `url(${s.imagem5})`}}></div>
                  </div>
                  <div className="card">
                    <div className="card__img" style={{backgroundImage: `url(${s.imagem6})`}}></div>
                  </div>
                  <div className="card">
                    <div className="card__img" style={{backgroundImage: `url(${s.imagem7})`}}></div>
                  </div>
                  <div className="card">
                    <div className="card__img" style={{backgroundImage: `url(${s.imagem8})`}}></div>
                  </div>
                </div>
              </div>
      
              <div className="headings">
                <h1 className="headings__main gloock-regular">{s.titulo2}</h1>
                <h1 className="headings__main gloock-regular">{s.titulo3}</h1>
                <h5 className="headings_subtitle gloock-regular">{s.rotulo}</h5>
              </div>
            </div>
          </main>
    </section>
  );
}