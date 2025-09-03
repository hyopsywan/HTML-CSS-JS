const cor = prompt("Digite uma cor de semáforo: (ex: Vermelho...):")

//const result = cor === "Vermelho" ? "Parar!" : (cor === "Amarelo" ? "Prepare-se para parar!" : "Siga!");

if (cor === "Verde") {
    console.log("Siga!")
 } else if (cor === "Amarelo") {
    console.log("Atenção!")
 } else if (cor === "Vermelho") {
    console.log("Pare!")
 };
