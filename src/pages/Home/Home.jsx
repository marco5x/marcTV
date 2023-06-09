import React from "react";
import { AllChanells } from "../../components/AllChanells/AllChanells";
import { AdultChanels } from "../../components/AdultChanels/AdultChanels";
import { NavBar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import UpdaterVersion from "../../components/sh/UpdaterVersion";

export const Home = () => {
  let password = localStorage.getItem("pass");
  return (
    <>
      <NavBar />
      <UpdaterVersion />
      <AllChanells />
      {password ? <AdultChanels /> : ""}
      <Footer />
    </>
  );
};
