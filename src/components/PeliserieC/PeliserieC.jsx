import React from "react";

import { ButtonHome } from "../ButtonHome/ButtonHome";

export const PeliserieC = () => {
  return (
    <div style={{ display: "flex" }}>
      <ButtonHome />
      <iframe
        title="movies"
        allowfullscreen="true"
        src="https://cuevana.pro/inicio"
        width={1560}
        height={775}
      ></iframe>
    </div>
  );
};
