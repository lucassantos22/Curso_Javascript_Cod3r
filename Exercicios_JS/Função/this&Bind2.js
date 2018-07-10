function Pessoa(idade,nome){
    this.idade = idade;
    this.nome = nome;

    setInterval(function(){
        console.log("Um ano se passa...");
        this.idade++;
        console.log(`E agora ${this.nome} tem ${this.idade} anos.`);
    }.bind(this),1000);
}

// new Pessoa(19,"Andreia");

function construtora(nome,idade){
    this.nome = nome;
    this.idade = idade;
    function soma(){
        console.log(`${this.nome} tem agora ${this.idade} anos.`);
        this.idade++;
    }
    setInterval(soma.bind(this),1000);
}

new construtora("Lucas",18);