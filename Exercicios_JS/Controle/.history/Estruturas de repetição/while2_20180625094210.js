function imprimirEntre(min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let i;

while(i=imprimirEntre(0,10)!=0){
    console.log(imprimirEntre(0,10));
}