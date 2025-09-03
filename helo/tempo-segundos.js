//Tempo total em segundos

const tempo = prompt("Digite o tempo(ex: hh:mm:ss):")

const [hh, mm, ss] = tempo.split(":").map(Number) 

const total = hh * 3.600 + mm * 60 + ss

console.log(`${tempo} = ${total} Segundos!`);