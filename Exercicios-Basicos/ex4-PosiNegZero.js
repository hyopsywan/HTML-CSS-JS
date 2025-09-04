//Numeros positivos, negativos ou zero

const num = Number(prompt("Digite um número:"));

if(Number.isNaN(num)){
    alert("Número Inválido!")
}else
    if(num > 0){
        console.log("Número Positivo.")
    }else{
        if(num == 0){
            console.log("Zero!")
        }else{
        console.log("Número Negativo.")
        }
    }