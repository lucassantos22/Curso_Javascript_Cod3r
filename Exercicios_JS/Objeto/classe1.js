class Lancamento{

    constructor(nome = 'Genérico', valor= 0 ){
        this.nome = nome;
        this.valor = valor;
    }

}

class CicloFinanceiro{

    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }
    
    addLancamentos(...lancamentos){
        lancamentos.forEach(el=>{
            this.lancamentos.push(el);
        });
    }

    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(el=>{
            valorConsolidado+=el.valor;
        });
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salário', 45000);
const contaLuz = new Lancamento('Luz',-200);

const contas = new CicloFinanceiro(6,2018);
contas.addLancamentos(salario,contaLuz);
console.log(contas.sumario());