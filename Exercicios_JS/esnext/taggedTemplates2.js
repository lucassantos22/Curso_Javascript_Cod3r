function real(parte, ...valores){
    let resultados = [];
    console.log(parte);
    console.log(valores);
    resultados = valores.map((el, i)=>{
        return `${parte[i]}R$${el.toFixed(2)}`;
    });
    // valores.forEach(el=>{
    //     resultados.push(`R$${el},00`);
    // });
    return resultados.join('');
}

const carro = 2;
const moto = 1;
console.log(real`Meu carro custa ${carro} e minha moto custa ${moto}`);