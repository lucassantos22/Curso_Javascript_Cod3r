function imprimirNome(obj){
    try{ 
        console.log(obj.name.toUpperCase() + "!!!");
    }catch{
        
    }
}

const obj = {
    nome:"Lucas"
}

imprimirNome(obj);