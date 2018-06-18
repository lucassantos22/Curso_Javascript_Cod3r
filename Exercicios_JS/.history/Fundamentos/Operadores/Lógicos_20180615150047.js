function compras(trabalho1=1, trabalho2=1){
    const comprarSorvete = trabalho1==true || trabalho2==true;
    const tv50$Sorvete = trabalho1==true && trabalho2==true;
    if(trabalhos.trabalho1 && trabalhos.trabalho2){
        return "Será possível comprar a TV de 50 polegadas e tomar sorvete no domingo";
    }
}

trabalhos = {
    trabalho1:true,
    trabalho2:true
}

compras(trabalhos);