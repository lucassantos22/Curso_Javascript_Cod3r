function area(largura, altura=1){
    const area = largura * altura;
    if(area>20){
        console.log(`Valor acima do permitido: ${area}m2.`);
    }else{
        return area; // Você pode dar console.log em um e dar return em outro. (Sem sentido mas pode).
    }
}

area(10,1);