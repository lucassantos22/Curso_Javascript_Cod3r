let i = valor(0,10);
const valor = function (min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
do{
    console.log(valor)
    

}while(i!=0);

