require("./global");

console.log(minhaApp.saudacao());
console.log(global.minhaApp.saudacao());

minhaApp.a = 'a';
console.log(global.minhaApp.a);
console.log(minhaApp.a);
console.log(minhaApp);