function meuObjeto(){};

console.log(meuObjeto.__photo__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
console.log(meuObjeto.prototype);

const obj1 = new meuObjeto;
const obj2 = new meuObjeto;

console.log(obj1.__proto__=== obj2.__proto__);
console.log(obj1.__proto__); 
console.log(obj1.__proto__ === meuObjeto.prototype);

meuObjeto.prototype.nome = 'Claudia';
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia, meu nome é ${this.nome}.`);
} 

console.log(obj1.nome);
obj1.falar();
obj1.nome = 'Antônio';
obj1.falar();

const obj3 = {};
obj3.__proto__ = meuObjeto.prototype;
obj3.nome = 'Obj3';
obj3.falar();