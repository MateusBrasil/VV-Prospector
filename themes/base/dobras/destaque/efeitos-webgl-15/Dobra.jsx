"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/webgl-threejs/efeitos-webgl-15
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
    <section className="dobra" data-dobra="destaque-efeitos-webgl-15" ref={raiz}>
      <div className="wrapper">
      			<main className="page">
      				<div data-anim-index="" className="index">
      					<nav>
      						<div className="logo">
      							<a href="#">{s.acao}</a>
      						</div>
      						<div className="nav-links">
      							<a href="#">{s.acao2}</a>
      							<a href="#">{s.acao3}</a>
      							<a href="#">{s.acao4}</a>
      						</div>
      					</nav>
      					<section className="hero">
      						<img id="glassTexture" src={s.imagem} alt="" />
      						<div className="hero-content">
      							<h1>{s.titulo}</h1>
      							<p>{s.texto}</p>
      						</div>
      					</section>
      				</div>
      			</main>
      		</div>
    </section>
  );
}