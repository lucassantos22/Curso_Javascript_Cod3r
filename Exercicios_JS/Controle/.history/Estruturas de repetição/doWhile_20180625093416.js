let i = valor(0,10);
const valor = function (min,max){
do{
        const valor = Math.random() * (max - min) + min;
        return Math.floor(valor);
    }
}while(i!=0);

