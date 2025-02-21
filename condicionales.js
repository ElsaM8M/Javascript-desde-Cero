// Tipo de mascotas = Gato, Perro, Hamster

//Condicionales (Jaula mediana, Jaula grande, Jaula pequeña)

let tipoDeMascota = "Elefante"

if (tipoDeMascota === "Perro"){
    console.log("Si tienes un perro, necesitas la jaula grande");
} else if (tipoDeMascota === "Gato"){
    console.log("Si tienes un gato, necesitas la jaula mediana");
} else if (tipoDeMascota === "Hamster"){
    console.log("Si tienes un hamster, necesitas la jaula pequeña");
}else{ //ELSE es el bloque falso (se ejecuta su no se cumple ninguna de las condiciones anteriores)
    console.log("No contamos con jaulas para esa mascota");
}

//semaforo color = Rojo, Amarillo, Verde
//Rojo = Alto, Amarillo = Detente, Verde = Siga
let color = "Amarillo";

if(color === "Verde"){
    console.log("Siga");
} else if(color === "Amarillo"){
    console.log("Detente");
} else if(color === "Rojo"){
    console.log("Alto");
}


let edad = 17;
let tieneLicencia = "true";

if(edad >= 18 && tieneLicencia){
    console.log("Puedes conducir");
} else {
    console.log("No puedes conducir");
}

//Para poder obtener una beca

let creditos = 10; //Minimo 10 creditos
let promedio = 8.5; //minimo 8.5

if(creditos >= 10 && promedio >= 8.5){
    console.log("tienes derecho a una beca");
} else if(creditos >= 10 && promedio < 8.5){
    console.log("Te hacen falta créditos");
} else if(creditos < 10 && promedio >= 8.5){
    console.log("Te hacen falta créditos");
} else{
    console.log("No tienes derecho a una beca");
}


let nota = 59; //Puedes cambiar este valor para probar diferentes casos

if (nota === ""){
    console.log("No pusiste la nota");
} else if (nota >= 90){
    console.log("La calificación que obtuvo es: Excelente")
} else if (nota >= 75){
    console.log("La calificación que obtuvo es: Buena")
} else if (nota >= 60){
    console.log("La calificación que obtuvo es: Suficiente")
}else {
    console.log("La calificación que obtuvo es: No Aprobatoria")
}