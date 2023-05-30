import React from "react";
import { ButtonHome } from "../ButtonHome/ButtonHome";
import marctvplus from "../../assets/marctvplus.png";

export const Peliserie = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ zIndex: "3", position: "fixed" }}>
        <img src={marctvplus} alt="MARC TV+" width={50} />
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
