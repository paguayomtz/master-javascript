import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    template: `
        <h2>Componente de VideoJuego</h2>
        <ul>
            <li>GTA</li>
            <li>Super Mario</li>
        </ul>
    `
})

export class VideoJuegoComponent {

    constructor() {
        console.log('Se ah cargado video juego');
    }
}