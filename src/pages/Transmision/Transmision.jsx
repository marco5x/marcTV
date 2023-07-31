import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { datos } from "../../api/api";
import { Control } from "../../components/Control/Control";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const Transmision = () => {
  setTimeout(() => {
    localStorage.setItem("visit", true);
  }, 12000);

  const visit = localStorage.getItem("visit");

  const driverObj = driver({
    animate: true,
    nextBtnText: "Avanzar —›  ",
    prevBtnText: "‹— Atrás ",
    doneBtnText: "Hecho 👌🏻 ",
    showProgress: true,
    popoverClass: "driverjs-theme",
    steps: [
      {
        element: "#transmision",
        popover: {
          title: "Transmisión ",
          description:
            "Algunos canales no comienzan automaticamente, solo clickea o apreta play ▶",
        },
      },
      {
        element: "#buttonhome",
        popover: {
          title: "Boton página principal ",
          description:
            "Pulsa o presiona en el icono 📺 y volve a la página principal",
        },
      },
      {
        element: "#control",
        popover: {
          title: "Programacion en vivo",
          description:
            "Sin salir de la transmisión, pulsa en el icono 🕹, y mira lo que te guste! ",
        },
      },
      {
        element: "#buttonchange",
        popover: {
          title: "Botón opción transmisión ",
          description: "Si no funciona en uno, seguro funciona en otro 😏",
        },
      },
    ],
  });

  if (!visit) driverObj.drive();

  const params = useParams();
  let chanellFind = datos.find((chanell) => chanell.id === parseInt(params.id));
  const [link, setLink] = useState(chanellFind.link1);

  return (
    <div
      className="flex flex-col w-[100dvw] h-[100dvh]"
      style={{
        backgroundImage: `url("https://th.bing.com/th/id/R.846913110b636d7682c80cbf1873e0d7?rik=B8ONzWGCVt%2bkxQ&pid=ImgRaw&r=0")`,
        backgroundSize: "cover",
      }}
    >
      <iframe
        id="transmision"
        className="embed-responsive-item relative bottom-0 left-0 right-0 top-0 h-[100dvh] w-[95dvw]"
        width="1720"
        src={link}
        title={chanellFind.name}
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
        allowfullscreen="fullscreen, autoplay"
      ></iframe>
      <div className="absolute inset-x-0 bottom-0 flex justify-evenly items-center h-auto">
        <div className="flex gap-3">
          <button
            id="buttonchange"
            className="btn-primary "
            type="button"
            onClick={() => setLink(chanellFind.link1)}
          >
            VER 👀
          </button>
          {chanellFind.link2 ? (
            <button
              className="btn-primary"
              type="button"
              onClick={() => setLink(chanellFind.link2)}
            >
              VER 👀
            </button>
          ) : null}
        </div>
        <div className="flex gap-3 ">
          {/* <legend>Solo con bloqueador de anuncios!!</legend> */}
          {chanellFind.link3 ? (
            <button
              className="btn-secondary"
              type="button"
              onClick={() => setLink(chanellFind.link3)}
            >
              {" "}
              VER 👀{" "}
            </button>
          ) : null}
          {chanellFind.link4 ? (
            <button
              className="btn-secondary"
              type="button"
              onClick={() => setLink(chanellFind.link4)}
            >
              VER 👀{" "}
            </button>
          ) : null}
        </div>
      </div>
      <Control />
      <ButtonHome />
    </div>
  );
};
