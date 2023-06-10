import React, { useState } from "react";

export const AgendaDeportiva = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="reletive flex-col w-32 h-12 z-10 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-100">
      <button type="button" onClick={() => setShow(!show)}>
        {!show ? (
          <p>Agenda Deportiva</p>
        ) : (
          <p className="text-amber-600">Cerrar Agenda</p>
        )}
      </button>
      {show ? (
        <iframe
          className="absolute flex w-96 h-96 mt-3 sm:mr-10"
          title="agenda"
          allowfullscreen="true"
          src={
            "https://canales.online/agenda" ||
            "https://futbollibretv.com/agenda/?update"
          }
        ></iframe>
      ) : null}
    </div>
  );
};
