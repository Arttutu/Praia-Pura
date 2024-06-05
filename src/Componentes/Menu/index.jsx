import React from "react";

export default function Menu() {
  return (
    <header className="w-full h-[200px]">
      <nav className="bg-fundo2 flex flex-col gap-8 p-4">
        <h1 className="flex justify-center font-bold text-2xl text-titulo font-titulo">
          PraiaPura
        </h1>
        <ul className="flex gap-4 justify-center">
          <li className="font-semibold text-lg text-titulo font-paraf">
            Nosso projeto
          </li>
          <li className="font-semibold text-lg text-titulo font-paraf">
            Nossos membros
          </li>
          <li className="font-semibold text-lg text-titulo font-paraf">
            Acesse
          </li>
        </ul>
      </nav>
    </header>
  );
}
