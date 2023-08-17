import React, { useState, useEffect } from "react";
import Editar from "./Editar";

const ListarPeliculas = ({ datos, setDatos }) => {
  //const [peliculas, setPeliculas] = useState([]);

  //metodo que lee el local storage
  const leerLocalStorage = () => {
    let datos = JSON.parse(localStorage.getItem("pelicula"));
    setDatos(datos);
    return datos;
    // console.log(datos);
  };

  //Borrar Pelicula

  const borrarPelicula = (id) => {
    //console.log(id);
    //leer la base de datos local actual y la transformamos en un array
    let bdLocal = leerLocalStorage();

    //creamos un nuevo arreglo donde filtramos por el id
    let bdNueva = bdLocal.filter((datos) => datos.id !== parseInt(id));

    //actualizamos el estado del componente principal APP
    setDatos(bdNueva);

    //Guardamos en la base de datos del localStorage
    localStorage.setItem("pelicula", JSON.stringify(bdNueva));
  };

  //metodo de carga inicial del componente
  useEffect(() => {
    leerLocalStorage();
  }, []);

  //metodo de render del componente
  return (
    <>
      {datos == null || datos.length === 0 ? (
        <h1>No hay datos</h1>
      ) : (
        <>
          {datos.map((pelicula) => {
            return (
              <article className="peli-item" key={pelicula.id}>
                <h3 className="title">{pelicula.titulo}</h3>
                <p className="description">{pelicula.descripcion}</p>

                <button className="edit">Editar</button>
                <button
                  className="delete"
                  onClick={() => {
                    borrarPelicula(pelicula.id);
                  }}
                >
                  Borrar
                </button>

                <Editar />
              </article>
            );
          })}
        </>
      )}
    </>
  );
};

export default ListarPeliculas;
