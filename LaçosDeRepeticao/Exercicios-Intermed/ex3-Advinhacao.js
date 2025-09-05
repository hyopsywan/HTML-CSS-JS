let secreto = Math.floor(Math.random() * 100) +1;

let tentativas;

while(tentativas !== secreto) {
    tentativas = Number(prompt("Adibinhe um número de 1 e 100:"))

    if(tentativa > secreto){
        alert("Tente um numero menor...")
    } else if (tentativa < secreto) {
        alert("Tente um numero maior...")
    } else {
        alert("Prabéns,  você acertou!!!")
    }
}