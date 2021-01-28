'use strict'

//fetch (ajax) y preticiones a servicio api rest
var div_usuario = document.querySelector('#usuarios');
var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data => {
        listarFetch(data);       
    });


function listarFetch(array) {
    array.map((objeto, indice) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = indice + '.' + objeto.name + objeto.user_name;
        div_usuario.appendChild(nombre);
    });
    document.querySelector('.loading').style.display = 'none';
}





