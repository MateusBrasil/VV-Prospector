"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/transicoes-de-pagina/transicao-pagina-10
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
  //   import { preloadImages } from './utils';
  //   import { gsap } from 'gsap';
  //   import { TypeTransition } from './typeTransition';
  //   import { Item } from './item';
  //   
  //   // preload images then remove loader (loading class) 
  //   preloadImages('.item__img, .article__img').then(() => document.body.classList.remove('loading'));
  //   
  //   // text transition
  //   const typeT = new TypeTransition(document.querySelector('[data-type-transition]'));
  //   
  //   // true if there's an animation running
  //   let isAnimating = false;
  //   
  //   // frame element
  //   const frameEl = document.querySelector('.frame');
  //   
  //   
  //   /**** Items ****/
  //   
  //   // items array
  //   let itemsInstanceArr = [];
  //   // current item's index
  //   let currentItem = -1;
  //   // Items wrap 
  //   const itemsWrap = document.querySelector('.item-wrap');
  //   
  //   [...itemsWrap.querySelectorAll('.item')].forEach(itemEl => {
  //       // create a new Item
  //       const item = new Item(itemEl);
  //       // add it to the array of Item's indexes
  //       itemsInstanceArr.push(item);
  //       
  //       // on click action
  //       item.DOM.el.addEventListener('click', () => openItem(item));
  //   });
  //   
  //   const openItem = item => {
  //       if ( isAnimating ) return;
  //       isAnimating = true;
  //   
  //       // update currentItem index
  //       currentItem = itemsInstanceArr.indexOf(item);
  //       
  //       // gsap timeline
  //       const openTimeline = gsap.timeline({
  //           onComplete: () => isAnimating = false
  //       });
  //       
  //       // labels
  //       openTimeline.addLabel('start', 0)
  //       // type transition starts a bit after the items animation
  //       .addLabel('typeTransition', 0.3)
  //       // the article will show a bit before the text transition ends
  //       .addLabel('articleOpening', typeT.in().totalDuration()*.75 + openTimeline.labels.typeTransition)
  //   
  //       // fade out the items
  //       .to(itemsInstanceArr.map(item => item.DOM.el), {
  //           duration: 0.8,
  //           ease: 'power2.inOut',
  //           opacity: 0,
  //           y: (pos) => pos%2 ? '25%' : '-25%'
  //       }, 'start')
  //       // fade out the page frame
  //       .to(frameEl, {
  //           duration: 0.8,
  //           ease: 'power3',
  //           opacity: 0,
  //           onComplete: () => gsap.set(frameEl, {pointerEvents: 'none'})
  //       }, 'start')
  //       
  //       // text transition starts here
  //       .add(typeT.in().play(), 'typeTransition')
  //   
  //       // add current class to the item's article and set the pointer events
  //       .add(() => {
  //           gsap.set(backCtrl, {pointerEvents: 'auto'})
  //           gsap.set(itemsWrap, { pointerEvents: 'none' });
  //           itemsInstanceArr[currentItem].DOM.article.classList.add('article--current');
  //       }, 'articleOpening')
  //       // show the back button
  //       .to(backCtrl, {
  //           duration: 0.7,
  //           opacity: 1
  //       }, 'articleOpening')
  //       // initially hide all the article elements so we can animate them in
  //       .set([item.article.DOM.title, item.article.DOM.number, item.article.DOM.intro, item.article.DOM.description], {
  //           opacity: 0,
  //           y: '50%'
  //       }, 'articleOpening')
  //       // the image wrap and image elements will have opposite translate values (reveal/unreveal effect)
  //       .set(item.article.DOM.imageWrap, {y: '100%'}, 2)
  //       .set(item.article.DOM.image, {y: '-100%'}, 2)
  //       // now fade in and translate the article's elements
  //       .to([item.article.DOM.title, item.article.DOM.number, item.article.DOM.intro, item.article.DOM.description], {
  //           duration: 1,
  //           ease: 'expo',
  //           opacity: 1,
  //           y: '0%',
  //           stagger: 0.04
  //       }, 'articleOpening')
  //       // and reveal the image
  //       .to([item.article.DOM.imageWrap, item.article.DOM.image], {
  //           duration: 1,
  //           ease: 'expo',
  //           y: '0%'
  //       }, 'articleOpening');
  //   }
  //   
  //   
  //   /**** Back action ****/
  //   
  //   // back button
  //   const backCtrl = document.querySelector('.back');
  //   
  //   const closeItem = () => {
  //       if ( isAnimating ) return;
  //       isAnimating = true;
  //   
  //       // current open item
  //       const item = itemsInstanceArr[currentItem];
  //   
  //       // gsap timeline
  //       const closeTimeline = gsap.timeline({
  //           onComplete: () => isAnimating = false
  //       });
  //   
  //       // labels
  //       closeTimeline.addLabel('start', 0)
  //       .addLabel('typeTransition', 0.5)
  //       .addLabel('showItems', typeT.out().totalDuration()*0.7 + closeTimeline.labels.typeTransition)
  //   
  //       .to(backCtrl, {
  //           duration: 0.7,
  //           ease: 'power1',
  //           opacity: 0
  //       }, 'start')
  //       .to([item.article.DOM.title, item.article.DOM.number, item.article.DOM.intro, item.article.DOM.description], {
  //           duration: 1,
  //           ease: 'power4.in',
  //           opacity: 0,
  //           y: '50%',
  //           stagger: -0.04
  //       }, 'start')
  //       .to(item.article.DOM.imageWrap, {
  //           duration: 1,
  //           ease: 'power4.in',
  //           y: '100%'
  //       }, 'start')
  //       .to(item.article.DOM.image, {
  //           duration: 1,
  //           ease: 'power4.in',
  //           y: '-100%'
  //       }, 'start')
  //   
  //       // remove current class from the item's article and set the pointer events
  //       .add(() => {
  //           gsap.set(backCtrl, {pointerEvents: 'none'})
  //           gsap.set(itemsWrap, { pointerEvents: 'auto' });
  //           item.DOM.article.classList.remove('article--current');
  //       })
  //   
  //       // text transition starts here
  //       .add(typeT.out().play(), 'typeTransition')
  //   
  //       .to(frameEl, {
  //           duration: 0.8,
  //           ease: 'power3',
  //           opacity: 1,
  //           onStart: () => gsap.set(frameEl, {pointerEvents: 'auto'})
  //       }, 'showItems')
  //       .to(itemsInstanceArr.map(item => item.DOM.el), {
  //           duration: 1,
  //           ease: 'power3.inOut',
  //           opacity: 1,
  //           y: '0%'
  //       }, 'showItems');
  //   }
  //   
  //   backCtrl.addEventListener('click', () => closeItem());
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="transicao-transicao-pagina-10" ref={raiz}>
      <main>
      			<div className="type" data-type-transition aria-hidden="true">
      				<div className="type__line">bonjour bonjour bonjour</div>
      				<div className="type__line">attrayant attrayant attrayant</div>
      				<div className="type__line">charmante charmante charmante</div>
      				<div className="type__line">rosetta rosetta rosetta</div>
      				<div className="type__line">tendresse tendresse tendresse</div>
      				<div className="type__line">chatoyer chatoyer chatoyer</div>
      				<div className="type__line">bonjour bonjour bonjour</div>
      				<div className="type__line">attrayant attrayant attrayant</div>
      				<div className="type__line">charmante charmante charmante</div>
      				<div className="type__line">rosetta rosetta rosetta</div>
      				<div className="type__line">tendresse tendresse tendresse</div>
      			</div>
      			<div className="frame">
      				<div className="frame__title-wrap">
      					<h1 className="frame__title">{s.titulo}</h1>
      					<p className="frame__tagline">Inspired by this <a href={s.destino || '#'}>{s.acao}</a></p>
      				</div>
      				<div className="frame__author"><a href={s.destino2 || '#'} className="link-alt">@</a></div>
      		
      			</div>
      			<section className="item-wrap">
      				<figure className="item" data-article="article-1">
      					<img className="item__img" src={s.imagem5} alt="Some title" />
      					<figcaption className="item__caption">
      						<h2 className="item__caption-title">{s.titulo2}</h2>
      						<p className="item__caption-description">{s.texto}</p>
      					</figcaption>
      				</figure>
      				<figure className="item" data-article="article-2">
      					<img className="item__img" src={s.imagem6} alt="Some title" />
      					<figcaption className="item__caption">
      						<h2 className="item__caption-title">{s.titulo3}</h2>
      						<p className="item__caption-description">{s.texto2}</p>
      					</figcaption>
      				</figure>
      				<figure className="item" data-article="article-3">
      					<img className="item__img" src={s.imagem7} alt="Some title" />
      					<figcaption className="item__caption">
      						<h2 className="item__caption-title">{s.titulo4}</h2>
      						<p className="item__caption-description">{s.texto3}</p>
      					</figcaption>
      				</figure>
      				<figure className="item" data-article="article-4">
      					<img className="item__img" src={s.imagem8} alt="Some title" />
      					<figcaption className="item__caption">
      						<h2 className="item__caption-title">{s.titulo5}</h2>
      						<p className="item__caption-description">{s.texto4}</p>
      					</figcaption>
      				</figure>
      			</section>
      			<section className="article-wrap">
      				<button className="back" onClick={s.onClick}><svg viewBox="0 0 50 9" width="100%"><path d="M0 4.5l5-3M0 4.5l5 3M50 4.5h-77"></path></svg></button>
      				<article className="article" id="article-1">
      					<div className="article__img-wrap"><div className="article__img" style={{backgroundImage: `url(${s.imagem})`}}></div></div>
      					<span className="article__number">01</span>
      					<h2 className="article__title">{s.titulo6}</h2>
      					<p className="article__intro">{s.texto5}</p>
      					<p className="article__description">{s.texto6}</p>
      				</article>
      				<article className="article" id="article-2">
      					<div className="article__img-wrap"><div className="article__img" style={{backgroundImage: `url(${s.imagem2})`}}></div></div>
      					<span className="article__number">02</span>
      					<h2 className="article__title">{s.titulo7}</h2>
      					<p className="article__intro">{s.texto7}</p>
      					<p className="article__description">{s.texto8}</p>
      				</article>
      				<article className="article" id="article-3">
      					<div className="article__img-wrap"><div className="article__img" style={{backgroundImage: `url(${s.imagem3})`}}></div></div>
      					<span className="article__number">03</span>
      					<h2 className="article__title">{s.titulo8}</h2>
      					<p className="article__intro">{s.texto9}</p>
      					<p className="article__description">{s.texto10}</p>
      				</article>
      				<article className="article" id="article-4">
      					<div className="article__img-wrap"><div className="article__img" style={{backgroundImage: `url(${s.imagem4})`}}></div></div>
      					<span className="article__number">04</span>
      					<h2 className="article__title">{s.titulo9}</h2>
      					<p className="article__intro">{s.texto11}</p>
      					<p className="article__description">{s.texto12}</p>
      				</article>
      			</section>
      		</main>
    </section>
  );
}