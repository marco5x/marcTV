import React, { useState } from "react";
import { datosPrivates } from "../../api/api";

export const ControlPrivate = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="fixed z-10 right-0 w-auto h-screen overflow-y-scroll overflow-x-hidden">
      <button
        className="fixed z-10 decoration-0 rounded-full p-4 bg-sky-500 bottom-5 right-3.5"
        type="button"
        onClick={() => setShow(!show)}
      >
        💥
      </button>
      {show
        ? datosPrivates?.map((chanel) => (
            <a
              className="card-control"
              key={chanel.id}
              href={`/transmision/adultos/${chanel.id}`}
            >
              <p>{chanel.name}</p>
              <img
                src={chanel.img}
                alt={chanel.name}
                width={60}
                height="auto"
              />
            </a>
          ))
        : null}
    </div>
  );
};
