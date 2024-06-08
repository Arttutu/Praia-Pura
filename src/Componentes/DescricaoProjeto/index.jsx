import React, { useState } from "react";
import Botao from "../Botao";
import CardProblema from "../CardProblema";
import Problemas from "./problema.json";
import { motion } from "framer-motion";
import { FaComputer, FaDatabase } from "react-icons/fa6";
import { FaMapSigns } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
export default function DescricaoProjeto() {
  const [solucao, setSolucao] = useState(false);
  const HandleSolucao = () => {
    setSolucao(!solucao);
  };
  return (
    <div className=" p-8 container sm:mx-auto mt-24 bg-fundo w-svw h-svh">
      <div className=" flex flex-col sm:flex sm:flex-row items-start justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="w-full sm:w-1/2 flex flex-col gap-6"
        >
          <h3 className="font-titulo text-titulo font-bold text-center sm:text-left  text-4xl sm:text-6xl">
            O problema
          </h3>
          <p className=" text-center  sm:text-left font-paraf text-parafrafo text-2xl leading-10 ">
            É provável que o primeiro problema que pensemos sobre o impacto
            humano nos oceanos seja todo o lixo que acaba neles, principalmente
            por quem frequenta as praias. Se quisermos preservar a vida e a
            qualidade dela na Terra, precisamos criar práticas responsáveis e
            economicamente viáveis. Como integrar o mundo digital na solução?
          </p>
          <div className="flex gap-8">
            <NavLink to="/login">
              <Botao nome="Acesse" />
            </NavLink>
            <button
              onClick={HandleSolucao}
              className="bg-botao text-textoBotao rounded-md p-2 w-40 md:w-52 hover:bg-cardBackground2 ease-in duration-300"
            >
              Solução
            </button>
          </div>
          {solucao ? (
            <div className="flex flex-col gap-2 mt-12 ">
              <h4 className="font-titulo text-titulo font-bold text-center sm:text-left  text-4xl sm:text-6xl">
                A solução
              </h4>
              <div className="flex flex-col gap-4 mt-20">
                <h5 className="text-titulo font-titulo text-4xl  text-center sm:text-left font-semibold ">
                  A coleta
                </h5>
                <p className="text-parafrafo font-paraf text-2xl   text-center sm:text-left leading-10">
                  Os coletores acessam com login e veem em tempo real as
                  lixeiras cheias, os locais mais frequentados e os com mais
                  descarte inadequado
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-20">
                <h5 className="text-titulo font-titulo text-4xl text-center sm:text-left font-semibold ">
                  O descarte
                </h5>
                <p className="text-parafrafo font-paraf text-2xl  text-center sm:text-left leading-10">
                  Os coletores acessam com login e veem em tempo real as
                  lixeiras cheias, os locais mais frequentados e os com mais
                  descarte inadequado
                </p>
              </div>
              <div className="flex flex-col gap-8 mt-16 text-center sm:text-left ">
                <h4 className="text-titulo font-titulo text-2xl sm:text-4xl font-semibold ">
                  Tecnologias
                </h4>
                <div className=" flex flex-col items-center sm:flex sm:flex-row gap-8 ">
                  <div className="flex items-center gap-2">
                    <span className="font-paraf text-parafrafo text-xl">
                      Sistema web
                    </span>
                    <FaComputer className="text-2xl text-botao" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-paraf text-parafrafo text-xl">
                      Banco de dados
                    </span>
                    <FaDatabase className="text-2xl text-botao" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-paraf text-parafrafo text-xl">
                      API maps
                    </span>
                    <FaMapSigns className="text-2xl text-botao" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-paraf text-parafrafo text-xl">
                      Sensores de nível
                    </span>
                    <RiDeleteBin3Fill className="text-2xl text-botao" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </motion.div>
        <div className="flex flex-col gap-12 mt-12">
          {Problemas.map((item, index) => {
            return (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeIn" }}
              >
                <CardProblema
                  key={index}
                  titulo={item.titulo}
                  descricao={item.descricao}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
