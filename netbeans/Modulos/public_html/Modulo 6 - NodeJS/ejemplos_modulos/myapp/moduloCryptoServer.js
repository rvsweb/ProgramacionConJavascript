// Modulo representa flujo de caracteres
// Al ser una Interfaz Abstracta necesita ser implementada
const http = require("http");
const fs = require("fs");

// Modulo de encriptacion
var crypto = require("crypto");

var password = "abc";

function encrypt(data) {
  var cipher = crypto.createCipher("aes-256-ecb", password);
  return cipher.update(data, "utf8", "hex") + cipher.final("hex");
}

var decrypt = function(data) {
  var cipher = crypto.createDecipher("aes-256-ecb", password);
  cipher.update(data, "hex");
  return cipher.final("utf8");
};

const server = http.createServer(function(req, res) {
  var kk1 = encrypt("Mensaje Cifrado");
  var kk2 = decrypt(kk1);

  fs.readFile("archivoPrueba.txt", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Iniciamos Servidor <br />");
    res.write(kk1 + "<br />");
    res.write("---------------<br />");
    res.write(kk2 + "<br />");
    if (err != null) {
      res.write("Error : " + err + "<br />");
    } else {
      res.write("Sin Error : " + err + "<br />");
    }
    res.end("Archivo : " + data);
  });
});

server.listen(3000, () => {
  console.log("server is running");
});
