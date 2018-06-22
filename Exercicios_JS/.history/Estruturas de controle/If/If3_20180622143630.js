Number.prototype.entre = function(inicio, fim){
    if(this>=inicio && this<=fim){

    }
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quandro de honra');
    }else if(nota.entre(7,8.99)){
        console.log('Aprovado');
    }else if(typeof nota != 'number'){
        console.log('Formato inválido, a nota deve ser um número.')
    }else{
        (nota.entre(0,6.99)){
        console.log('Reprovado');
    }
    console.log('Fim.');
}

imprimirResultado(9);