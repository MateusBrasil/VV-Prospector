// Placeholder content for the product explainer section. Original copy — swap for
// real product messaging (and a real card image) when available.
export interface ProductContent {
  labelId: string;
  heading: string;
  cta: string;
  description: string;
  cards: {
    grow: { title: string; body: string };
    liquid: { title: string; body: string };
    hands: { title: string; body: string };
  };
}

export const productContent: ProductContent = {
  labelId: "product-title",
  heading: "O que é Northwind?",
  cta: "Explorar agora",
  description:
    "Northwind é uma conta inteligente de rendimento que coloca o dinheiro parado para trabalhar, rendendo continuamente sem perder liquidez nem estabilidade em dólar.",
  cards: {
    grow: {
      title: "Capital que rende",
      body: "Seu saldo rende automaticamente ao ser direcionado para mercados de crédito avaliados e de alto rendimento.",
    },
    liquid: {
      title: "Sempre líquido, sempre estável",
      body: "Movimente seu dinheiro no momento em que precisar, com lastro integral, sem bloqueios e sem espera.",
    },
    hands: {
      title: "Totalmente automático",
      body: "Nada para gerenciar. A Northwind rebalanceia tudo em segundo plano, dia e noite.",
    },
  },
};
