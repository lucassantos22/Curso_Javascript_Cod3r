function imprimirEntre(min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let i;

while(i!=0){
    i = imprimirEntre(0,9);
    console.log(imprimirEntre(0,10));
}