const soma = (a, b) => a + b;
console.log(soma(1,3));

// Arrow function (this)

const lexico1 = () => this===exports;
console.log(lexico1());

// Parametro default

function log(texto="Node"){
    console.log(texto);
}

log();
log("Sou mais forte");

// Operador rest

function total(...numeros){
    let soma = 0;
    numeros.forEach(el=>{
        soma += el;
    });
    return soma;
}

console.log(total(1,2,3,4));