import React from "react";
import { Control } from "../../components/Control/Control";

export const Transmision = () => {
  return (
    <div>
      <iframe
        title="transmision"
        src="https://streamcasthd.com:2020/VideoPlayer/tecnovisioncanal2tv"
        width="720"
        height="480"
        marginheight="0"
        marginwidth="0"
        frameborder="0"
        allow="fullscreen"
      ></iframe>
      <Control />
    </div>
  );
};
