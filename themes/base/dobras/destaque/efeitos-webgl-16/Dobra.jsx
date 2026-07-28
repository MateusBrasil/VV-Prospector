"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/webgl-threejs/efeitos-webgl-16
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
    <section className="dobra" data-dobra="destaque-efeitos-webgl-16" ref={raiz}>
      <div className="wrapper">
      			<main className="page">
      				<div data-anim-index="" className="index">
      					<nav>
      						<div className="nav-items">
      							<a href="#">{s.acao}</a>
      						</div>
      						<div className="nav-items">
      							<a href="#">{s.acao2}</a>
      						</div>
      					</nav>
      				</div>
      			</main>
      		</div>
    </section>
  );
}