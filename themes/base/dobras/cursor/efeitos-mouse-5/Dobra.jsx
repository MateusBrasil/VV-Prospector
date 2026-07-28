"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cursor/efeitos-mouse-5
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* a origem não trazia JS */
  return (
    <section className="dobra" data-dobra="cursor-efeitos-mouse-5" ref={raiz}>
      <div className="wrapper">
      			<main className="page">
      				<div data-anim-index="" className="index">
      					<div id="pixel-container"></div>
      					
      					<svg className="goo-filter-container">
      						<defs>
      							<filter id="custom-goo-filter">
      								<feGaussianBlur in="SourceGraphic" stddeviation="8" result="blur"></feGaussianBlur>
      								<feColorMatrix in="blur" type="matrix" values="1 0 0 0 0
       0 1 0 0 0
       0 0 1 0 0
       0 0 0 20 -10" result="goo"></feColorMatrix>
      								<feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
      							</filter>
      						</defs>
      					</svg>
      				</div>
      			</main>
      		</div>
    </section>
  );
}