import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    styleUrls: ['../../assets/style.css'],
    providers: [ZapatillaService],
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = 'Componente de Zapatillas';
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(private _zapatillaService: ZapatillaService) {
        this.mi_marca = 'Marca';
        this.color = 'purple';
        this.marcas = new Array();
        this.zapatillas = _zapatillaService.getZapatillas();
    }

    ngOnInit() {
        this.getMarcas();
        alert(this._zapatillaService.getTest());
    }

    getMarcas() {
        this.zapatillas.forEach((element, index) => {    
            if(this.marcas.indexOf(element.marca) < 0) {
                this.marcas.push(element.marca); 
            }        
        });  
        console.log(this.marcas);
    }

    getMarca() {
        alert(this.mi_marca);
    }

    addMarca() {
        this.marcas.push(this.mi_marca);
    }

    removeMarca(indice:number) {
        //delete this.marcas[indice];
        this.marcas.splice(indice, 1);
    }

    onBlur() {
        alert('Saliste del input');
    }

    capturarEnter() {
        alert('Has presionado enter');
    }
}