const resultado = (nota)=> nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(8.5));
console.log(resultado(6));

const resultado2 = (media)=>{
    if(media>=7){
        return "Aluno aprovado na matéria.";
    }else{
        return "Aluno reprovado na matéria.";
    }
}