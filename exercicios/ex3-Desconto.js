//Desconto de 10%

const valor = Number(prompt("Digite um valor:"));

if(Number.isNaN(valor || valor < 0)){
    alert("Valor Inválido")
}else {
    if(valor > 100) {
        const desconto = valor * 0.1;
        alert("Valor final com desconto:" + (valor - desconto))
        } else {
            alert("Valor final: R$" + valor)
        }
    };
}