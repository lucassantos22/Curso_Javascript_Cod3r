function imprimirEntre(min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let i;
let vezes;

while(i!=0){
    i = imprimirEntre(0,9);
    console.log(`Número sorteado: ${i}.`);
}