import React, { useState } from "react";


//Evento Cambiar dinamico y estatico

const Eventos3 = () => {
  //   let nombre = "mario"; //esta funcion no respondera al evento,, usar evento hook usestate
  const [nombre, setNombre] = useState("walter arias");

  const cambiarNombre = () => {
    setNombre("mario");
  };

  const cambiarDinamico = (e) => {
    setNombre(e.target.value);
  };

  return (
    <>
      <h1>eventos 3</h1>
      <hr />
      <p className="bg-info">{nombre}</p>
      <button className="btn btn-primary" onClick={cambiarNombre}>
        Cambiar
      </button>
      <br />
      escribe el nombre:{" "}
      <input class="form-control" type="text" onKeyUp={cambiarDinamico}></input>
    </>
  );
};

export default Eventos3;
