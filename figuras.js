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

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
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

    const isoceles = validarIsoceles(Lado1, Lado2);

    if(isoceles == true){
        let altura = Math.sqrt( (Lado1 ** 2) - ( (Base ** 2) / (4) ) );
        alert("La altura del triángulo es: " + altura);
    }
    else{
        alert("Los lados A y B, no son iguales");
    }
}

