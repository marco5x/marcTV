import React from "react";
import { ButtonHome } from "../ButtonHome/ButtonHome";

export const Peliserie = () => {
  return (
    <div className="flex w-[100dvw] h-[100dvh] overflow-x-hidden overflow-y-hidden">
      <div className="absolute top-0 w-[1px] h-[1px] mt-1 bg-black xl:left-24 xl:w-40 xl:h-14"></div>
      <ButtonHome />
      <iframe
        className="min-h-[100dvh] w-[100dvw]"
        title="movies"
        allowfullscreen="true"
        src="https://repelis24.rs/inicio/"
        width={1560}
        height={775}
      ></iframe>
    </div>
  );
};
