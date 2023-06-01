import React from "react";
import { ControlPrivate } from "../../components/ControlPrivate/ControlPrivate";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";

export const PrivateTransmision = () => {
  return (
    <div>
      <iframe
        title="transmision"
        src="https://www.latele-envivo.com/Embed/dreamsex/"
        width="1280"
        height="720"
        allow="fullscreen"
      ></iframe>
      <ControlPrivate />
      <ButtonHome />
    </div>
  );
};
