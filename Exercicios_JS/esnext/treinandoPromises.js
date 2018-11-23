const pessoa = new Object();

function giveAttributesToPerson(nome){
    return new Promise((resolve, reject)=>{
        pessoa.nome = nome;
        pessoa.idade = setIdade(18);
        pessoa.faculdade = setFaculdade('Unisul');
        resolve(pessoa);
    });
}

function setIdade(idade){
    return 18;
}

function setFaculdade(faculdade){
    return 'Unisul';
}

// giveAttributesToPerson('Lucas').then(value=>{
//     console.log(value);
// });

Promise.all([giveAttributesToPerson('Lucas')])
    .then(pessoa.trabalho="Digitro")
    .then(response=>console.log(response));