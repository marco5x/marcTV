import React from "react";
import style from "./Programacion.module.css";
import marctvplus from "../../assets/marctvplus.png";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";
import { Footer } from "../../components/Footer/Footer";
import { Control } from "../../components/Control/Control";

export const Programacion = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className={style.logo}>
        <img src={marctvplus} alt="MARC TV+" width={50} />
      </div>
      <ButtonHome />
      <iframe
        title="agenda"
        allowfullscreen="true"
        src="https://www.reportv.com.ar/finder/index/2680" // "https://www.telered.com.ar/buscador-grilla"
        width={1560}
        height={771}
      ></iframe>
      <Control />
      <Footer />
    </div>
  );
};
