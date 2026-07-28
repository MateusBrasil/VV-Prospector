"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-50
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
  //   const lenis = new Lenis();
  //   
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   
  //   requestAnimationFrame(raf);
  //   
  //   gsap.registerPlugin(Flip, CustomEase, ScrollToPlugin);
  //   
  //   CustomEase.create(
  //     "hop",
  //     "M0,0 C0.028,0.528 0.129,0.74 0.27,0.852 0.415,0.967 0.499,1 1,1"
  //   );
  //   
  //   const items = document.querySelectorAll("nav .nav-item p");
  //   const gallery = document.querySelector(".gallery");
  //   const galleryContainer = document.querySelector(".gallery-container");
  //   const imgPreviews = document.querySelector(".img-previews");
  //   const minimap = document.querySelector(".minimap");
  //   
  //   let activeLayout = "layout-1-gallery";
  //   
  //   function switchLayout(newLayout) {
  //     if (newLayout === activeLayout) return;
  //   
  //     if (activeLayout === "layout-2-gallery" && window.scrollY > 0) {
  //       gsap.to(window, {
  //         scrollTo: { y: 0 },
  //         duration: 0.5,
  //         ease: "power3.out",
  //         onComplete: () => switchLayoutHandler(newLayout),
  //       });
  //     } else {
  //       switchLayoutHandler(newLayout);
  //     }
  //   }
  //   
  //   function switchLayoutHandler(newLayout) {
  //     const state = Flip.getState(gallery.querySelectorAll(".img"));
  //   
  //     gallery.classList.remove(activeLayout);
  //     gallery.classList.add(newLayout);
  //   
  //     let staggerValue = 0.025;
  //     if (
  //       (activeLayout === "layout-1-gallery" && newLayout === "layout-2-gallery") ||
  //       (activeLayout === "layout-3-gallery" && newLayout === "layout-2-gallery")
  //     ) {
  //       staggerValue = 0;
  //     }
  //   
  //     Flip.from(state, {
  //       duration: 1.5,
  //       ease: "hop",
  //       stagger: staggerValue,
  //     });
  //   
  //     activeLayout = newLayout;
  //   
  //     if (newLayout === "layout-2-gallery") {
  //       gsap.to([imgPreviews, minimap], {
  //         autoAlpha: 1,
  //         duration: 0.3,
  //         delay: 0.5,
  //       });
  //       window.addEventListener("scroll", handleScroll);
  //     } else {
  //       gsap.to([imgPreviews, minimap], {
  //         autoAlpha: 0,
  //         duration: 0.3,
  //       });
  //       window.removeEventListener("scroll", handleScroll);
  //       gsap.set(gallery, { clearProps: "y" });
  //       gsap.set(minimap, { clearProps: "y" });
  //     }
  //   
  //     items.forEach((item) => {
  //       item.classList.toggle("active", item.id === newLayout);
  //     });
  //   }
  //   
  //   items.forEach((item) => {
  //     item.addEventListener("click", () => {
  //       if (!item.id) return;
  //       const newLayout = item.id;
  //       switchLayout(newLayout);
  //     });
  //   });
  //   
  //   function handleScroll() {
  //     if (activeLayout !== "layout-2-gallery") return;
  //   
  //     const imgPreviewsHeight = imgPreviews.scrollHeight;
  //     const galleryHeight = gallery.scrollHeight;
  //     const scrollY = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //   
  //     const scrollFraction = scrollY / (imgPreviewsHeight - windowHeight);
  //     const galleryTranslateY =
  //       -scrollFraction * (galleryHeight - windowHeight) * 1.525;
  //     const minimapTranslateY =
  //       scrollFraction * (windowHeight - minimap.offsetHeight) * 0.425;
  //   
  //     gsap.to(gallery, {
  //       y: galleryTranslateY,
  //       ease: "none",
  //       duration: 0.1,
  //     });
  //   
  //     gsap.to(minimap, {
  //       y: minimapTranslateY,
  //       ease: "none",
  //       duration: 0.1,
  //     });
  //   }
  //   
  //   window.addEventListener("load", () => {
  //     if (activeLayout === "layout-2-gallery") {
  //       handleScroll();
  //     }
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-scroll-50" ref={raiz}>
      <nav>
            <div className="nav-item"><p>{s.texto}</p></div>
            <div className="nav-item"><p id="layout-1-gallery">01</p></div>
            <div className="nav-item"><p id="layout-2-gallery">02</p></div>
            <div className="nav-item"><p id="layout-3-gallery">03</p></div>
            <div className="nav-item"><p>{s.texto2}</p></div>
          </nav>
      
          <div className="gallery-container">
            <div className="gallery layout-1-gallery">
              <div className="img" id="img1">
                <img src={s.imagem} alt="" />
              </div>
              <div className="img" id="img2">
                <img src={s.imagem2} alt="" />
              </div>
              <div className="img" id="img3">
                <img src={s.imagem3} alt="" />
              </div>
              <div className="img" id="img4">
                <img src={s.imagem4} alt="" />
              </div>
      
              <div className="img" id="img5">
                <img src={s.imagem5} alt="" />
              </div>
              <div className="img" id="img6">
                <img src={s.imagem6} alt="" />
              </div>
              <div className="img" id="img7">
                <img src={s.imagem7} alt="" />
              </div>
              <div className="img" id="img8">
                <img src={s.imagem8} alt="" />
              </div>
      
              <div className="img" id="img9">
                <img src={s.imagem9} alt="" />
              </div>
              <div className="img" id="img10">
                <img src={s.imagem10} alt="" />
              </div>
      
              <div className="img" id="img11">
                <img src={s.imagem11} alt="" />
              </div>
              <div className="img" id="img12">
                <img src={s.imagem12} alt="" />
              </div>
              <div className="img" id="img13">
                <img src={s.imagem13} alt="" />
              </div>
              <div className="img" id="img14">
                <img src={s.imagem14} alt="" />
              </div>
            </div>
          </div>
      
          <div className="minimap"></div>
      
          <div className="img-previews">
            <img src={s.imagem15} alt="" />
            <img src={s.imagem16} alt="" />
            <img src={s.imagem17} alt="" />
            <img src={s.imagem18} alt="" />
            <img src={s.imagem19} alt="" />
            <img src={s.imagem20} alt="" />
            <img src={s.imagem21} alt="" />
            <img src={s.imagem22} alt="" />
            <img src={s.imagem23} alt="" />
            <img src={s.imagem24} alt="" />
            <img src={s.imagem25} alt="" />
            <img src={s.imagem26} alt="" />
            <img src={s.imagem27} alt="" />
            <img src={s.imagem28} alt="" />
          </div>
    </section>
  );
}