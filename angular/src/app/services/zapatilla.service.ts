import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()

export class ZapatillaService {

    public zapatillas: Array<Zapatilla>;

    constructor() {
        this.zapatillas = [
            new Zapatilla('Classic', 'Reebook', 'Blanco', 800, true),
            new Zapatilla('Jordan', 'Nike', 'Negro', 5000, true),
            new Zapatilla('Ferrari', 'Puma', 'Rojo', 3200, false),
            new Zapatilla('750', 'NewBalance', 'Azul', 1299, true),
            new Zapatilla('Yezzy', 'Adidas', 'Verde', 1499, false),
            new Zapatilla('Ducati', 'Puma', 'Gris', 4100, true),
            new Zapatilla('Princess', 'Reebook', 'Blanco', 999, false),
        ];
    }

    getTest(): String {
        return 'Hola Mundo desde el servcio de zapatillas';
    }

    getZapatillas(): Array<Zapatilla> {
         return this.zapatillas;
    }

}