const pessoa1 = [
    {
        nome:'Lucas',
        idade:18
    }
]


console.log(pessoa1);

const final = pessoa1.map(el=>{
    return{
        nome_pessoa:el.nome,
        idade:el.idade
    }
});

console.log(final);