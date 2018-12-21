const alunos = []; // Lista de alunos

function getAlunos(){
    if(alunos.length!=0){
        return alunos
    }else{
        return "Nenhum aluno cadastrado."
    }
}

function getAlunoPelaMatricula(matricula){
    const aluno  = alunos.filter(el=>{
        return el.matricula == matricula;
    });
    if(aluno.length!=0){
        return aluno;
    }else{
        return "Nenhum aluno encontrado.";
    }
}

function cadastrarAluno(aluno){
    const verificacaoMatricula = alunos.filter(el=>{
        return el.matricula == aluno.matricula;
    });
    if(verificacaoMatricula.length==0){
        alunos.push(aluno);
    }else{
        console.log('Essa matrícula já existe, insira outra.');
    }
}

function removerAluno(matricula){
    for(let i in alunos){
        if(alunos[i].matricula == matricula){
            alunos.splice(i,1);
        }
    }
}

module.exports = {
    getAlunos,
    cadastrarAluno,
    removerAluno,
    getAlunoPelaMatricula
}