import React, { useState, useEffect } from "react";

const ListarPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  //metodo que lee el local storage
  const leerLocalStorage = () => {
    let datos = JSON.parse(localStorage.getItem("pelicula"));
    setPeliculas(datos);
    // console.log(datos);
  };

  //metodo de carga inicial del componente
  useEffect(() => {
    leerLocalStorage();
  }, []);

  //metodo de render del componente
  return (
    <>
      {peliculas.map((pelicula) => {
        return (
          <article className="peli-item" key={pelicula.id}>
            <h3 className="title">{pelicula.titulo}</h3>
            <p className="description">{pelicula.descripcion}</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>
        );
      })}
    </>
  );
};

export default ListarPeliculas;
