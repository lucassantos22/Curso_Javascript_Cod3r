let num1 = 1;
let num2 = 2;

num1++; // Somar um número do "num1"
console.log(num1);

--num1; // Somar um número do "num2, essa forma de escrever (--antes) tem precedencia/prioridade maior que a outra forma"
console.log(num1);

console.log(++num1 === num2--);
console.log(num1 === num2);