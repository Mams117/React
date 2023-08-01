import React from "react";

const RenderCondicional = () => {
  let ciudades = ["cali", "medellin", "bogota", "Pereira"];
  ciudades = [];

  return (
    <>
      <h1>componente render</h1>
      <hr />
      {ciudades.length > 0 ? (
        <ul>
          {ciudades.map((ciudad, index) => {
            return <li key={index}>{ciudad}</li>;
          })}
        </ul>
      ) : (
        <h1>No hay datos pa mostrar</h1>
      )}
    </>
  );
};
export default RenderCondicional;
