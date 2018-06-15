// function pow({num1=0,num2=100}){
//     const result = Math.pow(num1,num2);
//     return (Math.ceil(result))
// }

// console.log(pow({num1:2,num2:3}));


function Filter({numb1= 10, numb2= 20, numb3= 30, numb4= 40}){
    let array = [];
    array.push(numb1, numb2, numb3, numb4);
    const result = array.filter((el)=>{
        return el>10;
    });
    return result;
}

console.log(Filter({numb1: 10, numb3: 30, numb4: 40 }));

