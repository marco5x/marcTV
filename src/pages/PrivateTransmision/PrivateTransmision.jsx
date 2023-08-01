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
      className="flex flex-col w-full h-screen bg-slate-800 "
      // style={{
      //   backgroundImage: `url("https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/9/9c/ONAF2-ESTATICA.gif/revision/latest?cb=20170320181953&path-prefix=es")`,
      //   backgroundSize: "cover",
      // }}
    >
      <iframe
        className="absolute min-h-[85dvh] sm:min-h-[89dvh] lg:min-h-[96dvh] w-[90dvw]"
        width="1920"
        src={link}
        title={chanellFind.name}
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
