import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

export const Protected = ({ children }) => {
  const modal = document.getElementById("modal");
  const navigate = useNavigate();
  const [pass, setPass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let password = localStorage.getItem("pass");

  const logIn = (e) => {
    e.preventDefault();
    localStorage.setItem("pass", pass.pass);
    if (pass.pass === process.env.REACT_APP_PASS) setIsLoggedIn(true);
  };

  const handlePass = (e) => {
    setPass({
      [e.target.name]: e.target.value,
    });
  };

  if (!password && !isLoggedIn) {
    return createPortal(
      <div className="modal">
        <div className="mod">
          <button className="buttonX" onClick={() => navigate("/")}>
            ❌
          </button>
          <form onSubmit={logIn}>
            <label>Contraseña: </label>
            <input required name="pass" type="password" onChange={handlePass} />
            {pass.pass !== process.env.REACT_APP_PASS ? (
              <p style={{ color: "red" }}>Contraseña incorrecta</p>
            ) : (
              <button type="submit">Entrar</button>
            )}
          </form>
        </div>
      </div>,
      modal
    );
  }
  return children;
};
