/** Callbacks: funciones dentro de otras funciones */

function hacerPasta(pasta, hacerSalsa){ // pasta = 'Spaghetti', hacerSalsa = hacerSalsaAlfredo
    console.log('Hervir el agua')
    console.log("Agregar " + pasta + " pasta al agua");

    hacerSalsa();

    console.log('Revolvemos pasta con la salsa hecha');
    console.log('Pasta Lista ;)');

}

function hacerSalsaAlfredo(){
    console.log('Revolvemos los ingredientes para Salsa Alfredo');
}

function hacerSalsaPesto(){
    console.log('Revolvemos los ingredientes para Salsa Pesto');
}

hacerPasta('Spaghetti', hacerSalsaAlfredo);


const ejecutaDespues = () => console.log('Algunos milisegundos después');

setTimeout(ejecutaDespues, 1000); // Usando callback

setTimeout(() => {
    console.log('Otros segundos después');
}, 3000); // Usando función anónima

/** Funciones para arreglos */
const estudiantes = ['Elena', 'Juan', 'Pablo', 'Pedro']
const listaEstudiantes = estudiantes.map(estudiante => '<li>' + estudiante + '</li>');
console.log(listaEstudiantes);

var callbackMap = (estudiante, posicion) => estudiante+ ';)'+ pisicion;
const listaEstudiantes2 = estudiantes.map(callbackMap);
console.log(listaEstudiantes2)