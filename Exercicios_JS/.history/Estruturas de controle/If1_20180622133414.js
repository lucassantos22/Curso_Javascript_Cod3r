function sóBoaNoticia(nota){
    if(nota>=7 && nota<10.1){
        return `Aprovado com ${nota}`;
    }else if(nota<7){
        return "Putzzz... má notícia...";
    }else{
        return "Insira uma nota válida";
    }
}

console.log(sóBoaNoticia(7.5));

function seForVerdade(valor){
    if(valor==true){
        console.log(`É verdade... ${valor}`)
    }
}

seForVerdade(null);
seForVerdade(0);
seForVerdade("");
seForVerdade("String");