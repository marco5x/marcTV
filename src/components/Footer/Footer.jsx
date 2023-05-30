import React from "react";
import { Link } from "react-router-dom";
import marctvplus from "../../assets/marctvplus.png";

export const Footer = () => {
  return (
    <div>
      <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
        <li>
          <Link to="/derechos">Derechos</Link>
        </li>
        <li>
          <img src={marctvplus} alt="MarcTv+" width={50} />
        </li>
        <li>
          <Link to="https://ublockorigin.com/es">Recomendado</Link>
        </li>
      </ul>
    </div>
  );
};
