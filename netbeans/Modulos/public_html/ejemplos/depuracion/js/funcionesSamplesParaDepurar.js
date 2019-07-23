/**
 * 
 * @param {type} x
 * @param {type} n
 * @returns {type|power1.result}
 */
function power1(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

/**
 * 
 * @param {type} x
 * @param {type} n
 * @returns {Number}
 */
function power2a(x, n) {
  var result = x;
  if (n === 0) {
    result = 0;
  } else {
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  }
  return result;
}

/**
 * 
 * @param {type} x
 * @param {type} n
 * @returns {Number}
 */
function power2c(x, n) {
  let result = x;
  if (n === 0) {
    result = 0;
  } else {
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  }
  return result;
}

/***
 * 
 * @param {type} x
 * @param {type} n
 * @returns {undefined}
 */
function power2b(x, n) {
  let result = x;
  let i = 1;
  while (i < n) {
    result *= x;
    i++;
  }
}


/**
 * Tercera iteracion - Programación funcional
 * 
 * @param {type} x
 * @param {type} n
 * @returns {Number}
 */
function power3(x, n) {
  return n === 0 // Operador ternario
          ? 0
          // Crea una array 4 elementos y los llena con el numero 2
          : Array(n).fill(x).reduce((sum, val) => sum * val);
}