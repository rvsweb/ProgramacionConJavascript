const fs = require("fs");

fs.readFile("archivoPrueba.txt", "utf8", function(err, contents) {
  console.log(contents);
});

console.log("after calling readFile");

fs.readFile("prueba.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed: ", err);
    return;
  }
  try {
    const usuario = JSON.parse(jsonString);
    console.log("Nombre del cliente : ", usuario.nombre);
  } catch (err) {
    console.log("Error parsing JSON string ", err);
  }
  console.log("File data: ", jsonString);
});

// Datos que quiero crear
const customer = {
  name: "Newbie Co.",
  order_count: 0,
  address: "Po Box City"
};

// Convertir objeto STRING a JSON
const jsonString = JSON.stringify(customer);

fs.writeFile("./xnuevoJSON.json", jsonString, err => {
  if (err) {
    console.log("No puedo escribir en el archivo y crearlo", err);
  } else {
    console.log("Archivo creado correctamente");
  }
});

console.log(jsonString);