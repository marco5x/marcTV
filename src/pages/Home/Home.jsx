import React from "react";
import { AllChanells } from "../../components/AllChanells/AllChanells";
import { AgendaDeportiva } from "../../components/AgendaDeportiva/AgendaDeportiva";
import { NavBar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
      <AgendaDeportiva />
      <AllChanells />
      <Footer />
    </>
  );
};
