const array = [1,2,3,4,5];

// For com propósito

const arrayResultante = array.map(el=>{
    return el*2
});

console.log(arrayResultante);

const el = el=>(el+10);
const arrayResultante2 = arrayResultante.map(el);

console.log(arrayResultante2);

const arrayReais = arrayResultante2.map(el=>{
    return `R$ ${(el.toFixed(2)).replace('.',',')}`
});

console.log(arrayReais);