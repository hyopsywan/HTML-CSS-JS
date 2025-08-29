//Tipos de conversão

//Conversão Implícita (conversão de tipo)
console.log ("5" + 5);
console.log ("5" - 2);
console.log ("5" * 2);
console.log ("5" / 2);

//Conversão Explícita 

let number = 20;
let convertido = String(number);
console.log(typeof convertido);

let string = "20"; //não da pra transformar uma str em num
let convertido2 = Number(string);
console.log(typeof convertido);

let bool = true;
let conversao3 = String(bool);
console.log(typeof conversao3);
