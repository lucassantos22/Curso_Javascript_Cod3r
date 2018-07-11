function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min;
    return valor;
}

let i = 0;

while(i<10){
    console.log(getInteiroAleatorioEntre(0,10));
}