function setPessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
}

const pessoa = new setPessoa("Lucas",18);
console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
console.log(pessoa);
