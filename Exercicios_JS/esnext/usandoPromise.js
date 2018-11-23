//Com promise

const http = require('http');

getNome = letra=>{
    return new Promise((resolve, reject)=>{
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
        http.get(url, res=>{
            let resultado = '';
    
            res.on('data', dados=>{
                resultado += dados;
            });
    
            res.on('end', ()=>{
                try{
                    resolve(JSON.parse(resultado));
                }catch(err){
                    reject('Não foi possível fazer a conversão do JSON', err);
                }
            })
        });
    });
}

// let listaNomes = [];
// getNome('A').then(value=>{
//     const nomes = value.map(el=>{
//         return 'A: '.concat(el.nome);
//     });
//     listaNomes.push(nomes);
//     getNome('B').then(value=>{
//         const nomes = value.map(el=>{
//             return 'B: '.concat(el.nome);
//         });
//         listaNomes.push(nomes);
//     });
// });

Promise.all([getNome('A'), getNome('B')])
    .then(turmas=>{
        return [].concat(...turmas);
    })
    .then(nomeAlunos=>{
        return nomeAlunos.map(nomeAlunos => nomeAlunos.nome);
    })
    .then(resultado=>console.log(resultado));