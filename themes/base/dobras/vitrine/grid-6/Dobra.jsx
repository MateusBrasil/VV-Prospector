"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-de-grid/animacao-de-grid-6/add-to-cart-main/src
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
  //   import '../scss/reset.scss';
  //   import '../scss/base.scss';
  //   import '../scss/globals.scss';
  //   import '../scss/products.scss';
  //   import '../scss/cart.scss';
  //   
  //   import { preloadImages } from './utils';
  //   import Products from './products';
  //   
  //   window.addEventListener('load', async () => {
  //     new Products();
  //     const images = [...document.querySelectorAll('img')];
  //   
  //     await preloadImages(images).then(() => {
  //       document.body.classList.remove('loading');
  //     })
  //   });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="vitrine-grid-6" ref={raiz}>
      <main>
      			<span className="noise"></span>
      
      			<header className="frame">
      				<h1 className="frame__title">{s.titulo}</h1> 
      				<div className="cart-button">
      					<div className="cart-button__label-wrap">
      						<span className="cart-button__label">{s.rotulo}</span>
      						<span className="cart-button__line" />
      					</div>
      
      					<div className="cart-button__number-wrap">
      						<span className="cart-button__number-bg"></span>
      						<span className="cart-button__number">0</span>
      					</div>
      				</div>
      				<nav className="frame__tags">
      					<a href="">{s.acao}</a>
      					<a href="">{s.acao2}</a>
      				</nav>
      			</header>
      
      			<section className="content">
      				<div className="products">
      					<ul className="products__list">
      						<li className="products__item" data-id="product-01" data-price="15" data-name="Product 01" data-cover="./images/product-01-cover.jpg">
      							<div className="products__images">
      								<img className="products__main-image" src={s.imagem} alt="Product 01" />
      		
      								<div className="products__gallery">
      									<img className="products__gallery-item" src={s.imagem2} alt="Product 01 gallery" />
      									<img className="products__gallery-item" src={s.imagem3} alt="Product 01 gallery" />
      									<img className="products__gallery-item" src={s.imagem4} alt="Product 01 gallery" />
      									<img className="products__gallery-item" src={s.imagem5} alt="Product 01 gallery" />
      									<img className="products__gallery-item" src={s.imagem6} alt="Product 01 gallery" />
      									<img className="products__gallery-item" src={s.imagem7} alt="Product 01 gallery" />
      								</div>
      							</div>
      							<button type="button" className="products__cta button" onClick={s.onClick}>{s.acao3}</button>
      						</li>
      
      						<li className="products__item" data-id="product-02" data-price="8" data-name="Product 02" data-cover="./images/product-02-cover.jpg">
      							<div className="products__images">
      								<img className="products__main-image" src={s.imagem8} alt="Product 02" />
      		
      								<div className="products__gallery">
      									<img className="products__gallery-item" src={s.imagem9} alt="Product 02 gallery" />
      									<img className="products__gallery-item" src={s.imagem10} alt="Product 02 gallery" />
      									<img className="products__gallery-item" src={s.imagem11} alt="Product 02 gallery" />
      									<img className="products__gallery-item" src={s.imagem12} alt="Product 02 gallery" />
      									<img className="products__gallery-item" src={s.imagem13} alt="Product 02 gallery" />
      									<img className="products__gallery-item" src={s.imagem14} alt="Product 02 gallery" />
      								</div>
      							</div>
      							<button type="button" className="products__cta button" onClick={s.onClick}>{s.acao4}</button>
      						</li>
      
      						<li className="products__item" data-id="product-03" data-price="12" data-name="Product 03" data-cover="./images/product-03-cover.jpg">
      							<div className="products__images">
      								<img className="products__main-image" src={s.imagem15} alt="Product 03" />
      		
      								<div className="products__gallery">
      									<img className="products__gallery-item" src={s.imagem16} alt="Product 03 gallery" />
      									<img className="products__gallery-item" src={s.imagem17} alt="Product 03 gallery" />
      									<img className="products__gallery-item" src={s.imagem18} alt="Product 03 gallery" />
      									<img className="products__gallery-item" src={s.imagem19} alt="Product 03 gallery" />
      									<img className="products__gallery-item" src={s.imagem20} alt="Product 03 gallery" />
      									<img className="products__gallery-item" src={s.imagem21} alt="Product 03 gallery" />
      								</div>
      							</div>
      							<button type="button" className="products__cta button" onClick={s.onClick}>{s.acao5}</button>
      						</li>
      
      						<li className="products__item" data-id="product-04" data-price="5" data-name="Product 04" data-cover="./images/product-04-cover.jpg">
      							<div className="products__images">
      								<img className="products__main-image" src={s.imagem22} alt="Product 04" />
      		
      								<div className="products__gallery">
      									<img className="products__gallery-item" src={s.imagem23} alt="Product 04 gallery" />
      									<img className="products__gallery-item" src={s.imagem24} alt="Product 04 gallery" />
      									<img className="products__gallery-item" src={s.imagem25} alt="Product 04 gallery" />
      									<img className="products__gallery-item" src={s.imagem26} alt="Product 04 gallery" />
      									<img className="products__gallery-item" src={s.imagem27} alt="Product 04 gallery" />
      									<img className="products__gallery-item" src={s.imagem28} alt="Product 04 gallery" />
      								</div>
      							</div>
      							<button type="button" className="products__cta button" onClick={s.onClick}>{s.acao6}</button>
      						</li>
      
      						<li className="products__item" data-id="product-05" data-price="20" data-name="Product 05" data-cover="./images/product-05-cover.jpg">
      							<div className="products__images">
      								<img className="products__main-image" src={s.imagem29} alt="Product 05" />
      		
      								<div className="products__gallery">
      									<img className="products__gallery-item" src={s.imagem30} alt="Product 05 gallery" />
      									<img className="products__gallery-item" src={s.imagem31} alt="Product 05 gallery" />
      									<img className="products__gallery-item" src={s.imagem32} alt="Product 05 gallery" />
      									<img className="products__gallery-item" src={s.imagem33} alt="Product 05 gallery" />
      									<img className="products__gallery-item" src={s.imagem34} alt="Product 05 gallery" />
      									<img className="products__gallery-item" src={s.imagem35} alt="Product 05 gallery" />
      								</div>
      							</div>
      							<button type="button" className="products__cta button" onClick={s.onClick}>{s.acao7}</button>
      						</li>
      
      						<li className="products__item" data-id="product-06" data-price="8" data-name="Product 06" data-cover="./images/product-06-cover.jpg">
      							<div className="products__images">
      								<img className="products__main-image" src={s.imagem36} alt="Product 06" />
      		
      								<div className="products__gallery">
      									<img className="products__gallery-item" src={s.imagem37} alt="Product 06 gallery" />
      									<img className="products__gallery-item" src={s.imagem38} alt="Product 06 gallery" />
      									<img className="products__gallery-item" src={s.imagem39} alt="Product 06 gallery" />
      									<img className="products__gallery-item" src={s.imagem40} alt="Product 06 gallery" />
      									<img className="products__gallery-item" src={s.imagem41} alt="Product 06 gallery" />
      									<img className="products__gallery-item" src={s.imagem42} alt="Product 06 gallery" />
      								</div>
      							</div>
      							<button type="button" className="products__cta button" onClick={s.onClick}>{s.acao8}</button>
      						</li>
      					</ul>
      				</div>
      			</section>
      
      			<aside className="cart">
      				<div className="cart__bg"></div>
      		
      				<div className="cart__inner">
      					<div className="cart__inner-close">Close</div>
      					<div className="cart__inner-bg"></div>
      		
      					<div className="cart-items"></div>
      		
      					<div className="cart-total cart-grid">
      						<div className="cart-total__inner">
      							<div className="cart-total__label">Total:</div>
      							<div className="cart-total__amount">€ 0</div>
      							<div className="cart-total__taxes">
      								Delivery fee and tax<br />
      								calculated at checkout
      							</div>
      							<a className="cart-total__checkout-btn button" href="#">{s.acao9}</a>
      						</div>
      					</div>
      				</div>
      			</aside>
      		</main>
    </section>
  );
}