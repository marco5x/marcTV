import React, { useState } from "react";
import { datosPrivtes } from "../../api/api";

export const ControlPrivate = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <button style={{ width: "3rem" }} onClick={() => setShow(!show)}>
        💥
      </button>
      {show
        ? datosPrivtes?.map((chanel) => (
            <div
              key={chanel.id}
              style={{
                width: "96px",
                border: "1px solid",
                borderRadius: "9px",
                padding: "1px",
              }}
            >
              <a
                style={{
                  margin: "0",
                  textDecoration: "none",
                  color: "white",
                  textAlign: "center",
                }}
                href={`/transmision/adultos/${chanel.id}`}
              >
                <p>{chanel.name}</p>
                <img src={chanel.img} alt={chanel.name} width={60}></img>
              </a>
            </div>
          ))
        : null}
    </div>
  );
};
