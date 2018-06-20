const pessoa = {
    nome: "Lucas",
    endereco:{
        logradouro:"Rua desembargador",
        rua:123
    },
    fala:(function (){
        return `Bom dia, meu nome é ${this.nome}`;
    }   
}

const fala = pessoa.fala();
console.log(fala);