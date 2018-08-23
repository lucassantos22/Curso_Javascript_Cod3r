const produto = new Object
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);

delete produto['marca do produto']
delete produto.preco

console.log(produto)

const carro = {
    modelo:'A4',
    valor:89000,
    proprietario:{
        nome:'Raul',
        idade:23,
        endereco:{
            logradouro:'Rua ABC',
            rua:123
        }
    },
    condutores:[{
        nome:'Raul',
        idade:23
    },
    {
        nome:'Camila',
        idade:25
    }],
    calcularValorSeguro(){

    }
}

carro.proprietario.endereco.numero = 1000;
console.log(carro)

delete carro.condutores
console.log(carro);

console.log(carro.batata)