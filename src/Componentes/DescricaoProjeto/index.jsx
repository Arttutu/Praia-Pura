import React from "react";
import Botao from "../Botao";

export default function DescricaoProjeto() {
  return (
    <div className="container mx-auto mt-24 bg-fundo w-svw h-svh">
      <div className="flex justify-between">
        <div className=" w-1/2 flex flex-col gap-6">
          <h3 className="font-titulo text-titulo font-bold  text-2xl sm:text-6xl">
            O problema
          </h3>
          <p className="font-paraf text-parafrafo text-2xl ">
            É provável que o primeiro problema que pensemos sobre o impacto
            humano nos oceanos seja todo o lixo que acaba neles, principalmente
            por quem frequenta as praias. Se quisermos preservar a vida e a
            qualidade dela na Terra, precisamos criar práticas responsáveis e
            economicamente viáveis. Como integrar o mundo digital na solução?
          </p>
          <Botao nome="Acesse" />
        </div>
        <div>Cards do problema</div>
      </div>
    </div>
  );
}
