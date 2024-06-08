import React from "react";
import Menu from "../Componentes/Menu";
import MapaLixeiras from "../Componentes/MapaLixeiras";
import TabelaLixeiras from "../Componentes/TabelaLixeiras";
import { IoTrashBin } from "react-icons/io5";
export default function Coletor() {
  return (
    <div className="bg-fundo min-h-screen flex flex-col">
      <Menu />
      <main className="container mx-auto flex-grow flex flex-col items-center pt-12">
        <div className="flex items-center gap-4">
          <h1 className="font-titulo text-center text-titulo text-4xl sm:text-5xl lg:text-6xl">
            Status das Lixeiras
          </h1>
          <IoTrashBin className="text-titulo text-2xl  sm:text-4xl lg:text-5xl" />
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-center mt-12">
          <MapaLixeiras />
          <TabelaLixeiras />
        </div>
      </main>
    </div>
  );
}
