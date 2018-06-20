function tratarErro(e){
    const error = {
        name:"Atributo não informado",
        date:new Date()
    }
    throw error;
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