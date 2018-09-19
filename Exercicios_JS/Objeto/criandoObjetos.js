// Usando notação literal
const obj1 = {}
console.log(obj1);

// Objeto em JS
const obj2 = new Object;
console.log(obj2);

// Funções construtoras
function Produto(nome, precoInicial, desconto){
    this.nome=nome;
    this.desconto = desconto;
    this.precoFinal = precoInicial - desconto;
    this.print = function(){
        console.log(`Produto ${this.nome}, com preço final de R$${this.precoFinal},00 reais.`);
    }
}

const p1 = new Produto('TV',2000,100);
p1.print();
p1.precoFinal = 99
p1.print();

// Função factory
function criarFunctionario(nome, salarioBase, faltas){
    return funcionario = {
        "Nome":nome,
        "Salario Base":salarioBase,
        "Faltas": faltas,
        getSalario(){
            let salarioFinal = (salarioBase - 100*faltas);
            return salarioFinal;
        }
    }
}

const f1 = criarFunctionario("Taylor",8000,2);
console.log(f1.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome=('Ana');
console.log(filha);

//JSON
const a =1;
const infoJSON = JSON.parse(`{"info":${a}}`);
console.log(infoJSON.info);

const infoJSON2 = JSON.parse(`{"info":"Exemplo"}`);
console.log(infoJSON2.info);
