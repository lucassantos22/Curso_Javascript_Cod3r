function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

let i;
const final = 0;
let quantidadeDeVezesPesquisadas=0;

while(i!=final){
    i = getInteiroAleatorioEntre(0,10);
    console.log(`Número sorteado: ${i}.`);
    quantidadeDeVezesPesquisadas++;
}

console.log(`Houveram ${quantidadeDeVezesPesquisadas} sorteios para chegar ao número ${final}.`);
console.log('Fim.');