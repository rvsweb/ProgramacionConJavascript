var vm = require("vm");

var myObj = { name: "John", age: 38 };

vm.createContext(myObj);

vm.runInContext("age += 1;", myObj);

console.log("vm Compilación y ejecución bajo demanda de código");
console.log(myObj);
