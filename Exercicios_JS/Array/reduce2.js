const alunos = [
    {nome:"João",nota:7.3,bolsista:false},
    {nome:"Maria",nota:9.2,bolsista:true},  
    {nome:"Pedro",nota:9.3,bolsista:false},  
    {nome:"Ana",nota:8.7,bolsista:true}      
];

const bolsistasArr = alunos.map(el=>{
    return el.bolsista;
});

const bolsistas = bolsistasArr.reduce((anterior, atual)=>{
    return anterior + atual;
});

if(bolsistas==bolsistasArr.length){
    console.log("Todos são bolsistas");
}else if(bolsistas==0){
    console.log("Nenhum é bolsista.")
}else{
    console.log(`${bolsistas} de ${bolsistasArr.length} são bolsistas.`);
}
