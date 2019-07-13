// 2.1 | Funciones útiles para cadenas de texto

var men = "Hello Friend";
var numLetras = men.length;

document.getElementById('p1').innerHTML = "".concat(men, " = " + numLetras);

var men1 = "Hello".toUpperCase();
var men2 = "Friend".toUpperCase();

// Solo muestra 'men2'
//document.getElementById('p2').innerHTML = (men1,men2);
document.getElementById('p2').innerHTML = men1 + " " + men2;

var men1 = "Hello".toLowerCase();
var men2 = men1.concat(" Mundo".toLowerCase());

document.getElementById('p3').innerHTML = "".concat(men2);

var var1 = "Hola ";
var var2 = 3;
var men3 = var1 + var2;
  
document.getElementById('p4').innerHTML = " ♥ ".concat(men3);

men = "Funcion charAt(posicion)";
var l = men.charAt(0);
ll = men.charAt(3);

document.getElementById('p5').innerHTML = "".concat(l, ll);

men = "Hola";
var pos = men.indexOf('a');
pos = men.indexOf('z');

if (pos > 0) {
  document.getElementById('p6').innerHTML = "".concat(pos);
} else {
  document.getElementById('p6').innerHTML = "".concat("letra no encontrada : " + pos);
//  console.log(typeof pos); // tipo number
}

var men = "Hola";
var pos = men.lastIndexOf('a');
pos = men.lastIndexOf('z');
document.getElementById('p7').innerHTML = "".concat("letra no encontrada : " + pos);


var men = "Hola Amigo";
pos = men.substring(2);
document.getElementById('p8').innerHTML = "".concat("Palabras : " + pos);
pos = men.substring(5);
document.getElementById('p9').innerHTML = "".concat("Palabras : " + pos);
pos = men.substring(1, 8);
document.getElementById('p10').innerHTML = "".concat("Palabras : " + pos);
pos = men.substring(3, 4);
document.getElementById('p11').innerHTML = "".concat("Palabras : " + pos);
pos = men.substring(7);
document.getElementById('p12').innerHTML = "".concat("Palabras : " + pos);




