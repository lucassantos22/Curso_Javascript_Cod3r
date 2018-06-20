function tratarErro(e){
    throw new Date();
    //throw 10;
    //throw true;
    //throw "Atributo não informado";
}

function imprimirNome(obj){
    try{ 
        console.log(obj.name.toUpperCase() + "!!!");
    }catch(e){
        tratarErro();
    }
}

const obj = {
    nome:"Lucas"
}

imprimirNome(obj);