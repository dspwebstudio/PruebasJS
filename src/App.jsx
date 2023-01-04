import "./App.css";
import "animate.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navegacion from "./assets/components/Navegacion";
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Sections from "./assets/components/Sections";
import Section1 from "./assets/components/Section1";


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
