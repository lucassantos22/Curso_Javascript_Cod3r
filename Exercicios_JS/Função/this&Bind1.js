const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); // Conflito entre paradigmas: Functional e OO.

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

const pessoa2 = {
    nome:"José",
    endereço:{
        rua:123,
        logradouro:"Rua desembargador"
    },
    idade:23,
    fome:true,
    comer(){
        if(this.fome==false){
            console.log(`${this.nome} está sem fome, não vou comer agora...`);
        }else{
            console.log(`${this.nome } vai pra hora do rango!`);
        }
    }
}

pessoa2.comer();
const funcaoComer = pessoa2.comer.bind(pessoa2);
funcaoComer();

const obj3 = {
    nome:"Luciana",
    idade: 21,
    falar(){
        console.log(`Olá ${this.nome}`);
    },
}

obj3.falar();
const obj3Falando = obj3.falar.bind(obj3);
obj3Falando();