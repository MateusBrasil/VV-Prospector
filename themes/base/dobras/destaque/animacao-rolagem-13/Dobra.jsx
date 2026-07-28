"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-de-rolagem/animacao-rolagem-13
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
    <section className="dobra" data-dobra="destaque-animacao-rolagem-13" ref={raiz}>
      <main>
      			<div className="frame">
      				<h1 className="frame__title">{s.titulo}</h1>
      				<nav className="frame__links">
      					<a href="#">{s.acao}</a>
      					<a href="#">{s.acao2}</a>
      					<a href="#">{s.acao3}</a>
      				</nav>
      				<button className="frame__info" onClick={s.onClick}>{s.acao4}</button>
      				<nav className="frame__demos">
      					<a href="index.html" className="frame__demo frame__demo--current">{s.acao5}</a>
      					<a href="index2.html" className="frame__demo">{s.acao6}</a>
      				</nav>
      				<nav className="slides-nav">
      					<button className="slides-nav__button slides-nav__button--prev" aria-label="Previous slide" onClick={s.onClick}>{s.acao7}</button>
      					<button className="slides-nav__button slides-nav__button--next" aria-label="Next slide" onClick={s.onClick}>{s.acao8}</button>
      					<div className="slides-nav__index">
      						<span className="slides-nav__index-current"><span>01</span></span>-
      						<span className="slides-nav__index-total"><span>10</span></span>
      					</div>
      				</nav>
      			</div>
      			<div className="slideshow">
      				<figure className="slide slide--current">
      					<div className="slide__img-wrap"><div className="slide__img" style={{backgroundImage: `url(${s.imagem})`}}></div></div>
      					<figcaption className="slide__caption">
      						<h2 className="slides__caption-headline">
      							<span className="text-row"><span>{s.rotulo}</span></span>
      							<span className="text-row"><span>a <em>desire</em> to <strong>engage</strong></span></span>
      						</h2>
      						<a className="slides__caption-link" href="#"><span>{s.rotulo2}</span></a>
      					</figcaption>
      				</figure>
      				<figure className="slide">
      					<div className="slide__img-wrap"><div className="slide__img" style={{backgroundImage: `url(${s.imagem2})`}}></div></div>
      					<figcaption className="slide__caption">
      						<h2 className="slides__caption-headline">
      							<span className="text-row"><span>{s.rotulo3}</span></span>
      							<span className="text-row"><span>when <em>hiraeth</em> begins</span></span>
      						</h2>
      						<a className="slides__caption-link" href="#"><span>{s.rotulo4}</span></a>
      					</figcaption>
      				</figure>
      				<figure className="slide">
      					<div className="slide__img-wrap"><div className="slide__img" style={{backgroundImage: `url(${s.imagem3})`}}></div></div>
      					<figcaption className="slide__caption">
      						<h2 className="slides__caption-headline">
      							<span className="text-row"><span>{s.rotulo5}</span></span>
      							<span className="text-row"><span><strong>Whenever</strong> you <em>dream</em></span></span>
      						</h2>
      						<a className="slides__caption-link" href="#"><span>{s.rotulo6}</span></a>
      					</figcaption>
      				</figure>
      				<figure className="slide">
      					<div className="slide__img-wrap"><div className="slide__img" style={{backgroundImage: `url(${s.imagem4})`}}></div></div>
      					<figcaption className="slide__caption">
      						<h2 className="slides__caption-headline">
      							<span className="text-row"><span>{s.rotulo7}</span></span>
      							<span className="text-row"><span>for she <strong>resurrected</strong></span></span>
      						</h2>
      						<a className="slides__caption-link" href="#"><span>{s.rotulo8}</span></a>
      					</figcaption>
      				</figure>
      				<figure className="slide">
      					<div className="slide__img-wrap"><div className="slide__img" style={{backgroundImage: `url(${s.imagem5})`}}></div></div>
      					<figcaption className="slide__caption">
      						<h2 className="slides__caption-headline">
      							<span className="text-row"><span>{s.rotulo9}</span></span>
      							<span className="text-row"><span>in good <strong>company</strong></span></span>
      						</h2>
      						<a className="slides__caption-link" href="#"><span>{s.rotulo10}</span></a>
      					</figcaption>
      				</figure>
      			</div>
      		</main>
    </section>
  );
}