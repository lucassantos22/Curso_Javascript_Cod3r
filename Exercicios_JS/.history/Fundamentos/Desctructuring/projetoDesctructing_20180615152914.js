function test({pessoa1,pessoa2,pessoa3,pessoa4}){
    console.log(pessoa1);
    let arrayInicial = [];
    arrayInicial.push(pessoa1.idade,pessoa2.idade,pessoa3.idade,pessoa4.idade);
    const arrayFinal = arrayInicial.filter((element)=>{
        return element>18;
    })
    const response = {response:arrayFinal};
    return response;

}

const cadastros = {
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

const {pessoa1:{idade:um}} = cadastros;
const {pessoa2:{idade:dois}} = cadastros;
const {pessoa3:{idade:tres}} = cadastros;
const {pessoa4:{idade:quatro}} = cadastros;

console.log(`Os elementos do array principal são: ${um}, ${dois}, ${tres}, e ${quatro}.`);

console.log(test({cadastros}));