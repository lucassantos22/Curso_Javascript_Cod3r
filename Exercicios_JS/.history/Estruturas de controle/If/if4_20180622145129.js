Number.prototype.maior = function(num){
    return this>num;
}

function comparacao(valor){
    if(valor.maior(7)){
        return `${valor} é maior.`
    }else{
        return `${valor} é menor.`
    }
}

console.log(comparacao(8));