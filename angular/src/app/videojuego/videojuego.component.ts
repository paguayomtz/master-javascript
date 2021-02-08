import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html' 
})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy {

    public titulo: string;
    public listado: string;

    constructor() { 
        this.titulo = 'Componente de VideoJuego';
        this.listado = 'Listadod de lo juegos mas populares'
        //console.log('Se ah cargado video juego');
    }

    ngOnInit() {
        //console.log('OnInit ejecutado');
    }

    ngDoCheck() {
        //console.log('DoCheck ejecutado');
    }

    ngOnDestroy() {
        console.log('OnDestroy ejecutado');
    }

    cambiarTitulo() {
        //this.titulo = 'Nuevo Título';
    }
}