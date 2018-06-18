function compras(trabalho1=1, trabalho2=1){
    const comprarSorvete = trabalho1==true || trabalho2==true;
    const tv50$Sorvete = trabalho1==true && trabalho2==true;
    if(trabalhos.trabalho1==true && trabalhos.trabalho2==true){
        return "Será possível comprar a TV de 50 polegadas e tomar sorvete no domingo.";
    }else if(trabalhos.trabalho1==true || trabalhos.trabalho2==true){
        return "Será possível comprar a TV de 32 polegadas e tomar sorvete no domingo.";
    }else{
        return "Não será possível fazer nada no final de semana.";
    }
}

trabalhos = {
    trabalho1:true,
    trabalho2:false
}

console.log(compras(trabalhos));