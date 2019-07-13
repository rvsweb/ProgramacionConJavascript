// El ámbito de una variable (“scope”): ubicación en el código en la que se define
//la variable. Hay dos tipos de ámbitos: global y local.

var m = "global";

function muestra() {
  var m = "local";
  console.log(m);
}

document.getElementById('p1').innerHTML = m;