//nesse caso o map pode alterar o array

const palavras = ["js", "html"];
const PalavrasMaiusculas = palavras.map(palavra => palavra.toUpperCase());
console.log(PalavrasMaiusculas);