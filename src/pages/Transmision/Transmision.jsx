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
        //className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
        width="1280"
        height="720"
        src={link}
        title={chanellFind.name}
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay" //autoplay;
        allowfullscreen="fullscreen, autoplay"
      ></iframe>
      <button onClick={() => setLink(chanellFind.link1)}>VER 👀</button>
      {chanellFind.link2 ? (
        <button onClick={() => setLink(chanellFind.link2)}>VER 👀</button>
      ) : null}
      <div>
        <legend>Solo con bloqueador de anuncios!!</legend>
        {chanellFind.link3 ? (
          <button onClick={() => setLink(chanellFind.link3)}> VER 👀 </button>
        ) : null}
        {chanellFind.link4 ? (
          <button onClick={() => setLink(chanellFind.link4)}>VER 👀 </button>
        ) : null}
      </div>
      <Control />
      <ButtonHome />
    </div>
  );
};
