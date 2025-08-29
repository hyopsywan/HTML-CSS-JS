//Validação de maior ou menor idade:

const prompt = require("prompt-sync")();

console.log("Bem-Vindo!");

let nome = prompt("Digite seu nome:");
console.log(`Seu nome é: ${nome}`);

let idade = prompt("Digite sua idade:");

if(idade => 18){
   console.log("Você é maior de idade!")
}else{
  console.log(`Você é menor de idade!`)
};


ex2:
//Validação de números positivos e negativos: 

const prompt = require("prompt-sync")();

console.log("Seja Bem-Vindo!");
let numero = prompt("digite um número:");

if(numero > 0){
    console.log("Este é um número positivo!")
}else{
    console.log("Este número é negativo!")
};



ex3:

//Validação de notas, Aprovados ou Reprovados:

const prompt = require("prompt-sync")();

console.log("Seja Bem-Vindo professor!")
let nota = prompt("Digite uma nota de 0-100:");

if(nota >= 60){
    console.log("Aluno Aprovado!")
}else{
    console.log("Aluno Reprovado...")
};
