import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Programacion } from "./pages/Programacion/Programacion";
import { Grilla } from "./pages/Grilla/Grilla";
import { Peliserie } from "./components/Peliserie/Peliserie";
import { PeliserieC } from "./components/PeliserieC/PeliserieC";
import { PeliserieP } from "./components/PeliserieP/PeliserieP";
import { Transmision } from "./pages/Transmision/Transmision";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programacion" element={<Programacion />} />
      <Route path="/grilla" element={<Grilla />} />
      <Route path="/peliserie" element={<Peliserie />} />
      <Route path="/peliserieC" element={<PeliserieC />} />
      <Route path="/peliserieP" element={<PeliserieP />} />
      <Route path="/transmision" element={<Transmision />} />
    </Routes>
  );
};
