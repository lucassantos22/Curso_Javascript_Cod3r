function imprimirNome(obj){
    try{ 
        console.log(obj.name.toUpperCase() + "!!!");
    }catch(e){
        tratarErro(){
            
        }
    }
}

const obj = {
    nome:"Lucas"
}

imprimirNome(obj);