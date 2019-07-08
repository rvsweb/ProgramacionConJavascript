// NaN, (del inglés, “Not a Number”) el lenguaje JavaScript

var num1 = 0;
var num2 = 0;
document.getElementById('p1').innerHTML = (num1 / num2);

// isNaN(), protege nuestro código de valores no numéricos.

num1 = 0;
num2 = 0;
if (isNaN(num1 / num2)) {
  document.getElementById('p2').innerHTML = "Es NaN : " + isNaN(num1 / num2);
} else {
  document.getElementById('p2').innerHTML = "Es NaN : " + isNaN(num1 / num2);
}

// Infinity, es el valor de infinito cuando las operaciones dan dicho resultado.
num1 = 10;
num2 = 0;
document.getElementById('p3').innerHTML = "Es infinity : " + (num1 / num2);

//toFixed(digitos), fija el número de decimales que tiene que resolver una operación y redondea si es necesario.

var num11 = 4564.345670;
var nf = num11.toFixed(2);
console.log(nf);
document.getElementById('p4').innerHTML = " ".concat(nf);

var num22 = 4564.345670;
var nf2 = num22.toFixed(6);
console.log(nf2);
document.getElementById('p5').innerHTML = " ".concat(nf2);

var num33 = 4564.345670;
var nf3 = num22.toFixed();
console.log(nf3);
document.getElementById('p6').innerHTML = " ".concat(nf3);

var numero = 4564.34567;
console.log(numero.toFixed(2));