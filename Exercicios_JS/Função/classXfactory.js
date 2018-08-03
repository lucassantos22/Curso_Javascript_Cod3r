class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade
    }
    
    falar(){
        console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos.`)
    }

}

const p1 = new Pessoa("Lucas",18);
p1.falar();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function factoryFunction(nome){
    return{
        falar(){
            console.log(`Eu sou o ${nome}`);
        },
    }
}
const p2 = new factoryFunction("Lucas");
p2.falar();