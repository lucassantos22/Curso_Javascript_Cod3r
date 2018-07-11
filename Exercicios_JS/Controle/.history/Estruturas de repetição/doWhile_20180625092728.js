do{
    let i = imprimirAleatoriosEntreNumeros(0,10);
    function imprimirAleatoriosEntreNumeros(min,max){
        const valor = Math.random() * (max - min) + min;
        return Math.floor(valor);
    }
}while(i!=0);
