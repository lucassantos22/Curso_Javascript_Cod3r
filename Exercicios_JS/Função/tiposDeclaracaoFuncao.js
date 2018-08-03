// Function Declaration

console.log(soma(3,1)); // Posso chamar antes pois o interpretador lê as funções dessa forma antes.

function soma(x,y){
    return x + y;
}

// Function Expression

const sub = function(x,y){
    return x - y;
} 

console.log(sub(3,1)); // Tenho que chamar a função depois de declarada quando é function expression.

// Named Function Expression
const mult = function mult(x,y){
    return x * y;
}

console.log(sub(3,1)); // Tenho que chamar a função depois de declarada quando é function named expression.