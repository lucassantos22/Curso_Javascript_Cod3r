function imprimirEntre(min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let i;
while(imprimirEntre(0,9)!=0){
    console.log(imprimirEntre(0,10));
}