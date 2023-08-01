import React from "react";
import marctvplus from "../../assets/marctvplus.webp";
import { ButtonHome } from "../ButtonHome/ButtonHome";

export const PeliserieC = () => {
  return (
    <div className="flex">
      <div className="fixed w-full h-8 bg-slate-900"></div>
      <div className="fixed z-10 w-64 mt-8 ml-1 h-16 bg-cue">
        <img
          className="aspect-auto ml-5"
          src={marctvplus}
          alt="MARC TV+"
          width={60}
          height={"auto"}
        />
      </div>
      <ButtonHome />
      <iframe
        className="min-h-[100dvh] w-[100dvw]"
        title="movies"
        allowfullscreen="true"
        src="https://cuevana.pro/peliculas/estrenos"
        width={1560}
        height={775}
      ></iframe>
      <div className="fixed w-[97dvw] h-52 md:h-32 xl:h-20 bottom-0 bg-slate-900"></div>
    </div>
  );
};
