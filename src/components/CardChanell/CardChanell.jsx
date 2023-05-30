import React from "react";
import { Link } from "react-router-dom";

export const CardChanell = ({ name, img, link1, link2 }) => {
  return (
    <div>
      <h3>{name}</h3>
      <hr />
      <img src={img} alt={name} width={90} />
      <hr />
      <Link to={""}>VER 👀 I</Link>
      <Link to={""}>VER 👀 II</Link>
    </div>
  );
};
