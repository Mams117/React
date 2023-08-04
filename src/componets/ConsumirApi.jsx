import React, { useState, useEffect } from "react";

const ConsumirApi = () => {
  const [usuarios, setUsuario] = useState([]);

  const leerApi = () => {
    const urlApi = "https://reqres.in/api/users?page=2";
    fetch(urlApi)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUsuario(res.data);
        console.log(usuarios);
      });
  };

  //es reactivo es decir consume y actualiza automaticmente al detectar un cambio en la propiedad del componente
  useEffect(() => {
    leerApi();
  });
  return (
    <>
      {/* <ul>
        {usuarios.map((usuario) => {
          return (
            <li key={usuario.id}>
              {usuario.email}-{usuario.first_name}
            </li>
          );
        })}
      </ul> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <table className="table table">
              <thead>
                <tr>
                  <th scope="col-1">ID</th>
                  <th scope="col-1">EMAIL</th>
                  <th scope="col-1">NOMBRE</th>
                </tr>
              </thead>

              <tbody>
                {usuarios.map((usuario) => {
                  return (
                    <tr>
                      <td key={usuario.id}>{usuario.id}</td>
                      <td key={usuario.id}>{usuario.email}</td>
                      <td key={usuario.id}>{usuario.first_name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsumirApi;
