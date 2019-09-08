'use strict'

//El uso es var es para crear variables globales
var edad = 31;
console.log(edad);
if(true) {
    var edad = 29;
}
console.log(edad);

//El uso de let es para crear variables en bloques
var saludo = 'Hola';
console.log(saludo);
if(true) {
    let saludo = 'Adios';
}
console.log(saludo);