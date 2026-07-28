// Placeholder content for the home view. Real copy should replace this (or come
// from a CMS/hook). Kept out of components per the data rules — passed in as props.
// See obsidian/frontend/component-conventions.md (Data rules).
import type { HeroContent } from "@/views/hero";
import type { AboutContent } from "@/views/about";
import type { StatsContent } from "@/views/stats";
import type { ShowcaseContent } from "@/views/showcase";
import type { WorksContent } from "@/views/works";
import type { ChainContent } from "@/views/chain";
import type { SiteNavContent } from "@/views/site-nav";

export interface HomeContent {
  /** Shared fixed site header (rendered once). */
  nav: SiteNavContent;
  hero: HeroContent;
  logos: {
    label: string;
    /** Placeholder partner/customer names — rendered as one flat grey. */
    items: string[];
  };
  about: AboutContent & { labelId: string };
  stats: StatsContent;
  showcase: ShowcaseContent;
  works: WorksContent;
  chain: ChainContent;
}

// The marketing nav is shared across the hero and chain stages.
const siteNav: SiteNavContent = {
  brand: "Stride",
  items: ["Serviços", "Como funciona", "Sobre nós", "Depoimentos"],
  cta: "Solicitar uma demo",
};

export const homeContent: HomeContent = {
  nav: siteNav,
  hero: {
    titleLines: ["Transforme saldo em", "impulso"],
    sectionLabel: "Início",
    sceneLabel: "Explosão de plasma animada",
    cta: siteNav.cta,
    secondaryCta: "Saiba mais",
    insightTitle:
      "Tenha clareza e controle para agir com confiança exatamente quando importa.",
    insightBody:
      "Veja seu dinheiro trabalhar tão bem quanto você. Poupança automatizada, retornos reais e uma visão clara de cada movimento, sem jargão e sem adivinhação.",
    stats: [
      { value: "4.9", label: "Avaliação dos usuários" },
      { value: "30k", label: "Clientes ativos" },
      { value: "15k", label: "Feedbacks positivos" },
    ],
  },
  logos: {
    label: "A escolha de equipes financeiras",
    items: ["Northwind", "Ledgerly", "Vaulted", "Paycore", "Finova", "Quanta", "Settle", "Corvus"],
  },
  about: {
    labelId: "about-title",
    eyebrow: "Sobre nós",
    lead: "Uma plataforma fintech criada para mover dinheiro",
    mutedLead: "com mais inteligência e liquidar pagamentos mais rápido",
  },
  stats: {
    label: "Em números",
    brand: "LEDGERLY",
    collab: {
      value: "120+",
      desc: "Parcerias com bancos líderes e redes de pagamento.",
    },
    commitment: {
      eyebrow: "Compromisso com disponibilidade",
      value: "99.99%",
      quote:
        "A infraestrutura de pagamentos deles mudou completamente a forma como movemos dinheiro. É rápida, confiável e segura.",
    },
    data: {
      label: "Pontos de dados",
      value: "520k+",
      desc: "Analisados todos os dias para gerar decisões financeiras mais inteligentes.",
    },
    reach: { label: "Países", value: "60+" },
  },
  chain: {
    heading: "Impulso financeiro",
    tagline:
      "Veja seu dinheiro trabalhar tão bem quanto você. Poupança automatizada, retornos reais e uma visão clara de cada movimento, sem jargão e sem adivinhação.",
    aside: "quando mais importa",
  },
  showcase: {
    heading: "Engenharia cuidadosa em cada detalhe",
    cta: "Explorar a plataforma",
    items: [
      { prefix: "Nossa", name: "Abordagem", image: "/assets/images/3rd/approach.png" },
      { prefix: "Nossa", name: "Tecnologia", image: "/assets/images/3rd/technology.jpg" },
      { prefix: "Nossa", name: "Segurança", image: "/assets/images/3rd/security.jpg" },
      { prefix: "Nossa", name: "Equipe", image: "/assets/images/3rd/team.jpg" },
    ],
  },
  works: {
    heading: "Nosso portfólio",
    viewLabel: "Ver projeto",
    items: [
      { name: "Northwind", year: "2026", image: "/assets/images/portfolio/1.jpg" },
      { name: "Ledgerly", year: "2025", image: "/assets/images/portfolio/2.jpg" },
      { name: "Vaulted", year: "2025", image: "/assets/images/portfolio/3.jpg" },
      { name: "Paycore", year: "2024", image: "/assets/images/portfolio/4.jpg" },
      { name: "Finova", year: "2024", image: "/assets/images/portfolio/5.jpg" },
      { name: "Corvus", year: "2023", image: "/assets/images/portfolio/6.jpg" },
    ],
  },
};
