import React from "react";

const Eventos2 = () => {
  let mostrarMensaje = (e) => {
    console.log("sobre imagen");
    console.log(e.target);
  };
  //render
  return (
    <>
      <h1>Control de eventos</h1>
      <hr />
      <img
        src="./image/logo192.png"
        alt=""
        srcset=""
        onMouseOver={mostrarMensaje}
      />
    </>
  );
};
export default Eventos2;
