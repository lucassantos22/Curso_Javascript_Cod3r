const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai);
filha1.nome = 'Ana';
filha1.corCabelo;

console.log(filha1.corCabelo);

const filha2 = Object.create(pai,{
    nome: {value:'Isabella', writable:false, enumerable:true},
    idade: {value:18, writable:false, enumerable:true},
});

console.log(filha2);

for(let key in filha2){
    console.log(key);
}