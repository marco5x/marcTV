import React from "react";
import marctvplus from "../../assets/marctvplus.webp";
import { ButtonHome } from "../ButtonHome/ButtonHome";

export const PeliserieP = () => {
  return (
    <div className="flex">
      <div className="fixed w-16 h-14 z-10 text-center left-8 bg-peplu xl:left-3 xl:w-48 xl:h-16">
        <img
          className="aspect-auto"
          src={marctvplus}
          alt="MARC TV+"
          width={60}
          height="auto"
        />
      </div>
      <ButtonHome />
      <iframe
        className="min-h-[100dvh] w-[100dvw]"
        title="movies"
        allowfullscreen="true"
        src="https://pelisplus.ninja/peliculas-estrenos/"
        width={1560}
        height={775}
      ></iframe>
    </div>
  );
};
