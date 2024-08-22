//3- faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina  ao longo de um semestre , e calcule a sua médida. A atribuicao de conceitos obedece à tabela abaixo.

let nota1= 5
let nota2= 5
let media= (nota1 + nota2)/2

if(media>=9.1){
    console.log("MB")
}
if(media>=7.1 && media<9.1){
    console.log("B")
}
if(media>=4.1 && media<7.1){
    console.log("R")
}
if(media>=0 && media<4.1){
    console.log("I")
}