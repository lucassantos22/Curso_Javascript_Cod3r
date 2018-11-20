function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(_=>{
            resolve(frase)
        }, segundos*1000);
    });
}

falarDepoisDe(5, 'Hello World')
    .then(value=>value.concat('!'))
    .then(finalValue=>console.log(finalValue))
    .catch(err=>console.log(err));