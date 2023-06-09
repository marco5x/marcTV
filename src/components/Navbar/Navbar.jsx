import React from "react";
import marctvplus from "../../assets/marctvplus.png";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav class="sticky z-20 top-0 flex w-full h-16 items-center justify-around bg-sky-500 py-2 text-neutral-500 shadow-lg lg:py-4">
      <ul className="absolute flex w-full items-center justify-around">
        <li>
          <a href="/">
            <img src={marctvplus} alt="MARC TV+" width={60} />
          </a>
        </li>
        <li>
          <div className="relative w-40">
            <div className="h-10 bg-sky-400 flex border border-gray-200 rounded items-center">
              <buton
                className="px-4 appearance-none outline-none text-gray-800 w-full"
                disabled
                name="select"
                id="select"
              >
                Programación
              </buton>
              <label
                for="show_more"
                className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
              >
                <svg
                  className="w-4 h-4 mx-2 fill-current"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </label>
            </div>
            <input
              type="checkbox"
              name="show_more"
              id="show_more"
              className="hidden peer"
            />
            <div className="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-slate-200 ">
              <div className="cursor-pointer hover:bg-sky-200">
                <NavLink
                  className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100"
                  to={"/grilla"}
                >
                  Programacion 1
                </NavLink>
              </div>
              <div className="cursor-pointer hover:bg-sky-200 border-t">
                <NavLink
                  className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100"
                  to={"/programacion"}
                >
                  Programacion 2
                </NavLink>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="relative w-40">
            <div className="h-10 bg-sky-400 flex border border-gray-200 rounded items-center">
              <buton
                className="px-4 appearance-none outline-none text-gray-800 w-full"
                disabled
                name="select"
                id="select"
              >
                Pelis & Series
              </buton>
              <label
                for="show_mores"
                className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
              >
                <svg
                  className="w-4 h-4 mx-2 fill-current"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </label>
            </div>
            <input
              type="checkbox"
              name="show_mores"
              id="show_mores"
              className="hidden peer"
            />
            <div className="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-slate-200 ">
              <div className="cursor-pointer hover:bg-sky-200">
                <NavLink
                  className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100"
                  to={"/peliserieC"}
                >
                  Peliserie <strong>C</strong> ▶
                </NavLink>
              </div>
              <div className="cursor-pointer hover:bg-sky-200 border-t">
                <NavLink
                  className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100"
                  to={"/peliserieP"}
                >
                  Peliserie🅿
                </NavLink>
              </div>
              <div className="cursor-pointer hover:bg-sky-200 border-t">
                <NavLink
                  className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100"
                  to={"/peliserie"}
                >
                  Peliserie
                </NavLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
