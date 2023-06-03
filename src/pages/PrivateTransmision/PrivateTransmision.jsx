import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { datosPrivtes } from "../../api/api";
import { ControlPrivate } from "../../components/ControlPrivate/ControlPrivate";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";

export const PrivateTransmision = () => {
  const params = useParams();
  let chanellFind = datosPrivtes.find(
    (chanell) => chanell.id === parseInt(params.id)
  );
  const [link, setLink] = useState(chanellFind.link1);
  return (
    <div>
      <iframe
        width="1280"
        height="720"
        src={link}
        title={chanellFind.name}
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" //autoplay;
        allowfullscreen="fullscreen, autoplay"
      ></iframe>
      <div>
        <legend>Solo con bloqueador de anuncios!!</legend>
        <button onClick={() => setLink(chanellFind.link1)}>VER 👀</button>
        {chanellFind.link2 ? (
          <button onClick={() => setLink(chanellFind.link2)}>VER 👀</button>
        ) : null}
      </div>
      <ControlPrivate />
      <ButtonHome />
    </div>
  );
};
