const valor = "Global";

function print(){
    console.log(valor);
}

function callPrint(){
    const valor="Chora";
    print();
    console.log("Oi");
}

callPrint();
