import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
//IMPORTACIONES POR DEFAULT
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }; 

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto="Reiniciar" esBotonDeClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;


//LINEA 6: IMPORT HOOKS useState
//LINEA 10: DETALLE DEL HOOK, numClicks es el estado, setNumClics es la funcion que permite actualizar el estado, useState(0) es el valor inicial del estado del componente
//LINEAS 27, 28: RENDERIZA 2 VECES ELEMENTO DEL COMPONENTE HIJO LLAMADO Boton, SE VAN A DIFERENCIAR DEPENDIENDO LAS PROPS OTORGADAS
