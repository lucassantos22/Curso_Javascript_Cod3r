const carrinho = [
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Caderno","preco":33.90}',
    '{"nome":"Kit de lapis","preco":41.22}',
    '{"nome":"Caneta","preco":7.50}' 
]

// Retornar um array apenas com os preços

const JSONParser = carrinho.map((el)=>{
    return JSON.parse(el);
});

const apenasPreco = JSONParser.map(el=>{
    return el.preco;
});

console.log(apenasPreco);