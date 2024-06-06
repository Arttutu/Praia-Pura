import React from "react";

export default function CardProblema({ titulo, descricao }) {
  return (
    <div className=" flex flex-col gap-8 p-4 bg-cardBackground2 rounded-[8px] w-full  sm:w-[600px] shadow-parafrafo shadow-sm">
      <h4 className="text-white font-titulo text-2xl">{titulo}</h4>
      <p className=" leading-8 text-white/70 font-paraf text-sm">{descricao}</p>
    </div>
  );
}
