const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
            console.log(`Sua nota é perfeita.`);
            console.log(`Aprovado com a nota ${nota}.`);
        break;

        case 9:
            console.log(`A nota ${nota} entrou para o quadro de horna.`);
            console.log(`Aprovado com a nota ${nota}.`);
        break;
        case 8:
        case 7:
            console.log(`Aprovado com a nota ${nota}.`);
        break;
        case 6:
        case 5:
            console.log(`Prova final com a nota ${nota}.`);
        break;
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log(`Reprovado com a nota ${nota}.`);
        break;
        default:
            console.log(`Nota ${nota} é inválida.`);
    }
} 

imprimirResultado(7);