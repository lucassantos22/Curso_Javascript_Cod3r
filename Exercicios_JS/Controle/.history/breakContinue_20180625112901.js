const nums = new Array (1,2,3,4,5,6,7,8,9,10);

for(let i in nums){
    if(i!=5){
        console.log(`Índice ${i}: ${nums[i]}`)
    }else{
        break; //Quebrou no índice 5
    }
}

for(let f in nums){
    if(f==5){
        continue;
    }else{
        console.log(`Índice ${f}: ${nums[f]}`)
    }
}

externo: for(i in nums{
    for(f in nums){
        
    }
});