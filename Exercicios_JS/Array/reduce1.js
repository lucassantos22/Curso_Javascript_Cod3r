const alunos = [
    {nome:"João",nota:7.3,bolsista:false},
    {nome:"Maria",nota:9.2,bolsista:true},  
    {nome:"Pedro",nota:9.3,bolsista:false},  
    {nome:"Ana",nota:8.7,bolsista:true}      
];

const notas = alunos.map(el=>{
    return el.nota;
});

console.log(notas);

const newArrayReduce = notas.reduce((acumulador,atual)=>{
    console.log(acumulador,atual);
    return acumulador + atual;
},10); // Começa com 10. 

console.log(newArrayReduce);