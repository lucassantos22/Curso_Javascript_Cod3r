function Filter(arrayInicial){
    let array = [];
    array.push(arrayInicial);
    console.log(array);
    const arrayFinal = array.filter((el)=>{
        return el> 30;
    });
    return arrayFinal;
}

console.log(Filter([10,20,30,50,60,70,80]));


