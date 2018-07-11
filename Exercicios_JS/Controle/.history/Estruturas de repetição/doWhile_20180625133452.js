function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

let i;
let quantidadeDeVezesPesquisadas=0;

do{
    i = getInteiroAleatorioEntre(0,10);
    console.log(`Número sorteado: ${i}.`);
    quantidadeDeVezesPesquisadas++;
}while(i!=0);

console.log(`Houveram ${quantidadeDeVezesPesquisadas} sorteios para chegar ao número 0.`);
console.log('Fim.');