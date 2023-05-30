import React, { useState } from "react";

export const AgendaDeportiva = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button style={{ width: "9rem" }} onClick={() => setShow(!show)}>
        {!show ? <p>AGENDA DEPORTIVA</p> : <p>CERRAR AGENDA</p>}
      </button>
      {show ? (
        <iframe
          title="agenda"
          allowfullscreen="true"
          src={
            "https://canales.online/agenda" ||
            "https://futbollibretv.com/agenda/?update"
          }
          width={450}
          height={300}
        ></iframe>
      ) : null}
    </div>
  );
};
