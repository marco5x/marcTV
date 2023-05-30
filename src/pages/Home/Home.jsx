import React from "react";
import { Cards } from "../../components/Cards/Cards";
import { AgendaDeportiva } from "../../components/AgendaDeportiva/AgendaDeportiva";
import { NavBar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
      <AgendaDeportiva />
      <Cards />
      <Footer />
    </>
  );
};
