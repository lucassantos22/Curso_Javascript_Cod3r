function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

let i;
let quantidadeDeVezesPesquisadas;

while(i!=0){
    i = getInteiroAleatorioEntre(0,10);
    console.log(`Número sorteado: ${i}.`);
    let quantidadeDeVezesPesquisadas;
}

console.log('Fim.');