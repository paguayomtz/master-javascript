'use strict'

// MOSTRAR TODOS LO NUMEROS IMPARES ENTRE DOS NUMERO

var n1 = parseInt(prompt('Introduce el primer numero'));
var n2 = parseInt(prompt('Introduce el segundo numero'));

if(isNaN(n1)) {
    n1 = parseInt(prompt('Introduce el primer numero'));
}

if(isNaN(n2)) {
    n2 = parseInt(prompt('Introduce el segundo numero'));
}   

if (n1 < n2) {
    document.write('Del '+n1+' al '+n2+' hay:<br>');
    for(var x = n1; x <= n2; x++) {
        var resultado = x % 2;
        if(resultado != 0) {
            document.write(x+'<br>');
        }
    }
} else {
    document.write('Del '+n2+' al '+n1+' hay:<br>');
    for(var x = n2; x <= n1; x++) {
        var resultado = x % 2;
        if(resultado != 0) {
            document.write(x+'<br>');
        }
    }
}