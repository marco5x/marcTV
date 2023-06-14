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
    <div>
      <div className="flex justify-center items-center my-1 gap-1">
        <AgendaDeportiva />
        <select
          title="Todos"
          name="Todos"
          className="inline-flex w-auto h-12 rounded-md bg-slate-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-200"
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="Todos">🌐 Todos</option>
          <option value="noticias">Noticias</option>
          <option value="peliculas">Peliculas</option>
          <option value="musica"> Musica</option>
          <option value="deportes"> Deportes</option>
          <option value="documental"> Documental</option>
          <option value="adultos"> Adultos</option>
        </select>
      </div>
      <div className="min-h-screen bg-cover flex align-center justify-center flex-wrap mb-9 gap-6">
        {data?.map((chanel) => (
          <div key={chanel.id}>
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
    </div>
  );
};
