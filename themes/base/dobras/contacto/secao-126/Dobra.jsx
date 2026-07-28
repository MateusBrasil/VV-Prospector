"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/secoes/secao-126
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
  //   // vetic-hero — no local logic. The hero entrance (hero-rise / hero-ball-in) and
  //   // the tag marquee are pure CSS animations from the shared /vetic/styles.css.
  //   // Stub kept for the 4-file convention.
  //   
  //   /* ===== TEMLIS-INLINED-NAVBAR: vetic-navbar behavior ===== */
  //   // vetic-navbar — no local logic. The scaling-hamburger toggle (data-navigation-*)
  //   // is driven by the shared /vetic/scripts/navbar.js. Stub kept for the 4-file
  //   // convention.
  //   
  //   /* =============================================================================
  //      vetic/scripts/navbar.js — SHARED scaling-hamburger toggle for all Vetic ports.
  //      Ported from the inline <script> in the template's Navbar.astro (TS -> plain
  //      classic script: NO top-level export). State lives on <html
  //      data-navigation-status> ("active"/"not-active") so the pill (in the navbar)
  //      and the dim backdrop (fixed sibling) react together via CSS. No GSAP — pure
  //      CSS transitions.
  //      ============================================================================= */
  //   
  //   function initVeticNavbar() {
  //     var html = document.documentElement;
  //     var toggleEls = document.querySelectorAll('[data-navigation-toggle="toggle"]');
  //     var closeEls = document.querySelectorAll('[data-navigation-toggle="close"]');
  //     var menuLinks = document.querySelectorAll('.hamburger-nav__a');
  //   
  //     var setStatus = function (active) {
  //       html.setAttribute('data-navigation-status', active ? 'active' : 'not-active');
  //       html.style.overflow = active ? 'hidden' : '';
  //       toggleEls.forEach(function (el) { el.setAttribute('aria-expanded', String(active)); });
  //     };
  //     setStatus(false);
  //   
  //     toggleEls.forEach(function (btn) {
  //       btn.addEventListener('click', function (e) {
  //         e.stopPropagation();
  //         setStatus(html.getAttribute('data-navigation-status') !== 'active');
  //       });
  //     });
  //     closeEls.forEach(function (el) { el.addEventListener('click', function () { setStatus(false); }); });
  //     menuLinks.forEach(function (link) { link.addEventListener('click', function () { setStatus(false); }); });
  //     document.addEventListener('keydown', function (e) {
  //       if (e.key === 'Escape' && html.getAttribute('data-navigation-status') === 'active') {
  //         setStatus(false);
  //       }
  //     });
  //   }
  //   
  //   if (document.readyState !== 'loading') initVeticNavbar();
  //   else document.addEventListener('DOMContentLoaded', initVeticNavbar);
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="contacto-secao-126" ref={raiz}>
      <div data-navbar-root="">
                
                <div role="banner" className="navbar w-nav is-home" data-navbar="">
                  <div className="padding-nav">
                    <div className="container-nav">
                      <div className="navbar_content">
                        <a href="/" className="navbar_logo-link w-nav-brand" aria-label="Vetic home">
                          <img loading="eager" src={s.imagem} alt="Vetic" className="navbar_logo" />
                        </a>
          
                        
                        <div className="nav_wrap">
                          <div className="navbar_list">
                            <a href="/about" className="nav_links w-nav-link">{s.acao}</a>
                            <a href="/products" className="nav_links w-nav-link">{s.acao2}</a>
                            <a href="/services" className="nav_links w-nav-link">{s.acao3}</a>
                            <a href="/blog" className="nav_links w-nav-link">{s.acao4}</a>
                          </div>
                        </div>
          
                        <div className="nav_buttons-wrap">
                          <a href="/contact" className="button w-button">{s.acao5}</a>
          
                          
                          <div className="hamburger-anchor">
                            <div className="hamburger-nav">
                              <div className="hamburger-nav__bg" aria-hidden="true"></div>
                              <div className="hamburger-nav__group">
                                <p className="hamburger-nav__menu-p">{s.texto}</p>
                                <ul className="hamburger-nav__ul">
                                  <li className="hamburger-nav__li">
                                    <a href="/about" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto2}</p>
                                      <div className="hamburger-nav__dot" aria-hidden="true"></div>
                                    </a>
                                  </li>
                                  <li className="hamburger-nav__li">
                                    <a href="/products" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto3}</p>
                                      <div className="hamburger-nav__dot" aria-hidden="true"></div>
                                    </a>
                                  </li>
                                  <li className="hamburger-nav__li">
                                    <a href="/services" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto4}</p>
                                      <div className="hamburger-nav__dot" aria-hidden="true"></div>
                                    </a>
                                  </li>
                                  <li className="hamburger-nav__li">
                                    <a href="/blog" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto5}</p>
                                      <div className="hamburger-nav__dot" aria-hidden="true"></div>
                                    </a>
                                  </li>
                                  <li className="hamburger-nav__li">
                                    <a href="/contact" className="hamburger-nav__a">
                                      <p className="hamburger-nav__p">{s.texto6}</p>
                                      <div className="hamburger-nav__dot" aria-hidden="true"></div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <button type="button" data-navigation-toggle="toggle" aria-label="Toggle menu" aria-expanded="false" className="hamburger-nav__toggle" onClick={s.onClick}>
                                <div className="hamburger-nav__toggle-bar"></div>
                                <div className="hamburger-nav__toggle-bar"></div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          
                
                <div data-navigation-toggle="close" className="navigation__dark-bg" aria-hidden="true"></div>
              </div>
      
        <div className="page-wrapper">
      <section className="section_hero"> <div className="padding-hero"> <div className="container-hero"> <div className="hero_layout"> <div className="hero_content"> <div className="hero_wrap"> <div className="tag"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>Vertic pet solutions</div> </div> <div className="hero_title"> <h1 className="heading-style-h1">Your reliable <br />partner for pet <span className="line">{s.rotulo}</span></h1> </div> <div className="description"> <div>At our clinic, we prioritize the health and happiness of your beloved pets. Our expert veterinarians are dedicated to providing love.</div> </div> <img src={s.imagem2} alt="" className="ball" /> <img src={s.imagem3} alt="" className="ball is-two" /> <img src={s.imagem4} alt="" className="ball is-three" /> <img src={s.imagem5} alt="" className="ball is-four" /> </div> <div className="hero_buttons">  <div className="hero_button-anim"> <a data-wf--button--variant="base" href="/contact" className="button-primary w-inline-block"> <div className="button-left"> <div>Contact us</div> </div> <div className="button-right"> <div className="button-right_center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" className="button_icon"><path d="M9.75569 11.3981C9.75569 9.83007 8.48393 8.55859 6.91565 8.55859C5.34737 8.55859 4.07617 9.83007 4.07617 11.3981C4.07617 12.9672 5.34709 14.2381 6.91565 14.2381C8.48421 14.2381 9.75569 12.9672 9.75569 11.3981ZM21.0803 9.11327C19.5123 9.11327 18.2408 10.3848 18.2408 11.9528C18.2408 13.5219 19.5123 14.7922 21.0803 14.7922C22.6486 14.7922 23.9201 13.5219 23.9201 11.9528C23.9201 10.3848 22.6489 9.11327 21.0803 9.11327ZM18.5012 15.1137C18.3038 14.8704 18.0244 14.5887 17.7035 14.2933C16.8473 13.1836 15.508 12.4657 13.9983 12.4657C12.6545 12.4657 11.4466 13.0347 10.5929 13.9413C10.1079 14.3633 9.67673 14.7752 9.40233 15.114L9.21865 15.3382C8.36185 16.3829 7.29533 17.6827 7.30317 19.8882C7.31073 21.9364 8.97869 23.6038 11.021 23.6038C11.5878 23.6051 12.1472 23.4753 12.6555 23.2248C13.1639 22.9742 13.6075 22.6096 13.9518 22.1593C14.2961 22.6097 14.7398 22.9744 15.2484 23.2249C15.7569 23.4755 16.3165 23.6052 16.8834 23.6038C18.9249 23.6038 20.5925 21.9367 20.6004 19.8882C20.6082 17.6827 19.5414 16.3829 18.6849 15.3382L18.5012 15.1137Z" fill="currentColor"></path><path d="M14.1974 10.6545C15.9255 10.6545 17.3264 9.25358 17.3264 7.52548C17.3264 5.79739 15.9255 4.39648 14.1974 4.39648C12.4693 4.39648 11.0684 5.79739 11.0684 7.52548C11.0684 9.25358 12.4693 10.6545 14.1974 10.6545Z" fill="currentColor"></path></svg></div> </div> </a> </div> <div className="hero_button-anim is-two"> <a href="/services" className="button-icon w-inline-block"> <div>See all services</div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="icon-1x1-small"><path d="M8.33333 5.83268L12.5 9.99935L8.33333 14.166" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg> </a> </div> </div> </div> <div className="hero_visual"> <div id="w-node-e4e09861-a279-f454-434c-475443c58b5b-f8db10c2" className="hero_img"> <img src={s.imagem6} sizes="(max-width: 600px) 100vw, 600px" srcSet="https://d173woph5zl366.cloudfront.net/vetic/images/Frame-2147226657_1Frame-2147226657.webp 500w, https://d173woph5zl366.cloudfront.net/vetic/images/Frame-2147226657_1.webp 600w" alt="A cat looking up" className="img" /> </div> <div id="w-node-e4e09861-a279-f454-434c-475443c58b5d-f8db10c2" className="hero_img"> <img src={s.imagem7} sizes="(max-width: 1076px) 100vw, 1076px" srcSet="https://d173woph5zl366.cloudfront.net/vetic/images/Frame-2147226656_1Frame-2147226656.webp 500w, https://d173woph5zl366.cloudfront.net/vetic/images/Frame-2147226656_1.webp 1076w" alt="A smiling woman holding a puppy" className="img" /> </div> <div id="w-node-e4e09861-a279-f454-434c-475443c58b5f-f8db10c2" className="hero_img"> <img src={s.imagem8} sizes="(max-width: 600px) 100vw, 600px" srcSet="https://d173woph5zl366.cloudfront.net/vetic/images/Frame-2147226624_1Frame-2147226624.webp 500w, https://d173woph5zl366.cloudfront.net/vetic/images/Frame-2147226624_1.webp 600w" alt="A happy dog" className="img" /> </div> </div> </div> </div> </div> </section> <div className="section_tags"> <div className="section_tags-wrap"> <div className="tag_wrap-group"> <div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>Dental care</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>In house laboratory</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Wellness care</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>Parasite prevention</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Pet grooming</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Wellness care</div> </div> </div> </div><div className="tag_wrap-group"> <div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>Dental care</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--acento)"></circle></svg> <div>In house laboratory</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Wellness care</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-200)"></circle></svg> <div>Parasite prevention</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Pet grooming</div> </div> </div><div className="tag_wrap"> <div className="tag is-secondary"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="tag_point"><circle cx="6" cy="6" r="6" fill="var(--base-100)"></circle></svg> <div>Wellness care</div> </div> </div> </div> </div> </div>
        </div>
    </section>
  );
}