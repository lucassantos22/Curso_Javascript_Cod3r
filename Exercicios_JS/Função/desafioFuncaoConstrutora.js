function construtora(nome){
    this.nome = nome;
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}.`);
    }
}
const p1 = new construtora("Lucas");
p1.falar();
