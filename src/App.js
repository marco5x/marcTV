import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Programacion } from "./pages/Programacion/Programacion";
import { Grilla } from "./pages/Grilla/Grilla";
import { Peliserie } from "./components/Peliserie/Peliserie";
import { PeliserieC } from "./components/PeliserieC/PeliserieC";
import { PeliserieP } from "./components/PeliserieP/PeliserieP";
import { Transmision } from "./pages/Transmision/Transmision";
import { PrivateTransmision } from "./pages/PrivateTransmision/PrivateTransmision";
import { Protected } from "./components/Protected/Protected";

export const App = () => {
  const modal = document.getElementById("modal");
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    <Navigate to={"transmision/adultos/62"} />;
  };
  //const logOut = () => {
  //  setIsLoggedIn(false);
  //};

  return (
    <>
      {isLoggedIn ? (
        ""
      ) : (
        <button onClick={() => setShowModal(true)}>Login</button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/grilla" element={<Grilla />} />
        <Route path="/peliserie" element={<Peliserie />} />
        <Route path="/peliserieC" element={<PeliserieC />} />
        <Route path="/peliserieP" element={<PeliserieP />} />
        <Route path="/transmision/:id" element={<Transmision />} />
        <Route
          path="/transmision/adultos/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <PrivateTransmision />
            </Protected>
          }
        />
      </Routes>
      {showModal
        ? createPortal(
            <div className="modal">
              <div className="mod">
                <button
                  className="buttonX"
                  onClick={() => setShowModal(!showModal)}
                >
                  ❌
                </button>
                <input type="text"></input>
              </div>
            </div>,
            modal
          )
        : null}
    </>
  );
};
