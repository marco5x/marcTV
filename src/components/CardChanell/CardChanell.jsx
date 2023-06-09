import React from "react";
import { Link } from "react-router-dom";

export const CardChanell = ({ id, name, img }) => {
  return (
    <Link
      to={`transmision/${id}`}
      className="text-center text-gray-600 decoration-0"
    >
      <div className="card-ui">
        <h3 className="m-0 mb-1">{name}</h3>
        <img className="m-0" src={img} alt={name} width={90} />
      </div>
    </Link>
  );
};
