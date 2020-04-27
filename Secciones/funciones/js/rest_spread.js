'use strict'

function frutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log('Fruta 1: ' + fruta1);
    console.log('Fruta 2: ' + fruta2);
    console.log(resto_de_frutas)
}

frutas('Manzana', 'Mandarina', 'Sandia', 'Melon', 'Ciruela');

var frutitas = ['Manzana', 'Mandarina'];
frutas(...frutitas, 'Sandia', 'Melon', 'Ciruela')