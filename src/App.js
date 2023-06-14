import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Programacion } from "./pages/Programacion/Programacion";
import { Grilla } from "./pages/Grilla/Grilla";
import { Peliserie } from "./components/Peliserie/Peliserie";
import { PeliserieC } from "./components/PeliserieC/PeliserieC";
import { PeliserieP } from "./components/PeliserieP/PeliserieP";
import { Transmision } from "./pages/Transmision/Transmision";
import { PrivateTransmision } from "./pages/PrivateTransmision/PrivateTransmision";
import { AvisoLegal } from "./pages/AvisoLegal/AvisoLegal";
import { Protected } from "./components/Protected/Protected";

export const App = ({ isLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programacion" element={<Programacion />} />
      <Route path="/grilla" element={<Grilla />} />
      <Route path="/peliserie" element={<Peliserie />} />
      <Route path="/peliserieC" element={<PeliserieC />} />
      <Route path="/peliserieP" element={<PeliserieP />} />
      <Route path="/aviso" element={<AvisoLegal />} />
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
  );
};
