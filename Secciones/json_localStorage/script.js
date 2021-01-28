'use strict'

var boton = document.querySelector('#boton');

boton.addEventListener('click', function() {

    var peli = document.querySelector('#peli').value;

    if (peli.length > 0) {
        localStorage.setItem(peli, peli);
    }
    
});

var ul = document.querySelector('ul');

for(var i in localStorage) {
    var li = document.createElement('li');
    if(typeof(localStorage[i]) == 'string') {
        li.append(localStorage[i]);
        ul.append(li);
    }    
}

var deletePelis = document.querySelector('#formDeletePelis');

formDeletePelis.addEventListener('submit', function() {

    var titulo = document.querySelector('#peli-delete').value;
    if (titulo.length > 0) {
        localStorage.removeItem(titulo);
    }

});   









