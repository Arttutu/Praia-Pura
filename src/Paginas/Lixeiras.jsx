import React from "react";
import Menu from "../Componentes/Menu";
import maps from "../assets/maps.jpeg";
import { FaMapPin } from "react-icons/fa";

export default function Lixeiras() {
  return (
    <>
      <Menu />
      <main className="container pb-28 mx-auto px-4 sm:px-6 sm:pb-0 lg:px-8">
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
            <h1 className="font-titulo text-titulo text-4xl sm:text-5xl lg:text-6xl text-center sm:text-left">
              Veja as lixeiras Próximas
            </h1>
            <FaMapPin className="text-4xl sm:text-5xl lg:text-6xl text-red-700"></FaMapPin>
          </div>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 text-center">
            Utilize o mapa abaixo para encontrar as lixeiras mais próximas de
            você. Clique nos ícones para mais informações.
          </p>
          <img
            src={maps}
            alt="Mapa de Lixeiras"
            className="rounded-lg max-w-full mt-12"
          ></img>
        </div>
      </main>
    </>
  );
}
