function convidadosParaFesta(nome, idade){
    this.vip = false;
    this.nome = nome;
    this.idade = idade;

    this.convidadoVip = function(){
        this.vip = (!this.vip);
    }

    this.status = function(){
        if(this.nome=="---"){
            console.log(">>> Esse convidado foi desconvidado. <<<")
        }else{
            console.log(`>>> Informações do convidado ${this.nome}. <<<`)
            console.log(`>>> Idade: ${this.idade}.`)
            console.log(`>>> Vip: ${this.vip}.`)
        }
    }

    this.desconvidar = function(){
        this.nome = "---";
    }
}

let c1 = new convidadosParaFesta("Lucas",18);
c1.convidadoVip();
c1.status();

let c2 = new convidadosParaFesta("Letícia",22);
c2.desconvidar();
c2.status();