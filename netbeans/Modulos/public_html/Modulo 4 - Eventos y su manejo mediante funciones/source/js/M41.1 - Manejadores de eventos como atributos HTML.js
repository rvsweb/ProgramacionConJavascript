
document.getElementById('inputi2').addEventListener('click', lanzarOnClick);

function lanzarOnClick() {
  document.getElementById('p2').innerHTML = "Evento lanzado : ".concat(Date());
}