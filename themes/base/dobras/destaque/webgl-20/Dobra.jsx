"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/webgl-threejs/webgl-20
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
    <section className="dobra" data-dobra="destaque-webgl-20" ref={raiz}>
      <main>
      			<header className="frame">
      				<h1 className="frame__title">{s.titulo}</h1>
      				<a className="frame__back" href={s.destino || '#'}>{s.acao}</a>
      				<a className="frame__archive" href={s.destino2 || '#'}>{s.acao2}</a>
      				<a className="frame__github" href={s.destino3 || '#'}>{s.acao3}</a>
      				<nav className="frame__tags">
      					<a href={s.destino4 || '#'}>{s.acao4}</a>
      					<a href={s.destino5 || '#'}>{s.acao5}</a>
      					<a href={s.destino6 || '#'}>{s.acao6}</a>
      				</nav>
      			</header>
      			<div className="content">
      				<canvas></canvas>
      				<div className="container">
      					<div className="grid">
      						<figure className="img-wrap img-wrap-1">
      							<img className="img" src={s.imagem} alt="image of ceramic piece" data-webgl-media />
      							<figcaption><strong>X05</strong><span>{s.rotulo}</span></figcaption>
      						</figure>
      						<figure className="img-wrap img-wrap-2">
      							<img className="img" src={s.imagem2} alt="image of ceramic piece" data-webgl-media />
      							<figcaption><strong>M33</strong><span>{s.rotulo2}</span></figcaption>
      						</figure>
      						<figure className="img-wrap img-wrap-3">
      							<img className="img" src={s.imagem3} alt="image of ceramic piece" data-webgl-media />
      							<figcaption><strong>Y78</strong><span>{s.rotulo3}</span></figcaption>
      						</figure>
      						<figure className="img-wrap img-wrap-4">
      							<img className="img" src={s.imagem4} alt="image of ceramic piece" data-webgl-media />
      							<figcaption><strong>K08</strong><span>{s.rotulo4}</span></figcaption>
      						</figure>
      						<figure className="img-wrap img-wrap-5">
      							<img className="img" src={s.imagem5} alt="image of ceramic piece" data-webgl-media />
      							<figcaption><strong>F03</strong><span>{s.rotulo5}</span></figcaption>
      						</figure>
      					</div>
      				</div>
      			</div>
      		</main>
    </section>
  );
}