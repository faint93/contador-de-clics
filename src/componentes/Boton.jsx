import "../hojas-de-estilo/Boton.css";

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"} onClick={manejarClic}>
      {texto}
    </button>
  );
}

//EXPORTACION POR DEFECTO: SOLO SE PUEDE EXPORTAR UN ELEMENTO DEL COMPONENTE
export default Boton;

//LINEA 4: PROPS CON SINTAXIS DE DESESTRUCTURACION(DESTRUCTURING), MANERA MAS EXPLICITA Y SENCILLA DE ASIGNAR PROPS
//LINEA 6: OPERADOR TERNARIO, PROP esBotonDeClic ? si es true asigna clase "boton-clic" : si es false asigna clase "boton-reiniciar"