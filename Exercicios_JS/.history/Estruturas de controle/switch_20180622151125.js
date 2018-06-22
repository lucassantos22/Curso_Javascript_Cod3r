const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
            console.log(`Sua nota é perfeita.`)
            console.log(`Aprovado com a nota ${nota}.`)
        break;

        case 9:
            console.log(`A nota ${nota} entrou para o quadro de horna.`)
            console.log(`Aprovado com a nota ${nota}.`)
        break;
        case 8:
        case 7:
            console.log(`Aprovado com a nota ${nota}.`);
        break;

    }
} 

imprimirResultado(10);