const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
            console.log(`Sua nota é perfeita.`)
        break;

        case 9:
            console.log(`A nota ${nota} entrou para o quadro de horna.`)
        break;

    }
} 

imprimirResultado(10)