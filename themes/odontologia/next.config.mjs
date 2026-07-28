/** @type {import('next').NextConfig} */
const nextConfig = {
  /* EXPORTAÇÃO ESTÁTICA — igual ao moda-editorial e ao restaurante-noir, de propósito:
   * o mesmo `tools/verificar.mjs` e o mesmo `vercel deploy <pasta>` servem os três. */
  output: "export",

  /* OBRIGATÓRIO. Sem isto o export escreve "sobre.html" na raiz E cria uma pasta `sobre/`
   * sem index dentro; qualquer hospedagem estática devolve 404 em /sobre. Bug confirmado
   * ao vivo na Vaninha Fashion. Com `trailingSlash` sai `sobre/index.html`. */
  trailingSlash: true,

  /* `next/image` fora de uso: as dobras portadas manipulam `object-fit` e `clip-path`
   * diretamente no <img>, e o wrapper que o next/image acrescenta parte esse enquadramento.
   * A otimização vem do resize no build. */
  images: { unoptimized: true },
};

export default nextConfig;
