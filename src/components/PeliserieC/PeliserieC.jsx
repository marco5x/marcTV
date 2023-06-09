import React from "react";
import marctvplus from "../../assets/marctvplus.png";
import { ButtonHome } from "../ButtonHome/ButtonHome";

export const PeliserieC = () => {
  return (
    <div className="flex">
      <div className=" fixed w-full h-8 bg-slate-950"></div>
      <div className="fixed z-10 w-52 mt-7 bg-slate-950">
        <img src={marctvplus} alt="MARC TV+" width={60} />
      </div>
      <ButtonHome />
      <iframe
        title="movies"
        allowfullscreen="true"
        src="https://cuevana.pro/inicio"
        width={1560}
        height={775}
      ></iframe>
    </div>
  );
};
