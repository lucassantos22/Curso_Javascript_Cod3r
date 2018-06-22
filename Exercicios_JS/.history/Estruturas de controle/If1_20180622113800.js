function sóBoaNoticia(nota){
    if(nota>=7 && nota){
        return nota;
    }else{
        return "Putzzz... má notícia..."
    }
}

console.log(sóBoaNoticia(3));