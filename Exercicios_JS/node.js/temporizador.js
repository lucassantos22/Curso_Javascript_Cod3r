schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob("*/5 * 22 * * 1", ()=>{
    console.log("Exetucando tarefa1: ", new Date().getTime());
}) // A cada 5 minutos, Minutos das horas ,22 horas, Dia do mês, Mês, Dia da semana (0 - Domingo, 6 - Sabado)


// Temporizador padrão do JS
setTimeout(()=>{
    tarefa1.cancel();
    console.log("Cancelando tarefa1");
}, 20000)


const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = new schedule.Range(1,5);
regra.hour = 22;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, ()=>{
    console.log("Executando tarefa2: ", new Date().getSeconds());
})