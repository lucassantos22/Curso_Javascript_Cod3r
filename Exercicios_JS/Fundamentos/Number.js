const peso1 = 1.0;
const peso2 = Number('2.5');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const media = (((avaliacao1 * peso1) + (avaliacao2*peso2))/(peso1+peso2));

console.log("Média: ", media);
console.log("Média: ", media.toFixed(2));
console.log("Média em número binário: ", media.toString(2)); //Retorna o número em binário
console.log(typeof media);
console.log(typeof Number);