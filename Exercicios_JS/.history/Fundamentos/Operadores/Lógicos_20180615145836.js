function compras(trabalho1=1, trabalho2=1){
    const comprarSorvete = trabalho1==true || trabalho2==true;
    const tv50$Sorvete = trabalho1==true && trabalho2==true;
    console.log(trabalho1);
}

trabalhos = {
    trabalho1:true,
    trabalho2:true
}

compras(trabalhos);