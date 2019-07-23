// Invocamos el 'modulo' express
// Modulo Express para peticiones http
var express = require("express");
var app = express();
// Modulo console
var os = require("os");
// Modulo buffer
const buffer = require("buffer").Buffer;
console.log(buffer);

// Modulo Util
var util = require("util");

async function fn() {
  return 'Funcion asincrona del Modulo "util" ';
}

const callbackFunction = util.callbackify(fn);
callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

// Modulo buffer
const buffer_string = Buffer.from("I'm a string!", "utf-8");
console.log(buffer_string);

// Modulo event
var fs = require("fs");
var readStream = fs.createReadStream("./archivoPrueba.txt");
readStream.on("open", function() {
  console.log("The file is open");
});

// Modulo timers : Crear interfaces
const timeoutObj = setTimeout(() => {
  console.log("♠ Timeout beyond time - Tiempo de espera");
}, 1500);

const immediateObj = setImmediate(() => {
  console.log(
    "○ Immediately executing immediate - Ejecutar inevitablemente inmediato"
  );
}, 5000);

var i = 0;
const intervalObj = setInterval(() => {
  i++;
  if (i == 10) {
    console.log("!STOP! Execute : " + i);
    clearInterval(intervalObj);
  } else {
    console.log("♦ Interviewing the interval - Visualizar el intervalo : " + i);
  }
}, 100);

// Recoger peticion
app.get("/", function(req, res) {
  res.send(
    "Modulo consola \n" +
      os.platform +
      " Arquitectura \n" +
      os.arch +
      " Modulo buffer \n" +
      buffer_string +
      ""
  );
});

// Escuchar peticion
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
