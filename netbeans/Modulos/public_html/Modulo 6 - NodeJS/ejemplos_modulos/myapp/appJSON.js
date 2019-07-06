// Invocamos el 'modulo' express
var express = require("express");
var http = require("http");
// Invocamos el 'modulo' http para peticiones
var bodyParser = require("body-parser");

var app = express();
// const port = process.env.PORT || 3000
app.set("port", process.env.PORT || 3000);

// var http = require("http");

// Creamos e iniciamos el servidor
http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});


// Antes de correr codigo , agregar bodyParser fuera del metodo
// Express no parsea el cuerpo de 'request' por defecto
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Recibir parametros en una ruta especificar String 'nombre' del parametro ':'
app.get("/api/product", (request, response) => {
  response.send(200, { products: [] });
});

// Recibir parametros en una ruta especificar String 'nombre' del parametro ':'
app.get("/api/product/:productId", (request, response) => {
  response.send(200, { products: [] });
});

// NECESITA POSTMAN
// Recibir request tipo POST
app.post("/api/product", (request, response) => {
  // console.log("Cuerpo de la peticion: " + request.body);
  response.send(200, { message: "El producto se ha recibido" });
});

app.put("/api/product/:productId", (request, response) => {});

app.delete("/api/product/:productId", (request, response) => {});

