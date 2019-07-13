
//2.2 | Funciones útiles para arrays

// length
var v = ["a", "e", "i", "o", "u"];
var num = v.length;
document.getElementById('p1').innerHTML = "".concat("Longitud: " + num, ' - '.concat(v.toString().toUpperCase()));

// split(separador)
var men = "Hello World be a string!";
var p = men.split("");
document.getElementById('p2').innerHTML = p.concat(" - " + men);

// concat()
var a1 = [1, 2, 3];
a2 = a1.concat(4, 5, 6);
a3 = a1.concat([7 * 11, 8 * 11, 9 * 11]);
document.getElementById('p4').innerHTML = " ".concat(a2, "<b>|" + a3 + "</b>");

// join(separador)
var a = ["hola", "mundo"];
var men = a.join("");
men = a.join("");
document.getElementById('p3').innerHTML = men;

// pop()
var a = [1, 2, 3];
console.log(a);
var u = a.pop();
console.log(u);

for (var i in a) {
  console.log("indice : " + i);
  document.getElementById('p4').innerHTML = " ".concat(a[i], u);
}

// push()
var a = [1, 2, 3];
a.push(4);

for (var i in a) {
  console.log(a[i]);
}
document.getElementById('p5').innerHTML = a;

// shift() - suprime el primer elemento de nuestro array
var a = [1, 2, 3];
var p = a.shift();
document.getElementById('p6').innerHTML = a;

//unshift(0)
var agregar = [1, 2, 3];
agregar.unshift(0);
document.getElementById('p7').innerHTML = agregar;

//reverse()
var ainvertir = [1, 2, 3];
ainvertir.reverse();
document.getElementById('p8').innerHTML = ainvertir;



