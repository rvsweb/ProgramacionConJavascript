// Invocamos el 'modulo' express
var express = require("express");
// Invocamos el 'modulo' http para peticiones
var http = require("http");

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.bodyParser());

app.get("/", function(request, response) {
  response.send("Hola , Express !");
});

// Recibir request tipo POST
app.post("/users", function(request, response) {
  var userName = request.body.userName;
  response.send("!Hola , " + userName + " ! ");
});

// Recibir parametros en una ruta especificar String 'nombre' del parametro ':'
app.get(/\/personal\/(\d*)\/?(edit)?/, function(request, response) {
  var message = "el perfil del empleado #" + request.params[0];
  if (request.params[1] === "edit") {
    message = "Editando " + message;
  } else {
    message = "Viendo " + message;
  }
  response.send(message);
});

// Creamos e iniciamos el servidor
http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
