function getPreco(imposto=0, moeda = "R$"){
    return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}

const produto = {
    nome:"Notebook",
    preco: 4599,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const produto2 = {
    nome:"Carro",
    preco: 45990,
    desc: 0.15,
    getPreco
}

console.log(getPreco.call(produto2,0,17,"$"))
console.log(getPreco.apply(produto2,[0,17,"$"]))