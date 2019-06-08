
/**
 * 1.4 | Manejadores de eventos semánticos
 
 * Función Externa
 * 
 * @returns {String}
 */
function muestra() {
  console.log('funcion lanzada: ');
}

// asignar la funcion externa al elemento
document.getElementById('boton').onclick = muestra;