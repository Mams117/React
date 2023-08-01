import RenderCondicional from "./componets/renderizadoCondicial";
import Cabecera from "./componets/cabecera";
import EnvioDatos from "./componets/envioDatos";
import EnvioDatos2 from "./componets/EnvioDatos2";

function App() {
  return (
    <div className="App">
      <h1 className="bg-dark text-white p-3">Aplicacion base</h1>
      <Cabecera />
      <RenderCondicional />
      <EnvioDatos Nombre="juan" Edad="18" />
      <EnvioDatos2 nombre="rico" edad="18" />
    </div>
  );
}

export default App;
