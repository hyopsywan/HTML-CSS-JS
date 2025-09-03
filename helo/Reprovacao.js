const nota = Number(prompt("Digite uma nota para validação:"))

if (Number.isNaN(nota) || nota > 0 && (nota <= 100)) { 
    console.log("Nota Inválida...");
}else if (nota < 60) {
    console.log("Aluno Reprovado!");
} else if (nota >= 60) {
    console.log("Aluno de Recuperação!");
} else if (nota >= 80) {
    console.log("Aluno Aprovado!");
};