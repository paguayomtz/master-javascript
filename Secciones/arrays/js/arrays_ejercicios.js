'use strict'

var numeros = new Array();
var valor;
var bsq;

function mostrarArray(matriz) {
    matriz.forEach(function (valor, clave) {
        document.write('<strong>' + clave + '=>' + valor + '</strong><br>');
    });
}

for (var i = 0; i < 6; i++) {
    valor = parseInt(prompt('Introduce un numero', 0));
    numeros.push(valor);
}

//Imprimir en documento
mostrarArray(numeros)

//Imprimir en consola
console.log(numeros);

//Ordenar de menor a mayor
numeros.sort(function (a, b) {
    return a - b;
});
//Imprimir en documento ordenado
mostrarArray(numeros);
//Order e imprimir en cosonla
console.log(numeros);

//Revertir orden
numeros.reverse();
mostrarArray(numeros);
console.log(numeros);

console.log(numeros.length);

bsq = prompt('Indroduce un número a buscar', 0);

var  clave = numeros.findIndex(function(numero) {
    return numero == bsq;
})

if(clave != -1) {
    console.log('posición '+clave);
} else {
    console.log('no se encontro');
}

