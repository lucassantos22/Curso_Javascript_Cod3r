const axios = require('axios');
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const mulherChinesa = (pessoa)=>pessoa.pais=='China' && pessoa.genero=='F';
const menorSalario  = (pessoa,pessoaAtual)=>pessoa.salario<pessoaAtual.salario ? pessoa : pessoaAtual;

axios.get(url).then(response=>{
    const pessoas = response.data;
    const mulherChinesaMenorSalario = pessoas
        .filter(mulherChinesa)
        .reduce(menorSalario);
        
        console.log(mulherChinesaMenorSalario);
});