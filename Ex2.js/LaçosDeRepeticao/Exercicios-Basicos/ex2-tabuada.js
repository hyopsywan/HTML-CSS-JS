//tabuada 

let num = Number(prompt("Digite um número para tabuada;"))

for(num++ ) {
    console.log(`---Tabuada do ${num}---`)

    for(let i = 1; i <= 10){
        console.log(`${num} x ${i} = ${num * i}`)
    }
        console.log("\n")
    }