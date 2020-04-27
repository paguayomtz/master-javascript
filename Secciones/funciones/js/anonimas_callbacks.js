'use strict'

//funcion anonima
 var pelicula = function(nombre) {
     console.log('El nombre de la pelicula es: ' + nombre);
 }

 pelicula('007 Otro día para morir');

 //funcion de callbacks
 function suma(n1, n2, muestra, por2) {
     var sumar = n1 + n2;
     muestra(sumar);
     por2(sumar);
 }

 suma(2, 10, function(dato){
     console.log(dato);
 }, function(dato) {
    var multi = dato*2;
    console.log(multi);
 });