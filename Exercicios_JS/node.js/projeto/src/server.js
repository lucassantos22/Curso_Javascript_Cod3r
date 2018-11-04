const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

app.use(bodyParser.urlencoded( {extend:true}));

app.get("/",(req, res, next)=>{
    res.send('Welcome!'); // Converter para JSON
});

// app.use((req, res, next)=>{
//     res.send('Welcome!'); // Converter para JSON
// }); Funcionaria para qualquer url

app.get("/produtos",(req, res, next)=>{
    res.send(bancoDeDados.getProdutos()); // Converte automaticamente para JSON
});

app.get("/produtos/:id",(req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.params.id)); // Converte automaticamente para JSON
});

app.post("/produtos",(req, res, next)=>{
    res.send(bancoDeDados.salvarProduto({
        nome:req.body.nome, // Necessário dependência "body.parser"
        preco:req.body.preco // Necessário dependência "body.parser"
    })); 
});

app.put("/produtos/:id",(req, res, next)=>{
    res.send(bancoDeDados.salvarProduto({
        nome:req.body.nome, // Necessário dependência "body.parser"
        preco:req.body.preco, // Necessário dependência "body.parser"
        id:req.params.id
    })); 
});

app.delete("/produtos/:id",(req, res, next)=>{
    res.send(bancoDeDados.excluirProduto(req.params.id));
});

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})