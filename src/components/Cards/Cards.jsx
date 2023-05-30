import React from "react";
import { datos } from "../../api/api";
//import { datosPrivados } from "../../api/api";

export const Cards = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <section>
        {datos?.map((dato) => (
          <div
            key={dato.id}
            style={{ border: "1px solid", borderRadius: "9px", padding: "6px" }}
          >
            <h3>{dato.name}</h3>
            <hr />
            <img src={dato.img} alt={dato.name} width={90} />
            <hr />
            <button>VER 👀</button>
          </div>
        ))}
      </section>
      {/*<section>
        {datosPrivados?.map((dato) => (
          <div
            key={dato.id}
            style={{ border: "1px solid", borderRadius: "9px", padding: "6px" }}
          >
            <h3>{dato.name}</h3>
            <hr />
            <img src={dato.img} alt={dato.name} width={90} />
            <hr />
            <button>VER 👀</button>
          </div>
        ))}
        </section>*/}
    </div>
  );
};
