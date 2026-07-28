// Placeholder content for the contact form + site footer. Original copy — swap for
// real messaging, links and contact details when available.

export interface ContactContent {
  labelId: string;
  /** Bold intro prompt above the form. */
  heading: string;
  /** Placeholder / label text for each field. */
  fields: { name: string; phone: string; email: string };
  cta: string;
}

export const contactContent: ContactContent = {
  labelId: "contact-title",
  heading:
    "A Stride está sempre aberta a conversar com pessoas inteligentes e curiosas. Fale com a gente.",
  fields: { name: "Nome", phone: "Telefone", email: "Email" },
  cta: "Enviar",
};

export interface FooterLink {
  label: string;
  href: string;
  /** External links open in a new tab and get rel="noopener". */
  external?: boolean;
}

export interface FooterNavGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContent {
  tagline: string;
  labelId: string;
  heading: string;
  cta: FooterLink;
  backToTop: FooterLink;
  linksLabel: string;
  sitemap: FooterNavGroup;
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
  };
  social: FooterNavGroup;
  copyright: string;
  credit: string;
}

export const footerContent: FooterContent = {
  tagline: "Banco moderno para pessoas e empresas.",
  labelId: "footer-title",
  heading: "Tem perguntas? Vamos conversar.",
  cta: { label: "Preencher formulário", href: "#contact" },
  backToTop: { label: "Voltar ao topo", href: "#top" },
  linksLabel: "Links",
  sitemap: {
    title: "Mapa do site",
    links: [
      { label: "Produto", href: "#" },
      { label: "Preços", href: "#" },
      { label: "Segurança", href: "#" },
      { label: "Sobre", href: "#" },
      { label: "Carreiras", href: "#" },
    ],
  },
  contact: {
    title: "Contato",
    address: "20 Harbour Street, Suite 300, London EC2 1AB",
    phone: "+44 (0)20 7946 0182",
    email: "hello@stride.finance",
  },
  social: {
    title: "Siga-nos",
    links: [
      { label: "X (Twitter)", href: "https://x.com", external: true },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
      { label: "Instagram", href: "https://instagram.com", external: true },
    ],
  },
  copyright: "© 2026 Stride. Todos os direitos reservados.",
  credit: "Criado pela equipe Stride",
};
