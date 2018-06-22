const imprimirResultado = function(nota){
    if(nota>=7){
        console.log(`Aprovado com ${nota}`);
    }else if(nota<7 && nota>0){
        console.log(`Reprovado com ${nota}`);
    }
}

imprimirResultado(5);