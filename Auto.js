const Vehiculo = require('./Vehiculo');

/** Heredando de la clase vehiculo */

class Automovil extends Vehiculo{
    constructor(año, marca, modelo, color, ruedas, placas){
        super(año, marca, modelo, color, ruedas)
        this.placas = placas || "123"; // si existe placas? -> this.placas = placas, si no -> this.placas = "123"
        this.motor = 'Automático';
    }

    acelerar(){
        let mensaje_padre = super.acelerar();
        return mensaje_padre + ' RUMMMM!';
    }

}

const automovil = new Automovil(2010, 'Mazda', 'CX-3', 'Azul', 4, "ABC-123");

console.log(automovil.placas);
console.log(automovil.acelerar());
