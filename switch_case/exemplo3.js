// Escolhe uma estação preferida do ano: "Primavera", "Outono", "Verão" ou inverno

const op= 2; //Declaração de Variavel

console.log("-----------------");
console.log("Digite 1: Primavera");
console.log("Digite 2: Verão");
console.log("Digite 3: Outono");
console.log("Digite 4: Inverno");
console.log("-----------------");
console.log("");

switch(op) {
    case 1:
        console.log(` A estação escolhida foi ${op}. Curta as Flores!!!`)
        break;
    case 2:
        console.log(` A estação escolhida foi ${op}. Curta o Sol!!!`)
        break;
    case 3:
        console.log(` A estação escolhida foi ${op}. Curta seus passeios!!!`)
        break;
    case 4:
        console.log(` A estação escolhida foi ${op}. Curta um bom filme e um chocolate quente!!!`)
        break;
    default:
        console.log("Que triste... Voce não gosta de nenhuma estaçao do ano! :-( ...")
        break;    
                            
}

