const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extends:true}));

app.post('/usuarios', (req, res)=>{
    console.log(req.body);
    res.send('<h1>Parabéns</h1>');
});

app.listen(3003, ()=>{
    console.log('Escutando...');
})