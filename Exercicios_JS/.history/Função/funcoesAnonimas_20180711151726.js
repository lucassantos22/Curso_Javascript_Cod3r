const soma = function(x,y){
    return x+y;
}

console.log(soma(1,2));

const imprimirResultado = function(a,b,operacao=soma){
    console.log(operacao(a,b));
}

imprimirResultado(5,5);
imprimirResultado(3,3,soma);