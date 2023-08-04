import React, { useState } from "react";
import { act } from "react-dom/test-utils";

const Reto2 = ({ año }) => {
  //Variables hooks

  let fechaHoy = new Date();

  let añoFull = fechaHoy.getFullYear();
  const [contadorAño, actualizarAño] = useState(añoFull);

  let aumentar = () => {
    actualizarAño(contadorAño + 1);
  };

  let disminuir = () => {
    actualizarAño(contadorAño - 1);
  };

  const cambiarAñoDinamico = (e) => {
    actualizarAño(parseInt(e.target.value));
  };

  return (
    <>
      <h1>Reto</h1>
      <div className="row">
        <input
          class="form-control"
          type="text"
          onKeyUp={cambiarAñoDinamico}
        ></input>
        <input className="bg-info" value={contadorAño}></input>
        <div className="col-1">
          <button type="button" className="btn btn-primary" onClick={aumentar}>
            {actualizarAño}+
          </button>
          <button type="button" className="btn btn-primary" onClick={disminuir}>
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Reto2;
