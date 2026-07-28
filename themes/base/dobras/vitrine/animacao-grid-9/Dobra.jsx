"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-de-grid/animacao-grid-9
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
  //   import {SpreadGrid} from './spreadGrid';
  //   
  //   [...document.querySelectorAll('.grid')].forEach(grid => new SpreadGrid(grid));
  //   
  //   // Preload images
  //   preloadImages('.grid__item-img').then( _ => document.body.classList.remove('loading'));
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="vitrine-animacao-grid-9" ref={raiz}>
      <main>
      		<div className="frame">
      			<div className="frame__title">
      				<h1 className="frame__title-main">{s.titulo}</h1>
      				<a aria-label="Back to the article" className="frame__title-back" href="">
      					<span className="oh__inner">{s.rotulo}</span>
      					<svg width="18px" height="18px" viewBox="0 0 24 24">
      						<path d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
      					</svg>
      				</a>
      			</div>
      		</div>
      		<div className="content">
      			<p className="content__text"><img className="content__text-img" src={s.imagem151} alt="Some dude" />Henry Charles Bukowski was a German-born American poet, novelist, and short story writer.</p>
      			<h3 className="content__title">{s.subtitulo}</h3>
      			<div className="grid" data-duration="0.7" data-ease="expo">
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem2})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem3})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem4})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem5})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem6})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem7})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem8})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem9})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem10})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem11})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem12})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem13})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem14})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem15})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem16})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem17})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem18})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem19})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem20})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem21})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem22})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem23})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem24})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem25})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem26})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem27})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem28})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem29})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem30})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem31})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem32})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem33})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem34})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem35})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem36})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem37})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem38})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem39})`}}></div>
      				</div>
      			</div>
      			<a className="content__more">{s.acao}</a>
      			<p className="content__text">{s.texto}</p>
      			<h3 className="content__title">{s.subtitulo2}</h3>
      			<div className="grid grid--medium" data-duration="0.8" data-ease="expo" data-scale="1.5" data-max-rotation="8" data-spread="100" data-max-distance="2000">
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem40})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem41})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem42})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem43})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem44})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem45})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem46})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem47})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem48})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem49})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem50})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem51})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem52})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem53})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem54})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem55})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem56})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem57})`}}></div>
      				</div>
      			</div>
      			<a className="content__more">{s.acao2}</a>
      			<p className="content__text">{s.texto2}</p>
      			<h3 className="content__title">{s.subtitulo3}</h3>
      			<div className="grid grid--narrow" data-duration="1" data-ease="elastic.out(0.5)" data-scale="3" data-max-rotation="20" data-spread="150" data-max-distance="700">
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem58})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem59})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem60})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem61})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem62})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem63})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem64})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem65})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem66})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem67})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem68})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem69})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem70})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem71})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem72})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem73})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem74})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem75})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem76})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem77})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem78})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem79})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem80})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem81})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem82})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem83})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem84})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem85})`}}></div>
      				</div>
      			</div>
      			<a className="content__more">{s.acao3}</a>
      			<p className="content__text">{s.texto3}</p>
      			<h3 className="content__title">{s.subtitulo4}</h3>
      			<div className="grid" data-duration="0.6" data-ease="power3" data-skew="10" data-scale="3.2" data-max-rotation="10">
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem86})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem87})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem88})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem89})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem90})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem91})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem92})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem93})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem94})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem95})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem96})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem97})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem98})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem99})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem100})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem101})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem102})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem103})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem104})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem105})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem106})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem107})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem108})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem109})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem110})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem111})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem112})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem113})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem114})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem115})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem116})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem117})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem118})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem119})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem120})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem121})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem122})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem123})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem124})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem125})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem126})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem127})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem128})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem129})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem130})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem131})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem132})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem133})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem134})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem135})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem136})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem137})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem138})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem139})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem140})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem141})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem142})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem143})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem144})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem145})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem146})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem147})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem148})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem149})`}}></div>
      				</div>
      				<div className="grid__item">
      					<div className="grid__item-img" style={{backgroundImage: `url(${s.imagem150})`}}></div>
      				</div>
      			</div>
      			<a className="content__more">{s.acao4}</a>
      		</div>
      
      	</main>
    </section>
  );
}