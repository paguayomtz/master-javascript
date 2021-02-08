import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

  public nombre: string= '';
  public edad: number = 0;

  constructor(private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      console.log(params); //Imprime todo el objeto
      console.log(params.nombre); //Imprime solo el dato que le pido del objeto
      this.nombre = params.nombre;
      this.edad = +params.edad;
    })
  }

  redirigir(): void {
    this._router.navigate(['/zapatillas']);
  }

}
