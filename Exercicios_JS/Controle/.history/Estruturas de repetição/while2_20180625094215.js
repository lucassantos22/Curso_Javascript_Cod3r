function imprimirEntre(min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}


while(imprimirEntre(0,10)!=0){
    console.log(imprimirEntre(0,10));
}