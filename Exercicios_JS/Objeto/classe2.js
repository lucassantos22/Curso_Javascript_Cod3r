class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo{
    constructor(sobrenome,profissao="Engenheiro"){
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai{
    constructor(){
        super('Santos');
    }
}

const filhoA = new Filho();
console.log(filhoA);

const paiA = new Pai();
console.log(paiA);

const avoA = new Avo();
console.log(avoA);