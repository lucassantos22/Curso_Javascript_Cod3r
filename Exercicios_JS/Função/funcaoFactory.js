// Factory simples

function factorySimples(nome,preco){
    return {
        nome,
        preco: preco - (preco*10/100),
        desconto: "10%"
    }
}

console.log(factorySimples("p1",25));
const {nome:tlg} = factorySimples("p2",19);
console.log(tlg);