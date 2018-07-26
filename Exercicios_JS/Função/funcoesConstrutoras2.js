function Carro(velocidadeMaxima=200, delta=5){
    // Atributo privado
    velocidadeAtual = 0;

    // Metodo público
    this.acelerar = ()=>{
        if((velocidadeAtual + delta)<=200){
            velocidadeAtual = velocidadeAtual + delta;
        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // Metodo público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }
}

const Uno = new Carro();
Uno.acelerar();
Uno.acelerar();
Uno.acelerar();
console.log(Uno.getVelocidadeAtual());

const Ferrari = new Carro(260,20);
Ferrari.acelerar();
Ferrari.acelerar();
console.log(Ferrari.getVelocidadeAtual());