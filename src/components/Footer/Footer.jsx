import React from "react";
import { Link } from "react-router-dom";
import marctvplus from "../../assets/marctvplus.webp";

export const Footer = () => {
  return (
    <div>
      <ul className="fixed w-full mt-6 bottom-0 bg-black flex justify-center align-center justify-evenly">
        <li>
          <Link
            className="text-xl text-white font-bold duration-300 hover:text-sky-600 hover:border-b-4 border-sky-600"
            to="/aviso"
          >
            Aviso Legal
          </Link>
        </li>
        <li selector="">
          <a href="#home">
            <img
              className="aspect-auto"
              src={marctvplus}
              alt="MarcTv+"
              width={50}
              height={"auto"}
            />
          </a>
        </li>
        <li>
          <Link
            className="text-xl text-white font-bold duration-300 hover:text-sky-600 hover:border-b-4 border-sky-600"
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
