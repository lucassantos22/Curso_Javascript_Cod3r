const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice=0){
    console.log(`${indice+1}.${nome}`)
}

fabricantes.forEach(imprimir); // Primeiro param do foreach de um array são os elementos dentro e o segundo são os índices.
fabricantes.forEach(function(a){
    console.log(`Carro da ${a}`);
});

fabricantes.forEach(a=>console.log(`Carro da ${a}`));

const numeros = [1,2,3,4,5,6,7];

numeros.forEach(function(num,indice){
    num = num + 10;
    console.log(`${indice + 1}.${num}`);
})