function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

let i = 0;

while(i!=0){
    i = getInteiroAleatorioEntre(0,10);
    console.log(`Número sorteado: ${i}`);
}

console.log('Fim');