Number.prototype.maior = function(num){
    return this>num;
}

function comparacao(valor){
    if(valor.maior(8)){
        return `${valor} é maior.`
    }else{
        return `${valor} é menor.`
    }
}

console.log(comparacao());