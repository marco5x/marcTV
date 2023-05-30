import React from "react";
import { datosPrivtes } from "../../api/api";
import { CardChanell } from "../CardChanell/CardChanell";

export const AdultChanels = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {datosPrivtes?.map((chanel) => (
        <div
          key={chanel.id}
          style={{ border: "1px solid", borderRadius: "9px", padding: "6px" }}
        >
          <CardChanell
            name={chanel.name}
            img={chanel.img}
            link1={chanel.link1}
            link2={chanel.link2}
          />
        </div>
      ))}
    </div>
  );
};
