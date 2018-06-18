function test({idade1=1,idade2=2,idade3=3,idade4=4}){
    let arrayInicial = [];
    arrayInicial.push(idade1,idade2,idade3,idade4);
    const arrayFinal = arrayInicial.filter((element)=>{
        return element>18;
    })
    const response = {response:arrayFinal};
    return response;

}

const pessoas = {
    pessoa1:{
        nome:"Lucas",
        idade:18
    },
    pessoa2:{
        nome:"André",
        idade:15
    },
    pessoa3:{
        nome:"Rafaela",
        idade:19
    },
    pessoa4:{
        nome:"Luciana",
        idade:21
    }, 
}

const {cadastros:{idade1:um, idade2:dois, idade3:tres, idade4:quatro}} = pessoas
console.log(`Os elementos do array principal são: ${um}, ${dois}, ${tres}, e ${quatro}.`);

console.log(test({object}));