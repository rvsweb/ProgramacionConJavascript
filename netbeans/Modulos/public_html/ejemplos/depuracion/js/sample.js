/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var input = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');

button.addEventListener('click', onClick);

/**
 * Coge el valor de 2 objetos 'input' 
 * 
 * Suma ambos valores y muestra por pantalla
 * 
 * @returns {integer}
 */
function onClick() {
  var num1 = input[0].value;
  var num2 = input[1].value;
  var sum = Number(num1) + Number(num2);
  label.textContent = num1 + ' + ' + num2 + ' = ' + sum;
}

/**
 * Primera iteracion
 * 
 * @param {type} x
 * @param {type} n
 * @returns {power1.result}
 */
function power1(x, n) {
  let result = x; 

  for (var i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

/**
 * Segunda iteracion
 * 
 * @param {type} x
 * @param {type} n
 * @returns {undefined}
 */
function power2(x, n) {
  var result = x;

  if (n === 0) {
    result = 0;
  } else {

  }
}