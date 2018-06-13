const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charCodeAt(4));
console.log(escola.charAt(10));
console.log(escola.indexOf("o"));
console.log(escola.substring(1));
console.log(escola.substring(1,3));

console.log("Escola: ".concat(escola).concat("."));
console.log(escola.replace("3","e")); //Pode manuzear melhor com Rejex

const pessoas = "Ana, Maria, Pedro";
console.log(pessoas.split(","));