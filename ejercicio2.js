function areaTriangulo(base,altura){
    return (base*altura)/2;
}
console.log(areaTriangulo(3,5))

function areaRectangulo(base,altura){
    return (base*altura);
}
console.log(areaRectangulo(3,5));

function areaCirculo(radio){
    const pi = 3.1416;
    return (pi*(radio*radio));
}
console.log(areaCirculo(5))

function celciusToFarenheit(C){
    return (C * 9/5 + 32)
}
console.log(celciusToFarenheit(30))

function esParoNo(numero){
    if ((numero % 2) === 0){
        console.log(`${numero} es un número par`)
    }  else {
        console.log(`${numero} es un número impar`)
    }
}
esParoNo(13)