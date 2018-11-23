// Sem promises...

const http = require('http');

const getTurma = (letra,callback)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, res=>{
        let resultado = '';

        res.on('data', dados=>{
            resultado += dados;
        });

        res.on('end', ()=>{
            callback(JSON.parse(resultado));
        });
    });
}

getTurma('A', alunos=>{
    const nomes = alunos.map(el=>{
        return 'A:'.concat(el.nome);
    });
    console.log(nomes);
});

getTurma('B', alunos=>{
    const nomes = alunos.map(el=>{
        return 'B: '.concat(el.nome);
    });
    console.log(nomes);
});