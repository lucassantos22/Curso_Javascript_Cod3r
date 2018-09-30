Array.prototype.filter2 = function(valor){
    const arrayFinal = [];
    for(let i=0; i<this.length;i++){
        if(valor(this[i],i,this)){
            arrayFinal.push(this[i]);
        }
    }
    return arrayFinal;
}

const arr = [1,2,3];
arr2 = arr.filter2(el=>{
    return el>2;
});

console.log(arr2);