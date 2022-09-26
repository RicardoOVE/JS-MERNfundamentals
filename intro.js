// execute : node intro.js
console.log('Hola a todos');


// Tipos de variables
const alumnos = ['Elena', 'Juan', 'Pablo']; // const no pueden ser modificadas

const v_o_f = true;

var ejemplo = 'X'; // var tienen alcance global, disponibles a través de toda la app

let ejemplo_2 = 'Y'; // Let solamente existe en este bloque de código

function imprimirNombre(){
    for (let index = 0; index < alumnos.length; index++){
        let name = alumnos[index];
        console.log(name + 'alumno está en ' + index);
    }
    // console.log('El úmltimo nombre e index fueron: ', name, index)
}

imprimirNombre();

function imprimirNombre2(){
    let index = 0;
    let name;
    for(index; index < alumnos.length; index ++){
        name = alumnos[index];
        console.log(name + 'alumno está en ' + index);
    }
    console.log('El úmltimo nombre e index fueron: ', name, index)
}

imprimirNombre2();

// Las funciones pueden ser ejecutadas aunque se hayan llamado antes de ser declaradas
helloWorld();

function helloWorld(){
    var nombre = 'Elena';
    console.log('Hola ', nombre)
}

// Desestructuración
const alumno = {
    nombre: 'Elena',
    aellido: 'Troya',
    email: 'correo@hotmail.com',
    password: 'contraseña123'
}

const {email, password} = alumno;
console.log(email, password);

// Listas & Arrays
const animales = ['tortuga', 'perro', 'gato', 'pez']
var [primerAnimal, segundoAnimal, tercerAnimal, cuartoAnimal] = animales;

console.log(cuartoAnimal);

const alumno2 = {
    nombre: 'Elena',
    aellido: 'Troya',
    email: 'correo@hotmail.com',
    password: 'contraseña123',
    direcciones:
    [
        {
            direccion: 'Francia 123',
            ciudad: 'Paris',
            cp: 100
        },

        {
            direccion: 'Sócrates 221',
            ciudad: 'Roma',
            cp: 2000
        }
    ]
}

const {direcciones: [dir1, dir2]} = alumno2;
console.log(dir1, dir2);

const {direcciones: [, direc2]} = alumno2; // si se quiere solo un dato
console.log(direc2);

const { direcciones: [, {ciudad: ciudaddir2}]} = alumno2;
console.log(ciudaddir2);

/** SPREAD - Podemos guardar el resto de nuestra estructura en otra variable **/
const [primerAnimalito, ...restoAnimales] = animales;
console.log(restoAnimales);

const {nombre: primerNombre, ...restoAtributos} = alumno2;
console.log(restoAtributos);

/** FUNCIONES FLECHA: Se usa para funciones cortas con return rapidos */
function sumatoria(parametro1, parametro2){
    return parametro1+parametro2;
}
console.log(sumatoria(1,2));

var sumatoriaFlecha = (parametro1, parametro2) => parametro1+parametro2;
console.log(sumatoriaFlecha(3,4));

function hola(nombre){
    console.log('Hola', nombre);
}
var holaFlecha = nombre => console.log('Hola', nombre);
holaFlecha('Elena');

var helloWorldFlecha = () => console.log('Hello World!');
helloWorldFlecha();

/** OPERADOR TERNARIO: SEntencias IF más cortas */
let i = 1;
let j = 2;
if (i > j){
    console.log('i es mayor a j');
} else {
    console.log('j es mayor a i');
}

console.log( i>j ? 't: i es mayor a j' : 'j es mayor a i');

if (i == j) {
    console.log('i es igual a j');
} else if(i<j){
    console.log('i es mejor a j');
} else {
    console.log('j es menor a i');
}

console.log(i == j ? 'i es igual a j' : (i<j? 'i es mejor a j' : 'j es menor a i'));
console.log(i ==j? 'i es igual a j' : i<j? 'i es mejor a j' : 'j es menor a i');
