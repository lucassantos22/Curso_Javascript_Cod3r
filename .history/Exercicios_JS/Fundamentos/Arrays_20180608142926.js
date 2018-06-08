console.log(("Lucas, João, Jonathan").split(","));

const valores = [7.7,8.9,6.3,9.2];

console.log(valores);
console.log(valores[0]);
console.log(valores[10]);
console.log(valores.length);
valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push(9.9);
valores.shift();

console.log(valores);

valores.unshift("Início");
valores.pop();

console.log(valores);
