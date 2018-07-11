do{
    const valor = function (min,max){
        const valor = Math.random() * (max - min) + min;
        return Math.floor(valor);
        console.log(valor);
    }
}while(valor(0,10)!=0);
