import "./App.css";
import "animate.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Sections from "./assets/components/Sections";



function App() {
  return (
    // App
    <div className="App" id="App">
      {/* Navegacion */}
      <Navegacion/>
      {/* Fin Navegacion */}

      {/* Secciones */}
      <Sections/>
      {/* Fin Secciones */}
     
    </div>
  );
}

export default App;
