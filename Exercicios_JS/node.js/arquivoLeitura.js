const fs = require('fs');
const caminho = __dirname + "/arquivo.json"

const arquivo = require('./arquivo.json');
console.log(arquivo);

// Síncrono

const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

// Assíncrono

fs.readFile(caminho,"utf-8",(err, conteudo)=>{
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
});

fs.readdir(__dirname, (err, conteudo)=>{
    console.log("Conteúdos da pasta.");
    console.log(conteudo);
});