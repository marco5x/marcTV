import React from "react";
import style from "./Grilla.module.css";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";

export const Grilla = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className={style.logo}>
        <h3>GRILLA</h3>
      </div>
      <ButtonHome />
      <iframe
        title="grilla"
        allowfullscreen="true"
        src="https://www.reportv.com.ar/finder/index/2313/"
        width={1560}
        height={775}
      ></iframe>
    </div>
  );
};
