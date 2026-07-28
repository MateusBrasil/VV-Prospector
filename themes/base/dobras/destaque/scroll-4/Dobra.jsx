"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-4
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: modulo-es).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   import { preloadImages, preloadFonts } from './utils.js';
  //   
  //   Splitting();
  //   
  //   // toggle effect button
  //   const toggleButton = document.querySelector('button.cover__button');
  //   // .clip element
  //   const clipElement = document.querySelector('.clip');
  //   // .clip element > .clip__img
  //   const clipImage = clipElement.querySelector('.clip__img');
  //   // .slide elements (except current)
  //   const slides = document.querySelectorAll('.slide:not(.slide--current)');
  //   // slides parent
  //   const slider = document.querySelector('.slides');
  //   // cover title and chars
  //   const title = document.querySelector('.cover__title');
  //   const titleChars = title.querySelectorAll('.char');
  //   // true if the large image preview is open. Starts open.
  //   let isOpen = true;
  //   // true if animation in progress
  //   let isAnimating = false;
  //   
  //   // toggle effect function
  //   const toggleEffect = () => {
  //   
  //       if ( isAnimating ) return;
  //   
  //       if ( isOpen ) {
  //           showSlider();
  //       }
  //       else {
  //           showPreview();
  //       }
  //   
  //       isOpen = !isOpen;
  //       
  //   };
  //   
  //   // effect for showing the slider
  //   const showSlider = () => {
  //   
  //       isAnimating = true;
  //       
  //       gsap
  //       .timeline({
  //           defaults: {
  //               duration: 1.2,
  //               ease: 'power4.inOut',
  //           },
  //           onComplete: () => isAnimating = false
  //       })
  //       .addLabel('start', 0)
  //       
  //       .set(slider, {perspective: 1000})
  //       .set(clipElement, {willChange: 'clip-path'})
  //       .set(titleChars, {transformOrigin: '50% 100%'})
  //   
  //       // the cip element and its image
  //       .to(clipElement, {
  //           clipPath: 'inset(22% 39% round 23vw)',
  //       }, 'start')
  //       .to(clipImage, {
  //           scale: .8
  //       }, 'start')
  //   
  //       // all the other slides/images
  //       .fromTo(slides, {
  //           opacity: 0,
  //           z: 600
  //       }, {
  //           duration: 1.4,
  //           ease: 'power3.inOut',
  //           stagger: {
  //               amount: 0.15,
  //               from: 'center'
  //           },
  //           opacity: 1,
  //           z: 0,
  //       }, 'start')
  //   
  //       // title chars
  //       .to(titleChars, {
  //           duration: 1,
  //           scaleY: 0,
  //           stagger: {
  //               amount: 0.2,
  //               from: 'center'
  //           }
  //       }, 'start');
  //   
  //   };
  //   
  //   // effect for showing the large preview image
  //   const showPreview = () => {
  //   
  //       isAnimating = true;
  //   
  //       gsap
  //       .timeline({
  //           defaults: {
  //               duration: 1.2,
  //               ease: 'expo.inOut',
  //           },
  //           onComplete: () => isAnimating = false
  //       })
  //       .addLabel('start', 0)
  //       .set(clipElement, {willChange: 'clip-path'})
  //       .set(clipElement, {willChange: 'clip-path'})
  //       
  //       .to(slides, {
  //           stagger: {
  //               amount: 0.1,
  //               from: 'edges'
  //           },
  //           opacity: 0,
  //           z: 600
  //       }, 'start')
  //   
  //       .addLabel('clip', 'start+=0.15')
  //   
  //       .to(clipImage, {
  //           scale: 1
  //       }, 'clip')
  //   
  //       .fromTo(clipElement, {
  //           clipPath: 'inset(22% 39% round 23vw)'
  //       }, {
  //           clipPath: 'inset(0% 0% round 0vw)'
  //       }, 'clip+=0.1')
  //   
  //       // filter
  //       .fromTo(clipImage, {
  //           filter: 'brightness(100%) saturate(100%)'
  //       }, {
  //           duration: 0.4,
  //           ease: 'power1.in',
  //           filter: 'brightness(200%) saturate(200%)'
  //       }, 'clip+=0.1')
  //       .to(clipImage, {
  //           duration: 0.8,
  //           ease: 'power1',
  //           filter: 'brightness(100%) saturate(100%)'
  //       }, 'clip+=0.4')
  //   
  //       // title chars
  //       .to(titleChars, {
  //           duration: 1,
  //           scaleY: 1,
  //           stagger: {
  //               amount: 0.2,
  //               from: 'center'
  //           }
  //       }, 'clip');
  //   
  //   };
  //   
  //   // toggle effect click event
  //   toggleButton.addEventListener('click', () => toggleEffect());
  //   
  //   // Preload images and fonts
  //   Promise.all([preloadImages('.slide__img'), preloadFonts('lui6fbi')]).then(() => {
  //       document.body.classList.remove('loading')
  //   });
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-4" ref={raiz}>
      <main>
      			<div className="frame">
      				<div className="frame__title"> 
      					<h1 className="frame__title-main">{s.titulo}</h1> 
      					<a aria-label="Back to the article" className="frame__title-back" href={s.destino || '#'}> 
      						<span className="oh__inner">{s.rotulo}</span> 
      						<svg width="18px" height="18px" viewBox="0 0 24 24"><path vectorEffect="non-scaling-stroke" d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
      						</svg>
      					</a>
      				</div>
      				<a className="frame__prev" href={s.destino2 || '#'}>{s.acao}</a>
      				<nav className="frame__demos">
      					<span>{s.rotulo2}</span>
      					<a href="index.html" className="frame__demo frame__demo--current">1</a>
      					<a href="index2.html" className="frame__demo">2</a>
      					<a href="index3.html" className="frame__demo">3</a>
      					<a href="index4.html" className="frame__demo">4</a>
      				</nav>
      			</div>
      			<div className="slides">
      				<div className="slide"><div className="slide__img" style={{backgroundImage: `url(${s.imagem})`}}></div></div>
      				<div className="slide"><div className="slide__img" style={{backgroundImage: `url(${s.imagem2})`}}></div></div>
      				<div className="slide slide--current"><div className="slide__img" style={{backgroundImage: `url(${s.imagem3})`}}></div></div>
      				<div className="slide"><div className="slide__img" style={{backgroundImage: `url(${s.imagem4})`}}></div></div>
      				<div className="slide"><div className="slide__img" style={{backgroundImage: `url(${s.imagem5})`}}></div></div>
      			</div>
      			<div className="clip"><div className="clip__img" style={{backgroundImage: `url(${s.imagem6})`}}></div></div>
      			<div className="cover">
      				<h2 className="cover__title" data-splitting>{s.titulo2}</h2>
      				<button className="cover__button unbutton" onClick={s.onClick}>{s.acao2}</button>
      			</div>
      		</main>
    </section>
  );
}