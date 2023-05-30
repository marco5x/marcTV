import React from "react";
import { datos } from "../../api/api";
import { CardChanell } from "../CardChanell/CardChanell";

export const AllChanells = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {datos?.map((chanel) => (
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
