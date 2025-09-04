//Classificação de idade

const num = Number(prompt("Digite sua idade:"))

if(Number.isNaN(num) || num > 0 ){
    alert("Idade Inválida!")
}else{
    if(num < 12){
        console.log("Você é uma Criança!")
    }else{
        if(num >= 13-17){
            console.log("Você é im Adolescente!")
        }else{
            console.log("Você é um adulto")
        }
    }
}