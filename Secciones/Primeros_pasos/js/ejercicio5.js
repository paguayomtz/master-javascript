'use strict'

// MOSTRAR TODOS LO NUMEROS PARES ENTRE DOS NUMERO

var n1 = parseInt(prompt('Introduce el primer numero'));
var n2 = parseInt(prompt('Introduce el segundo numero'));

if(isNaN(n1)) {
    n1 = parseInt(prompt('Introduce el primer numero'));
}

if(isNaN(n2)) {
    n2 = parseInt(prompt('Introduce el segundo numero'));
}   

while(n1 < n2) {

    n1++;
    if(n1%2==0) {
        console.log(n1);
    }

}