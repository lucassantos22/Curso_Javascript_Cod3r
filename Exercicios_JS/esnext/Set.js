// Não aceita repetição e não é indexado.

const timesNacionais = new Set();
timesNacionais.add('Vasco');
timesNacionais.add('Flamengo').add('Bota Fogo').add('Vasco');

console.log(timesNacionais); // Vasco não foi adicionado duas vezes;
console.log(timesNacionais.size); // Quantos elementos há em 'timesNacionais'
console.log(timesNacionais.has('Flamengo')); // Ver se há o 'Flamengo' dentro de 'timesNacionais'
timesNacionais.delete('Flamengo'); // Deletar 'Flamengo'
console.log(timesNacionais.has('Flamengo')); // Ver se há o 'Flamengo' dentro de 'timesNacionais'

const timesEstrangeiros = new Set([
    'Chelsea','Real Madrid','Chelsea' // Chelsea não se repetirá
]);

console.log(timesEstrangeiros);