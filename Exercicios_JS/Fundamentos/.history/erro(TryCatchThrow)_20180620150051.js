function imprimirNome(obj){
    try{ 
        console.log(obj.name.toUpperCase() + "!!!");
    }
}

const obj = {
    nome:"Lucas"
}

imprimirNome(obj);