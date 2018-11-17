const tecnologias = new Map();

tecnologias.set('react', {framework:false});
tecnologias.set('angular', {framework:true});
tecnologias.set('number', 1);

console.log(tecnologias.get('react').framework);
console.log(tecnologias.get('number'));

const chavesVariadas = new Map([
    [123,"Olá mundo"],
    [function(){}, 'Função'],
    [{}, "Objeto"]
]);

console.log(chavesVariadas.has(123)) // Ver se elemento está dentro do map.
chavesVariadas.delete(123) // Deletando elemento com chave '123'.
console.log(chavesVariadas.has(123)) // Ver se elemento está dentro do map.
console.log(chavesVariadas.size) // Ver tamanho do meu objeto 'map'.
console.log(chavesVariadas);