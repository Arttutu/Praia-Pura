import React from "react";
import membros from "./membros.json";
import { motion } from "framer-motion";
export default function Membros() {
  return (
    <section className="bg-fundo2 w-full  sm:pt-12 p-4 pt-12 sm:pb-24">
      <h2 className="font-titulo text-titulo flex justify-center text-4xl sm:text-6xl font-bold">
        Nossos Membros
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <div className=" flex flex-col w-full justify-center sm:flex sm:flex-row sm:justify-around sm:w-[1300px] mx-auto ">
          {membros.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-cardBackground w-full sm:w-[350px] sm:h-[400px] my-auto rounded-[8px] p-4 mt-24 shadow-sm shadow-titulo"
              >
                <div className="flex gap-2 items-center p-2">
                  <div className="py-1">
                    <span className="bg-red-700 w-3 h-3 p-[1px] rounded-full inline-block "></span>
                  </div>
                  <div className="py-1">
                    <span className="bg-yellow-700 w-3 h-3 p-[1px] rounded-full inline-block"></span>
                  </div>
                  <div className="py-1">
                    <span className="bg-green-700 w-3 h-3 p-[1px] rounded-full inline-block"></span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  <img
                    className="rounded-full w-[120px] h-auto"
                    src={item.imagem}
                  />
                  <h1 className=" text-titulo font-titulo font-bold text-2xl">
                    {item.nome}
                  </h1>
                  <p className="text-parafrafo font-paraf">{item.descricao}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
