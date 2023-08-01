import React from "react";
import marctvplus from "../../assets/marctvplus.webp";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";
import { Control } from "../../components/Control/Control";

export const Programacion = () => {
  return (
    <div className="flex">
      <div className="fixed z-10 flex items-center bg-grilla w-52 h-11 left-12 md:w-96 xl:ml-24">
        <img
          className="aspect-auto xl:mt-3"
          src={marctvplus}
          alt="MARC TV+"
          width={50}
          height="auto"
        />
      </div>
      <ButtonHome />
      <iframe
        className="absolute min-h-[100dvh] w-[100dvw]"
        title="agenda"
        allowfullscreen="true"
        src="https://www.telered.com.ar/buscador-grilla" //"https://www.reportv.com.ar/finder/index/2680"
        width={1560}
        height={790}
      ></iframe>
      <Control />
    </div>
  );
};
