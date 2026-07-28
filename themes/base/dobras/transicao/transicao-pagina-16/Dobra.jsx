"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/transicoes-de-pagina/transicao-pagina-16
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
  /* JS de origem ESCOPADO pela esteira (categoria: dom-simples).
   * Só tocava em querySelector/classList dentro do próprio componente, por isso a troca
   * de `document.` para `raiz.current.` é equivalente e foi feita automaticamente.
   * Continua a precisar de confirmação no ecrã antes de a dobra ser promovida. */
  useGSAP(() => {
    // ===== Page templates =====
    const pages = {
      home: `<section class="hero" data-page="home"><h1>Home</h1></section>`,
      about: `<section class="hero" data-page="about"><h1>About</h1></section>`,
      contact: `<section class="hero" data-page="contact"><h1>Contact</h1></section>`,
    };
    
    // ===== Setup SVG paths (mirrors the useEffect in TransitionProvider) =====
    const svgEl = raiz.current.querySelector(".transition-svg svg");
    const paths = Array.from(svgEl.querySelectorAll("path"));
    
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });
    
    // ===== Animations (1:1 with original leave/enter) =====
    function leave() {
      return new Promise((resolve) => {
        const tween = gsap.timeline({ onComplete: resolve });
    
        paths.forEach((path) => {
          tween.to(
            path,
            {
              strokeDashoffset: 0,
              attr: { "stroke-width": 700 },
              duration: 1,
              ease: "power1.inOut",
            },
            0,
          );
        });
      });
    }
    
    function enter() {
      return new Promise((resolve) => {
        const tween = gsap.timeline({ onComplete: resolve });
    
        paths.forEach((path) => {
          const length = path.getTotalLength();
          tween.to(
            path,
            {
              strokeDashoffset: -length,
              attr: { "stroke-width": 200 },
              duration: 1,
              ease: "power1.inOut",
              onComplete: () => {
                gsap.set(path, { strokeDashoffset: length });
              },
            },
            0,
          );
        });
      });
    }
    
    // ===== Routing =====
    const pageContent = raiz.current.querySelector('#page-content');
    let isTransitioning = false;
    let currentRoute = getRouteFromHash();
    
    function getRouteFromHash() {
      const hash = window.location.hash.replace("#", "");
      return pages[hash] ? hash : "home";
    }
    
    function renderPage(route) {
      pageContent.innerHTML = pages[route] || pages.home;
    }
    
    async function navigate(route) {
      if (isTransitioning) return;
      if (route === currentRoute) return;
      if (!pages[route]) return;
    
      isTransitioning = true;
    
      await leave();
      currentRoute = route;
      renderPage(route);
      if (window.location.hash !== `#${route}`) {
        history.pushState(null, "", `#${route}`);
      }
      await enter();
    
      isTransitioning = false;
    }
    
    // Intercept nav clicks
    raiz.current.querySelectorAll("[data-link]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const route = link.getAttribute("data-link");
        navigate(route);
      });
    });
    
    // Back/forward buttons
    window.addEventListener("popstate", () => {
      const route = getRouteFromHash();
      navigate(route);
    });
    
    // Initial render based on hash
    renderPage(currentRoute);
    
    
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="transicao-transicao-pagina-16" ref={raiz}>
      <nav className="navbar">
            <div className="navbar-logo">
              <a href="#home" data-link="home">{s.acao}</a>
            </div>
            <ul className="navbar-items">
              <li className="navbar-item">
                <a href="#home" data-link="home">{s.acao2}</a>
              </li>
              <li className="navbar-item">
                <a href="#about" data-link="about">{s.acao3}</a>
              </li>
              <li className="navbar-item">
                <a href="#contact" data-link="contact">{s.acao4}</a>
              </li>
            </ul>
          </nav>
      
          
          <main id="page-content">
            <section className="hero" data-page="home">
              <h1>{s.titulo}</h1>
            </section>
          </main>
      
          
          <div className="transition-svg" aria-hidden="true">
            <svg
              viewBox="0 0 2453 2535"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262"
                stroke="var(--transition-stroke-1)"
                strokeWidth="200"
                strokeLinecap="round"
              />
              <path
                d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012"
                stroke="var(--transition-stroke-2)"
                strokeWidth="200"
                strokeLinecap="round"
              />
            </svg>
          </div>
    </section>
  );
}