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

// Recurso do ES8
// Objetivo de simplificar uso das promises

let obterAlunos = async()=>{
    const turmaA = await getNome('A');
    const turmaB = await getNome('B');
    return [].concat(turmaA, turmaB);
} //Retorna um objeto AsyncFunction (Tem que usar o 'then' para ser resolvida)

obterAlunos()
    .then(value=>{
        return value.map(value=>value.nome)
    })
    .then(value=>{
        console.log(value)
    })