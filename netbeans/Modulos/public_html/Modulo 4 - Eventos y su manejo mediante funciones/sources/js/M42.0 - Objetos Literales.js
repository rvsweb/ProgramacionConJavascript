
var oCliente = {
  dni: "12345678",
  nombres: "Maria",
  apellidos: "Jimenez",
  edad: 22,
  activo: true
};

document.getElementById('p1').innerHTML = (oCliente.nombres.toString());
document.getElementById('p2').innerHTML = (oCliente.apellidos.toString());
document.getElementById('p3').innerHTML = (oCliente.edad.toString());
document.getElementById('p4').innerHTML = (oCliente.activo.toString());
document.getElementById('p5').innerHTML = (oCliente.dni.toString());