"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/transicoes-de-pagina/transicao-pagina-11
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
  //   
  //   
  //   document.addEventListener("DOMContentLoaded", () => {
  //     console.log("DOM loaded");
  //     const ease = "power4.inOut";
  //     revealTransition().then(() => {
  //       gsap.set(".block", { visibility: "hidden" });
  //     });
  //     function revealTransition() {
  //       return new Promise((resolve) => {
  //         gsap.set(".block", { scaleY: 1 });
  //         gsap.to(".block", {
  //           scaleY: 0,
  //           duration: 1,
  //           stagger: {
  //             each: 0.1,
  //             from: "start",
  //             grid: "auto",
  //             axis: "x"
  //           },
  //           ease,
  //           onComplete: resolve
  //         });
  //       });
  //     }
  //     document.querySelectorAll("a").forEach((link) => {
  //       link.addEventListener("click", (event) => {
  //         event.preventDefault();
  //         const href = link.getAttribute("href");
  //         if (href && !href.startsWith("#") && href !== window.location.pathname) {
  //           animateTransition().then(() => {
  //             window.location.href = href;
  //           });
  //         }
  //       });
  //     });
  //     function animateTransition() {
  //       return new Promise((resolve) => {
  //         gsap.set(".block", { visibility: "visible", scaleY: 0 });
  //         gsap.to(".block", {
  //           scaleY: 1,
  //           duration: 1,
  //           stagger: {
  //             each: 0.1,
  //             from: "start",
  //             grid: [2, 5],
  //             axis: "x",
  //             from: "start"
  //           },
  //           ease,
  //           onComplete: resolve
  //         });
  //       });
  //     }
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="transicao-transicao-pagina-11" ref={raiz}>
      <div className="wrapper">
      			<main className="page">
      				<div data-anim-index="" className="index">
      					<div className="transition">
      						<div className="transition-row row-1">
      							<div className="block"></div>
      							<div className="block"></div>
      							<div className="block"></div>
      							<div className="block"></div>
      							<div className="block"></div>
      						</div>
      						<div className="transition-row row-2">
      							<div className="block"></div>
      							<div className="block"></div>
      							<div className="block"></div>
      							<div className="block"></div>
      							<div className="block"></div>
      						</div>
      					</div>
      					<div className="app">
      						<nav>
      							<div className="logo">
      								<a href="index.html">{s.acao}</a>
      							</div>
      							<div className="nav-items">
      								<a href="index.html">{s.acao2}</a>
      								<a href="about.html">{s.acao3}</a>
      								<a href="contact.html">{s.acao4}</a>
      							</div>
      						</nav>
      						<div className="hero">
      							<h1>{s.titulo}</h1>
      						</div>
      					</div>
      					
      				</div>
      			</main>
      		</div>
    </section>
  );
}