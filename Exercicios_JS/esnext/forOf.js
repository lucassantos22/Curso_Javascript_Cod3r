for (let letra of 'Cod3r') {
    console.log(letra);
}

const bebidas = ['Cerveja', 'Vinho', 'Vodka', 'Champagne', 'Corote'];
for (let bebida of bebidas) {
    console.log(bebida);
}

// for(let i in bebidas){
//     console.log(bebidas[i]);
// } Mesmo resultado que esse

const youtubers = new Map([
    ['mamaefalei', true],
    ['pcSiqueira', false]
]);

for (let youtuber of youtubers) {
    console.log(youtuber);
}

for (let chave of youtubers.keys()) {
    console.log(chave);
}

for (let valor of youtubers.values()) {
    console.log('Valor:', valor);
}

for (let [chave, valor] of youtubers.entries()) {
    console.log(`${chave}: ${valor}`);
}

const set = new Set([
    'Banana', 'Açaí', 'Abacaxi'
]);

for (let i of set) {
    console.log(i)
}

for (let i of set.entries()) {
    console.log(i)
}