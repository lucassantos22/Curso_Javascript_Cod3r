function imprimirEntre(min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let i;
let vezes;
const final = 0;

while(i!=final){
    i = imprimirEntre(0,9);
    console.log(`Número sorteado: ${i}.`);
    vezes++;
}

console.log(`Houveram ${vezes} sorteios para chegar ao número ${final}`)