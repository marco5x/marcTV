import React from "react";
import { AllChanells } from "../../components/AllChanells/AllChanells";
import { NavBar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import UpdaterVersion from "../../components/sw/UpdaterVersion";
import "./Home.css";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const Home = () => {
  setTimeout(() => {
    localStorage.setItem("visited", true);
  }, 18000);

  const visited = localStorage.getItem("visited");

  const driverObj = driver({
    animate: true,
    nextBtnText: "Avanzar —›  ",
    prevBtnText: "‹— Atrás ",
    doneBtnText: "Hecho 👌🏻 ",
    showProgress: true,
    popoverClass: "driverjs-theme",
    steps: [
      {
        element: "#page-header",
        popover: {
          title: "👋🏻 Bienvenido a MarcTv+",
          description:
            "Gracias por visitar y conocer la página, pronto más novedades!! 😉",
        },
      },
      {
        element: "#programacion",
        popover: {
          title: "Programación en vivo",
          description: "Mira la programación de la 📺 en vivo",
        },
      },
      {
        element: "#peliserie",
        popover: {
          title: "Pelis y series ",
          description:
            "Mira las mejores pelis 🎞, estrenos exclusivos 🎬 y series 🍿",
        },
      },
      {
        element: "#home",
        popover: {
          title: "Agenda Deportiva",
          description:
            "Mira todo los deportes, exclusivo fútbol ⚽ en los canales premium ",
        },
      },
      {
        element: "#filtrocanales",
        popover: {
          title: "Filtración de canales",
          description: "Filtra los canales ✂ por categorias",
        },
      },
      {
        element: "#chanel",
        popover: {
          title: "Mira tv ahora 👀 ",
          description: "Clik, o pulsa, en cualquier canal, y listo!! 🎆",
        },
      },
    ],
  });

  if (!visited) driverObj.drive();

  return (
    <div className="bg-slate-600 bg-cover">
      <NavBar />
      <UpdaterVersion />
      <AllChanells />
      <Footer />
    </div>
  );
};
