// import RenderCondicional from "./componets/renderizadoCondicial";
import React, { useState, useEffect } from "react";
// import Cabecera from "./componets/cabecera";
// import EnvioDatos from "./componets/envioDatos";
// import EnvioDatos2 from "./componets/EnvioDatos2";
// import Eventos2 from "./componets/Eventos2";
// import Eventos3 from "./componets/eventos3";

// import ConsumirApi from "./componets/ConsumirApi";
// import ConsumirApi2 from "./componets/ConsumirApi2";
import FrmAgregar from "./componets/FrmAgregar";
import ListarPeliculas from "./componets/ListarPeliculas";
import Buscar from "./componets/Buscar";
import Editar from "./componets/Editar";
function App() {
  //Constantes del FrmAgregar
  const [datos, setDatos] = useState([]); //objeto y metodo de inicializacion para tomar los datos del contacto (formulario)

  //render de componente
  return (
    <>
      <div className="layout">
        <header className="header">
          <div className="logo">
            <img src="pelisred-min.png" alt="" srcSet="" />
          </div>
        </header>

        <nav className="nav">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Peliculas</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
        {"Aca va el componente listar"}
        <section id="content" className="content">
          {<ListarPeliculas datos={datos} setDatos={setDatos} />}
        </section>

        <aside className="lateral">
          {"aca va el buscar"}
          <Buscar />

          {"Aca va el buscador"}
          <FrmAgregar datos={datos} setDatos={setDatos} />
        </aside>

        <footer className="footer">
          &copy; Peliculas !! -<a href="https://pelisflix.quest/">pelisflix</a>
        </footer>
      </div>
    </>
  );
}

export default App;
