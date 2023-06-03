import React from "react";
import { ButtonHome } from "../ButtonHome/ButtonHome";
import marctvplus from "../../assets/marctvplus.png";

export const Peliserie = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          marginTop: "3px",
          zIndex: "3",
          position: "fixed",
          left: "36px",
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
        src="https://repelis24.rs/inicio/"
        width={1560}
        height={775}
      ></iframe>
    </div>
  );
};
