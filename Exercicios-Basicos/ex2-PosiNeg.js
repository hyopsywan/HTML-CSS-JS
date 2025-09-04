//Validação de números positivos e negativos: 

console.log("Seja Bem-Vindo!");

const numero = Number(prompt("digite um número:"));

if (Number.isNaN(numero)){
 alert("Numero Inválido!")
} else {
    if(numero > 0){
     console.log("Este é um número positivo!") 
     } else {
    console.log("Este número é negativo!")
     }
};