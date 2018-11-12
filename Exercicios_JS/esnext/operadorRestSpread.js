// Operador rest (juntar) e spread (separar)
// Usar rest com parâmetro de função

// Usar spread com objeto
const funcionario = {
    nome:"Maria",
    salario:12348.90
}

const clone = {
    ativo: true,
    ...funcionario
}

console.log(funcionario);
console.log(clone);

// Usar spread com Array
const grupoA = [1,2,3,4];
const grupoB = [0,...grupoA,5,6,7];

console.log(grupoA);
console.log(grupoB);