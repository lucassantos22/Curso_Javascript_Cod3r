const pessoa = {
    nome:'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));
Object.defineProperty(pessoa, 'anoNascimento',{
    enumerable: true, // Passivel a ser listada.
    writable: false, // Se pode ser sobrescrita.
    value: 2016
});

// Objcet.assign -> ECMAscript2015

const dest = {a:1};
const o1 = {b:2};
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2);
console.log(obj);
Object.freeze(obj);

const gelo = Object.freeze({
    nome:"Lucas",
});

gelo.nome = "Dash";
console.log(`Meu nome é: ${gelo.nome}`);

Object.entries(pessoa).forEach(el=>{
    console.log(el[0] + ": " + el[1]);
})

const filtro = Object.values(pessoa).filter(el=>{
    return typeof el == "string";
})

console.log(filtro);