function test({idade1=1,idade2=2,idade3=3,idade4=4}){
    let arrayInicial = [];
    arrayInicial.push(idade1,idade2,idade3,idade4);
    console.log(arrayInicial);

}

console.log(test({idade1:1,idade2:2,idade3:3,idade4:4}));