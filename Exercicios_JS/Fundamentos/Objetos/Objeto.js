const prod1 = {};
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.90;
prod1["Desconto Legal"] = 0.40; // Evitar atributos com espaços.

console.log(prod1);

const prod2 = {
    nome:"Camisa polo",
    preco: 79.90,
    tamanhosDisponiveis:["P","M","G"],
    obj:{
        propriedade:"x",
        medidas:{
            largura:"z",
            comprimento:"y"
        }
    }
}

console.log(prod2);

'{"nome":"Lucas","idade":18} -> Exemplo de JSON' 