import "./App.css";
import Subtitulo from "./componentes/Subtitulo";
import Titulo from "./componentes/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/popover.js";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <div>
      <Titulo />
      <Subtitulo comision="5D" />
      <Formulario />
    </div>
  );
}

export default App;
