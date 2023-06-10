import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { datosPrivates } from "../../api/api";
import { ControlPrivate } from "../../components/ControlPrivate/ControlPrivate";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";

export const PrivateTransmision = () => {
  const params = useParams();
  let chanellFind = datosPrivates.find(
    (chanell) => chanell.id === parseInt(params.id)
  );
  const [link, setLink] = useState(chanellFind.link1);
  return (
    <div
      className="flex flex-col w-full h-screen "
      style={{
        backgroundImage: `url("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/9/9c/ONAF2-ESTATICA.gif/revision/latest?cb=20170320181953&path-prefix=es")`,
        backgroundSize: "cover",
      }}
    >
      <iframe
        className="embed-responsive-item relative bottom-0 left-0 right-0 top-0 h-full w-full"
        width="1920"
        src={link}
        title={chanellFind.name}
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" //autoplay;
        allowfullscreen="fullscreen, autoplay"
      ></iframe>
      <div className="absolute bottom-0 flex gap-3 ml-20 sm:ml-80">
        <button
          className="btn-secondary"
          type="button"
          onClick={() => setLink(chanellFind.link1)}
        >
          VER 👀
        </button>
        {chanellFind.link2 ? (
          <button
            className="btn-secondary"
            type="button"
            onClick={() => setLink(chanellFind.link2)}
          >
            VER 👀
          </button>
        ) : null}
      </div>
      <ControlPrivate />
      <ButtonHome />
    </div>
  );
};
