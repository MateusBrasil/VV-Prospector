"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-1-2/files
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
  //   function initWillemLoadingAnimation() {
  //     const container = document.querySelector(".willem-header");
  //     const loadingLetter = container.querySelectorAll(".willem__letter");
  //     const box = container.querySelectorAll(".willem-loader__box");
  //     const growingImage = container.querySelectorAll(".willem__growing-image");
  //     const headingStart = container.querySelectorAll(".willem__h1-start");
  //     const headingEnd = container.querySelectorAll(".willem__h1-end");
  //     const coverImageExtra = container.querySelectorAll(".willem__cover-image-extra");
  //     const headerLetter = container.querySelectorAll(".willem__letter-white");
  //     const navLinks = container.querySelectorAll(".willen-nav .willem-nav__link, .osmo-credits__p");
  //   
  //     gsap.set(headerLetter, { yPercent: 110 });
  //     gsap.set(navLinks, { yPercent: 110 });
  //   
  //     const tl = gsap.timeline({
  //       defaults: {
  //         ease: "expo.inOut",
  //       },
  //       onStart: () => {
  //         container.classList.remove("is--hidden");
  //       }
  //     });
  //   
  //     if (loadingLetter.length) {
  //       tl.from(loadingLetter, {
  //         yPercent: 100,
  //         stagger: 0.025,
  //         duration: 1.25
  //       });
  //     }
  //   
  //     if (box.length) {
  //       tl.fromTo(box, {
  //         width: "0em",
  //       },{
  //         width: "1em",
  //         duration: 1.25
  //       }, "< 1.25");
  //     }
  //   
  //     if (growingImage.length) {
  //       tl.fromTo(growingImage, {
  //         width: "0%",
  //       },{
  //         width: "100%",
  //         duration: 1.25
  //       }, "<");
  //     }
  //   
  //     if (headingStart.length) {
  //       tl.fromTo(headingStart, {
  //         x: "0em",
  //       },{
  //         x: "-0.05em",
  //         duration: 1.25
  //       }, "<");
  //     }
  //   
  //     if (headingEnd.length) {
  //       tl.fromTo(headingEnd, {
  //         x: "0em",
  //       },{
  //         x: "0.05em",
  //         duration: 1.25
  //       }, "<");
  //     }
  //   
  //     if (coverImageExtra.length) {
  //       tl.fromTo(coverImageExtra, {
  //         opacity: 1,
  //       },{
  //         opacity: 0,
  //         duration: 0.05,
  //         ease: "none",
  //         stagger: 0.5
  //       }, "-=0.05");
  //     }
  //   
  //     if (growingImage.length) {
  //       tl.to(growingImage, {
  //         width: "100vw",
  //         height: "100dvh",
  //         duration: 2
  //       }, "< 1.25");
  //     }
  //   
  //     if (box.length) {
  //       tl.to(box, {
  //         width: "110vw",
  //         duration: 2
  //       }, "<");
  //     }
  //   
  //     if (headerLetter.length) {
  //       tl.to(headerLetter, {
  //         yPercent: 0,
  //         duration: 1.25,
  //         ease: "expo.out",
  //         stagger: 0.025
  //       }, "< 1.2");
  //     }
  //   
  //     if (navLinks.length) {
  //       tl.to(navLinks, {
  //         yPercent: 0,
  //         duration: 1.25,
  //         ease: "expo.out",
  //         stagger: 0.1
  //       }, "<");
  //     }
  //   }
  //   
  //   document.addEventListener('DOMContentLoaded', () => {
  //     initWillemLoadingAnimation();
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="hero-hero-1-2" ref={raiz}>
      <section className="willem-header is--loading is--hidden">
          <div className="willem-loader">
            <div className="willem__h1">
              <div className="willem__h1-start">
                <span className="willem__letter">A</span>
                <span className="willem__letter">u</span>
                <span className="willem__letter">r</span>
              </div>
              <div className="willem-loader__box">
                <div className="willem-loader__box-inner">
                  <div className="willem__growing-image">
                    <div className="willem__growing-image-wrap">
                      <img className="willem__cover-image-extra is--1" src={s.imagem} loading="eager" alt="" />
                      <img className="willem__cover-image-extra is--2" src={s.imagem2} loading="eager" alt="" />
                      <img className="willem__cover-image-extra is--3" src={s.imagem3} loading="eager" alt="" />
                      <img className="willem__cover-image" src={s.imagem4} loading="eager" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="willem__h1-end">
                <span className="willem__letter">e</span>
                <span className="willem__letter">l</span>
                <span className="willem__letter">a</span>
              </div>
            </div>
          </div>
      
          <div className="willem-header__content">
            <div className="willem-header__top">
              <nav className="willen-nav">
                <div className="willem-nav__start">
                  <span className="willem-nav__link">{s.rotulo}</span>
                </div>
                <div className="willem-nav__end">
                  <div className="willem-nav__links">
                    <span className="willem-nav__link">{s.rotulo2}</span>
                    <span className="willem-nav__link">{s.rotulo3}</span>
                    <span className="willem-nav__link">{s.rotulo4}</span>
                  </div>
                  <div className="willem-nav__cta">
                    <span className="willem-nav__link">{s.rotulo5}</span>
                  </div>
                </div>
              </nav>
            </div>
      
            <div className="willem-header__bottom">
              <div className="willem__h1">
                <span className="willem__letter-white">A</span>
                <span className="willem__letter-white">u</span>
                <span className="willem__letter-white">r</span>
                <span className="willem__letter-white">e</span>
                <span className="willem__letter-white">l</span>
                <span className="willem__letter-white">a</span>
                <span className="willem__letter-white is--space"></span>
              </div>
              <p className="osmo-credits__p">{s.texto}</p>
            </div>
          </div>
        </section>
    </section>
  );
}