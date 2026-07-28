"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-33
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
  //   gsap.registerPlugin(ScrollTrigger)
  //   
  //   document.addEventListener('DOMContentLoaded', () => {
  //   	const path = document.getElementById('stroke-path')
  //   	if (!path) return
  //   
  //   	const pathLength = path.getTotalLength()
  //   
  //   	path.style.strokeDasharray = pathLength
  //   	path.style.strokeDashoffset = pathLength
  //   
  //   	gsap.to(path, {
  //   		strokeDashoffset: 0,
  //   		ease: 'none',
  //   		scrollTrigger: {
  //   			trigger: '.spotlight',
  //   			start: 'top top',
  //   			end: 'bottom bottom',
  //   			scrub: true,
  //   		},
  //   	})
  //   })
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-33" ref={raiz}>
      <section className="hero">
            <h1>{s.titulo}</h1>
         </section>
      
         <section className="spotlight">
            <div className="row">
               <div className="img"><img src={s.imagem} /></div>
            </div>
      
            <div className="row">
               <div className="col">
                  <div className="card">
                     <h2>{s.titulo2}</h2>
                     <p>{s.texto}</p>
                  </div>
               </div>
               <div className="col">
                  <div className="img"><img src={s.imagem2} /></div>
               </div>
            </div>
      
            <div className="row">
               <div className="col">
                  <div className="img"><img src={s.imagem3} /></div>
               </div>
               <div className="col">
                  <div className="card">
                     <h2>{s.titulo3}</h2>
                     <p>{s.texto2}</p>
                  </div>
               </div>
            </div>
      
            <div className="row">
               <div className="img"><img src={s.imagem4} /></div>
            </div>
      
            <div className="svg-path">
               <svg viewBox="0 0 1378 2760" fill="none" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMin meet">
                  <path id="stroke-path"
                     d="M639.668 100C639.668 100 105.669 100 199.669 601.503C293.669 1103.01 1277.17 691.502 1277.17 1399.5C1277.17 2107.5 -155.332 1968 140.168 1438.5C435.669 909.002 1442.66 2093.5 713.168 2659.5"
                     stroke="var(--acento)" strokeWidth="200" strokeLinecap="round" />
               </svg>
            </div>
         </section>
      
         <section className="outro">
            <h1>{s.titulo4}</h1>
         </section>
    </section>
  );
}