const a =1;
const b =2;
const c =3;

const obj1 = {a:a, b:b, c:c};
const obj2 = {a, b, c}; // Nova forma, depois do Ecmascript 2015

console.log(obj1);
console.log(obj2);

const nomeAttr = 'nome';
const notaAttr = 'nota';

const obj3 = new Object;
obj3[nomeAttr] = 'Lucas';
obj3[notaAttr] = 7.89;

console.log(obj3);

const obj4 = {[nomeAttr]:'Josh'};
console.log(obj4);

const obj5 = {
    falar: function(){
        // ...
    },
    falar(){ // Nova forma
        // ...
    },
}