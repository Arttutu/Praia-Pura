import React from "react";
import Botao from "../Botao";
import { NavLink, Navigate } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col p-12  sm:flex sm:flex-row justify-center gap-32 w-full  items-center">
      <div class="flex   bg-cardBackground2 rounded-[8px] shadow-sm w-full   md:w-[500px] md:h-[400px] shadow-titulo">
        <form class=" w-full flex flex-col items-center p-12 gap-4 text-center">
          <div class="flex flex-col gap-4">
            <span class="text-2xl font-bold text-white font-titulo">
              Cadastro - Coletor
            </span>
            <p class="text-lg font-paraf text-white">cria a sua conta</p>
          </div>
          <div class="flex flex-col  w-full bg-white rounded-md ">
            <input
              class=" p-2 border-b border-gray-300 outline-none"
              type="text"
              placeholder="Nome Completo"
            />
            <input
              class=" p-2 border-b border-gray-300 outline-none"
              type="email"
              placeholder="E-mail"
            />
            <input
              class="p-2 border-b border-gray-300 outline-none"
              type="password"
              placeholder="Senha"
            />
          </div>
          <NavLink to="/coletor">
            <Botao nome="Cadastre"></Botao>
          </NavLink>
        </form>
      </div>
      <div class="flex bg-cardBackground2 rounded-[8px] shadow-sm w-full sm:w-[500px] sm:h-[400px] shadow-titulo">
        <form class=" w-full flex flex-col items-center p-12 gap-4 text-center">
          <div class="flex flex-col gap-4">
            <span class="text-2xl font-bold text-white font-titulo">
              Login - Coletor
            </span>
            <p class="text-lg text-white font-paraf">entrar na sua conta</p>
          </div>
          <div class="flex flex-col gap-4 w-full bg-white rounded-md overflow-hidden">
            <input
              class="w-full h-10 p-2 border-b border-gray-300 outline-none"
              type="email"
              placeholder="E-mail"
            />
            <input
              class="w-full h-10 p-2 border-b border-gray-300 outline-none"
              type="password"
              placeholder="Senha"
            />
          </div>

          <NavLink to="/coletor">
            <Botao nome="Entrar"></Botao>
          </NavLink>
        </form>
      </div>
    </div>
  );
}
