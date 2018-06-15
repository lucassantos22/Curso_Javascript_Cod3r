function Filter(num1=array[0],num2=array[1],num3=array[2],num4=array[3],num5=array[4],num6=array[5],num7=array[6]){
    let array = [];
    array.push(num1,num2,num3,num4,num5,num6,num7);
    console.log(array);
    const arrayFinal = array.filter((el)=>{
        return el> 30;
    });
    return arrayFinal;
}

const arrayInicial = [10,20,30,50,60,70,80];
console.log(Filter(arrayInicial));


