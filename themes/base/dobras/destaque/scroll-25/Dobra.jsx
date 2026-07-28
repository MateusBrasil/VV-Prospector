"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-25
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
  //   import { map, calcWinsize, preloadImages, deepEqual } from './utils';
  //   import LocomotiveScroll from 'locomotive-scroll';
  //   
  //   const MAX_SCROLL_DISTANCE = 400;
  //   const LAYER_BOUNDS = {min: 0, max: 101}; // percentage values
  //   const shiftEl = document.querySelector('.shift');
  //   let shiftDirection = 'h';
  //   if ( shiftEl.classList.contains('shift--vertical') ) {
  //       shiftDirection = 'v';
  //   }
  //   else if ( shiftEl.classList.contains('shift--rotated') ) {
  //       shiftDirection = 'r';    
  //   }
  //   const layers = [...shiftEl.querySelectorAll('.shift__layer-inner')];
  //   const triggerEl = document.querySelector('#trigger');
  //   
  //   let currentScroll = 0;
  //   let winsize;
  //   let triggerTop;
  //   let cache = {};
  //   let layersTranslation = {x: 0, y: 0};
  //   
  //   const calcTriggerTop = () => triggerEl.getBoundingClientRect()['top']+currentScroll;
  //   
  //   const init = () => {
  //       winsize = calcWinsize(); 
  //       triggerTop = calcTriggerTop();
  //   };
  //   
  //   // Preload images then remove loader (loading class) from body
  //   preloadImages('.projects__img, .footer__img, .intro__gallery-item').then(() => {
  //       document.body.classList.remove('loading');
  //   
  //       const lscroll = new LocomotiveScroll({
  //           el: document.querySelector('[data-scroll-container]'),
  //           smooth: true,
  //           smartphone: {smooth: true},
  //           tablet: {smooth: true}
  //       });
  //       
  //       init();
  //   
  //       // Locomotive Scroll event
  //       lscroll.on('scroll', obj => {
  //           currentScroll = obj.scroll.y;
  //           layersTranslation.x = shiftDirection !== 'v' ? 0 : map(((currentScroll+winsize.height)-triggerTop), 0, MAX_SCROLL_DISTANCE, -1*LAYER_BOUNDS.max, LAYER_BOUNDS.min);
  //           layersTranslation.y = shiftDirection === 'v' ? 0 : map(((currentScroll+winsize.height)-triggerTop), 0, MAX_SCROLL_DISTANCE, shiftDirection === 'h' ? LAYER_BOUNDS.max : -1*LAYER_BOUNDS.max, LAYER_BOUNDS.min);
  //   
  //           // only update for different values
  //           if ( cache.layersTranslation && deepEqual(layersTranslation, cache.layersTranslation) ) {
  //               layers.forEach(layer => layer.style.transform = `translate3d(${layersTranslation.x}%, ${layersTranslation.y}%, 0)`);
  //           }
  //           // cache the last translation
  //           cache.layersTranslation = layersTranslation;
  //       });
  //   
  //       window.addEventListener('resize', init);
  //   
  //   });
  //   
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-25" ref={raiz}>
      <div className="bg"></div>
      		<div className="shift shift--horizontal">
      			<div className="shift__layer"><div className="shift__layer-inner"></div></div>
      			<div className="shift__layer"><div className="shift__layer-inner"></div></div>
      			<div className="shift__layer"><div className="shift__layer-inner"></div></div>
      			<div className="shift__layer"><div className="shift__layer-inner"></div></div>
      			<div className="shift__layer"><div className="shift__layer-inner"></div></div>
      		</div>
      		<main data-scroll-container className="blend">
      			<section className="intro frame">
      				<div className="intro__title">
      					<div className="intro__title-links">
      
      						<div className="demos">
      							<a className="current" href="index.html">{s.acao}</a>
      							<a href="index2.html">{s.acao2}</a>
      							<a href="index3.html">{s.acao3}</a>
      						</div>
      					</div>
      					<h1 className="intro__title-main">{s.titulo}</h1>
      					<p className="intro__title-sub">{s.texto}</p>
      				</div>
      				<div className="intro__gallery">
      					<div style={{backgroundImage: `url(${s.imagem})`}} className="intro__gallery-item invert"></div>
      					<div style={{backgroundImage: `url(${s.imagem2})`}} className="intro__gallery-item intro__gallery-item--top invert"></div>
      					<div style={{backgroundImage: `url(${s.imagem3})`}} className="intro__gallery-item invert"></div>
      				</div>
      				<button className="intro__menu-button invert" aria-label="Open Menu" onClick={s.onClick}>
      					<svg width="100%" height="100%" viewBox="0 0 105 105">
      						<circle fill="var(--base-600)" cx="52.5" cy="52.5" r="52.5"/>
      						<path className="lines" d="M40.5 46.208h25M40.5 52.208h25M40.5 58.208h25" stroke="var(--base-200)"/>
      					</svg>
      				</button>
      			</section>
      			<section className="present">
      				<p className="present__text present__text--large">{s.texto2}</p>
      				<p className="present__text present__text--small">{s.texto3}</p>
      			</section>
      			<section className="projects">
      				<div className="project__latest">Latest</div>
      				<h2 className="projects__title">
      					<span className="projects__title-main">{s.rotulo}</span>
      					<span className="projects__title-sub">{s.rotulo2}</span>
      				</h2>
      				<div className="projects__img projects__img--left invert" style={{backgroundImage: `url(${s.imagem4})`}}></div>
      				<div className="projects__img projects__img--right invert" style={{backgroundImage: `url(${s.imagem5})`}}></div>
      				<a className="projects__more" href="#">{s.acao4}</a>
      			</section>
      			<section className="present">
      				<p className="present__text present__text--large">{s.texto4}</p>
      				<div className="present__text present__text--small">
      					<p>{s.texto5}</p>
      					<p>{s.texto6}</p>
      				</div>
      				<div id="trigger" className="present__visual" style={{backgroundImage: `url(${s.imagem6})`}}></div>
      			</section>
      			<section className="type">
      				<a className="type__link">{s.acao5}</a>
      				<a className="type__link">{s.acao6}</a>
      				<a className="type__link">{s.acao7}</a>
      				<a className="type__link">{s.acao8}</a>
      				<a className="type__link">{s.acao9}</a>
      				<a className="type__link">{s.acao10}</a>
      				<a className="type__link">{s.acao11}</a>
      				<a className="type__link">{s.acao12}</a>
      				<a className="type__link">{s.acao13}</a>
      				<a className="type__link">{s.acao14}</a>
      				<a className="type__link">{s.acao15}</a>
      				<a className="type__link">{s.acao16}</a>
      				<a className="type__link">{s.acao17}</a>
      				<a className="type__link">{s.acao18}</a>
      				<a className="type__link">{s.acao19}</a>
      				<a className="type__link">{s.acao20}</a>
      			</section>
      			<section className="footer">
      				<ul className="footer__links">
      					<li><a href={s.destino || '#'}>{s.acao21}</a></li>
      		
      					<li><a>{s.acao22}</a></li>
      					<li><a>{s.acao23}</a></li>
      					<li><a>{s.acao24}</a></li>
      					<li><a>{s.acao25}</a></li>
      					<li><a>{s.acao26}</a></li>
      				</ul>
      				<h3 className="footer__author">{s.subtitulo}</h3>
      				<div className="footer__year">2022</div>
      				<div className="footer__img" style={{backgroundImage: `url(${s.imagem7})`}}></div>
      			</section>
      		</main>
    </section>
  );
}