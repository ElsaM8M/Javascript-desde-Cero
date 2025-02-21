//var es una forma antigua de declarar variables

var nombre = "Ana";

var nombre = "Fernanda";

var nombre = "Victor";

console.log(nombre);

//aparece Victor


//let no permite redeclarar variables. lo que signofoca que no puedes declarar la misma variable dos veces 

//let tiene in scape de bloque, lo que significa que solo vive en el bloque donde fue declarada. Un bloque es {}
let apellido1 = "Gutierrez";

let apellido2 = "Lopez";

//let si permite cambiar el valor
//Reasignación del valor
apellido1 = "Perez";
console.log(apellido1);

//const es una constante , no se puede reasignar el valor
const PI = 3.1416;

PI = 4; //Esto no se puede hacer



