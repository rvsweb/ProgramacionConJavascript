
var numbers = [0, 1, 2];

for (var i in numbers) {
  var a = numbers[i]; // variable global tiene ambito 'scope' en todo el script
  let b = numbers[i]; // variable local solo tiene ambito 'scope' dentro del bucle
  document.getElementById('p1').innerHTML = b + " - Variable 'let' dentro del bloque del bucle '<b>ambito bloque</b>'";
}

document.getElementById('p2').innerHTML = a + " - Variable 'var' tiene ambito 'scope' en todo el script";

//Uncaught ReferenceError: b is not defined

document.getElementById('p3').innerHTML = "variable <b>let</b> b : Variable 'b' del tipo let fuera del ambito del bloque del bucle";