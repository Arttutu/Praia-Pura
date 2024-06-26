import React from "react";
import lixo from "../../assets/lixo.jpeg";
import Botao from "../Botao";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export default function Apresentacao() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeIn" }}
    >
      <section className="container mx-auto py-32 flex flex-col md:flex-row gap-12 justify-center items-center p-8 bg-fundo ">
        <div className="flex flex-col  text-center sm:justify-start sm:items-left gap-12">
          <h1 className="text-titulo text-4xl md:text-4xl lg:text-6xl font-titulo font-bold ">
            Gestão Inteligente de Resíduos em Praias
          </h1>
          <p className="text-parafrafo text-xl md:text-2xl lg lg:text-4xl font-paraf">
            Uma solução para melhorar a limpeza e a gestão de resíduos nas
            praias.
          </p>
          <div className="flex items-center justify-center sm:items-start md:flex-row gap-4">
            <Botao nome="Saiba mais" />
            <NavLink to="/login">
              <Botao nome="Acesse" />
            </NavLink>
          </div>
        </div>
        <div></div>
      </section>
    </motion.div>
  );
}
