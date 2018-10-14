const moduloA = require('../../moduloA'); // Se eu botasse 'moduloa' funcionaria no MAC, Windows e não no Linux.
const ola = require('saudacao').ola;

console.log(moduloA.ateLogo)
console.log(ola);

const http = require('http');
http.createServer((req,res)=>{
    res.write("Bom dia!");
    res.end()
}).listen(3000);