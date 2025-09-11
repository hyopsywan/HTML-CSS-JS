let secreto = Math.floor(Math.random() * 50) +1;

let tempo = 7;
let tentativas;
let desarmou = false;

alert("Uma bomba foi ativada!!!")
alert("Você precisa advinhar  o número secreto entre 1 e 50 para desarmá-la!")
alert("Você tem apenas" + tempo)

while(tempo > 0 && !desarmou) {
    tentativas = Number(prompt(`Digite sua tentativa: (restam ${tempo} tentativas)`))

    if( tentativas === secreto) {
        alert("Você acertou! A bomba foi desarmada a tempo!")
        desarmou = true;
    } else if (tentativas > secreto) {
        alert("Número errado! (dica: tente um número maior!!)")
    } else if (tentativa < secreto) {
        alert("Número errado! (dica: tente um número menor!!)")
    }

    tempo--;
    }

    if(!desarmou {
        alert("BOOOM!!! A bomba explodiu! Fim de jogo... ")
    })
}