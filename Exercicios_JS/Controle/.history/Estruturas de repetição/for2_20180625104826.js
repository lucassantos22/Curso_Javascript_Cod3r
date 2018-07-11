const notas = new Array(6.7,7.4,10,8.1,7.7);

for(let i in notas){
    console.log(`Nota ${Number(i) + 1}: ${notas[i]}`);
}

const objeto = {
    nome: "Ana",
    idade:37,
    endereço:{
        logradouro:"Rua ABC",
        rua:123
    }
}