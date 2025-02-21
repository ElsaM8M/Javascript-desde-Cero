//Programa para mostrar los multiplos de 5 hasta un numero dado por el usuario

let numero = 20;
let contador = 1;
while(contador <= numero){
    //codigo a iterar
    if (contador % 5 === 0){
        console.log(contador);
    }
    contador++; //incremento del contador
}
//contador es = contador + 1

console.log ("Fin del programa");

//Numeros impares

let numero2 = 35;

for(let indice = 0; indice <= numero2; indice++){
    if(indice % 2 !== 0){
        console.log(indice);
    }
}


console.log("Fin del Programa");

//Imprimir los numeros del 1 al 10

let inicio = 0; //Iniciacion

//Bucle while cuando NO sabemos cuantas ves se va a repetir el codigo
while(inicio <= 10){//Condicion
    console.log(inicio); //Codigo a iterar
    inicio++;
}

console.log("Fin del Programa");

//Bucle for, ya sabemos cuantas veces se va a repetir el codigo y sirve para arreglos
for(let i = 1; i <= 10; i++){
    console.log(i); //Imprimiendo el valor actual de i
}
