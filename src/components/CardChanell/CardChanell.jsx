import React from "react";
import { Link } from "react-router-dom";

export const CardChanell = ({ id, name, img }) => {
  return (
    <Link
      to={`transmision/${id}`}
      style={{ textDecoration: "none", color: "white", textAlign: "center" }}
    >
      <div
        style={{
          width: "9rem",
          height: "9.9rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: "0", marginBottom: "3px" }}> {name} </h3>
        <img style={{ margin: "0" }} src={img} alt={name} width={90} />
      </div>
    </Link>
  );
};
