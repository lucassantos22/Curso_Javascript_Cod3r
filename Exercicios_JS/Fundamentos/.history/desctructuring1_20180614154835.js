// Novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        Rua: 1000
    }
}

const { nome, idade } = pessoa;
console.log(`${nome} tem ${idade} anos.`);

const { nome:n, idade:i } = pessoa;
console.log(`${n} tem ${i} anos.`);

const {endereco:{logradouro:l, rua}} = pessoa;
console.log(logradouro);