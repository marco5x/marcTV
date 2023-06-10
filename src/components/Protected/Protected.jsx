import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

export const Protected = ({ children }) => {
  const modal = document.getElementById("modal");
  const navigate = useNavigate();
  const [pass, setPass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let password = localStorage.getItem("pass");

  const logIn = (e) => {
    e.preventDefault();
    localStorage.setItem("pass", pass.pass);
    if (pass.pass === process.env.REACT_APP_PASS) setIsLoggedIn(true);
  };

  const handlePass = (e) => {
    setPass({
      [e.target.name]: e.target.value,
    });
  };

  if (!password && !isLoggedIn) {
    return createPortal(
      <div className="relative z-10 bg-transp">
        <div className="fixed inset-0 bg-transp"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white pt-4 sm:pt-4">
                <div className="sm:flex sm:items-start ">
                  <div className="mt-3 w-full text-center sm:mt-0 sm:text-left ">
                    <div className="ml-96 pl-5- flex h-12 w-12 items-center justify-center rounded-full bg-red-300  sm:h-10 sm:w-10">
                      <button type="button" onClick={() => navigate("/")}>
                        ✖
                      </button>
                    </div>
                    <form onSubmit={logIn}>
                      <div className="flex flex-col  items-center text-base font-semibold leading-6 text-gray-900">
                        <label>
                          Contraseña:
                          <input
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder=" Ingrese una contraseña"
                            required
                            name="pass"
                            type="password"
                            onChange={handlePass}
                          />
                        </label>
                        {pass.pass !== process.env.REACT_APP_PASS ? (
                          <p className="text-red-500 my-3 flex justify-center items-center">
                            Contraseña incorrecta
                          </p>
                        ) : (
                          <div className="flex mt-3 justify-center items-center w-full h-12 bg-gray-100 sm:flex sm:flex-row-reverse">
                            <button
                              type="submit"
                              className="mt-3 inline-flex w-full h-8 rounded-md bg-black px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-slate-700 sm:mt-0 sm:w-auto"
                            >
                              Entrar
                            </button>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
      modal,

      {
        /*////////////////*/
      } /*
      <div className="fixed inset-0 z-10 blur-sm">
        <div className=" flex flex-row flex-wrap w-5 m-3 p-3 rounded shadow-sm">
          <button className="buttonX" onClick={() => navigate("/")}>
            ❌
          </button>
          <form onSubmit={logIn}>
            <label>Contraseña: </label>
            <input required name="pass" type="password" onChange={handlePass} />
            {pass.pass !== process.env.REACT_APP_PASS ? (
              <p style={{ color: "red" }}>Contraseña incorrecta</p>
            ) : (
              <button type="submit">Entrar</button>
            )}
          </form>
        </div>
      </div>,
      modal*/
    );
  }
  return children;
};
