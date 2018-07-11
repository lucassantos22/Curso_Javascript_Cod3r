do{
    function imprimirAleatoriosEntreNumeros(min,max){
        const valor = Math.random() * (max - min) + min;
        return Math.floor(valor);
    }
}while(i!=0);
let i = imprimirAleatoriosEntreNumeros(0,10);
