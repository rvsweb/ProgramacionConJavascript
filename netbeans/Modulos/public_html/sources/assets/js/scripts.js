/* 
 Created on : 17-jun-2019, 14:18:27
 Author     : Rad
 ###Anotaciones###  
 - outerHeight : Obtenga la altura exterior calculada actual 
 (incluido el relleno, el borde y, opcionalmente, el margen)
 
 */

/**
 * Función scroll_to 
 * 
 * Maneja la animacion del scroll 'desplazamiento' 
 * al lugar deseado de la pagina
 * 
 * @argument {object} clicked_link
 * @argument {object} nav_height
 * @type Number
 */
function scroll_to(clicked_link, nav_height) {
  var element_class = clicked_link.attr('href').replace('#', '.'); // Cambiamos el tipo de identificador
  var scroll_to = 0;
  if (element_class != '.top-content') {
    element_class += '-container';
    scroll_to = $(element_class).offset().top - nav_height;
  }
  if ($(window).scrollTop() != scroll_to) {
    $('html, body').stop().animate(
            {scrollTop : scroll_to}, 1000);
  }
}
/**
 * Navigation
 * 
 *  Cada vez que un usuario hace click en un enlace 
 *  con la clase 'scroll-link' llama a esta función.
 */
$(document).ready(function () {
  $('a.scroll-link').on('click', function (e) {
    e.preventDefault(); // detiene la ejecución de este evento pero no del resto
    scroll_to($(this), $('nav').outerHeight());
  });

// .top-content = pertenece al elemento de la lista del menu
  $('.top-content .text').waypoint(function () {
// toggle "navbar-no-bg" class
    $('nav').toggleClass('navbar-no-bg');
  });
});

$('.top-content').backstretch("sources/img/background/grisaceo.jpg");