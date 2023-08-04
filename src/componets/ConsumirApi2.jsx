import React, { useState, useEffect } from "react";

const ConsumirApi2 = () => {
  const [usuarios, setUsuario] = useState([]);
  const leerApi = () => {
    const urlApi = "https://jsonplaceholder.typicode.com/photos";
    fetch(urlApi)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUsuario(res);
        // console.log(usuarios);
      });
  };

  useEffect(() => {
    leerApi();
  });
  return (
    <>
      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>

          {usuarios.map((usuario) => {
            return (
              <tr>
                <p class="card-text" key={usuario.albumId}>
                  {usuario.id}
                </p>
                <a class="btn btn-primary" key={usuario.albumId}>
                  {usuario.thumbnailUrl}
                </a>
              </tr>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ConsumirApi2;
