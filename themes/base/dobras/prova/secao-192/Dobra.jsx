"use client";
/* DOBRA da esteira a partir de bank/_componentes/secoes/secao-192, PORTADA À MÃO
 * em 2026-07-28 para o tema `clinica-estetica` (registo editorial).
 *
 * O QUE FICOU DA ORIGEM (é o material que vale)
 *   a ficha de testemunho: retrato pequeno, nome e função por cima, o depoimento em
 *   corpo de leitura, e a frase-síntese em destaque no fim. Essa ordem inversa (a citação
 *   curta a fechar, e não a abrir) é o que faz o cartão ler-se como página de revista e
 *   não como widget de avaliações.
 *
 * O QUE FOI ARRANCADO, E PORQUÊ
 *   1. Todo o conteúdo da origem: dois nomes, duas funções, dois depoimentos e duas
 *      citações da marca "Genovas". Este é o defeito que entregou o nome e o cargo de uma
 *      pessoa do template a um restaurante em Guimarães; aqui não fica nem uma palavra.
 *   2. Os dois cartões fixos deram lugar a `s.itens`. Uma clínica com quatro testemunhos
 *      reais mostra quatro.
 *   3. A cadeia `page-wrapper > main > section > padding-global > container-box` do
 *      Webflow de origem, cinco divs sem função nenhuma, e o `<main>` interno, que é
 *      marcação inválida dentro do `<main>` do tema.
 *
 * Nada aqui pode ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import './Dobra.css';

export default function Dobra({ slots: s = {}, id }) {
  const itens = (Array.isArray(s.itens) ? s.itens : []).filter(i => i && i.texto);
  if (!itens.length) return null;

  return (
    <section className="dobra" data-dobra="prova-secao-192" id={id}>
      <div className="prova">
        {(s.rotulo || s.titulo) && (
          <header className="prova__header">
            {s.rotulo && <p className="prova__kicker sm">{s.rotulo}</p>}
            {s.titulo && <h2>{s.titulo}</h2>}
          </header>
        )}

        <div className="prova__grelha">
          {itens.map((item, i) => (
            <figure className="ficha" key={i}>
              <div className="ficha__autor">
                {item.imagem && (
                  <div className="ficha__retrato">
                    <img src={item.imagem} alt={item.imagemAlt || ''} />
                  </div>
                )}
                <figcaption className="ficha__identidade">
                  <p className="ficha__nome">{item.nome}</p>
                  {item.funcao && <p className="ficha__funcao sm">{item.funcao}</p>}
                </figcaption>
              </div>

              <blockquote className="ficha__texto">
                <p>{item.texto}</p>
              </blockquote>

              {item.sintese && <p className="ficha__sintese md">{item.sintese}</p>}
            </figure>
          ))}
        </div>

        {s.nota && <p className="prova__nota sm">{s.nota}</p>}
      </div>
    </section>
  );
}
