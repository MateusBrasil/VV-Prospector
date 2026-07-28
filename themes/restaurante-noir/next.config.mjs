/** @type {import('next').NextConfig} */
const nextConfig = {
  /* EXPORTAÇÃO ESTÁTICA — é o que faz os dois formatos de site convergirem.
   *
   * Com isto, `next build` produz uma pasta `out/` que é, em natureza, idêntica a um
   * `sites/<slug>/` montado à mão: HTML e assets, sem servidor. Consequência prática:
   * o MESMO `tools/verificar.mjs` e o MESMO `vercel deploy <pasta>` servem os dois.
   * Sem isto seriam dois pipelines de QA e dois de deploy, a divergir com o tempo.
   *
   * O site já era 100% estático (as 4 rotas saíam prerenderizadas), por isso não se perde
   * nada. Se um dia um tema precisar de servidor, é esse tema que muda esta linha, e aí
   * assume o custo de ter um caminho de verificação próprio. */
  output: "export",

  /* CORRIGIDO: sem isto, `next build` escreve "about.html"/"menu.html"/"reservation.html"
   * na raiz de `out/` MAS também cria uma pasta com o mesmo nome (payloads internos do
   * Next para navegação client-side). Numa hospedagem estática, pedir "/about" encontra a
   * PASTA sem `index.html` dentro dela e devolve 404 — achado ao vivo no tema-irmão
   * (moda-editorial/Vaninha Fashion): /sobre e /contacto devolviam 404 real com o site
   * publicado e a home a funcionar. `trailingSlash:true` faz o export escrever
   * `about/index.html` em vez de `about.html` — mesmo caminho que a pasta já existia
   * para. Bug sistémico do motor (afeta qualquer tema com mais de uma página). */
  trailingSlash: true,

  /* `next/image` está fora de uso neste tema de propósito: o GSAP manipula transform
   * diretamente nos elementos e o wrapper que o next/image acrescenta parte o
   * `about-img` e o `sticky-card-img`. A otimização vem do resize no build. */
  images: { unoptimized: true },
};

export default nextConfig;
