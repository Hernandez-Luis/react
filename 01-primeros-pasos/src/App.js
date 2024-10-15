import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {
const ficha_medica={
  altura:"187 cm",
  grupo:"H+",
  estado:"Bueno",
  alergias:"Ninguna"
}

const numero = 9
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <div className='componentes'>
          {/* Cargar mi primer componente */}
          <MiComponente></MiComponente>
          <hr></hr>
          <SegundoComponente></SegundoComponente>
          <hr></hr>
          <TercerComponente 
            nombre= "Luis"
            apellido="Hernandez"
            ficha = {ficha_medica}
          ></TercerComponente>
          <hr></hr>
          <EventosComponente></EventosComponente>
        </div>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
      </header>
    </div>

    
  );
}

export default App;
