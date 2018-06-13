let valor; // Undefined -> Nem foi inicializada
console.log(valor);

valor = null; // Null -> Inicializada, porém com ausência de valor, sempre usar "null" quando querer zerar o código.
console.log(valor);

// console.log(valor.toString()); -> Vai dar erro pois variável "valor" é nulo

const produto ={

}

console.log(produto.preco); 
console.log(produto);

produto.preco = (3.50).toFixed(2);
console.log(produto);

produto.preco = null;
console.log(produto)
