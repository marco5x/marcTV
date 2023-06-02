import React from "react";
import { ControlPrivate } from "../../components/ControlPrivate/ControlPrivate";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";

export const PrivateTransmision = () => {
  return (
    <div>
      <iframe
        width="1280"
        height="720"
        src="https://www.latele-envivo.com/Embed/dorcel/"
        title={"chanellFind.name"}
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" //autoplay;
        allowfullscreen="fullscreen, autoplay"
      ></iframe>
      <ControlPrivate />
      <ButtonHome />
    </div>
  );
};
