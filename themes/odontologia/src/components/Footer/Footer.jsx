"use client";

/* PORTE do footer de bank/_componentes/transicoes-de-pagina/transicao-pagina-20.
 * A origem tem a assinatura à esquerda e uma faixa de links à direita; os links de demo
 * foram trocados por contactos reais e a segunda faixa recebe a informação legal do cliente. */
import { blocos, contactos, morada, identidade } from "@/theme/content";
import "./Footer.css";

export default function Footer() {
  const mapa = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent([...(morada.linhas || []), morada.cidade].filter(Boolean).join(", "));
  return (
    <footer className="footer" data-code-eagle="transicao-pagina-20">
      <div className="footer-rail">
        <a className="footer-marca" href="/">{identidade.nome}</a>
        <div className="footer-links" aria-label="Contactos rápidos">
          <a href={contactos.telefoneLink}>{contactos.telefone}</a>
          {contactos.whatsapp && <a href={contactos.whatsapp}>WhatsApp</a>}
          <a href={mapa} target="_blank" rel="noreferrer">Ver unidades</a>
        </div>
      </div>
      <div className="footer-info">
        <p>{[...(morada.linhas || []), morada.cidade].filter(Boolean).join(" · ")}</p>
        <a className="footer-agendar" href={contactos.reservaUrl}>{blocos.footer.botao}</a>
      </div>
      <div className="footer-meta">
        <p>{blocos.footer.copyright}</p>
        <p>{blocos.footer.assinatura}</p>
      </div>
    </footer>
  );
}
