function sóBoaNoticia(nota){
    if(nota>=7 && nota<10.1){
        console.log (nota);
    }else if(nota<7){
        return "Putzzz... má notícia...";
    }else{
        return "Insira uma nota válida";
    }
}

sóBoaNoticia(7.5);