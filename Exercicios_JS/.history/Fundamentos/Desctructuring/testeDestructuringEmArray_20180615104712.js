function Filter(num1=arrayInicial[0],num2=arrayInicial[1],num3=arrayInicial[2],num4=arrayInicial[3],num5=arrayInicial[4],num6=arrayInicial[5],num7=arrayInicial[6]){
    let array = [];
    array.push(num1,num2,num3,num4,num5,num6,num7);
    const arrayFinal = array.filter((el)=>{
        return el> 30;
    });
    return arrayFinal;
}

const arrayInicial = [10,20,30,50,60,70,80];
console.log(Filter(arrayInicial));


