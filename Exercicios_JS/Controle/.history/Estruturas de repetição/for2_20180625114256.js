const notas = new Array(6.7,7.4,10,8.1,7.7);

for(let i in notas){
    console.log(`Nota ${Number(i) + 1}: ${notas[i]}`);
}

const objeto = {
    Nome: "Ana",
    Idade:37,
    Peso: 67,
    endereço:{
        logradouro:'Rua ABC',
        rua:123
    }
}

const {Nome:n, Idade:i, Peso:p, endereço:{logradouro:l, rua:r}} = objeto;

for(let i in objeto){
    console.log(`Atributo ${i} = ${objeto[i]}`);
}