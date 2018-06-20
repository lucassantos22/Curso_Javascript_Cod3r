function tratarErro(e){
    obj error = {
        
    }
    throw new Error("Atributo não encontrado.");
    //throw 10;
    //throw true;
    //throw "Atributo não informado";
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