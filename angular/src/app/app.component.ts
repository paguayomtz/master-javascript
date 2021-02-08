import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'angular';
  public desc: string;
  public config;
  public mostrar_videojuegos: boolean = true;

  constructor() {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.desc = Configuracion.descipcion;
  }

  ocultarVideojuegos(val:boolean) {
    this.mostrar_videojuegos = val;
  }
}
