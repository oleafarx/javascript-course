//EMPEZAMOS
// CÓdigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triÃ¡ngulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4
 console.log(

    "Los lados del triángulo miden: "
  + ladoTriangulo1
  + "cm, "
  + ladoTriangulo2
   + "cm, "

+ baseTriangulo
   + "cm"
 );

const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

//console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

//console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
 const radioCirculo = 4;
 console.log("El radio del cí­rculo es: " + radioCirculo + "cm");

// Diámetro
const diametro = radioCirculo * 2;

// PI
const pi = Math.PI;
console.log("PI es: " + pi);

// Circunferencia
const circunferenciaCirculo = radioCirculo * pi;
console.log("El perimetro es: " + circunferenciaCirculo);

// Área
const areaCirculo1 = (radioCirculo * radioCirculo) * pi;
console.log("El área del círculo es: " + areaCirculo1);

console.groupEnd();

//ENCAPSULAMOS EN FUNCIONES
//Código del Cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
} 

//Código del Triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

const areaTriangulo = (base, altura) => 
(base * altura) / 2;

//Código del Círculo

const diametroCirculo = (radio) => radio * 2;

const PI = Math.PI;

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

const areaCirculo = (radio) => PI * radio ** 2;

//INTERACTUANDO CON HTML
//Cuadrado
function calcPeriCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value); //Declarada en línea 64
    alert("El perimetro del cuarado es " + perimetro);
}

function calcAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);  //Declarada en línea 68
    alert("El área del cuadrado es " + area);
}

//Triangulo Isóceles

/*function validarHipotenusa(Lado1, Lado2, Base) {
    hipotenusa = Math.sqrt((Lado1*Lado1) + (Lado2 * Lado2));
    if (hipotenusa == Base){
        return true;
    }
    else{
        return false;
    }
}*/

function validarIsoceles(lado1, lado2) {
    if(lado1 == lado2){
        return true;
    }
    else{
        return false;
    }
}

function calcAlturaTriangulo() {
    let Lado1 = Number(document.getElementById("lado1").value);
    let Lado2 = Number(document.getElementById("lado2").value);
    let Base = Number(document.getElementById("base").value);

    const isoceles = validarIsoceles(Lado1, Lado2); //Declarada en línea 120

    if(isoceles == true){
        let altura = Math.sqrt( (Lado1 ** 2) - ( (Base ** 2) / (4) ) );
        alert("La altura del triángulo es: " + altura);
    }
    else{
        alert("Los lados A y B, no son iguales");
    }
}

//Triángulo
function calcPeriTriangulo(){
    let Lado1 = Number(document.getElementById("lado1T").value);
    let Lado2 = Number(document.getElementById("lado2T").value);
    let Base = Number(document.getElementById("baseT").value);

    const perimetro = perimetroTriangulo(Lado1, Lado2, Base); //Declarada en la línea 73
    alert("El perimetro del triángulo es " + perimetro);
}

function calcAreaTriangulo() {
    let Base = Number(document.getElementById("baseT").value);
    let Altura = Number(document.getElementById("alturaT").value);

    const area = areaTriangulo(Base, Altura);
    alert("El área del triángulo es " + area);
}

//Circulo
function calcPeriCirculo() {
    let radio = Number(document.getElementById("radio").value);

    const perimetro = perimetroCirculo(radio); //Declarada en línea 86
    alert("El perimetro del circulo es " + perimetro);
}

function calcAreaCirculo() {
    let radio = Number(document.getElementById("radio").value);

    const area = areaCirculo(radio); //Declarada en línea 88
    alert("El área del círculo es " + area);
}