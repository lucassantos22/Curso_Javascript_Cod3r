console.log(Math.ceil(6.1));
console.log(Math.floor(6.8));

const obj = {};

obj.nome = "Lucas"; // Ou também poderia ser escrito dessa forma: obj["nome"] = "Lucas";
obj.endereço = {};
obj.endereço.numeroRua = 1952;
obj.endereço.nomeRua = "Rua Desembargador";

console.log(obj);

function Obj(nome){
    this.nome = nome;
}

const obj2 = new Obj()