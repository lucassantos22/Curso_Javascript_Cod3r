function imprimirNome(obj){
    try{ 
        console.log(obj.name.toUpperCase() + "!!!");
    }catch(){
        throw new Error('Atributo não encontrado.');
    }
}

const obj = {
    nome:"Lucas"
}

imprimirNome(obj);