function Person(){
    this.idade = 18;

    setInterval(()=>{
        this.idade++;
        console.log(this.idade);
    },1000);
}

console.log(person());