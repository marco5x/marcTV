import React from "react";
import { datos } from "../../api/api";
import { CardChanell } from "../CardChanell/CardChanell";
//import { datosPrivados } from "../../api/api";

export const AllChanells = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <section>
        {datos?.map((dato) => (
          <div
            key={dato.id}
            style={{ border: "1px solid", borderRadius: "9px", padding: "6px" }}
          >
            <CardChanell name={dato.name} img={dato.img} link1 link2 />
          </div>
        ))}
      </section>
    </div>
  );
};
