import React from "react";
import { ButtonHome } from "../ButtonHome/ButtonHome";
import marctvplus from "../../assets/marctvplus.png";

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
        title="movies"
        allowfullscreen="true"
        src="https://repelis24.rs/inicio/"
        width={1560}
        height={775}
      ></iframe>
    </div>
  );
};
