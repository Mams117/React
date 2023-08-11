import React, { useState, useEffect } from "react";

const FrmAgregar = () => {
  const [datos, setDatos] = useState({}); //objeto y metodo de inicializacion para tomar los datos del contacto (formulario)

  //metodo q almacena las pelis en el localStorage
  const guardarLocalStorage = (dataFrm) => {
    //leemos la informacion del localStorage
    let elementos = JSON.parse(localStorage.getItem("pelicula"));
    //agregamos al local storage
    if (Array.isArray(elementos)) {
      elementos.push(dataFrm); //verifica q sea un arreglo y agrega un elemento
    } else {
      elementos = [dataFrm]; //crea el arreglo local por primera vez
    }
    localStorage.setItem("pelicula", JSON.stringify(elementos));
  };

  //Este metodo obtiene la data del formulario, crea un objeto y setea el estado del componente
  const getDatosFormulario = (e) => {
    e.preventDefault(); //evita la recarga automatica del formulario
    let titulo = e.target.titulo;
    let descripcion = e.target.descripcion;
    let dataFrm = {
      id: new Date().getTime(),
      titulo: titulo.value,
      descripcion: descripcion.value,
    };

    setDatos(dataFrm);
    console.log(datos);
    guardarLocalStorage(dataFrm);
  };

  //render del modulo
  return (
    <>
      <div className="add">
        <h3 className="title">Añadir pelicula</h3>
        <form onSubmit={getDatosFormulario}>
          <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Descripción"
          ></textarea>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    </>
  );
};

export default FrmAgregar;
