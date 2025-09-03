//Operadores logicos: && (E), || (OU), ! (NÃO)

const dinheiro = Number(prompt("Dinheiro na carteira:"));
const temCartao = prompt("Tem Cartão? (s/n):");

if ((dinheiro <= 10 || temCartao) && dinheiro >= 0) {
    console.log("Você pode comprar lanche!")
} else {
    console.log("Não vai rolar agora...")
}

//Negação---

const logado = true;

if (!logado) {
    console.log("Faça login.")
};