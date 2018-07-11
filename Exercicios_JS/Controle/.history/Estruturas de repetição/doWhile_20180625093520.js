let i = valor(0,10);
const valor = function (min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
do{
    console.log(valor(0,10));
    

}while(i!=0);

