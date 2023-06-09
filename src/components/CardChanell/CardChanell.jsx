import React from "react";
import { Link } from "react-router-dom";

export const CardChanell = ({ id, name, img }) => {
  return (
    <Link
      to={`transmision/${id}`}
      style={{ textDecoration: "none", color: "black", textAlign: "center" }}
    >
      <div className="card-ui">
        <h3 className="m-0 mb-1">{name}</h3>
        <img style={{ margin: "0" }} src={img} alt={name} width={90} />
      </div>
    </Link>
  );
};
