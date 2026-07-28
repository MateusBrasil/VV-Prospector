"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/hover-6
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
  //   import { Panel } from './panel';
  //   import Cursor from './cursor';
  //   
  //   const panels = [...document.querySelectorAll('.panel')];
  //   
  //   // Preload all images
  //   preloadImages().then(() => {
  //       // remove loader (loading class) 
  //       document.body.classList.remove('loading');
  //       panels.forEach(panel => new Panel(panel));
  //   
  //       // initialize custom cursor
  //       const cursor = new Cursor(document.querySelector('.cursor'));
  //   
  //       // mouse effects on all links and others
  //       [...document.querySelectorAll('a, .panel__item-imgwrap, button')].forEach(link => {
  //           link.addEventListener('mouseenter', () => cursor.enter());
  //           link.addEventListener('mouseleave', () => cursor.leave());
  //       });
  //   });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-anim-hover-6" ref={raiz}>
      <main>
      
      			<section className="content">
      				<h2 className="content__title content__title--number">{s.titulo}</h2>
      				<p className="content__subtitle">{s.texto}</p>
      				<div className="panel">
      					<div className="panel__item">
      						<div className="panel__item-imgwrap"><img className="panel__item-img" src={s.imagem} alt="Some image" width="250" height="360" /></div>
      						<h3 className="panel__item-title">
      							<span>{s.rotulo}</span>
      							<span>{s.rotulo2}</span>
      							<span>{s.rotulo3}</span>
      						</h3>
      						<div className="panel__item-subtitle">
      							<span>{s.rotulo4}</span>
      							<h4 data-splitting>{s.subtitulo}</h4>
      						</div>
      						<button className="panel__item-close" onClick={s.onClick}><span>{s.rotulo5}</span></button>
      					</div>
      					<div className="panel__item">
      						<div className="panel__item-imgwrap"><img className="panel__item-img" src={s.imagem2} alt="Some image" width="250" height="360" /></div>
      						<h3 className="panel__item-title">
      							<span>{s.rotulo6}</span>
      							<span>{s.rotulo7}</span>
      							<span>{s.rotulo8}</span>
      						</h3>
      						<div className="panel__item-subtitle">
      							<span>{s.rotulo9}</span>
      							<h4 data-splitting>{s.subtitulo2}</h4>
      						</div>
      						<button className="panel__item-close" onClick={s.onClick}><span>{s.rotulo10}</span></button>
      					</div>
      					<div className="panel__item">
      						<div className="panel__item-imgwrap"><img className="panel__item-img" src={s.imagem3} alt="Some image" width="250" height="360" /></div>
      						<h3 className="panel__item-title">
      							<span>{s.rotulo11}</span>
      							<span>{s.rotulo12}</span>
      							<span>{s.rotulo13}</span>
      						</h3>
      						<div className="panel__item-subtitle">
      							<span>{s.rotulo14}</span>
      							<h4 data-splitting>{s.subtitulo3}</h4>
      						</div>
      						<button className="panel__item-close" onClick={s.onClick}><span>{s.rotulo15}</span></button>
      					</div>
      				</div>
      				<p className="content__foot">{s.texto2}</p>
      			</section>
      			<section className="content">
      				<h2 className="content__title content__title--number">{s.titulo2}</h2>
      				<p className="content__subtitle">{s.texto3}</p>
      				<div className="panel">
      					<div className="panel__item">
      						<div className="panel__item-imgwrap"><img className="panel__item-img" src={s.imagem4} alt="Some image" width="250" height="360" /></div>
      						<h3 className="panel__item-title">
      							<span>{s.rotulo16}</span>
      							<span>{s.rotulo17}</span>
      							<span>{s.rotulo18}</span>
      						</h3>
      						<div className="panel__item-subtitle">
      							<span>{s.rotulo19}</span>
      							<h4 data-splitting>{s.subtitulo4}</h4>
      						</div>
      						<button className="panel__item-close" onClick={s.onClick}><span>{s.rotulo20}</span></button>
      					</div>
      					<div className="panel__item">
      						<div className="panel__item-imgwrap"><img className="panel__item-img" src={s.imagem5} alt="Some image" width="250" height="360" /></div>
      						<h3 className="panel__item-title">
      							<span>{s.rotulo21}</span>
      							<span>{s.rotulo22}</span>
      							<span>{s.rotulo23}</span>
      						</h3>
      						<div className="panel__item-subtitle">
      							<span>{s.rotulo24}</span>
      							<h4 data-splitting>{s.subtitulo5}</h4>
      						</div>
      						<button className="panel__item-close" onClick={s.onClick}><span>{s.rotulo25}</span></button>
      					</div>
      					<div className="panel__item">
      						<div className="panel__item-imgwrap"><img className="panel__item-img" src={s.imagem6} alt="Some image" width="250" height="360" /></div>
      						<h3 className="panel__item-title">
      							<span>{s.rotulo26}</span>
      							<span>{s.rotulo27}</span>
      							<span>{s.rotulo28}</span>
      						</h3>
      						<div className="panel__item-subtitle">
      							<span>{s.rotulo29}</span>
      							<h4 data-splitting>{s.subtitulo6}</h4>
      						</div>
      						<button className="panel__item-close" onClick={s.onClick}><span>{s.rotulo30}</span></button>
      					</div>
      				</div>
      				<p className="content__foot">{s.texto4}</p>
      			</section>
      
      
      		</main>
      		<svg className="cursor" width="20" height="20" viewBox="0 0 20 20">
      			<circle className="cursor__inner" cx="10" cy="10" r="5"/>
      		</svg>
    </section>
  );
}