import React from "react";
import { datosPrivates } from "../../api/api";
import { CardChanell } from "../CardChanell/CardChanell";

export const AdultChanels = () => {
  return (
    <div className="flex align-center justify-center flex-wrap mb-9 gap-6">
      {datosPrivates?.map((chanel) => (
        <div key={chanel.id}>
          <CardChanell
            id={chanel.id}
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
