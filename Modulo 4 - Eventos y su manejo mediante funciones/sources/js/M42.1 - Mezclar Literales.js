
// Objetos a Arrays y Arrays a Objetos

/**
 * Constructor JS 
 * 
 * Objetos que contienen 2 arrays
 * 
 * @type type
 */
var oCocheInfo = {
  coloresDisponibles: ["rojo", "blanco", "azul"],
  puertasDisponibles: [2, 4]
};

/**
 * Constructor JS 
 * 
 * @type Array tipo Coche con 3 filas - 3 columnas
 */
var aCoches = [
  {
    color: "rojo",
    puertas: 2,
    pagado: true
  }, {
    color: "azul",
    puertas: 4,
    pagado: true
  }, {
    color: "blanco",
    puertas: 2,
    pagado: false
  }
];

/**
 * Funcion anonima
 * 
 * @returns {muestra si esta pagado y el numero de puertas}
 */
var cochePagado = function () {
  if (aCoches[0].pagado === true) {
    document.getElementById('p4').innerHTML = " Coche Pagado ";
    switch (aCoches[0].puertas === 2) {
      case aCoches[0].puertas === 2:
        document.getElementById('p5').innerHTML = " ♦ Numero de puertas " + aCoches[0].puertas.toString();
        break;
      default :
        document.getElementById('p5').innerHTML = " Numero de puertas 4 ";
    }
  }
};

document.getElementById('p1').innerHTML = oCocheInfo.coloresDisponibles[0];
document.getElementById('p2').innerHTML = oCocheInfo.coloresDisponibles[1];
document.getElementById('p3').innerHTML = oCocheInfo.coloresDisponibles[2];

document.getElementById('s1').innerHTML = oCocheInfo.puertasDisponibles[0];
document.getElementById('s2').innerHTML = oCocheInfo.puertasDisponibles[1];

document.getElementById("i1").addEventListener("click", cochePagado);
