// Pessoa aponta para um endereço de memória (Exemplo "123").
const pessoa = {nome:'Luiza'}

// Mesmo contante, eu posso mudar os atributos de dentro porque não mudo o endereço de memória apontado.
pessoa.nome = "Laura";
console.log(pessoa);

// Não vai funcionar, pois estou alterando o endereço de memória.
const pessoa = {nome:'Julia'}

// Nome vai continuar "Laura", porque objeto estava congelado.
Object.freeze(pessoa);
pessoa.nome = "Maria"
console.log(pessoa);


// Objeto constante, jamais poderá ser alterado;
const pessoaConstante = Object.freeze({nome:'Fernanda'});
pessoa.nome = 'Amanda';
console.log(pessoaConstante)
