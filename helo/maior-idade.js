//Maior idade com invalidação de prompt

const idade = Number(Prompt("Digite sua idade:"))

if (Number.isNaN(idade) || idade < 0) {    
    console.log("Idade invalida...")
} else {
    if (idade >= 18) {
        console.log("Maior de idade!")
    } else {
        console.log("menor de idade!")
    }
};
