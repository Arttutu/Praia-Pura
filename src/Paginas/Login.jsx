import React from "react";
import Menu from "../Componentes/Menu";
import Login from "../Componentes/Login";

export default function LoginPage() {
  return (
    <div className="bg-fundo  ">
      <Menu />
      <main className=" container w-full mx-auto ">
        <div className="flex flex-col items-center gap-24  pt-16">
          <h1 className="font-titulo text-center text-titulo text-4xl sm:text-6xl">
            Apoie a nossa causa!
          </h1>
          <Login />
        </div>
      </main>
    </div>
  );
}
