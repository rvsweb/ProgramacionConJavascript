// Invocamos el 'modulo' express
var express = require("express");
var app = express();
// Invocamos el 'modulo' http para peticiones
var http = require("http");
var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.text());

// Antes de correr codigo , agregar bodyParser fuera del metodo
// Express no parsea el cuerpo de 'request' por defecto
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
// app.use(express.bodyParser());

// Indicar 'express' el puerto por el que escucha
app.set("port", process.env.PORT || 3000);

// Creamos e iniciamos el servidor
http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});

// // Recibir parametros en una ruta especificar String 'nombre' del parametro ':'
// app.get("/users/:userName", function(request, response) {
//   var name = request.params.userName;
//   response.send(" !Hola " + name + " ! ");
// });

// NECESITO EL POSTMAN
// Recibir request tipo POST
app.post("/users", function(request, response) {
  // console.log("Cuerpo de la peticion: " + request.body);
  var userName = request.body.userName;
  response.send("!Hola , " + userName + " ! ");
});
