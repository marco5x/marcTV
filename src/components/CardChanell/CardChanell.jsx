import React from "react";
import { Link } from "react-router-dom";

export const CardChanell = ({ id, name, img }) => {
  return (
    <div>
      <h3>{name}</h3>
      <hr />
      <img src={img} alt={name} width={90} />
      <hr />
      <Link to={`transmision/${id}`}>VER 👀</Link>
    </div>
  );
};
