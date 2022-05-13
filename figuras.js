//Código del cuadrado
// console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4 ;
}

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perímetro del cuadrado es : "+ perimetroCuadrado+ "cm");


function areaCuadrado(lado){
    return lado * lado;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

// console.groupEnd();

//Código del triángulo
// console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triángulo miden " 
// + ladoTriangulo1 
// + "cm,  " 
// + ladoTriangulo2 + "cm, "
// + baseTriangulo + "cm"
// );

// 

function perimetroTriangulo(lado1 , lado2, base){
    return lado1 + lado2 + base
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es de " + perimetroTriangulo);

function areaTriangulo(base, altura){
    return (base * altura) / 2
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

// console.groupEnd();


//Código del Círculo
// console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es de " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es de " + diametroCirculo + "cm");
const PI = Math.PI;
// console.log("PI es  " + PI );

// Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// const perimetroCirculo = diametroCirculo * PI ;
// console.log("El perímetro del círculo es de " + perimetroCirculo + "cm");



// Área

function areaCirculo(radio){
    return (radio*radio) * PI
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI ;
// console.log("El área del círculo es de " + areaCirculo + "cm^2");


// console.groupEnd();

//Aqui interactuamos con HTML

//Cuadrado

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value) + "cm^2";
    alert(area);
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value) + "cm";
    alert(perimetro);
}

//Triángulo

function calcularAreaTriangulo(){
    const baseInput = document.getElementById("triangleBaseInput");
    const baseValue = baseInput.value;

    const heightInput = document.getElementById("triangleHeightInput");
    const heightValue = heightInput.value;

    const area = areaTriangulo(baseValue, heightValue) + "cm^2";
    alert(area);   
    
    
}

function calcularPerimetroTriangulo(){
    const side1Input = document.getElementById("triangleSide1Input");
    const side1Value = parseInt(side1Input.value);

    const side2Input = document.getElementById("triangleSide2Input");
    const side2Value = parseInt(side2Input.value);

    const baseInput = document.getElementById("triangleBaseInput");
    const baseValue = parseInt(baseInput.value);

    const perimetro = perimetroTriangulo(side1Value, side2Value, baseValue) + "cm";
    alert(perimetro);


}

// Círculo

function calcularDiametroCirculo(){
    const input = document.getElementById("circleRadius");
    const value = input.value ;

    const diametro = diametroCirculo(value) + "cm";
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("circleRadius");
    const value = input.value ;

    const perimetro = perimetroCirculo(value) + "cm";
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("circleRadius");
    const value = input.value ;

    const area = areaCirculo(value) + "cm^2";
    alert(area);
}

