// Object.preventExtensions; --> O objeto não poderá ter nenhum atributo novo, mas o atributo pode ser excluído.//#endregion

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log(Object.isExtensible(produto));

const pessoa = {
    nome:'a',
    idade: 1,
    peso: 70
}

Object.preventExtensions(pessoa);

pessoa.atributo = 'uhul'; // Não funciona pois é um atributo novo.
pessoa.nome = 'b'; // Funciona porque o atributo nom já existe.
delete pessoa.idade; // Functiona porque pode excluir atributos, apenas não pode adicionar.
console.log(pessoa);

// Object.seal --> Você não pode adicionar nem excluir novos atributos, apenas modificálos.

const pessoa2 = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa2); 
delete pessoa2.idade;
pessoa2.atributo = "valor";
pessoa2.nome = 'Adriana';
console.log(pessoa2);
console.log(Object.isSealed(pessoa2));