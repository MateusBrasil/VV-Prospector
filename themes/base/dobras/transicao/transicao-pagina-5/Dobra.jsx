"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/transicoes-de-pagina/transicao-pagina-5
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
  //   import { Item } from './item';
  //   import { Preview } from './preview';
  //   
  //   // body element
  //   const body = document.body;
  //   
  //   // .content element
  //   const contentEl = document.querySelector('.content');
  //   
  //   // frame element
  //   const frameEl = document.querySelector('.frame');
  //   
  //   // top and bottom overlay overlay elements
  //   const overlayRows = [...document.querySelectorAll('.overlay__row')];
  //   
  //   // Preview instances array
  //   const previews = [];
  //   [...document.querySelectorAll('.preview')].forEach(preview => previews.push(new Preview(preview)));
  //   
  //   // Item instances array
  //   const items = [];
  //   [...document.querySelectorAll('.item')].forEach((item, pos) => items.push(new Item(item, previews[pos])));
  //   
  //   const openItem = item => {
  //       
  //       gsap.timeline({
  //           defaults: {
  //               duration: 1, 
  //               ease: 'power3.inOut'
  //           }
  //       })
  //       .add(() => {
  //           // pointer events none to the content
  //           contentEl.classList.add('content--hidden');
  //       }, 'start')
  //   
  //       .addLabel('start', 0)
  //       .set([item.preview.DOM.innerElements, item.preview.DOM.backCtrl], {
  //           opacity: 0
  //       }, 'start')
  //       .to(overlayRows, {
  //           scaleY: 1
  //       }, 'start')
  //   
  //       .addLabel('content', 'start+=0.6')
  //   
  //       .add(() => {
  //           body.classList.add('preview-visible');
  //   
  //           gsap.set(frameEl, {
  //               opacity: 0
  //           }, 'start')
  //           item.preview.DOM.el.classList.add('preview--current');
  //       }, 'content')
  //       // Image animation (reveal animation)
  //       .to([item.preview.DOM.image, item.preview.DOM.imageInner], {
  //           startAt: {y: pos => pos ? '101%' : '-101%'},
  //           y: '0%'
  //       }, 'content')
  //       
  //       .add(() => {
  //           for (const line of item.preview.multiLines) {
  //               line.in();
  //           }
  //           gsap.set(item.preview.DOM.multiLineWrap, {
  //               opacity: 1,
  //               delay:0.1
  //           })
  //       }, 'content')
  //       // animate frame element
  //       .to(frameEl, {
  //           ease: 'expo',
  //           startAt: {y: '-100%', opacity: 0},
  //           opacity: 1,
  //           y: '0%'
  //       }, 'content+=0.3')
  //       .to(item.preview.DOM.innerElements, {
  //           ease: 'expo',
  //           startAt: {yPercent: 101},
  //           yPercent: 0,
  //           opacity: 1
  //       }, 'content+=0.3')
  //       .to(item.preview.DOM.backCtrl, {
  //           opacity: 1
  //       }, 'content')
  //   
  //   };
  //   
  //   const closeItem = item => {
  //       
  //       gsap.timeline({
  //           defaults: {
  //               duration: 1, 
  //               ease: 'power3.inOut'
  //           }
  //       })
  //       .addLabel('start', 0)
  //       .to(item.preview.DOM.innerElements, {
  //           yPercent: -101,
  //           opacity: 0,
  //       }, 'start')
  //       .add(() => {
  //           for (const line of item.preview.multiLines) {
  //               line.out();
  //           }
  //       }, 'start')
  //       
  //       .to(item.preview.DOM.backCtrl, {
  //           opacity: 0
  //       }, 'start')
  //   
  //       .to(item.preview.DOM.image, {
  //           y: '101%'
  //       }, 'start')
  //       .to(item.preview.DOM.imageInner, {
  //           y: '-101%'
  //       }, 'start')
  //       
  //       // animate frame element
  //       .to(frameEl, {
  //           opacity: 0,
  //           y: '-100%',
  //           onComplete: () => {
  //               body.classList.remove('preview-visible');
  //               gsap.set(frameEl, {
  //                   opacity: 1,
  //                   y: '0%'
  //               })
  //           }
  //       }, 'start')
  //   
  //       .addLabel('grid', 'start+=0.6')
  //   
  //       .to(overlayRows, {
  //           //ease: 'expo',
  //           scaleY: 0,
  //           onComplete: () => {
  //               item.preview.DOM.el.classList.remove('preview--current');
  //               contentEl.classList.remove('content--hidden');
  //           }
  //       }, 'grid')
  //   };
  //   
  //   for (const item of items) {
  //       // Opens the item preview
  //       item.DOM.link.addEventListener('click', () => openItem(item));
  //       // Closes the item preview
  //       item.preview.DOM.backCtrl.addEventListener('click', () => closeItem(item));
  //   }
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="transicao-transicao-pagina-5" ref={raiz}>
      <main>
      			<div className="frame">
      				<div className="frame__title"> 
      					<h1 className="frame__title-main">{s.titulo}</h1>
      					<a aria-label="Back to the article" className="frame__title-back" href=""> 
      						<span className="oh__inner">{s.rotulo}</span> 
      						<svg width="18px" height="18px" viewBox="0 0 24 24"><path vectorEffect="non-scaling-stroke" d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
      						</svg>
      					</a>
      					<br />
      					<a href={s.destino || '#'} className="frame__title-prev">{s.acao}</a> 
      				</div>
      				<div className="frame__credits">Based on Vitalii Burhonskyi's <a href={s.destino2 || '#'}>{s.acao2}</a></div>
      			</div>
      			<div className="content">
      				<div className="item">
      					<span className="item__meta">2020</span>
      					<h2 className="item__title">{s.titulo2}</h2>
      					<div className="item__img"><div className="item__img-inner" style={{backgroundImage: `url(${s.imagem})`}}></div></div>
      					<p className="item__desc">{s.texto}</p>
      					<a className="item__link">{s.acao3}</a>
      				</div>
      				<div className="item">
      					<span className="item__meta">2021</span>
      					<h2 className="item__title">{s.titulo3}</h2>
      					<div className="item__img"><div className="item__img-inner" style={{backgroundImage: `url(${s.imagem2})`}}></div></div>
      					<p className="item__desc">{s.texto2}</p>
      					<a className="item__link">{s.acao4}</a>
      				</div>
      				<div className="item">
      					<span className="item__meta">2022</span>
      					<h2 className="item__title">{s.titulo4}</h2>
      					<div className="item__img"><div className="item__img-inner" style={{backgroundImage: `url(${s.imagem3})`}}></div></div>
      					<p className="item__desc">{s.texto3}</p>
      					<a className="item__link">{s.acao5}</a>
      				</div>
      			</div>
      			<div className="overlay">
      				<div className="overlay__row"></div>
      				<div className="overlay__row"></div>
      			</div>
      			<section className="previews">
      				<div className="preview">
      					<div className="preview__img"><div className="preview__img-inner" style={{backgroundImage: `url(${s.imagem4})`}}></div></div>
      					<h2 className="preview__title oh"><span className="oh__inner">{s.rotulo2}</span></h2>
      					<div className="preview__column preview__column--start">
      						<span className="preview__column-title preview__column-title--main oh"><span className="oh__inner">{s.rotulo3}</span></span>
      						<span className="oh"><span className="oh__inner">2020</span></span>
      					</div>
      					<div className="preview__column">
      						<h3 className="preview__column-title oh"><span className="oh__inner">{s.rotulo4}</span></h3>
      						<p>{s.texto4}</p>
      					</div>
      					<div className="preview__column">
      						<h3 className="preview__column-title oh"><span className="oh__inner">{s.rotulo5}</span></h3>
      						<p>{s.texto5}</p>
      					</div>
      					<button className="unbutton preview__back" onClick={s.onClick}><svg width="100px" height="18px" viewBox="0 0 50 9"><path vectorEffect="non-scaling-stroke" d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path></svg></button>
      				</div>
      				<div className="preview">
      					<div className="preview__img"><div className="preview__img-inner" style={{backgroundImage: `url(${s.imagem5})`}}></div></div>
      					<h2 className="preview__title oh"><span className="oh__inner">{s.rotulo6}</span></h2>
      					<div className="preview__column preview__column--start">
      						<span className="preview__column-title preview__column-title--main oh"><span className="oh__inner">{s.rotulo7}</span></span>
      						<span className="oh"><span className="oh__inner">2021</span></span>
      					</div>
      					<div className="preview__column">
      						<h3 className="preview__column-title oh"><span className="oh__inner">{s.rotulo8}</span></h3>
      						<p>{s.texto6}</p>
      					</div>
      					<div className="preview__column">
      						<h3 className="preview__column-title oh"><span className="oh__inner">{s.rotulo9}</span></h3>
      						<p>{s.texto7}</p>
      					</div>
      					<button className="unbutton preview__back" onClick={s.onClick}><svg width="100px" height="18px" viewBox="0 0 50 9"><path vectorEffect="non-scaling-stroke" d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path></svg></button>
      				</div>
      				<div className="preview">
      					<div className="preview__img"><div className="preview__img-inner" style={{backgroundImage: `url(${s.imagem6})`}}></div></div>
      					<h2 className="preview__title oh"><span className="oh__inner">{s.rotulo10}</span></h2>
      					<div className="preview__column preview__column--start">
      						<span className="preview__column-title preview__column-title--main oh"><span className="oh__inner">{s.rotulo11}</span></span>
      						<span className="oh"><span className="oh__inner">2022</span></span>
      					</div>
      					<div className="preview__column">
      						<h3 className="preview__column-title oh"><span className="oh__inner">{s.rotulo12}</span></h3>
      						<p>{s.texto8}</p>
      					</div>
      					<div className="preview__column">
      						<h3 className="preview__column-title oh"><span className="oh__inner">{s.rotulo13}</span></h3>
      						<p>{s.texto9}</p>
      					</div>
      					<button className="unbutton preview__back" onClick={s.onClick}><svg width="100px" height="18px" viewBox="0 0 50 9"><path vectorEffect="non-scaling-stroke" d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path></svg></button>
      				</div>
      			</section>
      		</main>
    </section>
  );
}