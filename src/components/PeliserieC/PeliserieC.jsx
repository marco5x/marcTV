import React from "react";
import marctvplus from "../../assets/marctvplus.png";
import { ButtonHome } from "../ButtonHome/ButtonHome";

export const PeliserieC = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "2rem",
          backgroundColor: "black",
        }}
      ></div>
      <div
        style={{
          marginTop: "30px",
          zIndex: "3",
          position: "fixed",
          left: "18px",
          width: "12.9rem",
          backgroundColor: "black",
        }}
      >
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
