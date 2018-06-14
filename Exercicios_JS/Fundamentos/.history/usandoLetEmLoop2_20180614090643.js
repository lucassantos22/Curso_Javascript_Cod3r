const funcs = [];

for(let i = 0; i<10; i++){
    funcs.push(function(){
        return i;
    });
}

console.log(funcs[2]());
funcs[8]();