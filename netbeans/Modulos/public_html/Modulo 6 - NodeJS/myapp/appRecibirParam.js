// Invocamos el 'modulo' express
var express = require("express");
var app = express();
// Invocamos el 'modulo' http para peticiones
var http = require("http");

// Indicar 'express' el puerto por el que escucha
app.set("port", process.env.PORT || 3000);

// Creamos e iniciamos el servidor
http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});

// Recibir parametros en una ruta especificar String 'nombre' del parametro ':'
app.get("/users/:userName", function(request, response) {
  var name = request.params.userName;
  response.send(" !Hola " + name + " ! ");
});
