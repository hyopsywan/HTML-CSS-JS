
// While - repete até que a condição seja verdadeira

let i = 1;

while (i <= 5) {
    console.log("Número:", i);
    i ++;
}

// Do...while - repete uma vz mesmo sendo falso

let senha; 

do {
    senha = prompt("Digite a senha:");
} while (senha !== "1234");

console.log("Acesso liberado!");

//bloquando tentativas


let senha; 
let tentativa = 0;
const senhacorreta = "1234";

do {
    senha = prompt("Digite a senha:");
    tentativa++;

    if(senha === senhacorreta){
        alert("Acesso liberado!")
        break;
    }

    if(tentativa >= 3){
        alert("Número de tentativas atingido...Acesso Negado!")
        break;
    }
} while (true);