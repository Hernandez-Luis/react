import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';

function App() {
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
        </div>
      </header>
    </div>
  );
}

export default App;
