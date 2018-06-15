function test({idade1=1,idade2=2,idade3=3,idade4=4}){
    let arrayInicial = [];
    arrayInicial.push(idade1,idade2,idade3,idade4);
    const arrayFinal = arrayInicial.filter((element)=>{
        return element>2;
    })
    const response = {response:arrayFinal};
    return response;

}

const object = {
    idade1:1,
    idade2:2,
    idade3:3,
    idade4:4   
}

const {idade1:um, idade2:dois, idade3:tres, idade4:quatro} = object
console.log(`Os elementos do array principal são: ${um}, ${dois}, `);

console.log(test({object}));