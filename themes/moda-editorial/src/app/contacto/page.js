"use client";

/* Contacto: morada, telefone, horário e redes sociais. Sem formulário: este tema não tem
 * backend nenhum, e um formulário sem destino seria pior do que não ter formulário.
 * `morada.linhas` e `contactos.telefone` são FATAIS (sempre existem); `horarios` e
 * `sociais` são OMISSIVEIS e cada bloco desaparece sozinho se faltar (ver `tem`). */

import Copy from "@/components/Copy/Copy";
import { contactos, horarios, morada, sociais, tem } from "@/theme/content";

import "./contacto.css";

export default function Contacto() {
  return (
    <section className="contacto-hero">
      <div className="container">
        <Copy type="lines" animateOnScroll={false} delay={0.2}>
          <h1>{morada.cidade}</h1>
        </Copy>

        <div className="contacto-grid">
          <div className="contacto-bloco">
            <Copy type="lines" animateOnScroll={false} delay={0.35}>
              <p className="mono">Morada</p>
            </Copy>
            <Copy type="lines" animateOnScroll={false} delay={0.4}>
              <div>
                {morada.linhas.map((linha) => (
                  <p key={linha}>{linha}</p>
                ))}
              </div>
            </Copy>
          </div>

          <div className="contacto-bloco">
            <Copy type="lines" animateOnScroll={false} delay={0.45}>
              <p className="mono">Telefone</p>
            </Copy>
            <Copy type="lines" animateOnScroll={false} delay={0.5}>
              <p>
                <a href={contactos.telefoneLink}>{contactos.telefone}</a>
              </p>
            </Copy>
          </div>

          {tem("horarios") && (
            <div className="contacto-bloco">
              <Copy type="lines" animateOnScroll={false} delay={0.55}>
                <p className="mono">Horário</p>
              </Copy>
              <Copy type="lines" animateOnScroll={false} delay={0.6}>
                <div>
                  {horarios.linhas.map((linha) => (
                    <p key={linha}>{linha}</p>
                  ))}
                </div>
              </Copy>
            </div>
          )}

          {tem("sociais") && (
            <div className="contacto-bloco">
              <Copy type="lines" animateOnScroll={false} delay={0.65}>
                <p className="mono">Redes</p>
              </Copy>
              <div className="contacto-sociais">
                {sociais.map((social) => (
                  <Copy type="lines" animateOnScroll={false} delay={0.7} key={social.label}>
                    <p>
                      <a href={social.href}>{social.label}</a>
                    </p>
                  </Copy>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
