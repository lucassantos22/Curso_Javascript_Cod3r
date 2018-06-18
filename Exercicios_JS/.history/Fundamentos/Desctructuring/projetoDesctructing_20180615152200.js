function test({idade1=1,idade2=2,idade3=3,idade4=4}){
    let arrayInicial = [];
    arrayInicial.push(idade1,idade2,idade3,idade4);
    const arrayFinal = arrayInicial.filter((element)=>{
        return element>18;
    })
    const response = {response:arrayFinal};
    return response;

}

const cadastros = {
    pessoa1:1,
    idade2:2,
    idade3:3,
    idade4:4   
}

const {idade1:um, idade2:dois, idade3:tres, idade4:quatro} = object
console.log(`Os elementos do array principal são: ${um}, ${dois}, ${tres}, e ${quatro}.`);

console.log(test({object}));