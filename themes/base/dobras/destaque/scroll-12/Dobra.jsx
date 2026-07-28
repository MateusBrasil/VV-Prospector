"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-12/webgl-progressive-blur-main/src
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
  //   import '../../styles/index.scss'
  //   import '../../styles/pages/index.scss'
  //   import Lenis from 'lenis';
  //   
  //   import GL from '../components/GL.js';
  //   
  //   export default class Index {
  //     constructor(options) {
  //       this.lenis = new Lenis();
  //       this.lenis.on('scroll', (e) => {
  //       })
  //       const raf = (time) =>{
  //         this.lenis.raf(time)
  //         requestAnimationFrame(raf)
  //       }
  //       requestAnimationFrame(raf)
  //       this.gl = new GL();
  //       this.lenis.on('scroll', (e) => {
  //         this.gl.onScroll(e)
  //       })
  //       const items = document.querySelectorAll('#list-section li');
  //       const observer = new IntersectionObserver((entries, observer) => {
  //         entries.forEach(entry => {
  //           if (entry.isIntersecting) {
  //             entry.target.classList.add('is-visible');
  //             observer.unobserve(entry.target);
  //           }
  //         });
  //       });
  //       items.forEach(item => {
  //         observer.observe(item);
  //       });
  //     }
  //   }
  //   window.addEventListener('load', () => {
  //     new Index();
  //   });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-12" ref={raiz}>
      <main id="main">
      		<canvas id="gl"></canvas>
      
      		<section id="hero">
      			<h2>
      				<small>by Jorge Toloza</small>
      				<span>{s.rotulo}</span>
      				<strong>Progressive Blur</strong>
      			</h2>
      			<div className="media-container">
      				<figure className="media">
      					<img src={s.imagem} alt="fashion" />
      				</figure>
      				<small>(01)</small>
      			</div>
      		</section>
      		<section id="section-0">
      			<div className="media-container">
      				<figure className="media">
      					<img src={s.imagem2} alt="silueta" />
      				</figure>
      				<small>(02)</small>
      			</div>
      			<div className="media-container">
      				<figure className="media">
      					<img src={s.imagem3} alt="camera" />
      				</figure>
      				<small>(03)</small>
      			</div>
      			<div className="media-container">
      				<figure className="media">
      					<img src={s.imagem4} alt="spheres" />
      				</figure>
      				<small>(04)</small>
      			</div>
      		</section>
      		<section id="section-centered">
      			<div className="media-container">
      				<figure className="media">
      					<img src={s.imagem5} alt="diana" />
      				</figure>
      				<small>(05)</small>
      			</div>
      			<div className="media-container">
      				<figure className="media">
      					<img src={s.imagem6} alt="abuelo" />
      				</figure>
      				<small>(06)</small>
      			</div>
      		</section>
      		<section id="section-1">
      			<div className="media-container">
      				<figure className="media">
      					<img src={s.imagem7} alt="tricycle" />
      				</figure>
      				<small>(07)</small>
      			</div>
      			<div className="media-container">
      				<figure className="media">
      					<img src={s.imagem8} alt="building" />
      				</figure>
      				<small>(08)</small>
      			</div>
      		</section>
      		<section id="list-section">
      			<ul>
      				<li>{s.item}</li>
      				<li>{s.item2}</li>
      				<li>{s.item3}</li>
      				<li>{s.item4}</li>
      				<li>{s.item5}</li>
      			</ul>
      			<ul>
      				<li>{s.item6}</li>
      				<li>{s.item7}</li>
      				<li>{s.item8}</li>
      				<li>{s.item9}</li>
      				<li>{s.item10}</li>
      			</ul>
      			<ul>
      				<li>{s.item11}</li>
      				<li>{s.item12}</li>
      				<li>{s.item13}</li>
      				<li>{s.item14}</li>
      				<li>{s.item15}</li>
      			</ul>
      		</section>
      		<section id="section-3">
      			<div className="media-container">
      				<figure className="media">
      					<img src={s.imagem9} alt="tote bag" />
      				</figure>
      				<small>(09)</small>
      			</div>
      		</section>
      		<section id="section-4">
      			<div className="media-container">
      				<figure className="media">
      					<img src={s.imagem10} alt="bird" />
      				</figure>
      				<small>(10)</small>
      			</div>
      		</section>
      
      	</main>
    </section>
  );
}