const obj = {
    nome:"Lucas",
    idade:18,
    falar(){
        console.log(`Eu sou o ${this.nome}`);
    }
}

const funcao = obj.falar.bind(obg)
funcao();