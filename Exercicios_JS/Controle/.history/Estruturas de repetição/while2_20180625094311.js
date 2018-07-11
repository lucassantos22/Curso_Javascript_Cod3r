function imprimirEntre(min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let i;
i = imprimirEntre(0,9);
while(i!=0){
    console.log(imprimirEntre(0,10));
}