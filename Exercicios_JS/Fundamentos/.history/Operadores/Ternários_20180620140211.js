const resultado = (nota)=> nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(8.5));
console.log(resultado(6));


const resultado2 = (nota1, nota2)=>{
    const media = (nota1+nota2)/2;
    if(media>=7){
        return "Aluno aprovado na matéria.";
    }else{
        return "Aluno reprovado na matéria.";
    }
}

console.log(resultado2(7,6));