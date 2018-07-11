do{
    const valor = function (min,max){
        const valor = Math.random() * (max - min) + min;
        return Math.floor(valor);
    }
}while(valor(0,10)!=0);

let i = valor(0,10);
