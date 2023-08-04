// import RenderCondicional from "./componets/renderizadoCondicial";
// import Cabecera from "./componets/cabecera";
// import EnvioDatos from "./componets/envioDatos";
// import EnvioDatos2 from "./componets/EnvioDatos2";
// import Eventos2 from "./componets/Eventos2";
// import Eventos3 from "./componets/eventos3";

import ConsumirApi from "./componets/ConsumirApi";
import ConsumirApi2 from "./componets/ConsumirApi2";

function App() {
  return (
    <div className="App">
      <h1 className="bg-dark text-white p-3">Aplicacion base</h1>
      {/* <Cabecera />
      <RenderCondicional />
      <EnvioDatos Nombre="juan" Edad="18" />
      <EnvioDatos2 nombre="rico" edad="18" /> */}
      {
        /* <Eventos2 />
      <Eventos3 /> */
        <ConsumirApi2 />
      }
    </div>
  );
}

export default App;
