//Idade detalhada:
const ianos = Number(prompt("Digite sua idade:"))

const imeses = 360 / 12 * ianos;

const idias = ianos * 365;

const ihoras = idias * 24;

const imin = ihoras * 60;


console.log(`Anos: ${ianos} Meses: ${imeses} Dias: ${idias} Horas: ${ihoras} Minutos: ${imin}`);