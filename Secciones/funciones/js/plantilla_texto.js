'use strict'

var nombre = prompt('Escribe tu nombre');
var apellido = prompt('Escribe tu apellido');

var template = `
    <h1> Los datos son los siguientes </h1>
    <h2> Tu nombre es: ${nombre} </h2>
    <h2> Tu apellido es: ${apellido} </h2>
`;

document.write(template);