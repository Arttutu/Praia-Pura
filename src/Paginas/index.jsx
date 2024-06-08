import React from "react";
import Menu from "../Componentes/Menu";
import Apresentacao from "../Componentes/Apresentacao";
import Membros from "../Componentes/Membros";
import DescricaoProjeto from "../Componentes/DescricaoProjeto";
import Login from "../Componentes/Login";

export default function Index() {
  return (
    <>
      <Menu />
      <main className=" mx-auto">
        <Apresentacao />
        <Membros />
        <DescricaoProjeto />
      </main>
    </>
  );
}
