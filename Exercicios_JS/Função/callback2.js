const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0];

// Sem callbak

const notasBaixas = [];

for(const i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

// Com callback

const notasBaixas2 = notas.filter(el=>{
    return el<7;
})

console.log(notasBaixas2);

const notasBaixas3 = notas.filter(el=>el<7);

console.log(notasBaixas3);

const notasAbaixoDe7 = el=>el<7;

const notasBaixas4 = notas.filter(notasAbaixoDe7);

console.log(notasBaixas4);