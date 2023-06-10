import React from "react";
import style from "./Grilla.module.css";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";
import { Control } from "../../components/Control/Control";

export const Grilla = () => {
  return (
    <div className="flex w-full bg-slate-950">
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
      <Control />
    </div>
  );
};
