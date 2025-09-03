// Cálculo de Média: 

const notas1 = Number(prompt("Digite sua primeira nota:"))
const notas2 = Number(prompt("Digite sua segunda nota:"))
const notas3 = Number(prompt("Digite sua terceira nota:"))

const media = (notas1 + notas2 + notas3) / 3;

console.log(`Sua média aritimetica é ${media.toFixed(3)}!`);