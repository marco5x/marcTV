import React from "react";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";
import { Control } from "../../components/Control/Control";

export const Grilla = () => {
  return (
    <div className="flex bg-slate-950 w-[100vw] h-[100vh]">
      <div className="z-10 fixed text-center top-1 left-1 w-64 h-11 bg-[#303030] text-white">
        <h3 className="font-bold text-xl p-1">GRILLA</h3>
      </div>
      <ButtonHome />
      <iframe
        className="absolute min-h-[100dvh] w-[100dvw]"
        title="grilla"
        allowfullscreen="true"
        src="https://www.reportv.com.ar/finder/index/2996/" //2313 superconeactados
        width={1560}
        height={775}
      ></iframe>
      <Control />
    </div>
  );
};
