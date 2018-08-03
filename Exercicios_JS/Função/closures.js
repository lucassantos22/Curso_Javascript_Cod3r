// Closures é o escopo criado quando a função é declarada.
// Esse escopo permite acessar e manipular variáveis externas à função.

// Contexto léxico em ação

const x = "Global";

function fora(){
    const x="local";
    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());