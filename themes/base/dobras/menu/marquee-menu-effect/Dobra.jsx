"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/carrossel/marquee-menu-effect
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   
  //   		// Fallback in case image fails to load
  //   		function handleImgError(image) {
  //   			image.style.display = 'none';
  //   			const text = image.alt ? image.alt.replace(' Cover', '') : 'Menu Cover';
  //   			image.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='100%25' height='100%25' fill='%23b19e7f'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23f8ecde'%3E${text}%3C/text%3E%3C/svg%3E`;
  //   			image.style.display = 'block';
  //   		}
  //   
  //   		// Ensure modern CSS variables feature check doesn't prompt disruptive alerts
  //   		document.addEventListener("DOMContentLoaded", () => {
  //   			const supportsCssVars = () => {
  //   				const style = document.createElement("style");
  //   				style.innerHTML = ":root { --tmp-var: bold; }";
  //   				document.head.appendChild(style);
  //   				const supports = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)"));
  //   				style.parentNode.removeChild(style);
  //   				return supports;
  //   			};
  //   			
  //   			if (!supportsCssVars()) {
  //   				console.warn("This browser may not fully support CSS Variables.");
  //   			}
  //   		});
  //   	
  // }, []);
  return (
    <section className="dobra" data-dobra="menu-marquee-menu-effect" ref={raiz}>
      <main>
      		
      		<div className="frame">
      			<div className="frame__title-wrap">
      				<h1 className="frame__title">{s.titulo}</h1>
      			</div>
      		</div>
      
      		
      		<nav className="menu">
      			
      			<div className="menu__item">
      				<a className="menu__item-link">{s.acao}</a>
      				<img className="menu__item-img" src={s.imagem} alt="Showreel Cover" onerror="handleImgError(this)" />
      				<div className="marquee">
      					<div className="marquee__inner" aria-hidden="true">
      						<span>{s.rotulo}</span>
      						<span>{s.rotulo2}</span>
      						<span>{s.rotulo3}</span>
      						<span>{s.rotulo4}</span>
      					</div>
      				</div>
      			</div>
      
      			
      			<div className="menu__item">
      				<a className="menu__item-link">{s.acao2}</a>
      				<img className="menu__item-img" src={s.imagem2} alt="Case Studies Cover" onerror="handleImgError(this)" />
      				<div className="marquee">
      					<div className="marquee__inner" aria-hidden="true">
      						<span>{s.rotulo5}</span>
      						<span>{s.rotulo6}</span>
      						<span>{s.rotulo7}</span>
      						<span>{s.rotulo8}</span>
      					</div>
      				</div>
      			</div>
      
      			
      			<div className="menu__item">
      				<a className="menu__item-link">{s.acao3}</a>
      				<img className="menu__item-img" src={s.imagem3} alt="Experiments Cover" onerror="handleImgError(this)" />
      				<div className="marquee">
      					<div className="marquee__inner" aria-hidden="true">
      						<span>{s.rotulo9}</span>
      						<span>{s.rotulo10}</span>
      						<span>{s.rotulo11}</span>
      						<span>{s.rotulo12}</span>
      					</div>
      				</div>
      			</div>
      
      			
      			<div className="menu__item">
      				<a className="menu__item-link">{s.acao4}</a>
      				<img className="menu__item-img" src={s.imagem4} alt="Our Crew Cover" onerror="handleImgError(this)" />
      				<div className="marquee">
      					<div className="marquee__inner" aria-hidden="true">
      						<span>{s.rotulo13}</span>
      						<span>{s.rotulo14}</span>
      						<span>{s.rotulo15}</span>
      						<span>{s.rotulo16}</span>
      					</div>
      				</div>
      			</div>
      
      			
      			<div className="menu__item">
      				<a className="menu__item-link">{s.acao5}</a>
      				<img className="menu__item-img" src={s.imagem5} alt="Contact Cover" onerror="handleImgError(this)" />
      				<div className="marquee">
      					<div className="marquee__inner" aria-hidden="true">
      						<span>{s.rotulo17}</span>
      						<span>{s.rotulo18}</span>
      						<span>{s.rotulo19}</span>
      						<span>{s.rotulo20}</span>
      					</div>
      				</div>
      			</div>
      		</nav>
      
      		
      		<div className="frame" style={{paddingTop: '0', paddingBottom: '4rem'}}>
      			<p className="frame__info">Images via <a href={s.destino || '#'} target="_blank" rel="noopener">{s.acao6}</a>.</p>
      		</div>
      	</main>
    </section>
  );
}