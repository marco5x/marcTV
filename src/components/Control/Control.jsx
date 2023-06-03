import React, { useState } from "react";
import { datos } from "../../api/api";

export const Control = () => {
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
      <button style={{ width: "9rem" }} onClick={() => setShow(!show)}>
        ZAPPING 🕹
      </button>
      {show
        ? datos?.map((chanel) => (
            <div
              key={chanel.id}
              style={{
                width: "96px",
                border: "1px solid",
                borderRadius: "9px",
                padding: "3px",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "center",
                }}
                href={`/transmision/${chanel.id}`}
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
