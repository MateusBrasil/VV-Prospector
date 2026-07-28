"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-27
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
  //   import TextOnPath from "./textOnPath";
  //   const imagesLoaded = require('imagesloaded');
  //   
  //   // Preload images
  //   const preloadImages = () => {
  //       return new Promise((resolve, reject) => {
  //           imagesLoaded(document.querySelectorAll('.grid__item-img, .bigimg'), resolve);
  //       });
  //   };
  //   
  //   // Preload fonts
  //   const preloadFonts = () => {
  //       return new Promise((resolve, reject) => {
  //           WebFont.load({
  //               typekit: {
  //                   id: 'rhw1vur'
  //               },
  //               active: resolve
  //           });
  //       });
  //   };
  //   
  //   // Preload fonts and images
  //   Promise.all([preloadImages(), preloadFonts()]).then(() => {
  //       // And then initialize the TextOnScroll instances
  //       [...document.querySelectorAll('svg.svgtext')].forEach(el => new TextOnPath(el));
  //       // Remove loader (loading class)
  //       document.body.classList.remove('loading');
  //   });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-27" ref={raiz}>
      <svg className="hidden">
      			<defs>
      				<filter id="blur" x="-30%" y="-30%" width="160%" height="160%">
      					<feGaussianBlur stdDeviation="0" result="blur" data-min-deviation="0" data-max-deviation="10"/>
      					<feMerge>
      						<feMergeNode in="blur"/>
      					</feMerge>
      				</filter>
      				<filter id="blur2" x="-30%" y="-30%" width="160%" height="160%">
      					<feGaussianBlur in="SourceAlpha" stdDeviation="0" result="glow" data-min-deviation="0" data-max-deviation="30"/>
      					<feColorMatrix result="bluralpha" type="matrix" values="0 -1 0 0 0 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1.8 0 "/>
      					<feOffset in="bluralpha" dx="0.000000" dy="0.000000" result="offsetBlur"/>
      					<feMerge>
      						<feMergeNode in="offsetBlur"/>
      						<feMergeNode in="SourceGraphic"/>
      					</feMerge>
      				</filter>
      				<filter id="distortionFilter">
      					<feTurbulence type="fractalNoise" baseFrequency="0.01 0.03" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="noise"/>
      					<feDisplacementMap in="SourceGraphic" in2="noise" scale="0" data-min-scale="0" data-max-scale="100" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"/>
      				</filter>
      				<filter id="distortionFilter2">
      					<feGaussianBlur stdDeviation="10" result="glow"/>
      					<feTurbulence type="fractalNoise" baseFrequency="0 0.1" numOctaves="2" seed="2" stitchTiles="noStitch" x="-30%" y="-30%" width="160%" height="160%" result="noise"/>
      					<feDisplacementMap in="SourceGraphic" in2="noise" scale="0" data-min-scale="0" data-max-scale="50" xChannelSelector="R" yChannelSelector="B" x="-30%" y="-30%" width="160%" height="160%" filterUnits="userSpaceOnUse" result="displacement"/>
      					<feMerge>
      						<feMergeNode in="glow"/>
      						<feMergeNode in="displacement"/>
      					</feMerge>
      				</filter>
      			</defs>
      		</svg>
      		<main>
      			<div className="frame frame--screen">
      				<div className="frame__title-wrap">
      					<h1 className="frame__title">{s.titulo}</h1>
      			
      				</div>
      				<h2 className="frame__heading">{s.titulo2}</h2>
      				<div className="frame__counter">
      					<span className="frame__counter-number">06</span>
      					<span className="frame__counter-text">{s.rotulo}</span>
      					<span className="frame__counter-number">04</span>
      					<span className="frame__counter-text">{s.rotulo2}</span>
      				</div>
      				<nav className="frame__links frame__links--header">
      					<a href="#">{s.acao}</a>
      					<a href="#">{s.acao2}</a>
      					<a href="#">{s.acao3}</a>
      				</nav>
      			</div>
      			<header className="intro">
      				<h1 className="intro__title">{s.titulo3}</h1>
      				<p className="intro__hint">{s.texto}</p>
      			</header>
      			<div className="grid">
      				<div className="grid__item">
      					<span className="grid__item-number">01</span>
      					<img className="grid__item-img" src={s.imagem} alt="Some image" />
      					<h3 className="grid__item-title">{s.subtitulo}</h3>
      					<p className="grid__item-description">{s.texto2}</p>
      				</div>
      				<div className="grid__item">
      					<span className="grid__item-number">02</span>
      					<img className="grid__item-img" src={s.imagem2} alt="Some image" />
      					<h3 className="grid__item-title">{s.subtitulo2}</h3>
      					<p className="grid__item-description">{s.texto3}</p>
      				</div>
      			</div>
      			<svg className="svgtext svgtext--1" data-filter-type="blur" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
      				<path id="text-curve1" d="M 0 100 Q 250 200 500 100 Q 750 0 1000 100" fill="none"/>
      				<text filter="url(#blur)">
      					<textPath href="#text-curve1">
      						You may think I’m small, but I have a universe inside my mind.
      					</textPath>
      				</text>
      			</svg>
      			<svg className="svgtext" data-filter-type="blur" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
      				<path id="text-curve11" d="M 0 100 Q 250 0 500 100 Q 750 200 1000 100" fill="none"/>
      				<text filter="url(#blur2)">
      					<textPath href="#text-curve11">
      						Don't forget about the stardust. Don't forget about the quartz rocks in the woods.
      					</textPath>
      				</text>
      			</svg>
      			<div className="grid">
      				<div className="grid__item">
      					<span className="grid__item-number">03</span>
      					<img className="grid__item-img" src={s.imagem3} alt="Some image" />
      					<h3 className="grid__item-title">{s.subtitulo3}</h3>
      					<p className="grid__item-description">{s.texto4}</p>
      				</div>
      				<div className="grid__item">
      					<span className="grid__item-number">04</span>
      					<img className="grid__item-img" src={s.imagem4} alt="Some image" />
      					<h3 className="grid__item-title">{s.subtitulo4}</h3>
      					<p className="grid__item-description">{s.texto5}</p>
      				</div>
      			</div>
      			<img className="bigimg" src={s.imagem5} alt="Some image" />
      			<svg className="svgtext svgtext--2" data-filter-type="distortion" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
      				<path id="text-curve2" d="M 0 50 Q 100 0 200 100 Q 300 200 650 50 C 750 0 750 150 1000 50" fill="none"/>
      				<text filter="url(#distortionFilter)">
      					<textPath href="#text-curve2">
      					Dwell on the beauty of life. Watch the stars.
      					</textPath>
      				</text>
      			</svg>
      			<svg className="svgtext" data-filter-type="distortion" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 300">
      				<path id="text-curve22" d="M 0 200 Q 150 300 300 200 Q 700 0 1000 150" fill="none"/>
      				<text filter="url(#distortionFilter2)">
      					<textPath href="#text-curve22">
      					The cosmos is within us. We are made of star-stuff.
      					</textPath>
      				</text>
      			</svg>
      			<div className="grid">
      				<div className="grid__item">
      					<span className="grid__item-number">05</span>
      					<img className="grid__item-img" src={s.imagem6} alt="Some image" />
      					<h3 className="grid__item-title">{s.subtitulo5}</h3>
      					<p className="grid__item-description">{s.texto6}</p>
      				</div>
      				<div className="grid__item">
      					<span className="grid__item-number">06</span>
      					<img className="grid__item-img" src={s.imagem7} alt="Some image" />
      					<h3 className="grid__item-title">{s.subtitulo6}</h3>
      					<p className="grid__item-description">{s.texto7}</p>
      				</div>
      			</div>
      			<svg className="svgtext svgtext--3" data-filter-type="blur" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
      				<path id="text-curve3" d="M 0 150 Q 200 50 500 50 Q 800 50 1000 150 " fill="none"/>
      				<text filter="url(#blur)">
      					<textPath href="#text-curve3">
      					When it is dark enough, you can see the stars.
      					</textPath>
      				</text>
      			</svg>
      			<svg className="svgtext svgtext--3" data-filter-type="blur" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
      				<path id="text-curve4" d="M 0 150 Q 200 50 500 50 Q 800 50 1000 150 " fill="none"/>
      				<text filter="url(#blur)">
      					<textPath href="#text-curve4">
      					It is not the man who has too little, but the man who craves more, that is poor.
      					</textPath>
      				</text>
      			</svg>
      			<svg className="svgtext svgtext--3" data-filter-type="blur" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
      				<path id="text-curve5" d="M 0 150 Q 200 50 500 50 Q 800 50 1000 150 " fill="none"/>
      				<text filter="url(#blur)">
      					<textPath href="#text-curve5">
      					Live by love though the stars walk backward.
      					</textPath>
      				</text>
      			</svg>
      			<img className="bigimg" src={s.imagem8} alt="Some image" />
      			<div className="grid-wrap">
      				<svg className="svgtext svgtext--4" data-filter-type="blur" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
      					<path id="textcircle" d="M 0 0 Q 200 150 500 150 Q 850 150 1000 0 " fill="none"/>
      					<text filter="url(#blur)">
      						<textPath href="#textcircle">
      						Yours is the light by which my spirit's born: you are my sun, my moon, and all my stars.
      						</textPath>
      					</text>
      				</svg>
      				<div className="grid">
      					<div className="grid__item">
      						<span className="grid__item-number">07</span>
      						<img className="grid__item-img" src={s.imagem9} alt="Some image" />
      						<h3 className="grid__item-title">{s.subtitulo7}</h3>
      						<p className="grid__item-description">{s.texto8}</p>
      					</div>
      					<div className="grid__item">
      						<span className="grid__item-number">08</span>
      						<img className="grid__item-img" src={s.imagem10} alt="Some image" />
      						<h3 className="grid__item-title">{s.subtitulo8}</h3>
      						<p className="grid__item-description">{s.texto9}</p>
      					</div>
      				</div>
      			</div>
      	
      		</main>
    </section>
  );
}