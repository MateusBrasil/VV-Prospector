"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-de-rolagem/animacao-rolagem-8
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
    <section className="dobra" data-dobra="destaque-animacao-rolagem-8" ref={raiz}>
      <div className="wrapper">
      			<main className="page">
      				<div data-anim-index="" className="index">
      					<nav>
      						<div className="logo">
      							<p>{s.texto}</p>
      						</div>
      						<div className="btn">
      							<p>{s.texto2}</p>
      						</div>
      					</nav>
      					<div className="container">
      						<div className="overlay">
      							<div className="t-1 marquee-wrapper">
      								<h1>{s.titulo}</h1>
      							</div>
      							<div className="t-2 marquee-wrapper">
      								<h1>{s.titulo2}</h1>
      							</div>
      							<div className="t-3 marquee-wrapper">
      								<h1>{s.titulo3}</h1>
      							</div>
      							<div className="t-4 marquee-wrapper">
      								<h1>{s.titulo4}</h1>
      							</div>
      						</div>
      						<div className="modal">
      							<div className="modal-images">
      								<div className="img" id="t-1">
      									<img src={s.imagem} alt="" />
      								</div>
      								<div className="img" id="t-2">
      									<img src={s.imagem2} alt="" />
      								</div>
      								<div className="img" id="t-3">
      									<img src={s.imagem3} alt="" />
      								</div>
      								<div className="img" id="t-4">
      									<img src={s.imagem4} alt="" />
      								</div>
      								<div className="img" id="t-5">
      									<img src={s.imagem5} alt="" />
      								</div>
      							</div>
      							<div className="info">
      								<p className="name">{s.texto3}</p>
      								<p className="role">{s.texto4}</p>
      							</div>
      						</div>
      					</div>
      					<div className="cursor">
      						<i className="ph-light ph-arrow-left"></i>
      					</div>
      				</div>
      			</main>
      		</div>
    </section>
  );
}