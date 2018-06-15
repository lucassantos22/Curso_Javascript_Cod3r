function Filter(num1=10,num2=20,num3=30,num4=50,num5=60,num6=70,num7=80){
    let array = [];
    array.push(arrayInicial);
    console.log(array);
    const arrayFinal = array.filter((el)=>{
        return el> 30;
    });
    return arrayFinal;
}

console.log(Filter(10,20,30,50,60,70,80));


