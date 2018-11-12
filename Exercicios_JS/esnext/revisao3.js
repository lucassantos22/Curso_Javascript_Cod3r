// ES8: Object.values/Object.entries

const obj = {
    nome:"Ana",
    idade:15
}

console.log(Object.entries(obj));
console.log(Object.values(obj));

// Melhorias na notação literal
const nome = "Carla";
const pessoa = {
    nome,
    ola(){
        return 'Oi gente!';
    }
}

console.log(pessoa.ola());

class Animal{
    
}

class Cachorro extends Animal{
    falar(){
        return "Au au!"
    }
}

console.log(new Cachorro().falar());