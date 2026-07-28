"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/webgl-threejs/efeitos-webgl-5/tutorial-grid-main/final
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
  //   import "./style.css";
  //   
  //   import { AssetsId } from "./scripts/constants/AssetsId";
  //   import { AssetsManager } from "./scripts/managers/AssetsManager";
  //   import { Grid } from "./scripts/components/Grid";
  //   import { MainThree } from "./scripts/MainThree";
  //   import { Ticker } from "./scripts/utils/Ticker";
  //   
  //   export class Main {
  //     static async Init() {
  //       MainThree.Init();
  //       Ticker.Start();
  //   
  //       await this.#_LoadAssets();
  //       this.#_CreateScene();
  //     }
  //   
  //     static async #_LoadAssets() {
  //       AssetsManager.AddTexture(AssetsId.TEXTURE_1, "textures/img1.webp");
  //       AssetsManager.AddTexture(AssetsId.TEXTURE_2, "textures/img2.webp");
  //       AssetsManager.AddTexture(AssetsId.TEXTURE_3, "textures/img3.webp");
  //       AssetsManager.AddTexture(AssetsId.TEXTURE_4, "textures/img4.webp");
  //       AssetsManager.AddTexture(AssetsId.TEXTURE_5, "textures/img5.webp");
  //       AssetsManager.AddTexture(AssetsId.TEXTURE_6, "textures/img6.webp");
  //       AssetsManager.AddTexture(AssetsId.TEXTURE_7, "textures/img7.webp");
  //       AssetsManager.AddTexture(AssetsId.TEXTURE_8, "textures/img8.webp");
  //       AssetsManager.AddTexture(AssetsId.TEXTURE_9, "textures/img9.webp");
  //       AssetsManager.AddTexture(AssetsId.TEXTURE_10, "textures/img10.webp");
  //   
  //       await AssetsManager.Load();
  //     }
  //   
  //     static #_CreateScene() {
  //       MainThree.Add(new Grid());
  //     }
  //   }
  //   
  //   Main.Init();
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-webgl-5" ref={raiz}>
      <main>
          <div id="THREE-CONTAINER">
          </div>
        </main>
    </section>
  );
}