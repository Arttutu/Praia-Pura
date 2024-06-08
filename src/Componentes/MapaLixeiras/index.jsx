import React from "react";
import maps from "../../assets/maps.jpeg";

export default function MapaLixeiras() {
  return (
    <div className="flex justify-center items-center p-6 md:p-12 w-full md:w-1/2">
      <img
        src={maps}
        alt="Mapa de Lixeiras"
        className="rounded-lg max-w-full shadow-md"
      />
    </div>
  );
}
