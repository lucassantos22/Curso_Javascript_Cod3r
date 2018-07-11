// Função em JS é First Class Object (Citizen)
// Higher-order Function

// Criar de forma literal

function funcao1(){

}

// Armazenar em uma variável

const funcao2 = function(){

}

// Armazenar em um array

const array = [function(a,b){
    return a + b;
}]

console.log(array[0](1,2));

// Armazenar em um objeto

const obj = {
    nome:"Lucas",
    idade:18,
    falar:
        function(){
            return "Fala tu camarada";
    }
}

console.log(obj.falar());