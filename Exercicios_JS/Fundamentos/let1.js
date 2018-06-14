let nome = "Jorge;"
{
    let nome = "Lucas";
    console.log(`Dentro: ${nome}`)
}
console.log(`Fora: ${nome}`);

/*
=====================================================================

"let" tem 3 escopos: global, das functiions e o de dentro dos blocos.

=====================================================================
*/