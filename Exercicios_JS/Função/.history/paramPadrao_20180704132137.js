// Estrátégia 1 para gerar valor padrão 

function soma1(a,b,c){
    a = a || 1;
    b = b || 1;
    c = b || 1;
    return a + b + c;
}

console.log(soma1(), soma1(3), soma1(2,3,4), soma1(0,0,0));