"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/webgl-threejs/efeitos-webgl-6
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: modulo-es).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   import { StrictMode } from 'react'
  //   import { createRoot } from 'react-dom/client'
  //   import App from './App.jsx'
  //   import './index.css'
  //   
  //   createRoot(document.getElementById('root')).render(
  //     <StrictMode>
  //       <App />
  //     </StrictMode>,
  //   )
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-efeitos-webgl-6" ref={raiz}>
      <div id="root"></div>
    </section>
  );
}