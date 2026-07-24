"use client";

/* Home: Hero (título, subtítulo e prova social reais) → Vitrine de produtos →
 * Testimonials → CTA. O parágrafo editorial (paginas.home.sobre.titulo, FATAL) que
 * antes vivia numa secção "intro" separada mudou-se pro Hero — era o MESMO texto
 * duas vezes na mesma página. */

import Hero from "@/components/Hero/Hero";
import Vitrine from "@/components/Vitrine/Vitrine";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTA from "@/components/CTA/CTA";
import { blocos } from "@/theme/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Vitrine titulo={blocos.vitrine?.titulo} texto={blocos.vitrine?.texto} />
      <Testimonials />
      <CTA />
    </>
  );
}
