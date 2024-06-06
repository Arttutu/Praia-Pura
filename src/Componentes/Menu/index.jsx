import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";

export default function Menu() {
  return (
    <header className="w-full ">
      <nav className="bg-fundo2 flex flex-col gap-8 p-4">
        <div className="flex gap-2 items-center justify-center">
          <h1 className="flex justify-center font-bold text-2xl text-titulo font-titulo">
            PraiaPura
          </h1>
          <FaUmbrellaBeach className="text-titulo text-2xl" />
        </div>
        <ul className=" flex flex-col sm:flex sm:flex-row gap-4 items-center justify-center">
          <a className="cursor-pointer">
            <li className="font-semibold text-lg text-titulo font-paraf hover:text-xl hover:text-parafrafo ease-in duration-300">
              Nosso projeto
            </li>
          </a>
          <a className="cursor-pointer">
            <li className="font-semibold text-lg text-titulo font-paraf hover:text-xl hover:text-parafrafo ease-in duration-300">
              Nossos Membros
            </li>
          </a>
          <a className="cursor-pointer">
            <li className="font-semibold text-lg text-titulo font-paraf hover:text-xl hover:text-parafrafo ease-in duration-300">
              Acesse
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
