function soma(){
    let soma = 0;
    for(i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1,2,3));
console.log(soma(1,2,"Teste"));
console.log(soma("Oi","Testando","Praticando"));

function soma2(){
    let soma2 = 0;
    let f = [];
    for(i in arguments){
        if(i<10){
            f.push(i);
        }
    }
    for(j in f){
        soma2 += f;
    }
    return soma2;
}

console.log(soma2(10,40));