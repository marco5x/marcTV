import React from "react";
import marctvplus from "../../assets/marctvplus.png";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "60px" }}>
        <li>
          <a href="/">
            <img src={marctvplus} alt="MARC TV+" width={50}></img>
          </a>
        </li>
        <li>
          <ul>
            <li>
              <NavLink to={"/programacion"}>Programacion1</NavLink>
            </li>
            <li>
              <NavLink to={"/grilla"}>Programacion2</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <NavLink to={"/peliserie"}>Peliserie</NavLink>
            </li>
            <li>
              <NavLink to={"/peliserieC"}>
                Peliserie <strong>C</strong> ▶
              </NavLink>
            </li>
            <li>
              <NavLink to={"/peliserieP"}>Peliserie🅿</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
