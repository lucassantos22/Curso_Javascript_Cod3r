function sóBoaNoticia(nota){
    if(nota>=7 && nota<10.1){
        return nota;
    }else{
        return "Putzzz... má notícia..."
    }
}

console.log(sóBoaNoticia(10));