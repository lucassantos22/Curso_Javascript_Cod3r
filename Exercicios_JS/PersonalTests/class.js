class cadastroBalada{

    constructor(nome,idade,carteira){
        this.nome=nome;
        this.idade=idade;
        this.carteira=carteira;
        this.pulseira=false;
        this.steps();
    }

    steps(){
        this.pulseiraBebida();
        this.pedirBebida();
    }

    pulseiraBebida(){
        if(this.carteira>=30 && this.idade>=18){
            this.pulseira=true;
        }
    }

    pedirBebida(){
        if(this.pulseira==false){
            console.log("Você não tem a pulseira de bebida para consulmo.")
        }else{
            console.log("Bebida liberada.")
        }
    }

}

const p1 = new cadastroBalada("Lucas",18,30);

