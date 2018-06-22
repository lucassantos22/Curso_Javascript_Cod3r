function imprimirResultado(nota){
    if(nota>=7){
        console.log(`Aprovado com ${nota}`);
    }else{
        console.log(`Reprovado com ${nota}`);
    }
}

imprimirResultado(7);