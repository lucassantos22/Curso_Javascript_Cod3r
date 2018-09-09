// Cadeia de prototipos (Prototype chain)

Object.prototype.attr0 = "Aê" // Não recomendado.

const avô = {
    attr1:'a'
}

const pai = {
    __proto__:avô,
    attr2:'b'
}

const filho = {
    __proto__:pai,
}

console.log(filho.attr1);
console.log(filho.attr0);
console.log(filho.__proto__);

const carro = {
    velAtual:0,
    velMax:200,
    acelerar(delta){
        if(this.velAtual + delta<=this.velMax){
            this.velAtual = this.velAtual + delta;
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return this.velAtual;
    }
}

const ferrari= {
    modelo: 'F40', // Shadowing
    velMax:340,
}

Object.setPrototypeOf(ferrari, carro);
console.log(ferrari.velMax);
console.log(ferrari.status());
ferrari.acelerar(390);
console.log(ferrari.status());
//console.log(ferrari.__proto__);