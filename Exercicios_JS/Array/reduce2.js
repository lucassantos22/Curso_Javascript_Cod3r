const alunos = [
    {nome:"João",nota:7.3,bolsista:false},
    {nome:"Maria",nota:9.2,bolsista:true},  
    {nome:"Pedro",nota:9.3,bolsista:false},  
    {nome:"Ana",nota:8.7,bolsista:true}      
];

const bolsistas = alunos.filter(el=>{
    return el.bolsista == true;
});

if(bolsistas.length == alunos.length){
    console.log("Todos os alunos são bolsistas.");
}else{
    console.log("Nem todos os alunos são bolsistas.");
}