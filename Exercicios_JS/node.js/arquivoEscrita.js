const fs = require('fs');

const produto = {
    preco:100,
    nome:'Jogo'
}

fs.writeFile(__dirname + "/arquivoGerado.json",JSON.stringify(produto), err =>{
    console.log(err || "Arquivo salvo!");
});