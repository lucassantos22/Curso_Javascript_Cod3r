var numero = 1;
{
    var numero = 2;
    console.log(`Dentro: ${numero}`)
}
console.log(`Fora: ${numero}`)

/*
=============================================================

"var" tem apenas 2 escopos: global e o de dentro da function.

=============================================================
*/