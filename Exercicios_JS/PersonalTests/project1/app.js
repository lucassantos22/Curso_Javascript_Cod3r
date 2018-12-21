const express = require('express');
const app = express();
const bancoDeDados = require('./bd/data');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend:true}));

app.get('/',(req,res)=>{
    res.send("Project 1");
});

app.get('/alunos',(req,res)=>{
    res.send(bancoDeDados.getAlunos());
});

app.get('/alunos/:matricula',(req,res)=>{
    res.send(bancoDeDados.getAlunoPelaMatricula(req.params.matricula));
});

app.post('/alunos',(req,res)=>{
    bancoDeDados.cadastrarAluno({
        nome:req.body.nome,
        idade:req.body.idade,
        serie:req.body.serie,
        turma:req.body.turma,
        matricula:req.body.matricula
    });
    res.send("Ação executada");
    res.status(202);
});

app.delete('/alunos/:matricula',(req,res)=>{
    bancoDeDados.removerAluno(req.params.matricula);
    res.send('Aluno removido');
});

app.put('/alunos/:matricula',(req,res)=>{
    bancoDeDados.cadastrarAluno({
        nome:req.body.nome,
        idade:req.body.idade,
        serie:req.body.serie,
        turma:req.body.turma,
        matricula:req.body.matricula
    })
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});