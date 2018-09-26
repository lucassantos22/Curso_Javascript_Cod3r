const pilotos = ['Vettel','Alonso','Raikkonen','Massa'];
console.log(pilotos);

pilotos.pop();
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift();
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);

//Adicionar com splice

pilotos.splice(2,0,'Bottas','Massa');
console.log(pilotos);

//Remover com splice

pilotos.splice(3,1);
console.log(pilotos);

const algunsPilotos = pilotos.slice(2,4); // Novo Array da posição 2 ao 3.
console.log(algunsPilotos);