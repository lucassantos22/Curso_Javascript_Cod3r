function Aula(nome, videoID){
    this.nome = nome;
    this.videoID = videoID;

}

const aula1 = new Aula('Bem-vindo',123);
const aula2 = new Aula('Até breve',456);
console.log(aula1, aula2);

// Simular operador new

function novo(funcaoConstrutora, ...params){
    const obj = {};
    obj.__proto__ = funcaoConstrutora.prototype;
    funcaoConstrutora.apply(obj, params);
    return obj;
}

console.log(novo(Aula, 'TV',123));