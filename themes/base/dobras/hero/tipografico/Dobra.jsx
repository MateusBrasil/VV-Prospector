"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-13
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
  //   import Cursor from './cursor';
  //   import Revealer from './revealer';
  //   import { preloadImages } from './utils';
  //   
  //   // Preload images
  //   preloadImages('.layers__item-img').then(() => {
  //       document.body.classList.remove('loading');
  //   
  //       const revealer = new Revealer();
  //       document.querySelector('.menu__item--current').addEventListener('click', () => {
  //           revealer.reveal();
  //       });
  //   });
  //   
  //   const cursor = new Cursor(document.querySelector('.cursor'));
  //   
  //   [...document.querySelectorAll('a')].forEach(el => {
  //       el.addEventListener('mouseenter', () => cursor.emit('enter'));
  //       el.addEventListener('mouseleave', () => cursor.emit('leave'));
  //   });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="hero-tipografico" ref={raiz}>
      <main className="intro">
      			<div className="frame">
      				<h1 className="frame__title">{s.titulo}</h1>
      				<div className="frame__links">
      					<a href={s.destino || '#'}>{s.acao}</a>
      					<a href={s.destino2 || '#'}>{s.acao2}</a>
      				</div>
      				<p className="frame__info">{s.texto}</p>
      			</div>
      			<div className="content">
      				<div className="grid">
      					<div className="grid__item grid__item--a" style={{backgroundImage: `url(${s.imagem})`}}></div>
      					<div className="grid__item grid__item--b" style={{backgroundImage: `url(${s.imagem2})`}}></div>
      					<div className="grid__item grid__item--c" style={{backgroundImage: `url(${s.imagem3})`}}></div>
      					<div className="grid__item grid__item--d" style={{backgroundImage: `url(${s.imagem4})`}}></div>
      					<div className="grid__item grid__item--e" style={{backgroundImage: `url(${s.imagem5})`}}></div>
      					<div className="grid__item grid__item--f" style={{backgroundImage: `url(${s.imagem6})`}}></div>
      				</div>
      				<nav className="menu">
      					<a className="menu__item">
      						<h2 className="menu__item-title">{s.titulo2}</h2>
      						<p className="menu__item-subtitle">{s.texto2}</p>
      					</a>
      					<a className="menu__item menu__item--current">
      						<h2 className="menu__item-title">{s.titulo3}</h2>
      						<p className="menu__item-subtitle">{s.texto3}</p>
      					</a>
      					<a className="menu__item">
      						<h2 className="menu__item-title">{s.titulo4}</h2>
      						<p className="menu__item-subtitle">{s.texto4}</p>
      					</a>
      				</nav>
      			</div>
      			<div className="layers">
      				<div className="layers__item">
      					<div className="layers__item-img" style={{backgroundImage: `url(${s.imagem7})`}}></div>
      				</div>
      				<div className="layers__item">
      					<div className="layers__item-img" style={{backgroundImage: `url(${s.imagem8})`}}></div>
      				</div>
      				<div className="layers__item">
      					<div className="layers__item-img" style={{backgroundImage: `url(${s.imagem9})`}}></div>
      				</div>
      				<div className="layers__item">
      					<div className="layers__item-img" style={{backgroundImage: `url(${s.imagem10})`}}></div>
      				</div>
      				<div className="layers__item">
      					<div className="layers__item-img" style={{backgroundImage: `url(${s.imagem11})`}}></div>
      				</div>
      				<div className="layers__item">
      					<div className="layers__item-img" style={{backgroundImage: `url(${s.imagem12})`}}></div>
      				</div>
      				<div className="layers__item">
      					<div className="layers__item-img" style={{backgroundImage: `url(${s.imagem13})`}}></div>
      				</div>
      				<div className="layers__item">
      					<div className="layers__item-img" style={{backgroundImage: `url(${s.imagem14})`}}></div>
      				</div>
      				<div className="layers__item">
      					<div className="layers__item-img" style={{backgroundImage: `url(${s.imagem15})`}}></div>
      				</div>
      				<div className="layers__item">
      					<div className="layers__item-img" style={{backgroundImage: `url(${s.imagem16})`}}></div>
      				</div>
      			</div>
      		</main>
      		<svg className="cursor" width="220" height="220" viewBox="0 0 220 220">
      			<defs>
      				<filter id="filter-1" x="-50%" y="-50%" width="200%" height="200%" 
      				filterUnits="objectBoundingBox">
      					<feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="1" result="warp" />
      					<feOffset dx="-30" result="warpOffset" />
      					<feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
      				</filter>
      			</defs>
      			<circle className="cursor__inner" cx="110" cy="110" r="60"/>
      		</svg>
    </section>
  );
}