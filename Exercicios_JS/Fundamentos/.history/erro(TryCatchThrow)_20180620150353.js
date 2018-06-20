function imprimirNome(obj){
    try{ 
        console.log(obj.name.toUpperCase() + "!!!");
    }catch(e){
        
    }
}

const obj = {
    nome:"Lucas"
}

imprimirNome(obj);