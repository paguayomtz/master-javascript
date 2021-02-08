import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculadora',
})

export class CalculadoraPipe implements PipeTransform {
    //asi funciona el el metodo transform obligatorio para hacer una pipe
    //dato | calculadora : otroDato

    transform(value: any, value2: any) {
        let operaciones = `
            Suma: ${value+value2} - 
            Resta: ${value-value2} - 
            Multipliación: ${value*value2} - 
            Divisón: ${value/value2}
        `;
        return operaciones;
    }
}