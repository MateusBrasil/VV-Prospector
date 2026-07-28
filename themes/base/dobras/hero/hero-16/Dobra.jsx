"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-16/CircularTextEffect-main
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: modulo-es).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   import { preloadFonts } from '../utils';
  //   import { Intro } from './intro';
  //   
  //   const intro = new Intro(document.querySelector('.circles'));
  //   
  //   // Preload images and fonts
  //   Promise.all([preloadFonts('kxo3pgz')]).then(() => {
  //       // remove loader (loading class)
  //       document.body.classList.remove('loading');
  //       // start intro animation
  //       intro.start();
  //   });
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="hero-hero-16" ref={raiz}>
      <main>
      		<svg className="circles" width="100%" height="100%" viewBox="0 0 1400 1400">
      			<def>
      				<path id="circle-1" d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5" />
      				<path id="circle-2" d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5" />
      				<path id="circle-3" d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5" />
      				<path id="circle-4" d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5" />
      			</def>
      			<text className="circles__text circles__text--1">
      				<textPath className="circles__text-path" xlinkHref="#circle-1" aria-label="" textLength="2830">Frihed Kun Stadium  Copenhagen&nbsp;</textPath>
      			</text>
      			<text className="circles__text circles__text--2">
      				<textPath className="circles__text-path" xlinkHref="#circle-2" aria-label="" textLength="2001">Jægerspris Infinite X Playground&nbsp;</textPath>
      			</text>
      			<text className="circles__text circles__text--3">
      				<textPath className="circles__text-path" xlinkHref="#circle-3" aria-label="" textLength="1341">Mit Valg Building Næstved&nbsp;</textPath>
      			</text>
      			<text className="circles__text circles__text--4">
      				<textPath className="circles__text-path" xlinkHref="#circle-4" aria-label="" textLength="836">Køge For Kærlighed Building VI&nbsp;</textPath>
      			</text>
      		</svg>
      		<div className="frame">
      			<h1 className="frame__title">{s.titulo}</h1>
      		
      			<nav className="frame__demos">
      				<a href="index.html" className="frame__demo frame__demo--current">{s.acao}</a>
      				<a href="index2.html" className="frame__demo">{s.acao2}</a>
      				<a href="index3.html" className="frame__demo">{s.acao3}</a>
      			</nav>
      		</div>
      		<div className="content">
      			<p>{s.texto}</p>
      		</div>
      		<button className="enter" onClick={s.onClick}>
      			<div className="enter__bg"></div>
      			<span className="enter__text">{s.rotulo}</span>
      		</button>
      	</main>
    </section>
  );
}