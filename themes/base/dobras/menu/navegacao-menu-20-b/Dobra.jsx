"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/navegacao-menu-20/files
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   
  //   const pageRoot = document.getElementById('page-root')
  //   const nav = document.querySelector('nav')
  //   const app = document.querySelector('.App')
  //   const menuOpenBtn = document.querySelector('.hamburger-menu')
  //   const menuCloseBtn = document.querySelector('.hamburger-menu-close')
  //   const circle = document.getElementById('circle')
  //   const path1 = document.getElementById('Path_1')
  //   const path2 = document.getElementById('Path_2')
  //   const line1 = document.getElementById('Line_1')
  //   const introOverlay = document.querySelector('.intro-overlay')
  //   
  //   const routes = {
  //     '/': { title: 'Home', type: 'home' },
  //     '/case-studies': { title: 'This is the case studies page', type: 'simple' },
  //     '/approach': { title: 'This is the approach page', type: 'simple' },
  //     '/services': { title: 'This is the services page', type: 'simple' },
  //     '/about-us': { title: 'This is the About page', type: 'simple' }
  //   }
  //   
  //   let menuOpened = false
  //   let homeIntroPlayed = false
  //   let dimensions = {
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   }
  //   
  //   function setViewportHeight() {
  //     const vh = dimensions.height * 0.01
  //     document.documentElement.style.setProperty('--vh', `${vh}px`)
  //   }
  //   
  //   function debounce(fn, ms) {
  //     let timer
  //     return (...args) => {
  //       clearTimeout(timer)
  //       timer = setTimeout(() => fn(...args), ms)
  //     }
  //   }
  //   
  //   function showBody() {
  //     gsap.set('body', { visibility: 'visible' })
  //   }
  //   
  //   function cloneTemplate(id) {
  //     return document.getElementById(id).content.cloneNode(true)
  //   }
  //   
  //   function renderRoute(pathname) {
  //     const route = routes[pathname] || routes['/']
  //     pageRoot.innerHTML = ''
  //   
  //     if (route.type === 'home') {
  //       pageRoot.appendChild(cloneTemplate('home-template'))
  //       setViewportHeight()
  //       showBody()
  //   
  //       if (!homeIntroPlayed) {
  //         playHomeIntro()
  //         homeIntroPlayed = true
  //       } else {
  //         if (introOverlay) introOverlay.style.display = 'none'
  //         gsap.set('.line span', { y: 0, skewY: 0 })
  //         gsap.set('.case-image img', { scale: 1 })
  //       }
  //     } else {
  //       if (introOverlay) introOverlay.style.display = 'none'
  //       const frag = cloneTemplate('simple-page-template')
  //       frag.querySelector('.page-title').textContent = route.title
  //       pageRoot.appendChild(frag)
  //       showBody()
  //     }
  //   
  //     closeMenuInstant()
  //   }
  //   
  //   function navigate(path) {
  //     history.pushState({}, '', path)
  //     renderRoute(path)
  //   }
  //   
  //   function playHomeIntro() {
  //     const tl = gsap.timeline()
  //     tl.from('.line span', {
  //       duration: 1.8,
  //       y: 100,
  //       ease: 'power4.out',
  //       delay: 1,
  //       skewY: 7,
  //       stagger: { amount: 0.3 }
  //     })
  //       .to('.overlay-top', {
  //         duration: 1.6,
  //         height: 0,
  //         ease: 'expo.inOut',
  //         stagger: 0.4
  //       })
  //       .to('.overlay-bottom', {
  //         duration: 1.6,
  //         width: 0,
  //         ease: 'expo.inOut',
  //         delay: -0.8,
  //         stagger: { amount: 0.4 }
  //       })
  //       .to('.intro-overlay', {
  //         duration: 0,
  //         display: 'none'
  //       })
  //       .from('.case-image img', {
  //         duration: 1.6,
  //         scale: 1.4,
  //         ease: 'expo.inOut',
  //         delay: -2,
  //         stagger: { amount: 0.4 }
  //       })
  //   }
  //   
  //   const menuTl = gsap.timeline({ paused: true })
  //   menuTl
  //     .to(nav, { duration: 0, display: 'block' })
  //     .to('body', { duration: 0, overflow: 'hidden' })
  //     .to(app, {
  //       duration: 1,
  //       y: () => dimensions.width <= 654 ? '70vh' : window.innerHeight / 2,
  //       ease: 'expo.inOut'
  //     })
  //     .to('.hamburger-menu span', {
  //       duration: 0.6,
  //       delay: -1,
  //       scaleX: 0,
  //       transformOrigin: '50% 0%',
  //       ease: 'expo.inOut'
  //     })
  //     .to(path1, {
  //       duration: 0.4,
  //       delay: -0.6,
  //       strokeDashoffset: 10,
  //       strokeDasharray: 5
  //     })
  //     .to(path2, {
  //       duration: 0.4,
  //       delay: -0.6,
  //       strokeDashoffset: 10,
  //       strokeDasharray: 20
  //     })
  //     .to(line1, {
  //       duration: 0.4,
  //       delay: -0.6,
  //       strokeDashoffset: 40,
  //       strokeDasharray: 18
  //     })
  //     .to(circle, {
  //       duration: 0.6,
  //       delay: -0.8,
  //       strokeDashoffset: 0,
  //       ease: 'expo.inOut'
  //     })
  //     .to('.hamburger-menu-close', {
  //       duration: 0.6,
  //       delay: -0.8,
  //       display: 'block'
  //     })
  //   
  //   function initMenuIcon() {
  //     gsap.set(circle, {
  //       strokeDasharray: 227,
  //       strokeDashoffset: -193
  //     })
  //     gsap.set(path1, {
  //       strokeDasharray: 10,
  //       strokeDashoffset: 10
  //     })
  //     gsap.set(path2, {
  //       strokeDasharray: 10,
  //       strokeDashoffset: 10
  //     })
  //     gsap.set(line1, {
  //       strokeDasharray: 40,
  //       strokeDashoffset: 40
  //     })
  //   }
  //   
  //   function openMenu() {
  //     if (menuOpened) return
  //     menuOpened = true
  //     menuTl.play(0)
  //   }
  //   
  //   function closeMenu() {
  //     if (!menuOpened) return
  //     menuOpened = false
  //     menuTl.reverse()
  //     menuTl.eventCallback('onReverseComplete', () => {
  //       gsap.set('.hamburger-menu-close', { display: 'none' })
  //       gsap.set('body', { overflow: 'auto' })
  //       gsap.set(nav, { display: 'none' })
  //     })
  //   }
  //   
  //   function closeMenuInstant() {
  //     menuOpened = false
  //     menuTl.pause(0)
  //     gsap.set(app, { y: 0 })
  //     gsap.set('.hamburger-menu span', { scaleX: 1, transformOrigin: '50% 0%' })
  //     gsap.set('.hamburger-menu-close', { display: 'none' })
  //     gsap.set('body', { overflow: 'auto' })
  //     gsap.set(nav, { display: 'none' })
  //     initMenuIcon()
  //   }
  //   
  //   document.addEventListener('click', (event) => {
  //     const routeLink = event.target.closest('[data-route]')
  //     if (routeLink) {
  //       event.preventDefault()
  //       navigate(routeLink.getAttribute('data-route'))
  //       return
  //     }
  //   
  //     if (event.target.closest('.hamburger-menu')) {
  //       openMenu()
  //       return
  //     }
  //   
  //     if (event.target.closest('.hamburger-menu-close')) {
  //       closeMenu()
  //       return
  //     }
  //   
  //     if (event.target.matches('[data-inline="true"]')) {
  //       event.preventDefault()
  //     }
  //   })
  //   
  //   window.addEventListener('popstate', () => {
  //     renderRoute(window.location.pathname)
  //   })
  //   
  //   window.addEventListener('resize', debounce(() => {
  //     dimensions = {
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     }
  //     setViewportHeight()
  //   }, 1000))
  //   
  //   dimensions = {
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   }
  //   setViewportHeight()
  //   showBody()
  //   initMenuIcon()
  //   renderRoute(window.location.pathname)
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-navegacao-menu-20-b" ref={raiz}>
      <header className="header">
          <div className="container">
            <div className="row v-center space-between">
              <div className="logo">
                <a href="/" data-route="/">{s.acao}</a>
              </div>
              <div className="nav-toggle">
                <button className="hamburger-menu" aria-label="Open menu" onClick={s.onClick}>
                  <span></span>
                  <span></span>
                </button>
                <button className="hamburger-menu-close" aria-label="Close menu" onClick={s.onClick}>
                  <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <line id="Line_1" y1="14.91" transform="translate(32 24.788)" stroke="var(--base-600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/>
                    <path id="Path_1" d="M6,9.155,10.949,5" transform="translate(21.051 19.302)" stroke="var(--base-600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/>
                    <path id="Path_2" d="M10.949,5,15.9,9.155" transform="translate(21.051 19.302)" stroke="var(--base-600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/>
                    <circle id="circle" cx="32" cy="32" r="30.75" stroke="rgba(0,0,0,0.2)" strokeWidth="2.5"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
      
        <div className="App">
          <div className="intro-overlay">
            <div className="top">
              <div className="overlay-top"></div>
              <div className="overlay-top"></div>
              <div className="overlay-top"></div>
            </div>
            <div className="bottom">
              <div className="overlay-bottom"></div>
              <div className="overlay-bottom"></div>
              <div className="overlay-bottom"></div>
            </div>
          </div>
      
          <div id="page-root"></div>
        </div>
      
        <nav>
          <div className="container">
            <div className="nav-columns">
              <div className="nav-column">
                <div className="nav-label">Menu</div>
                <ul className="nav-links">
                  <li><a href="/case-studies" data-route="/case-studies">{s.acao2}</a></li>
                  <li><a href="/approach" data-route="/approach">{s.acao3}</a></li>
                  <li><a href="/services" data-route="/services">{s.acao4}</a></li>
                  <li><a href="/about-us" data-route="/about-us">{s.acao5}</a></li>
                </ul>
              </div>
              <div className="nav-column">
                <div className="nav-label">Contact</div>
                <div className="nav-infos">
                  <ul className="nav-info">
                    <li className="nav-info-label">{s.item}</li>
                    <li><a href="/contact" data-inline="true">{s.acao6}</a></li>
                    <li><a href="/audit" data-inline="true">{s.acao7}</a></li>
                  </ul>
                  <ul className="nav-info">
                    <li className="nav-info-label">{s.item2}</li>
                    <li>{s.item3}</li>
                    <li>{s.item4}</li>
                    <li>{s.item5}</li>
                  </ul>
                  <ul className="nav-info">
                    <li className="nav-info-label">{s.item6}</li>
                    <li>{s.item7}</li>
                  </ul>
                  <ul className="nav-info">
                    <li className="nav-info-label">{s.item8}</li>
                    <li>{s.item9}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      
        <template id="home-template">
          <div className="home-page">
            <section className="main">
              <div className="container">
                <div className="row">
                  <h2>
                    <div className="line"><span>{s.rotulo}</span></div>
                    <div className="line"><span>{s.rotulo2}</span></div>
                  </h2>
                  <div className="btn-row">
                    <a href="/about-us" data-route="/about-us">
                      More about us
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="cases">
              <div className="container-fluid">
                <div className="cases-navigation">
                  <div className="cases-arrow prev disabled" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </div>
                  <div className="cases-arrow next" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="row">
                  <div className="case">
                    <div className="case-details">
                      <span>{s.rotulo3}</span>
                      <h2>{s.titulo}</h2>
                    </div>
                    <div className="case-image">
                      <img src={s.imagem} alt="Curology" />
                    </div>
                  </div>
      
                  <div className="case">
                    <div className="case-details">
                      <span>{s.rotulo4}</span>
                      <h2>{s.titulo2}</h2>
                    </div>
                    <div className="case-image">
                      <img src={s.imagem2} alt="Yourspace" />
                    </div>
                  </div>
      
                  <div className="case">
                    <div className="case-details">
                      <span>{s.rotulo5}</span>
                      <h2>{s.titulo3}</h2>
                    </div>
                    <div className="case-image">
                      <img src={s.imagem3} alt="Lumin" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </template>
      
        <template id="simple-page-template">
          <div className="page">
            <div className="container">
              <div className="row">
                <h3 className="page-title"></h3>
              </div>
            </div>
          </div>
        </template>
    </section>
  );
}