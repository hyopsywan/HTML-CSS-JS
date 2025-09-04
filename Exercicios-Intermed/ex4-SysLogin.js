// Sistema de login simples

const usuario = prompt("Digite seu Nome de usuário:")
const senha = prompt("Insira sua senha:")

const acesso = usuario === "admin" && senha === "1234" ? "Acesso Permitido" : "Acesso Negado!";
alert(acesso);