"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/transicoes-de-pagina/transicao-pagina-9
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
  //   import { gsap } from 'gsap';
  //   import { preloadImages } from './utils';
  //   import { ContentItem } from './contentItem';
  //   import { PreviewItem } from './previewItem';
  //   
  //   // Body 
  //   const bodyEl = document.body;
  //   
  //   // Content overlay
  //   const contentOverlayInner = document.querySelector('.content__overlay > .overlay__inner');
  //   gsap.set(contentOverlayInner, {
  //       xPercent: -100
  //   })
  //   // Preview Items
  //   const previewItems = [];
  //   [...document.querySelectorAll('.preview__item')].forEach(previewItem => {
  //       previewItems.push(new PreviewItem(previewItem));
  //   });
  //   
  //   // Content Items
  //   const contentItems = [];
  //   [...document.querySelectorAll('.content__item')].forEach((contentItem, pos) => {
  //       contentItems.push(new ContentItem(contentItem, previewItems[pos]));
  //   });
  //   
  //   // current element
  //   let current = -1;
  //   
  //   // check if currently animating
  //   let isAnimating = false;
  //   
  //   // Back control
  //   const backCtrl = document.querySelector('.preview__back');
  //   
  //   // Events
  //   for (const [pos, contentItem] of contentItems.entries()) {
  //       
  //       // click on a content item
  //       contentItem.DOM.imgWrap.addEventListener('click', () => {
  //           if ( isAnimating ) return;
  //           isAnimating = true;
  //   
  //           current = pos;
  //   
  //           const previewItem = previewItems[pos];
  //           
  //           gsap.timeline({
  //               defaults: {
  //                   duration: 1.1,
  //                   ease: 'expo',
  //               },
  //               onStart: () => {
  //                   bodyEl.classList.add('preview-open');
  //                   gsap.set(previewItem.DOM.img, {xPercent: 100});
  //                   gsap.set(previewItem.DOM.imgWrap, {xPercent: -102, opacity: 0});
  //   
  //                   gsap.set(previewItem.DOM.slideTexts, {yPercent: 100});
  //                   gsap.set(previewItem.DOM.descriptions, {yPercent: 15, opacity: 0});
  //                   
  //                   gsap.set(backCtrl, {x: '+=15%', opacity: 0});
  //   
  //                   previewItem.DOM.el.classList.add('preview__item--current');
  //               },
  //               onComplete: () => isAnimating = false
  //           })
  //           .addLabel('start', 0)
  //           .addLabel('preview', 'start+=0.3')
  //           .to(contentOverlayInner, {
  //               ease: 'power2',
  //               startAt: {xPercent: -100},
  //               xPercent: 0
  //           }, 'start')
  //           .to([previewItem.DOM.img, previewItem.DOM.imgWrap], {
  //               xPercent: 0,
  //           }, 'preview')
  //           .to(previewItem.DOM.imgWrap, {
  //               opacity: 1,
  //           }, 'preview')
  //           .to(previewItem.DOM.slideTexts, {
  //               yPercent: 0,
  //               stagger: 0.05,
  //           }, 'preview')
  //           .to(previewItem.DOM.descriptions, {
  //               ease: 'power2',
  //               opacity: 1,
  //               stagger: 0.05,
  //           }, 'preview')
  //           .to(previewItem.DOM.descriptions, {
  //               yPercent: 0,
  //               stagger: 0.05,
  //           }, 'preview')
  //           .to(backCtrl, {
  //               ease: 'power2',
  //               opacity: 1,
  //               x: '-=15%'
  //           }, 'preview');
  //       });
  //       
  //       // mouseenter / mouseleave effect
  //       contentItem.DOM.imgWrap.addEventListener('mouseenter', () => {
  //           gsap.timeline({
  //               defaults: {
  //                   duration: 0.6,
  //                   ease: 'expo'
  //               }
  //           })
  //           .addLabel('start', 0)
  //           .set(contentItem.DOM.titleInner, {transformOrigin: '0% 50%'}, 'start')
  //           .to(contentItem.DOM.titleInner, {
  //               startAt: {filter: 'blur(0px)'},
  //               duration: 0.2,
  //               ease: 'power1.in',
  //               yPercent: -100,
  //               rotation: -4,
  //               filter: 'blur(6px)'
  //           }, 'start')
  //           .to(contentItem.DOM.titleInner, {
  //               startAt: {yPercent: 100, rotation: 4, filter: 'blur(6px)'},
  //               yPercent: 0,
  //               rotation: 0,
  //               filter: 'blur(0px)'
  //           }, 'start+=0.2')
  //           .to(contentItem.DOM.imgWrap, {
  //               scale: 0.95
  //           }, 'start')
  //           .to(contentItem.DOM.img, {
  //               scale: 1.2
  //           }, 'start')
  //       });
  //   
  //       contentItem.DOM.imgWrap.addEventListener('mouseleave', () => {
  //           gsap.timeline({
  //               defaults: {
  //                   duration: 0.8,
  //                   ease: 'power4'
  //               }
  //           })
  //           .addLabel('start', 0)
  //           .to([contentItem.DOM.imgWrap, contentItem.DOM.img], {
  //               scale: 1,
  //               //rotation: 0
  //           }, 'start');
  //       });
  //   
  //   }
  //   
  //   // Back to grid
  //   backCtrl.addEventListener('click', () => {
  //       if ( isAnimating ) return;
  //       isAnimating = true;
  //   
  //       const previewItem = previewItems[current];
  //       
  //       gsap.timeline({
  //           defaults: {
  //               duration: 1,
  //               ease: 'power4',
  //           },
  //           onComplete: () => {
  //               previewItem.DOM.el.classList.remove('preview__item--current');
  //               bodyEl.classList.remove('preview-open');
  //               isAnimating = false;
  //           }
  //       })
  //       .addLabel('start', 0)
  //       .to(backCtrl, {
  //           ease: 'power2',
  //           opacity: 0
  //       }, 'start')
  //       .to(previewItem.DOM.descriptions, {
  //           ease: 'power2',
  //           opacity: 0
  //       }, 'start')
  //       .to(previewItem.DOM.descriptions, {
  //           yPercent: 15
  //       }, 'start')
  //       .to(previewItem.DOM.slideTexts, {
  //           yPercent: 100
  //       }, 'start')
  //       .to(previewItem.DOM.img, {
  //           xPercent: -100,
  //       }, 'start')
  //       .to(previewItem.DOM.imgWrap, {
  //           xPercent: 100,
  //           opacity: 1
  //       }, 'start')
  //       .to(contentOverlayInner, {
  //           ease: 'power2',
  //           xPercent: 100,
  //       }, 'start+=0.4')
  //   });
  //   
  //   // Preload images
  //   preloadImages('.content__item-img').then(() => document.body.classList.remove('loading'));
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="transicao-transicao-pagina-9" ref={raiz}>
      <main>
      			<div className="frame">
      				<div className="frame__title"> 
      					<h1 className="frame__title-main">{s.titulo}</h1> 
      					<a aria-label="Back to the article" className="frame__title-back" href=""> 
      						<span className="oh__inner">{s.rotulo}</span> 
      						<svg width="16px" height="16px" viewBox="0 0 24 24"><path vectorEffect="non-scaling-stroke" d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
      						</svg>
      					</a>
      				</div>
      				<a className="frame__prev" href={s.destino || '#'}>{s.acao}</a>
      				<nav className="frame__demos">
      					<span className="frame__demos-item">{s.rotulo2}</span>
      					<a className="frame__demos-item" href="index2.html">{s.acao2}</a>
      					<a className="frame__demos-item" href="index3.html">{s.acao3}</a>
      				</nav>
      			</div>
      			<div className="content">
      				<figure className="content__item">
      					<h2 className="content__item-title oh"><span className="oh__inner">{s.rotulo3}</span></h2>
      					<div className="content__item-img-wrap">
      						<div className="content__item-img" style={{backgroundImage: `url(${s.imagem})`}}></div>
      					</div>
      					<figcaption className="content__item-caption">
      						You could be my unintended
      						Choice to live my life extended
      						You could be the one I'll always love
      					</figcaption>
      				</figure>
      				<figure className="content__item">
      					<h2 className="content__item-title oh"><span className="oh__inner">{s.rotulo4}</span></h2>
      					<div className="content__item-img-wrap">
      						<div className="content__item-img" style={{backgroundImage: `url(${s.imagem2})`}}></div>
      					</div>
      					<figcaption className="content__item-caption">
      						You could be the one who listens
      						To my deepest inquisitions
      						You could be the one I'll always love
      					</figcaption>
      				</figure>
      				<figure className="content__item">
      					<h2 className="content__item-title oh"><span className="oh__inner">{s.rotulo5}</span></h2>
      					<div className="content__item-img-wrap">
      						<div className="content__item-img" style={{backgroundImage: `url(${s.imagem3})`}}></div>
      					</div>
      					<figcaption className="content__item-caption">
      						I'll be there as soon as I can
      						But I'm busy mending broken
      						Pieces of the life I had before
      					</figcaption>
      				</figure>
      				<figure className="content__item">
      					<h2 className="content__item-title oh"><span className="oh__inner">{s.rotulo6}</span></h2>
      					<div className="content__item-img-wrap">
      						<div className="content__item-img" style={{backgroundImage: `url(${s.imagem4})`}}></div>
      					</div>
      					<figcaption className="content__item-caption">
      						First there was the one who challenged
      						All my dreams and all my balance
      						She could never be as good as you
      					</figcaption>
      				</figure>
      			</div>
      			<div className="content__overlay">
      				<div className="overlay__inner"></div>
      			</div>
      			<div className="preview">
      				<div className="preview__item">
      					<div className="preview__item-img-outer">
      						<div className="preview__item-img-wrap">
      							<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem5})`}}></div>
      						</div>
      					</div>
      					<h2 className="preview__item-title oh"><span className="oh__inner">{s.rotulo7}</span></h2>
      					<h3 className="preview__item-subtitle oh"><span className="oh__inner">{s.rotulo8}</span></h3>
      					<span className="preview__item-meta oh"><span className="oh__inner">2003</span></span>
      					<div className="preview__item-box preview__item-box--left">
      						<h3 className="preview__item-box-title oh"><span className="oh__inner">{s.rotulo9}</span></h3>
      						<p className="preview__item-box-desc">{s.texto}</p>
      					</div>
      					<div className="preview__item-box preview__item-box--right">
      						<h3 className="preview__item-box-title oh"><span className="oh__inner">{s.rotulo10}</span></h3>
      						<p className="preview__item-box-desc">{s.texto2}</p>
      					</div>
      				</div>
      				<div className="preview__item">
      					<div className="preview__item-img-outer">
      						<div className="preview__item-img-wrap">
      							<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem6})`}}></div>
      						</div>
      					</div>
      					<h2 className="preview__item-title oh"><span className="oh__inner">{s.rotulo11}</span></h2>
      					<h3 className="preview__item-subtitle oh"><span className="oh__inner">{s.rotulo12}</span></h3>
      					<span className="preview__item-meta oh"><span className="oh__inner">2007</span></span>
      					<div className="preview__item-box preview__item-box--left">
      						<h3 className="preview__item-box-title oh"><span className="oh__inner">{s.rotulo13}</span></h3>
      						<p className="preview__item-box-desc">{s.texto3}</p>
      					</div>
      					<div className="preview__item-box preview__item-box--right">
      						<h3 className="preview__item-box-title oh"><span className="oh__inner">{s.rotulo14}</span></h3>
      						<p className="preview__item-box-desc">{s.texto4}</p>
      					</div>
      				</div>
      				<div className="preview__item">
      					<div className="preview__item-img-outer">
      						<div className="preview__item-img-wrap">
      							<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem7})`}}></div>
      						</div>
      					</div>
      					<h2 className="preview__item-title oh"><span className="oh__inner">{s.rotulo15}</span></h2>
      					<h3 className="preview__item-subtitle oh"><span className="oh__inner">{s.rotulo16}</span></h3>
      					<span className="preview__item-meta oh"><span className="oh__inner">2010</span></span>
      					<div className="preview__item-box preview__item-box--left">
      						<h3 className="preview__item-box-title oh"><span className="oh__inner">{s.rotulo17}</span></h3>
      						<p className="preview__item-box-desc">{s.texto5}</p>
      					</div>
      					<div className="preview__item-box preview__item-box--right">
      						<h3 className="preview__item-box-title oh"><span className="oh__inner">{s.rotulo18}</span></h3>
      						<p className="preview__item-box-desc">{s.texto6}</p>
      					</div>
      				</div>
      				<div className="preview__item">
      					<div className="preview__item-img-outer">
      						<div className="preview__item-img-wrap">
      							<div className="preview__item-img" style={{backgroundImage: `url(${s.imagem8})`}}></div>
      						</div>
      					</div>
      					<h2 className="preview__item-title oh"><span className="oh__inner">{s.rotulo19}</span></h2>
      					<h3 className="preview__item-subtitle oh"><span className="oh__inner">{s.rotulo20}</span></h3>
      					<span className="preview__item-meta oh"><span className="oh__inner">2021</span></span>
      					<div className="preview__item-box preview__item-box--left">
      						<h3 className="preview__item-box-title oh"><span className="oh__inner">{s.rotulo21}</span></h3>
      						<p className="preview__item-box-desc">{s.texto7}</p>
      					</div>
      					<div className="preview__item-box preview__item-box--right">
      						<h3 className="preview__item-box-title oh"><span className="oh__inner">{s.rotulo22}</span></h3>
      						<p className="preview__item-box-desc">{s.texto8}</p>
      					</div>
      				</div>
      				<button className="unbutton preview__back" aria-label="Back to content" onClick={s.onClick}>
      					<svg width="200px" height="36px" viewBox="0 0 50 9">
      						<path vectorEffect="non-scaling-stroke" d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
      					</svg>
      				</button>
      			</div>
      		</main>
    </section>
  );
}