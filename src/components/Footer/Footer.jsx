import React from "react";
import { Link } from "react-router-dom";
import marctvplus from "../../assets/marctvplus.png";

export const Footer = () => {
  return (
    <div>
      <ul className="fixed w-full mt-6 bottom-0 bg-sky-100 flex justify-center align-center justify-evenly">
        <li>
          <Link
            className="text-xl font-bold duration-300 hover:text-sky-600 hover:border-b-4 border-sky-600"
            to="/derechos"
          >
            Derechos
          </Link>
        </li>
        <li>
          <img src={marctvplus} alt="MarcTv+" width={50} />
        </li>
        <li>
          <Link
            className="text-xl font-bold duration-300 hover:text-sky-600 hover:border-b-4 border-sky-600"
            target="_blank"
            to="https://ublockorigin.com/es"
          >
            Recomendado
          </Link>
        </li>
      </ul>
    </div>
  );
};
