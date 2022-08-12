import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react'; //Hook mas usado

function App() {
  //esta linea actualisa el estado del contador aumentando en 1 la variable numClics
  const [numClics, setNumClics] = useState(0); 

  //estas lineas llaman a la funcion setNumClics encuando una sentencia para sumar 1 al contador, como parametro
  const sumadorClic = () => {
    setNumClics(numClics + 1);
  };

  //estas lineaas llaman a la funcion setNumClics enciano 0 como parametro
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics} />
        <Boton
          texto='Click'
          esBotonDeClic={true}
          manejarClic={sumadorClic}/>
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
