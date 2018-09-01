const obj = {};

const a = "nome";
const b = 'idade'; 

obj[a] = 'Lucas';
console.log(obj);

const obj2 = {
    [a]:'Lucas',
    [b]:18
}
console.log(obj2);