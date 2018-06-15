function setPessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const pessoa_1 = new setPessoa("Lucas", 18);
console.log(`${pessoa_1.nome} tem ${pessoa_1.idade} anos.`)