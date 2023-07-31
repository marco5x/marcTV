import React from "react";
import { Link } from "react-router-dom";
import "atropos/css";
import Atropos from "atropos/react";

export const CardChanell = ({ id, name, img }) => {
  return (
    <Link
      to={`transmision/${id}`}
      className="text-center text-gray-600 decoration-0"
    >
      <Atropos
        shadow={true}
        shadowScale={0.8}
        highlight={false}
        rotateTouch={false}
      >
        <div className="card-ui">
          {/* <h3 className="m-0 mb-1">{name}</h3> */}
          <img
            className="m-0 w-24 h-auto aspect-auto"
            data-atropos-offset="5"
            src={img}
            alt={name}
            width={90}
            height="auto"
          />
        </div>
      </Atropos>
    </Link>
  );
};
