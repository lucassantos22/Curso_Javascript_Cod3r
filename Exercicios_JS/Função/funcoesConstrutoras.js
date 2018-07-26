function Pessoa(nome, idade, peso){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
}

const p1 = new Pessoa("Lucas", 18, 72);
console.log(p1);

const {nome:n, idade:i, peso:p} = p1;

console.log(n);
console.log(p1.nome)