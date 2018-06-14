const funcs = [];

for(let i = 0; i<10; i++){
    funcs.push(function(){
        return i;
    });
}

console.log(funcs[10]());
console.log(funcs[8]());