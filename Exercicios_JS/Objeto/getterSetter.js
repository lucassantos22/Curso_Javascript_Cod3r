const sequencia = {
    _valor:1, // Convenção, variável ser acessada apenas internamente (privada).
    setValor: function(valor){
        this._valor = valor
    },
    getValor: function(){
        return this._valor;
    }
}

sequencia.setValor(10);
console.log(sequencia.getValor())

// =========================================================================== // Maneira "certa"

const Sequencia = {
    _valor:1,
    get valor(){
        return this._valor;
    },
    set valor(valor){
        if(valor>this._valor){
            this._valor = valor;
        }else{
            console.log("O valor é menor que o original.");
        }
    }
}

console.log(Sequencia.valor);
Sequencia.valor = 110;
console.log(Sequencia.valor);
Sequencia.valor= 10;

const pessoa = {
    _nome:"",
    _idade:"",
    _profissao:"",
    get nome(){
        return this._nome;
    },
    get idade(){
        return this._idade;
    },
    get profissao(){
        return this._profissao
    },
    set nome(nome){
        this._nome = nome;
    },
    set idade(idade){
        this._idade = idade;
    },
    set profissao(profissao){
        this._profissao = profissao;
    },
}

pessoa.nome = "Lucas";
pessoa.idade = 18;
pessoa.profissao = "Gerente e coordenador de projetos"

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);