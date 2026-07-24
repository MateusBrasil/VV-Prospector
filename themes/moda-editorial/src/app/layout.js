import ClientLayout from "@/client-layout";
import { classesDeFonte } from "@/theme/fontes.generated";
import { C, seo } from "@/theme/content";

import "./globals.css";

/* Este ficheiro deixou de ter conteúdo e não volta a ser editado por cliente nenhum.
 *
 * A versão anterior tinha dois defeitos que chegaram a produção:
 *   lang="en" num site inteiramente em português, o leitor de ecrã pronuncia a copy com
 *   fonética inglesa e o Google indexa o site na língua errada;
 *   a meta description trazia o crédito do autor do template, servida no resultado de
 *   pesquisa do restaurante como se fosse a descrição do próprio negócio.
 * Nenhum dos dois volta a ser possível: ambos vêm do cliente.json e são campos obrigatórios
 * (ver FATAIS em tools/tema/schema.mjs). Sem eles, o build recusa. */

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
