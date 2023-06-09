import React from "react";
import { datosPrivtes } from "../../api/api";
import { CardChanell } from "../CardChanell/CardChanell";

export const AdultChanels = () => {
  return (
    <div className="flex align-center justify-center flex-wrap mb-9 gap-6">
      {datosPrivtes?.map((chanel) => (
        <div key={chanel.id}>
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
