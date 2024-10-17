// Desenvolver um algoritimo que devera ter opções de calculo;SOMA, SUBTRAÇÃO, MULTIPLIÇÃO,DIVISÃO. Conforme a escolha do usuario e de acordo com dois valores numericos atribuídos, o calculo devera ser realizado. bom trabalho!

const op= "3"
const numero1= "60"
const numero2= "30"



switch (op){
    case "1":
        console.log(`Você escolheu somar ${numero1} e ${numero2}, o resultado e:`,numero1+numero2)
        break;
    case "2":
        console.log(`Você escolheu subtrair ${numero1} e ${numero2}, o resultado e:`,numero1-numero2)
        break;
    case "3":
        console.log(`Você escolheu dividir ${numero1} e ${numero2}, o resultado e:`,numero1/numero2)
        break;
    case "4":
        console.log(`Você escolheu multiplicar ${numero1} e ${numero2}, o resultado e:`,numero1*numero2)
        break; 
         
}

