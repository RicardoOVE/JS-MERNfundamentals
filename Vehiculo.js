class Vehiculo {

    constructor(año, marca, modelo, color, ruedas){
        this.año = año;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
    }

    acelerar(){
        return "Acelerando";
    }

}

module.exports = Vehiculo; // exportar class para poder ser usada en otro script

const auto1 = new Vehiculo(1991, 'Honda', 'Civic', 'Blanco', 4);
const bici1 = new Vehiculo(2010, 'Bici1', 'Bici de montaña', 'Roja', 2);

console.log(auto1);
console.log(auto1.marca);
console.log(auto1.acelerar());