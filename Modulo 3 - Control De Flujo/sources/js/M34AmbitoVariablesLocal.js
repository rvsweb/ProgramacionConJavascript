// El ámbito de una variable (“scope”): ubicación en el código en la que se define
//la variable. Hay dos tipos de ámbitos: global y local.

function crea() {
  var m = "Mensaje"; // variable local - no sale del ambito
}

crea();

//console.log(m);

function crea(){
  var m = "Variable local";
  document.getElementById('p1').innerHTML = m;
  console.log(m);
}

crea();