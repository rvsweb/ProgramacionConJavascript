var v = ["a", "e", "i", "o", "u"];
var num = v.length;

document.getElementById('p1').innerHTML = "".concat("Longitud: " + num, ' - '.concat(v.toString().toUpperCase()));


var men = "Hello World be a string!";

var p = men.split(" ");

document.getElementById('p2').innerHTML = p.concat(" - " + men);