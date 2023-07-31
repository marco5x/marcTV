import React from "react";
import { NavLink } from "react-router-dom";

export const ButtonHome = () => {
  return (
    <NavLink
      id="buttonhome"
      to={"/"}
      className="fixed z-10 decoration-0 text-center rounded-full p-4 bg-sky-500 bottom-12 left-1.5 w-16 h-16"
    >
      📺
    </NavLink>
  );
};
