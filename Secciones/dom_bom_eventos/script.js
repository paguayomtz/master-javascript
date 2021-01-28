'use strict'

window.addEventListener('load', function(){

    console.log('DOM Cargado');

    var form = document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');

    box_dashed.style.display = 'none';

    form.addEventListener('submit', function() {
        console.log('Entra el evento Submit');

        document.querySelector('#datos').innerHTML = "";
        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellido').value;
        var edad = parseInt(document.querySelector('#edad').value);
        var indice;

        if(nombre.trim() == null || nombre.trim().length == 0) {
            document.querySelector('#error-nombre').innerHTML = 'El nombre no es valido';
            document.querySelector('#error-nombre').style.display = "block";
            return false;
        } else {
            document.querySelector('#error-nombre').style.display = "none";
        }

        if (apellido.trim() == null || apellido.trim().length == 0) {
            document.querySelector('#error-apellido').innerHTML = 'El apellido no es valido';
            document.querySelector('#error-apellido').style.display = "block";
            return false;
        } else {
            document.querySelector('#error-apellido').style.display = "none";
        }

        if (edad == null || edad <= 0 || isNaN(edad)) {
            document.querySelector('#error-edad').innerHTML = 'La edad no es valido';
            document.querySelector('#error-edad').style.display = "block";
            return false;
        } else {
            document.querySelector('#error-edad').style.display = "none";
        }
        
        box_dashed.style.display = "block";

        var datos = [nombre, apellido, edad];

        for(indice in datos) {
            var p = document.createElement("p");
            p.append(datos[indice]);
            document.querySelector('#datos').append(p);
        }
    });

});
