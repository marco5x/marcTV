import React, { useState } from "react";
import { datos } from "../../api/api";

export const Control = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        height: "auto",
        position: "sticky",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "30",
      }}
    >
      <button type="button" onClick={() => setShow(!show)}>
        ZAPPING 🕹
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
