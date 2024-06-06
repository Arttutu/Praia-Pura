import React from "react";

export default function Botao({ nome }) {
  return (
    <button className="bg-botao text-textoBotao rounded-md p-2 w-40 md:w-52 hover:bg-cardBackground2 ease-in duration-300">
      {nome}
    </button>
  );
}
