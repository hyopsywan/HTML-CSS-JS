const temp = Number(prompt("Temperatura atual(c):"));

if (Number.isNaN) {
    console.log("Valor inválido");
} else if (temp < 0) {
    console.log("Muito frio!")
} else if (temp <= 20){
    console.log("Frio...")
} else if (temp <= 30) {
    console.log("Agradável")    
} else {
    console.log("Quente")
};