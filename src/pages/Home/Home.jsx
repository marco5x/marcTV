import React from "react";
import { AllChanells } from "../../components/AllChanells/AllChanells";
import { NavBar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import UpdaterVersion from "../../components/sh/UpdaterVersion";

export const Home = () => {
  return (
    <>
      <NavBar />
      <UpdaterVersion />
      <AllChanells />
      <Footer />
    </>
  );
};
