function test({um,dois,tres,quatro}){
    let arrayInicial = [];
    arrayInicial.push(um, dois, tres, quatro);
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

console.log(test({um,dois,tres,quatro}));