// Como o map funciona por trás dos panos.

Array.prototype.map2 = function(callback){
    const newArray = [];
    for(let i = 0; i<this.length;i++){
        newArray.push(callback(this[i],i,this));
    }
    return newArray;
}


const arr = [1,2,3];

const arr2 = arr.map2(el=>{
    return el*2;
});
console.log(arr2);