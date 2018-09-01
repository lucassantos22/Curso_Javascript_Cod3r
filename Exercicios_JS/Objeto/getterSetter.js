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