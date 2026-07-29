"use client";

/* Saiu daqui: o H1 do hero ("Kasa"/"blanca", agora identidade.wordmark), as duas linhas
 * do rodapé do hero (identidade.tagline/localidadeCurta, os mesmos do Nav e do menu),
 * o parágrafo editorial do "about" (paginas.home.sobre.titulo, FATAL) com as suas duas
 * etiquetas, e a contagem de fotos da galeria (paginas.home.sobre.numImagens). O padrão
 * de nome de ficheiro `/home/about-N.jpg` é convenção do tema, não conteúdo do cliente. */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Copy from "@/components/Copy/Copy";
import DiningMenu from "@/components/DiningMenu/DiningMenu";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTA from "@/components/CTA/CTA";
import ImageBanner from "@/components/ImageBanner/ImageBanner";
import { blocos, identidade, imagens, paginas } from "@/theme/content";
import MesaRevelada from "@/dobras/hero/mesa-revelada/Dobra";

import "./home.css";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_IMAGE_COUNT = paginas.home.sobre.numImagens;

export default function Home() {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const aboutImages = gsap.utils.toArray(".about-img");

      /* scale each about image in and out as it scrolls through the viewport */
      aboutImages.forEach((image) => {
        const imageScaleTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        imageScaleTimeline
          .fromTo(image, { scale: 0.5 }, { scale: 1.25, ease: "none" })
          .to(image, { scale: 0.5, ease: "none" });
      });

      /* fade out the about header as the image gallery scrolls away */
      gsap.to(".about-header h3", {
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".about-imgs",
          start: "bottom bottom",
          end: "bottom 30%",
          scrub: true,
        },
      });
    }, aboutSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <MesaRevelada s={blocos.hero} />

      <section className="about" ref={aboutSectionRef}>
        <div className="about-header">
          <div className="container">
            <Copy type="lines">
              <h3>{paginas.home.sobre.titulo}</h3>
            </Copy>

            <div className="section-footer">
              {paginas.home.sobre.etiquetas.map((etiqueta, index) => (
                <Copy
                  type="lines"
                  trigger=".about"
                  start="top 50%"
                  delay={0.5 + index * 0.1}
                  key={etiqueta}
                >
                  <p className="sm">{etiqueta}</p>
                </Copy>
              ))}
            </div>
          </div>
        </div>

        <div className="about-imgs">
          <div className="container">
            {Array.from({ length: ABOUT_IMAGE_COUNT }, (_, index) => (
              <div
                key={index + 1}
                className="about-img"
                id={`about-img-${index + 1}`}
              >
                <img src={`/home/about-${index + 1}.jpg`} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiningMenu />
      <Testimonials />
      <CTA />
      <ImageBanner />
    </>
  );
}
