function tratarErro(e){
    throw new error 
}


function imprimirNome(obj){
    try{ 
        console.log(obj.name.toUpperCase() + "!!!");
    }catch(e){
        tratarErro(e){

        }
    }
}

const obj = {
    nome:"Lucas"
}

imprimirNome(obj);