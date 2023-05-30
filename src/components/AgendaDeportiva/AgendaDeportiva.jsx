import React, { useState } from "react";

export const AgendaDeportiva = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button style={{ width: "9rem" }} onClick={() => setShow(!show)}>
        AGENDA DEPORTIVA
      </button>
      {show ? (
        <iframe
          title="agenda"
          allowfullscreen="true"
          src="https://canales.online/agenda/"
          width={450}
          height="auto"
        ></iframe>
      ) : (
        ""
      )}
      {/* <iframe
        title="agenda"
        allowfullscreen="true"
        src="https://futbollibretv.com/agenda/?update"
        width={450}
        height="auto"
      ></iframe> */}
    </div>
  );
};
