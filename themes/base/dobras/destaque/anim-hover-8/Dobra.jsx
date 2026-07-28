"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/hover-8
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
  //   import { preloadImages, preloadFonts } from './utils';
  //   import { preloader } from './preloader';
  //   import Cursor from './cursor';
  //   import MenuController from './menuController';
  //   
  //   // Preload images and fonts
  //   Promise.all([preloader('.menu__item'), preloadImages('.gallery__item-imginner'), preloadFonts('zkq2mjw')]).then(() => {
  //       // Remove loader (loading class)
  //       document.body.classList.remove('loading');
  //   
  //       // Initialize custom cursor
  //       const cursor = new Cursor(document.querySelector('.cursor'));
  //   
  //       // Initialize the MenuController
  //       new MenuController(document.querySelector('.menu'));
  //   
  //       // Mouse effects on all links and buttons
  //       [...document.querySelectorAll('a, .gallery__item-more, .back')].forEach(link => {
  //           link.addEventListener('mouseenter', () => cursor.enter());
  //           link.addEventListener('mouseleave', () => cursor.leave());
  //       });
  //   });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-anim-hover-8" ref={raiz}>
      <main>
      
      		<nav className="menu">
      			<a className="menu__item" data-img="img/1.jpg"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo}</span></span><sup className="menu__item-number">(5)</sup></a>
      			<a className="menu__item" data-img="img/6.jpg"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo2}</span></span><sup className="menu__item-number">(4)</sup></a>
      			<a className="menu__item" data-img="img/10.jpg"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo3}</span></span><sup className="menu__item-number">(3)</sup></a>
      			<a className="menu__item" data-img="img/13.jpg"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo4}</span></span><sup className="menu__item-number">(4)</sup></a>
      			<a className="menu__item" data-img="img/17.jpg"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo5}</span></span><sup className="menu__item-number">(4)</sup></a>
      			<a className="menu__item" data-img="img/21.jpg"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo6}</span></span><sup className="menu__item-number">(5)</sup></a>
      			<a className="menu__item" data-img="img/26.jpg"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo7}</span></span><sup className="menu__item-number">(6)</sup></a>
      			<a className="menu__item" data-img="img/32.jpg"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo8}</span></span><sup className="menu__item-number">(3)</sup></a>
      			<a className="menu__item" data-img="img/35.jpg"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo9}</span></span><sup className="menu__item-number">(4)</sup></a>
      			<a className="menu__item" data-img="img/39.jpg"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo10}</span></span><sup className="menu__item-number">(5)</sup></a>
      			<a className="menu__item" data-img="img/4.jpg"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo11}</span></span><sup className="menu__item-number">(3)</sup></a>
      			<a className="menu__item" data-img="img/7.jpg"><span className="menu__item-inner-wrap"><span className="menu__item-inner">{s.rotulo12}</span></span><sup className="menu__item-number">(4)</sup></a>
      		</nav>
      		<section className="content-wrap">
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo13}</span></span>
      					<sup className="content__title-number">(4)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo}</h3>
      							<p className="gallery__item-meta">{s.texto}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem2})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo2}</h3>
      							<p className="gallery__item-meta">{s.texto2}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem3})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo3}</h3>
      							<p className="gallery__item-meta">{s.texto3}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem4})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo4}</h3>
      							<p className="gallery__item-meta">{s.texto4}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem5})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo5}</h3>
      							<p className="gallery__item-meta">{s.texto5}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo14}</span></span>
      					<sup className="content__title-number">(4)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem6})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo6}</h3>
      							<p className="gallery__item-meta">{s.texto6}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem7})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo7}</h3>
      							<p className="gallery__item-meta">{s.texto7}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem8})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo8}</h3>
      							<p className="gallery__item-meta">{s.texto8}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem9})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo9}</h3>
      							<p className="gallery__item-meta">{s.texto9}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo15}</span></span>
      					<sup className="content__title-number">(3)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem10})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo10}</h3>
      							<p className="gallery__item-meta">{s.texto10}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem11})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo11}</h3>
      							<p className="gallery__item-meta">{s.texto11}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem12})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo12}</h3>
      							<p className="gallery__item-meta">{s.texto12}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo16}</span></span>
      					<sup className="content__title-number">(4)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem13})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo13}</h3>
      							<p className="gallery__item-meta">{s.texto13}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem14})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo14}</h3>
      							<p className="gallery__item-meta">{s.texto14}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem15})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo15}</h3>
      							<p className="gallery__item-meta">{s.texto15}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem16})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo16}</h3>
      							<p className="gallery__item-meta">{s.texto16}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo17}</span></span>
      					<sup className="content__title-number">(4)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem17})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo17}</h3>
      							<p className="gallery__item-meta">{s.texto17}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem18})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo18}</h3>
      							<p className="gallery__item-meta">{s.texto18}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem19})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo19}</h3>
      							<p className="gallery__item-meta">{s.texto19}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem20})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo20}</h3>
      							<p className="gallery__item-meta">{s.texto20}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo18}</span></span>
      					<sup className="content__title-number">(5)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem21})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo21}</h3>
      							<p className="gallery__item-meta">{s.texto21}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem22})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo22}</h3>
      							<p className="gallery__item-meta">{s.texto22}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem23})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo23}</h3>
      							<p className="gallery__item-meta">{s.texto23}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem24})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo24}</h3>
      							<p className="gallery__item-meta">{s.texto24}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem25})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo25}</h3>
      							<p className="gallery__item-meta">{s.texto25}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo19}</span></span>
      					<sup className="content__title-number">(6)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem26})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo26}</h3>
      							<p className="gallery__item-meta">{s.texto26}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem27})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo27}</h3>
      							<p className="gallery__item-meta">{s.texto27}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem28})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo28}</h3>
      							<p className="gallery__item-meta">{s.texto28}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem29})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo29}</h3>
      							<p className="gallery__item-meta">{s.texto29}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem30})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo30}</h3>
      							<p className="gallery__item-meta">{s.texto30}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem31})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo31}</h3>
      							<p className="gallery__item-meta">{s.texto31}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo20}</span></span>
      					<sup className="content__title-number">(3)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem32})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo32}</h3>
      							<p className="gallery__item-meta">{s.texto32}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem33})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo33}</h3>
      							<p className="gallery__item-meta">{s.texto33}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem34})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo34}</h3>
      							<p className="gallery__item-meta">{s.texto34}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo21}</span></span>
      					<sup className="content__title-number">(4)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem35})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo35}</h3>
      							<p className="gallery__item-meta">{s.texto35}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem36})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo36}</h3>
      							<p className="gallery__item-meta">{s.texto36}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem37})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo37}</h3>
      							<p className="gallery__item-meta">{s.texto37}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem38})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo38}</h3>
      							<p className="gallery__item-meta">{s.texto38}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo22}</span></span>
      					<sup className="content__title-number">(5)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem39})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo39}</h3>
      							<p className="gallery__item-meta">{s.texto39}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem40})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo40}</h3>
      							<p className="gallery__item-meta">{s.texto40}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem41})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo41}</h3>
      							<p className="gallery__item-meta">{s.texto41}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem42})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo42}</h3>
      							<p className="gallery__item-meta">{s.texto42}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem43})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo43}</h3>
      							<p className="gallery__item-meta">{s.texto43}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo23}</span></span>
      					<sup className="content__title-number">(3)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem44})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo44}</h3>
      							<p className="gallery__item-meta">{s.texto44}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem45})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo45}</h3>
      							<p className="gallery__item-meta">{s.texto45}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem46})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo46}</h3>
      							<p className="gallery__item-meta">{s.texto46}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			<div className="content">
      				<h2 className="content__title">
      					<span className="content__title-wrap"><span className="content__title-inner">{s.rotulo24}</span></span>
      					<sup className="content__title-number">(4)</sup>
      				</h2>
      				<div className="gallery">
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem47})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo47}</h3>
      							<p className="gallery__item-meta">{s.texto47}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem48})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo48}</h3>
      							<p className="gallery__item-meta">{s.texto48}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem49})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo49}</h3>
      							<p className="gallery__item-meta">{s.texto49}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      					<figure className="gallery__item">
      						<div className="gallery__item-img">
      							<div className="gallery__item-imginner" style={{backgroundImage: `url(${s.imagem50})`}}></div>
      						</div>
      						<figcaption className="gallery__item-caption">
      							<h3 className="gallery__item-title" data-splitting>{s.subtitulo50}</h3>
      							<p className="gallery__item-meta">{s.texto50}</p>
      							<button className="gallery__item-more" onClick={s.onClick}>+</button>
      						</figcaption>
      					</figure>
      				</div>
      			</div>
      			<button className="back" onClick={s.onClick}><svg viewBox="0 0 60 34" width="30" height="17"><path d="M60 15.066H7.235L19.128 3.173 16.456.5 0 16.956 16.456 33.41l2.672-2.672L7.235 18.846H60z"/></svg></button>
      		</section>
      
      	</main>
      	<svg className="cursor" width="30" height="30" viewBox="0 0 30 30">
      		<circle className="cursor__inner" cx="15" cy="15" r="7.5" />
      	</svg>
    </section>
  );
}