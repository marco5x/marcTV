import React from "react";
import marctvplus from "../../assets/marctvplus.png";
import { ButtonHome } from "../ButtonHome/ButtonHome";

export const PeliserieP = () => {
  return (
    <div className="flex">
      <div className="fixed w-16 z-10 text-center mt-1 left-6 bg-peplu">
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
        title="movies"
        allowfullscreen="true"
        src="https://pelisplus.ninja/peliculas-estrenos/"
        width={1560}
        height={775}
      ></iframe>
    </div>
  );
};
