"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/xavier-dynamic-side-navigation-menu
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
  //       gsap.registerPlugin(CustomEase);
  //   
  //       // Hide navigation wrap initially
  //       gsap.set(".nav", { display: "none" });
  //   
  //       // Custom easing curve for the organic sliding effect
  //       CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
  //   
  //       gsap.defaults({
  //         ease: "main",
  //         duration: 0.7
  //       });
  //   
  //       function initMenu() {
  //         let navWrap = document.querySelector(".nav");
  //         let overlay = navWrap.querySelector(".overlay");
  //         let menu = navWrap.querySelector(".menu");
  //         let bgPanels = navWrap.querySelectorAll(".bg-panel");
  //         let menuToggles = document.querySelectorAll("[data-menu-toggle]");
  //         let menuLinks = navWrap.querySelectorAll(".menu-link");
  //         let fadeTargets = navWrap.querySelectorAll("[data-menu-fade]");
  //         let menuButton = document.querySelector(".menu-button");
  //         let menuButtonTexts = menuButton.querySelectorAll("p");
  //         let menuButtonIcon = menuButton.querySelector(".menu-button-icon");
  //   
  //         let tl = gsap.timeline();
  //   
  //         // Open navigation menu sequence
  //         const openNav = () => {
  //           navWrap.setAttribute("data-nav", "open");
  //           
  //           tl.clear()
  //           .set(navWrap, { display: "block" })
  //           .set(menu, { xPercent: 0 }, "<")
  //           .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
  //           .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, "<")
  //           .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
  //           .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
  //           .fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35")
  //           .fromTo(fadeTargets, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04 }, "<+=0.2");
  //         }
  //   
  //         // Close navigation menu sequence
  //         const closeNav = () => {
  //           navWrap.setAttribute("data-nav", "closed");
  //           
  //           tl.clear()
  //           .to(overlay, { autoAlpha: 0 })
  //           .to(menu, { xPercent: 120 }, "<")
  //           .to(menuButtonTexts, { yPercent: 0 }, "<")
  //           .to(menuButtonIcon, { rotate: 0 }, "<")
  //           .set(navWrap, { display: "none" });
  //         }
  //   
  //         // Toggle menu based on click trigger
  //         menuToggles.forEach((toggle) => {
  //           toggle.addEventListener("click", () => {
  //             let state = navWrap.getAttribute("data-nav");
  //             if (state === "open") {
  //               closeNav();
  //             } else {
  //               openNav();
  //             }
  //           });
  //         });
  //   
  //         // Accessibility: close menu when hitting the Escape key
  //         document.addEventListener("keydown", (e) => {
  //           if (e.key === "Escape" && navWrap.getAttribute("data-nav") === "open") {
  //             closeNav();
  //           }
  //         });
  //       }
  //   
  //       document.addEventListener("DOMContentLoaded", () => {
  //         initMenu();
  //       });
  //     
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-xavier-dynamic-side-navigation-menu" ref={raiz}>
      <div className="menu-ui">
          <header className="header">
            <div className="container is--full">
              <nav className="nav-row">
                
                <a href="javascript:void(0)" aria-label="Home" className="nav-logo-row">
                  <span className="logo-text">{s.rotulo}</span>
                </a>
                <div className="nav-row__right">
                  <button role="button" data-menu-toggle="" className="menu-button" onClick={s.onClick}>
                    <div className="menu-button-text">
                      <p className="p-large">{s.texto}</p>
                      <p className="p-large">{s.texto2}</p>
                    </div>
                    <div className="icon-wrap">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="menu-button-icon">
                        <path d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z" fill="currentColor"></path>
                        <path d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z" fill="currentColor"></path>
                        <path d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z" fill="currentColor"></path>
                        <path d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z" fill="currentColor"></path>
                        <path d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z" fill="currentColor"></path>
                        <path d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </nav>
            </div>
          </header>
        </div>
      
        <section className="cloneable">
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="background-graphic">
            <path d="M12 2v20M2 12h20M5.636 5.636l12.728 12.728M5.636 19.364L18.728 5.636" strokeLinecap="round"/>
          </svg>
      
          <div data-nav="closed" className="nav">
            <div data-menu-toggle="" className="overlay"></div>
            <nav className="menu">
              <div className="menu-bg">
                <div className="bg-panel first"></div>
                <div className="bg-panel second"></div>
                <div className="bg-panel"></div>
              </div>
              <div className="menu-inner">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <a href="javascript:void(0)" className="menu-link w-inline-block">
                      <p className="menu-link-heading">{s.texto3}</p>
                      <p className="eyebrow">01</p>
                      <div className="menu-link-bg"></div>
                    </a>
                  </li>
                  <li className="menu-list-item">
                    <a href="javascript:void(0)" className="menu-link w-inline-block">
                      <p className="menu-link-heading">{s.texto4}</p>
                      <p className="eyebrow">02</p>
                      <div className="menu-link-bg"></div>
                    </a>
                  </li>
                  <li className="menu-list-item">
                    <a href="javascript:void(0)" className="menu-link w-inline-block">
                      <p className="menu-link-heading">{s.texto5}</p>
                      <p className="eyebrow">03</p>
                      <div className="menu-link-bg"></div>
                    </a>
                  </li>
                  <li className="menu-list-item">
                    <a href="javascript:void(0)" className="menu-link w-inline-block">
                      <p className="menu-link-heading">{s.texto6}</p>
                      <p className="eyebrow">04</p>
                      <div className="menu-link-bg"></div>
                    </a>
                  </li>
                  <li className="menu-list-item">
                    <a href="javascript:void(0)" className="menu-link w-inline-block">
                      <p className="menu-link-heading">{s.texto7}</p>
                      <p className="eyebrow">05</p>
                      <div className="menu-link-bg"></div>
                    </a>
                  </li>
                </ul>
                <div className="menu-details">
                  <p data-menu-fade="" className="p-small">{s.texto8}</p>
                  <div className="socials-row">
                    <a data-menu-fade="" href="javascript:void(0)" className="p-large text-link">{s.acao}</a>
                    <a data-menu-fade="" href="javascript:void(0)" className="p-large text-link">{s.acao2}</a>
                    <a data-menu-fade="" href="javascript:void(0)" className="p-large text-link">{s.acao3}</a>
                    <a data-menu-fade="" href="javascript:void(0)" className="p-large text-link">{s.acao4}</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </section>
    </section>
  );
}