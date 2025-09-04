// Valide sua idade

const idade = Number(prompt("Digite sua idade:"));

if (Number.isNaN(idade) || idade < 0) {
    alert("Idade Inválida!")
} else {
    if (idade >= 18) {
        console.log("Você já é maior de idade!");
    }else{
        console.log("Você ainda é menor de idade")
    }
};