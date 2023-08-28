import React, { useState } from "react";
import { datos } from "../../api/api";
import { CardChanell } from "../CardChanell/CardChanell";
import { AgendaDeportiva } from "../AgendaDeportiva/AgendaDeportiva";

export const AllChanells = () => {
  const [order, setOrder] = useState("");

  const category = Array.from(new Set(datos.map((cat) => cat.category)));
  let data = order
    ? datos.filter((chanel) => {
        if (chanel.category !== order) return false;
        return true;
      })
    : datos;

  return (
    <div className="">
      <div className="flex justify-center items-center my-1 gap-1 ">
        <AgendaDeportiva />
        <select
          id="filtrocanales"
          title="Todos"
          name="Todos"
          className="inline-flex w-auto h-12 rounded-md bg-slate-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-200"
          value={order}
          onChange={(event) => setOrder(event.target.value)}
        >
          <option value="">🌐 Todos</option>
          {category.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="min-h-screen bg-cover flex align-center justify-center flex-wrap mb-12 gap-6 mt-3 md:gap-3 ">
        {data?.map((chanel) => (
          <div id="chanel" key={chanel.id} className="mb-3 ">
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
