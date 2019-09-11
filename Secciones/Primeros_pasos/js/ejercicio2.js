'use strict'

var numero = parseFloat(prompt('Ingresa un número'));
var contador = 1;
var suma = 0;
var media = 0;
var matriz = Array();

while(numero >= 0) {      
    suma += numero;
    media = suma/contador;    
    matriz[contador-1] = numero;    
    contador++;  
    numero = parseFloat(prompt('Ingresa un número'));
}

console.log('La suma es: ' + suma);
console.log('La media es: ' + media);