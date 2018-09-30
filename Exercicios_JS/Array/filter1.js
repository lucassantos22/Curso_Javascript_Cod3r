const array = [1,2,3];

const newArray = array.filter(el=>{
    return el>=2;
});

console.log(newArray);

const produtos = [
    {nome:"TV", fragil:true},
    {nome:"Celular", fragil:true},
    {nome:"Camiseta", fragil:false},
    {nome:"Meias", fragil:false},    
]

const produtosFrageis = produtos.filter(el=>{
    return el.fragil == true;
});

console.log(produtosFrageis);

const celular = el=> el.nome=="Celular";

const apenasCelular = produtos.filter(celular);
console.log(apenasCelular);