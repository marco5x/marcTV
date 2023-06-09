import React, { useState } from "react";
import { datos } from "../../api/api";

export const Control = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="fixed z-10 right-0 w-auto h-screen overflow-y-scroll overflow-x-hidden">
      <button
        className="fixed z-10 decoration-0 rounded-full p-4 bg-sky-500 bottom-5 right-3.5"
        type="button"
        onClick={() => setShow(!show)}
      >
        🕹
      </button>
      {show
        ? datos?.map((chanel) => (
            <div className="card-control" key={chanel.id}>
              <a href={`/transmision/${chanel.id}`}>
                <p>{chanel.name}</p>
                <img src={chanel.img} alt={chanel.name} width={60}></img>
              </a>
            </div>
          ))
        : null}
    </div>
  );
};
