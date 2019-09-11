'use strict'

// PEDIR DOS NUMEROS Y DECIR CUAL ES EL MAYO Y SI SON IGUALES

var n1 = parseInt(prompt('Ingresar primer número'));
var n2 = parseInt(prompt('Ingresa segundo número'));

while(n1 <= 0 || n2 <= 0 || isNaN(n1) || isNaN(n2)) {
    n1 = parseInt(prompt('Ingresar primer número'));
    n2 = parseInt(prompt('Ingresa segundo número'));
}

if ( n1 > n2) {
    alert('El  primer número ' + n1 + ' es mayor al segundo ' + n2);
    alert('Los número no son iguales')
} else if (n1 < n2 ) {
    alert('E segundo número ' + n2 + ' es mayor al primero ' + n1);
    alert('Los número no son iguales');
} else if (n1 == n2) {
    alert('Los número son iguales');
} else {
    alert('Introduce números');
}