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

// Passar função como parâmetro

function run(fun){
    fun();
}

run(function(){
    console.log("Teste");
});

function running(funn){
    funn();
}

running(function(){
    const result = Math.random() * (10-0) + 0;
    console.log(Math.floor(result));
})

// Uma função pode retornar/conter uma função 

function soma(a,b){
    return function(c){
        console.log(a + b + c);
    }
}

soma(1,2);