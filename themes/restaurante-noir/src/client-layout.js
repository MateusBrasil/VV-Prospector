"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { ViewTransitions } from "next-view-transitions";

import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const MOBILE_BREAKPOINT = 1000;
const VIEW_TRANSITION_SETTLE_MS = 1600;

const LENIS_EASING = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

const LENIS_SHARED = {
  easing: LENIS_EASING,
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  infinite: false,
  wheelMultiplier: 1,
  orientation: "vertical",
  smoothWheel: true,
  syncTouch: true,
};

const LENIS_MOBILE = {
  ...LENIS_SHARED,
  duration: 0.8,
  smoothTouch: true,
  touchMultiplier: 1.5,
  lerp: 0.09,
};

const LENIS_DESKTOP = {
  ...LENIS_SHARED,
  duration: 1.2,
  smoothTouch: false,
  touchMultiplier: 2,
  lerp: 0.1,
};

export default function ClientLayout({ children }) {
  const pageRef = useRef(null);
  const pageWrapperRef = useRef(null);
  const isFirstNavigation = useRef(true);
  const pathname = usePathname();

  const [isMobile, setIsMobile] = useState(false);

  /* track breakpoint changes */
  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* reset scroll and notify pages after view transitions */
  useEffect(() => {
    window.scrollTo(0, 0);

    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
      return;
    }

    // after a view transition completes, clear flag and dispatch event
    // so destination pages can (re)build ScrollTriggers with settled layout
    const transitionTimer = setTimeout(() => {
      window.__viewTransitioning = false;
      window.dispatchEvent(new Event("viewTransitionComplete"));
    }, VIEW_TRANSITION_SETTLE_MS);

    return () => clearTimeout(transitionTimer);
  }, [pathname]);

  /* MOVIMENTO REDUZIDO, a parte que o CSS não alcança.
   *
   * O `@media (prefers-reduced-motion)` do sistema trava animação e transição de CSS, mas o
   * GSAP anima por JavaScript e passa por cima disso sem dar por nada. Num site construído
   * inteiramente sobre GSAP, isso significa que a preferência do utilizador é ignorada
   * exatamente onde mais importa: no scroll com pin e no parallax.
   *
   * `gsap.ticker.timeScale(200)` faz cada timeline resolver-se quase instantaneamente, em vez
   * de as desligar. A diferença importa: desligar deixaria os elementos presos no estado
   * INICIAL, e como quase tudo aqui começa em `opacity: 0`, o site ficaria em branco para
   * quem pediu menos movimento. Acelerar leva tudo ao estado final, que é a página completa
   * e legível, sem viagem. O Lenis também sai: scroll suave é movimento imposto.
   *
   * A preferência é escutada, não lida uma vez: quem a liga a meio da sessão é atendido. */
  const [movimentoReduzido, setMovimentoReduzido] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const aplicar = () => {
      setMovimentoReduzido(mq.matches);
      // `globalTimeline`, não `ticker`: o ticker do GSAP controla fps e lagSmoothing, e não
      // tem timeScale nenhum. Quem controla a velocidade de TODAS as animações é a timeline
      // global. Confundi os dois e o site inteiro rebentou com "timeScale is not a function",
      // com o build a passar na mesma: foi o passe visual que leu o erro real do browser.
      gsap.globalTimeline.timeScale(mq.matches ? 200 : 1);
    };
    aplicar();
    mq.addEventListener("change", aplicar);
    return () => {
      mq.removeEventListener("change", aplicar);
      gsap.globalTimeline.timeScale(1);
    };
  }, []);

  const lenisOptions = movimentoReduzido
    ? { ...LENIS_DESKTOP, smoothWheel: false, syncTouch: false, duration: 0 }
    : isMobile ? LENIS_MOBILE : LENIS_DESKTOP;

  return (
    <ViewTransitions>
      <ReactLenis root options={lenisOptions}>
        <Nav pageRef={pageWrapperRef} />
        <main className="page" ref={pageRef}>
          <div className="page-wrapper" ref={pageWrapperRef}>
            {children}
          </div>
        </main>
        <Footer />
      </ReactLenis>
    </ViewTransitions>
  );
}
