function areaCirculo(radio){
    const pi = 3.1416;
    let total = pi * (radio*radio) //math.pow(2, radio)
    console.log("El area del circulo es " + total)
} 

areaCirculo(3);

function areaRectangulo(base, altura){
    let total = base * altura; 
    console.log("El area del rectangulo es " + total)
} 

areaRectangulo(10,15);

function areaTriangulo(base, altura){
    let total = (base * altura) /2; 
    console.log("El area del triangulo es " + total)
} 

areaTriangulo(2,3);

function conversionGrados(grados){
    let total = (grados * 9/5) + 32; 
    console.log("Los grados C en F son: " + total)
} 
