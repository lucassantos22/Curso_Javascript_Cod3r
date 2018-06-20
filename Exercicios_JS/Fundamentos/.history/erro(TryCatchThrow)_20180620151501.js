function tratarErro(e){
    cont obj error = {

    }
    throw new Error('Atributo não encontrado.');
    //throw 10;
    //throw true;
    //throw "Atributo não informado";
}

function imprimirNome(obj){
    try{ 
        console.log(obj.name.toUpperCase() + "!!!");
    }catch(e){
        throw new Error('Atributo não encontrado.');
    }
}

const obj = {
    nome:"Lucas"
}

imprimirNome(obj);