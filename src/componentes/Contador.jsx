import "../hojas-de-estilo/Contador.css"

function Contador({ numClics }) {
  return (
    <div className="contador">
      {numClics}
    </div>
  );
}

export default Contador;

//LINEA 4: PROPS CON SINTAXIS DE DESESTRUCTURACION(DESTRUCTURING), MANERA MAS EXPLICITA Y SENCILLA DE ASIGNAR PROPS