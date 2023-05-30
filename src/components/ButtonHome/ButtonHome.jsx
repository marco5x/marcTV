import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ButtonHome.module.css";

export const ButtonHome = () => {
  return (
    <NavLink to={"/"} className={style.link}>
      📺
    </NavLink>
  );
};
