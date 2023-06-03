import React, { useState } from "react";
import { datos } from "../../api/api";
import { CardChanell } from "../CardChanell/CardChanell";
import { AgendaDeportiva } from "../AgendaDeportiva/AgendaDeportiva";

export const AllChanells = () => {
  const [order, setOrder] = useState("");

  let data = datos;
  let noti = datos.filter((chanel) => chanel.category === "news");
  let peli = datos.filter((chanel) => chanel.category === "movie");
  let music = datos.filter((chanel) => chanel.category === "music");
  let depor = datos.filter((chanel) => chanel.category === "sports");
  let docu = datos.filter((chanel) => chanel.category === "docuemntal");
  let adult = datos.filter((chanel) => chanel.category === "adults");

  if (order === "Todos") data = datos;
  else if (order === "noticias") data = noti;
  else if (order === "peliculas") data = peli;
  else if (order === "musica") data = music;
  else if (order === "deportes") data = depor;
  else if (order === "documental") data = docu;
  else if (order === "adultos") data = adult;

  return (
    <>
      <div style={{ display: "flex" }}>
        <AgendaDeportiva />
        <select onChange={(e) => setOrder(e.target.value)}>
          <option value="Todos">🌐 Todos</option>
          <option value="noticias">Noticias</option>
          <option value="peliculas">Peliculas</option>
          <option value="musica"> Musica</option>
          <option value="deportes"> Deportes</option>
          <option value="documental"> Documental</option>
          <option value="adultos"> Adultos</option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "6px",
        }}
      >
        {data?.map((chanel) => (
          <div
            key={chanel.id}
            style={{ border: "1px solid", borderRadius: "9px", padding: "6px" }}
          >
            <CardChanell
              id={chanel.id}
              name={chanel.name}
              img={chanel.img}
              link1={chanel.link1}
              link2={chanel.link2}
            />
          </div>
        ))}
      </div>
    </>
  );
};
