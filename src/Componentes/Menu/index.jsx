import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <header className="w-full h-full ">
      <nav className="bg-fundo2 flex flex-col gap-8 p-4">
        <div className="flex gap-2 items-center justify-center">
          <NavLink to="/">
            <h1 className="flex justify-center font-bold text-2xl text-titulo font-titulo">
              PraiaPura
            </h1>
          </NavLink>

          <FaUmbrellaBeach className="text-titulo text-2xl" />
        </div>
        <ul className=" flex flex-col sm:flex sm:flex-row gap-4 items-center justify-center">
          <NavLink to="/">
            <li className="font-semibold text-lg text-titulo font-paraf hover:text-xl hover:text-parafrafo ease-in duration-300">
              Home
            </li>
          </NavLink>
          <a className="cursor-pointer" href="#projeto">
            <li className="font-semibold text-lg text-titulo font-paraf hover:text-xl hover:text-parafrafo ease-in duration-300">
              Nosso projeto
            </li>
          </a>

          <li className="font-semibold text-lg text-titulo font-paraf hover:text-xl hover:text-parafrafo ease-in duration-300">
            Nossos Membros
          </li>

          <NavLink
            to="/lixeiras"
            className="font-semibold text-lg text-titulo font-paraf hover:text-xl hover:text-parafrafo ease-in duration-300"
          >
            Lixeiras
          </NavLink>
          <NavLink
            to="/login"
            className="font-semibold text-lg text-titulo font-paraf hover:text-xl hover:text-parafrafo ease-in duration-300"
          >
            Coletor
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
