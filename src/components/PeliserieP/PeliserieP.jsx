import React from "react";

import { ButtonHome } from "../ButtonHome/ButtonHome";

export const PeliserieP = () => {
  return (
    <div style={{ display: "flex" }}>
      <ButtonHome />
      <iframe
        title="movies"
        allowfullscreen="true"
        src="https://pelisplus.ninja/peliculas-estrenos/"
        width={1560}
        height={775}
      ></iframe>
    </div>
  );
};
