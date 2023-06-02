import React from "react";
import { Link } from "react-router-dom";

export const CardChanell = ({ id, name, img }) => {
  return (
    <Link
      to={`transmision/${id}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div style={{ width: "9rem", height: "9rem" }}>
        <h3> {name} </h3>
        <hr />
        <img src={img} alt={name} width={90} />
      </div>
    </Link>
  );
};
