const express = require('express');
const app = express();

app.get("/",(req, res, next)=>{
    res.send('Welcome!'); // Converter para JSON
});

// app.use((req, res, next)=>{
//     res.send('Welcome!'); // Converter para JSON
// }); Funcionaria para qualquer url

app.get("/produtos",(req, res, next)=>{
    res.send({nome:"Notebook", preco:123.45}); // Converter para JSON
});

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})