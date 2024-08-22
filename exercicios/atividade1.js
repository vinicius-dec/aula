//1- escreva um programa que leia as medidas dos lados de um triangulo e escreva se ele é equilatero, isósceles ou escaleno. Esse programa deve ser utilizado o processo de tomada de decisão.

let lado1= 3
let lado2= 10
let lado3=10

    if(lado1===lado2===lado3 && lado1===lado3){
        console.log("Triangulo equilatero")
    }

    if(lado1===lado2 && lado1!=lado3 && lado2!=lado3 )
    {
        console.log("Triangulo isoceles")
    }

    if(lado1!=lado2 && lado1===lado3
        && lado2!=lado3){
            console.log("triangulo isoceles")
    }

    if(lado1!=lado2 && lado1!=lado3 && lado2===lado3){
        console.log("Triangulo isoceles")
    }

    if(lado1!=lado2 && lado1!=lado3
        && lado2!=lado3){
            console.log("Triangulo Escaleno")
    }        

