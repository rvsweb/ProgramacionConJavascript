var path = require("path");

var direccion = "./archivoPrueba.txt";
var fileName1 = path.basename(direccion);
var fileName2 = path.extname(direccion);

console.log(fileName1 + " " + fileName2);
