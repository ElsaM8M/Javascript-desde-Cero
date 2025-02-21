//funciones
//Palabra reservada function + nombre de la funcion + par+ametros
function Sumar(numero1, numero2){
    let total = numero1 + numero2
    return total; //return nos permite guardar el resultado en una variable, en este caso "resultado"
}
//llamado a mi funcion
let resultado = Sumar(10,10);

console.log(resultado);

console.log(Sumar(12,20));

function Saludar(nombre){
    console.log("hola, bienvenido/a", nombre); //concatenar
}

Saludar("Carolina")
Saludar("Monserrat")

console.log(Sumar(2,3));

function Restar(a,b){
    let total = (a - b);
    console.log(total);
}

//No se guarda el resultado en una variable
Restar(13,2)

console.log(total)

function Casita(){//no recibe parametros (antes de entrada)
    let nombre = "Ana";
    let apellido = "Villanueva";
    console.log("Esta es una casita");
}

Casita();

//console.log(nombre); //no se puede acceder porque esta dentro de una funcion
//Scape de bloque

let nombre = "Vanessa"; //Variable global
let edad = 23;
let ciudad = "Ciudad de México";

console.log("Ella se llama " + nombre + " tiene " + edad + " años y vive en " + ciudad);

console.log ('Ella se llama ${nombre} tiene ${edad} años y vive en ${ciudad}');
//Ctrl + alt + }
//Actualizacion de ES6 (2015)`

let usuario = prompt("¿Cuál es tu nombre?");
let gatos = prompt("¿Cuántos gatos tienes?");
let perros = prompt("¿Cuántos perros tienes?");
let total = parseInt(gatos) + parseInt(perros); // convertir string a numero
let total_2 = Number(gatos) +Number (perros); //vemos los datos en consola
console.log("usuario tiene ${gatos} y ${perros} perros");

// vemos los datos en pop up
alert(" ${usuario} tiene ${gatos} y ${perros} perros");

//vemos los datos en la pagina
document.write(" ${usuario} tiene ${gatos} y ${perros} perros");

//cen total tiene x mascotas

