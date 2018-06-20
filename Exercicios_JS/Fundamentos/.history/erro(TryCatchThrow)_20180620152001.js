function tratarErro(e){
    throw new Date();
    //throw 10;
    //throw true;
    //throw "Atributo não informado";
    //throw new Date();
}

function imprimirNome(obj){
    try{ 
        console.log(obj.name.toUpperCase() + "!!!");
    }catch(e){
        tratarErro(e);
    }
}

const obj = {
    nome:"Lucas"
}

imprimirNome(obj);