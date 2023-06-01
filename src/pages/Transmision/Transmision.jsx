import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { datos } from "../../api/api";
import { Control } from "../../components/Control/Control";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";

export const Transmision = () => {
  const params = useParams();
  let chanellFind = datos.find((chanell) => chanell.id === parseInt(params.id));
  const [link, setLink] = useState(chanellFind.link1);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <iframe
        width="1280"
        height="720"
        src={link}
        title={chanellFind.name}
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" //autoplay;
        allowfullscreen="fullscreen, autoplay"
      ></iframe>
      <button onClick={() => setLink(chanellFind.link1)}> 1️⃣▶</button>
      {chanellFind.link2 ? (
        <button onClick={() => setLink(chanellFind.link2)}>2️⃣</button>
      ) : null}
      <div>
        <legend>Solo con bloqueador de anuncios!!</legend>
        <button onClick={() => setLink(chanellFind.link3)}> 3 ▶</button>
        {chanellFind.link4 ? (
          <button onClick={() => setLink(chanellFind.link4)}>4 </button>
        ) : null}
      </div>
      <Control />
      <ButtonHome />
    </div>
  );
};
