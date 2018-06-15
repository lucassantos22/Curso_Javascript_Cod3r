function Filter(arrayInicial){
    let array = [];
    array.push(arrayInicial);
    const arrayFinal = array.filter((el)=>{
        return el> 30;
        console.log(arrayFinal);
    });
    return arrayFinal;
}

console.log(Filter([10,20,30,50,60,70,80]));


