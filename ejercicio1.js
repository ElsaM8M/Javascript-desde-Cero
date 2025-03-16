function areaCirculo(){
    let radio = prompt ("ingresa el radio del circulo");
    let resultado =  Math.Pi * parseFloat(radio)**2;
    alert(`El área del circulo es ${resultado}`)
}

function areaTriangulo(){
    let base = prompt ("ingresa la base del triángulo");
    let altura = prompt ("ingresa la altura del triángulo");
    let resultado = parseFloat(base) * parseFloat(altura) / 2;
    alert(`El área del triángulo es ${resultado}`)
}

function areaRectangulo(){
    let base = prompt ("ingresa la base del rectángulo");
    let altura = prompt ("ingresa la altura del rectángulo");
    let resultado = parseFloat(base) * parseFloat(altura);
    alert(`El área del rectángulo es ${resultado}`)
}

function celciusToFarenheit(){
    let gradosCelcius = prompt ("ingresa la temperatura a grados Celcius");
    let gradosFarenheit = (parseFloat(gradosCelcius) * 9/5) + 32;
    alert(`${gradosCelcius} °C equivalen a ${gradosFarenheit} °F`);
    return gradosFarenheit;
}

function esPar(){
    let numero = prompt("ingresa un número")
    if (numero % 2 === 0){
        alert(`El número ${numero} es par`)
    } else {
        alert(`El número ${numero} es impar`)
    }
}

areaCirculo();
areaTriangulo();
areaRectangulo();
celciusToFarenheit();
esPar();

