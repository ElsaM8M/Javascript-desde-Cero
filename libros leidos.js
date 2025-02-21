// Declaro  mi arreglo vacío
let librosLeidos = [];

//Declaro mi funcion aregarlibro
function agregarLibro(tituloLibro){
    librosLeidos.push(tituloLibro); //agregamos un elemento al arreglo
}


agregarLibro("El principito");
agregarLibro("Las mujeres que amaban demasiado");
agregarLibro("Los 7 esposos de Evelyn Hugo");


console.log(librosLeidos); //imprimir el arreglo

//mostrar los libros leidos
function mostrarLibrosLeidos(){
    for(let i = 0; i< librosLeidos.length; i++){
        console.log(librosLeidos[i])
    }
}

//tenemos que llamar a la funcion

mostrarLibrosLeidos();

console.log("-----------------------");
agregarLibro("El Alquimista");
agregarLibro("La chica del tren");
agregarLibro("Javascript para principiantes");

mostrarLibrosLeidos();

