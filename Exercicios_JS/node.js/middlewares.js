// middleware pattern (chain of responsability)

function passo1(contexto, next){
    contexto.valor = "mid1";
    console.log(contexto.valor)
    next();
}

function passo2(contexto, next){
    contexto.valor = "mid2";
    console.log(contexto.valor)
    next();
}

function passo2(contexto){
    contexto.valor = "mid3";
    console.log(contexto.valor)
}

function exec(contexto, ... middlewares){
    
}