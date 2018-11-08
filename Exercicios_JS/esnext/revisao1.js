// let e const

{
    var a = 2 // var tem escopo global e de função
    let b = 3; // let tem escopo de bloco
}

console.log(a);
// console.log(b); // Não vai funcionar pois tem escopo de bloco

// Template string

const nome = "Lucas";
console.log(`Olá, meu nome é ${nome}`);

// Destructuring

const [l, e, ...tras] = "Lucass";
console.log(l);

const [j,q] = [1, 2];
console.log(q);

const [u, , v] = [1, 2, 3];
console.log(v);

const {nome2:n, idade} = {nome2:"Luciana", idade:28};
console.log(n);