import ClientLayout from "@/client-layout";
import { classesDeFonte } from "@/theme/fontes.generated";
import { C, seo } from "@/theme/content";

import "./globals.css";

/* Este ficheiro não tem conteúdo e não é editado por cliente nenhum.
 *
 * A versão do template original tinha dois defeitos que chegaram a produção: `lang="en"`
 * num site em português (o leitor de ecrã pronuncia a copy com fonética inglesa e o Google
 * indexa na língua errada) e uma meta description com o crédito do autor do template,
 * servida no resultado de pesquisa do negócio como se fosse a descrição dele. Ambos vêm
 * agora do cliente.json e são FATAIS no schema: sem eles, o build recusa. */

export const metadata = {
  title: seo.title,
  description: seo.description,
  ...(seo.ogImage ? { openGraph: { images: [seo.ogImage] } } : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang={C.locale}>
      <body className={classesDeFonte}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
