const nums = new Array (1,2,3,4,5,6,7,8,9,10);

for(let i in nums){
    if(i!=5){

        console.log(`Números: ${nums[i]}`)
    }else{
        break;
    }
}