

function muestra() {
  document.getElementById('p1').style.background = "gray";
  console.log('1.3 - Manejadores de eventos como funciones externas');
}

function resaltar(elemento) {
  switch (elemento.style.borderColor) {
    case 'silver' :
      document.getElementById('p1').style.background = "#f7c871";
      document.getElementById('div1').style.background = "#f7c871";
      document.getElementById('div1').style.padding = "10px";
      break;
    default :
      document.getElementById('div1').style.background = "yellow";
      break;
  }
}