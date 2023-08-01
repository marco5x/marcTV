import React from "react";
import { ButtonHome } from "../ButtonHome/ButtonHome";
import marctvplus from "../../assets/marctvplus.webp";

export const Peliserie = () => {
  return (
    <div className="flex">
      <div className="absolute z-10 w-60 mt-1 left-9 bg-black container:hidden">
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
        src="https://repelis24.rs/inicio/"
        width={1560}
        height={775}
      ></iframe>
    </div>
  );
};
