const pessoa = {
    nome: "Lucas",
    endereco:{
        logradouro:"Rua desembargador",
        rua:123
    },
    fala:()=>{
        console.log( `Bom dia, meu nome é ${pessoa.nome}`);
    }   
}

console.log(pessoa.fala);