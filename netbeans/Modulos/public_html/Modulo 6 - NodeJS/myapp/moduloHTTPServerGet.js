// Invocamos el 'modulo' express
var express = require("express");
// Invocamos el 'modulo' http para peticiones
var http = require("http");
var app = express();

// Indicar 'express' el puerto por el que escucha
app.set("port", process.env.PORT || 3000);

// Creamos e iniciamos el servidor
http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});

// Ruta nos permite direccionar peticiones a los controladores correctos
// Agregar codigo de un controlador a la ruta
app.get("/", function(request, response) {
  response.send('Hola, Express');
});
