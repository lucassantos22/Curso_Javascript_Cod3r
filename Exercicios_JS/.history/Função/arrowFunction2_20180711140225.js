function Person(){
    this.idade = 18;

    setInterval(()=>{
        this.idade++;
        console.log(this.idade);
    });
}