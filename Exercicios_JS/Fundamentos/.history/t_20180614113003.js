function setPessoa(nome){
    this.nome = nome;
}

const pessoa = new setPessoa("Lucas");
console.log(pessoa.nome);

console.log(typeof new setPessoa);