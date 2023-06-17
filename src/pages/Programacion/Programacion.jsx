import React from "react";
import marctvplus from "../../assets/marctvplus.webp";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";
import { Control } from "../../components/Control/Control";

export const Programacion = () => {
  return (
    <div className="flex">
      <div className="fixed z-10 flex justift-center items-center bg-grilla w-52 h-11 left-8 xl:ml-44">
        <img
          className="aspect-auto"
          src={marctvplus}
          alt="MARC TV+"
          width={50}
          height="auto"
        />
      </div>
      <ButtonHome />
      <iframe
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
