//Valide as notas

const nota = Number(prompt("Digite sua nota:"));

if(Number.isNaN(nota) || nota >= 0 && nota <= 100){
    alert("Nota Inválida!")
}else{
    if (nota <= 60){
        console.log("Aluno Aprovado!")
    }else{
        console.log("Aluno Aprovado!")
    }
};