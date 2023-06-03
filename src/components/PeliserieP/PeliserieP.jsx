import React from "react";
import marctvplus from "../../assets/marctvplus.png";
import { ButtonHome } from "../ButtonHome/ButtonHome";

export const PeliserieP = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          marginTop: "3px",
          zIndex: "3",
          position: "fixed",
          left: "9px",
          width: "4.8rem",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <img src={marctvplus} alt="MARC TV+" width={60} />
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
