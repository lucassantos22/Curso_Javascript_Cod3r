const axios = require('axios');
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const pessoas = "";
axios.get(url).then(response=>{
   console.log(response.data);
});
const mulheresChinesas = pessoas.filter(el=>{
    return el.genero == 'F' && el.pais=="China"
});

console.log(mulheresChinesas);

