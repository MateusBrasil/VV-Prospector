"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/efeitos-3d/animacao-3d-4/delphi-main
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto, dentro do useGSAP.
   * A esteira NÃO o converte sozinha porque ele foi escrito para correr num documento
   * inteiro (usa document.querySelector global, espera classes que já não existem, e às
   * vezes assume ordem de carregamento). Converter às cegas produz animação que corre no
   * elemento errado, que é pior que animação nenhuma. Escopar ao `raiz.current` e testar. */
  // useEffect(() => {
  //   import React from 'react';
  //   import ReactDOM from 'react-dom/client';
  //   import App from './App';
  //   
  //   const rootElement = document.getElementById('root');
  //   if (!rootElement) {
  //     throw new Error("Could not find root element to mount to");
  //   }
  //   
  //   const root = ReactDOM.createRoot(rootElement);
  //   root.render(
  //     <React.StrictMode>
  //       <App />
  //     </React.StrictMode>
  //   );
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-3d-4" ref={raiz}>
      <div id="root"></div>
        <script type="module" src="/index.tsx"></script>
    </section>
  );
}