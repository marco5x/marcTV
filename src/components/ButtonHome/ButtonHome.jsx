import React from "react";
import { NavLink } from "react-router-dom";

export const ButtonHome = () => {
  return (
    <NavLink
      to={"/"}
      className="fixed z-10 decoration-0 rounded-full p-4 bg-sky-500 bottom-5 left-3.5"
    >
      📺
    </NavLink>
  );
};
