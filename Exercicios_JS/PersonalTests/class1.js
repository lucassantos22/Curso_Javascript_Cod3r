class createPayments{

    constructor(nome = 'Pagamento', preco){
        this.nome = nome;
        this.preco = preco;
    }
}

class finalPayment{

    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.saldo = 0;
        this.arr = [];
    }

    addPayment(...payments){
        payments.forEach(el=>{
            this.arr.push(el);
        })
    }

    getSaldo(){
        let totalMoney = 0;
        this.arr.forEach(el=>{
            totalMoney+=el.preco;
        });
        return totalMoney;
    }

}

const salario = new createPayments('Salario',120000);
const contaLuz = new createPayments('Conta de Luz',-180);

const contas = new finalPayment(12,2012);
contas.addPayment(salario, contaLuz);
console.log(contas.getSaldo());