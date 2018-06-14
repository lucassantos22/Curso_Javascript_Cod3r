function setPessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
}

const pessoa = new setPessoa("Lucas",18);
console.log(pessoa.nome);
