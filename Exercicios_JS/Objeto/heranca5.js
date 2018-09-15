console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}

function reverseAll(toBeReversed){
    return toBeReversed.split('').reverse().join('');
}

console.log(reverseAll('Ternuber'));

console.log('Lucas Santos'.reverse());

Array.prototype.first = function(){
    return this[0];
}

const array = [1,2,3,4,5];
console.log(array.first());

String.prototype.toString = function(){ // Tomar cuidado com isso (toString já existe).
    return this.toString();
}

const number = 10;

console.log(number.toString());