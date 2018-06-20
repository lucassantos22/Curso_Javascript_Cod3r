function tratarErro(e){
    throw new Error("Atributo não encontrado.");
    //throw 10;
    //throw true;
    //throw "Atributo não informado";
    // throw new Date();
}

function imprimirNome(obj){
    try{ 
        console.log(obj.name.toUpperCase() + "!!!");
    }catch(e){
        tratarErro(e);
    }finally{
        console.log('Toda validação executada.')
    }
}

const obj = {
    nome:"Lucas"
}

imprimirNome(obj);