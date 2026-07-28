"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-41
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
  //         gsap.registerPlugin(ScrollTrigger);
  //         document.addEventListener("DOMContentLoaded", function() {
  //           const contentHolderHeight = document.querySelector('.content-holder').offsetHeight;
  //           const imgHolderHeight = window.innerHeight;
  //           const additionalScrollHeight = window.innerHeight;
  //   
  //           const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight;
  //           document.body.style.height = `${totalBodyHeight}px`;
  //         });
  //   
  //         const endValue = document.querySelector('.website-content').offsetHeight * 0.75;
  //   
  //         ScrollTrigger.create({
  //             trigger: ".website-content",
  //             start: "-0.1% top",
  //             end: "bottom bottom",
  //             onEnter: () => {
  //                 gsap.set(".website-content", { position: 'absolute', top: '195%' });
  //             },
  //             onLeaveBack: () => {
  //                 gsap.set(".website-content", { position: 'fixed', top: '0' });
  //             }
  //         });
  //   
  //         gsap.to(".header .letters:first-child", {
  //             x: () => -innerWidth * 3,
  //             scale: 10,
  //             ease: "power2.inOut",
  //             scrollTrigger: {
  //                 start: "top top",
  //                 end: `+=200%`,
  //                 scrub: 1,
  //             }
  //         });
  //   
  //         gsap.to(".header .letters:last-child", {
  //             x: () => innerWidth * 3,
  //             scale: 10,
  //             ease: "power2.inOut",
  //             scrollTrigger: {
  //                 start: "top top",
  //                 end: `+=200%`,
  //                 scrub: 1,
  //             }
  //         });
  //   
  //         gsap.to(".img-holder", {
  //             rotation: 0,
  //             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  //             ease: "power2.inOut",
  //             scrollTrigger: {
  //                 start: "top top",
  //                 end: "+=200%",
  //                 scrub: 1
  //             }
  //         });
  //   
  //         gsap.to(".img-holder img", {
  //             scale: 1,
  //             ease: "power2.inOut",
  //             scrollTrigger: {
  //                 start: "top top",
  //                 end: "+=200%",
  //                 scrub: 1
  //             }
  //         });
  //       
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-41" ref={raiz}>
      <div className="logo"></div>
          <div className="header">
            <div className="letters">
              <div>a</div>
              <div>r</div>
              <div>t</div>
              <div>w</div>
            </div>
            <div className="letters">
              <div>o</div>
              <div>r</div>
              <div>k</div>
              <div>s</div>
            </div>
          </div>
          <div className="website-content">
            <div className="img-holder">
              <img src={s.imagem} alt="" />
            </div>
      
            <div className="content-holder">
              <div className="row">
                <h1>{s.titulo}</h1>
              </div>
              <div className="row">
                <div className="img">
                  <img src={s.imagem2} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="img">
                  <img src={s.imagem3} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="img">
                  <img src={s.imagem4} alt="" />
                </div>
              </div>
              <div className="row">
                <p>{s.texto}</p>
              </div>
              <div className="row">
                <p>{s.texto2}</p>
              </div>
            </div>
          </div>
    </section>
  );
}